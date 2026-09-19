import { useEffect, useState } from 'react';

const API_URL =
  'https://api.github.com/repos/XiaomaiTX/fuxi-docs/commits?sha=main&per_page=10';
const COMMITS_URL = 'https://github.com/XiaomaiTX/fuxi-docs/commits/main/';
const CACHE_KEY = 'fuxi-docs:commits:main:v1';
const CACHE_TTL = 5 * 60 * 1000;

interface GitHubCommit {
  sha: string;
  html_url: string;
  author: {
    login: string;
  } | null;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    } | null;
  };
}

interface CommitItem {
  sha: string;
  url: string;
  message: string;
  author: string;
  date: string;
}

interface CommitCache {
  fetchedAt: number;
  commits: CommitItem[];
}

interface ViewState {
  commits: CommitItem[];
  status: 'loading' | 'ready' | 'error';
  isStale: boolean;
  error: string | null;
}

const initialState: ViewState = {
  commits: [],
  status: 'loading',
  isStale: false,
  error: null,
};

const dateFormatter = new Intl.DateTimeFormat('zh-CN', {
  dateStyle: 'medium',
  timeStyle: 'short',
});

function isCommitItem(value: unknown): value is CommitItem {
  if (typeof value !== 'object' || value === null) return false;

  const item = value as Partial<CommitItem>;
  return (
    typeof item.sha === 'string' &&
    typeof item.url === 'string' &&
    typeof item.message === 'string' &&
    typeof item.author === 'string' &&
    typeof item.date === 'string'
  );
}

function readCache(): CommitCache | null {
  try {
    const rawCache = localStorage.getItem(CACHE_KEY);
    if (!rawCache) return null;

    const parsed = JSON.parse(rawCache) as Partial<CommitCache>;
    if (
      typeof parsed.fetchedAt !== 'number' ||
      !Array.isArray(parsed.commits) ||
      !parsed.commits.every(isCommitItem)
    ) {
      return null;
    }

    return {
      fetchedAt: parsed.fetchedAt,
      commits: parsed.commits.slice(0, 10),
    };
  } catch {
    return null;
  }
}

function writeCache(cache: CommitCache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // localStorage 可能被禁用；这不应阻止提交记录正常显示。
  }
}

function normalizeCommits(commits: GitHubCommit[]): CommitItem[] {
  return commits.slice(0, 10).map(({ sha, html_url, author, commit }) => ({
    sha,
    url: html_url,
    message: commit.message.split(/\r?\n/, 1)[0] || '无提交说明',
    author: author?.login || commit.author?.name || '未知作者',
    date: commit.author?.date || '',
  }));
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return '无法读取 GitHub 提交记录，请稍后重试。';
}

export default function RecentCommits() {
  const [state, setState] = useState<ViewState>(initialState);
  const [requestVersion, setRequestVersion] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let disposed = false;

    async function loadCommits() {
      const cached = readCache();
      if (
        requestVersion === 0 &&
        cached &&
        Date.now() - cached.fetchedAt < CACHE_TTL
      ) {
        setState({
          commits: cached.commits,
          status: 'ready',
          isStale: false,
          error: null,
        });
        return;
      }

      try {
        const response = await fetch(API_URL, {
          headers: {
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          if (response.status === 403 || response.status === 429) {
            throw new Error('GitHub API 请求次数已达限制，请稍后重试。');
          }
          throw new Error(`GitHub API 请求失败（HTTP ${response.status}）。`);
        }

        const data = (await response.json()) as unknown;
        if (!Array.isArray(data)) {
          throw new Error('GitHub 返回了无法识别的数据。');
        }

        const commits = normalizeCommits(data as GitHubCommit[]);
        if (!commits.length) {
          throw new Error('main 分支暂时没有可显示的提交记录。');
        }

        const nextCache = { fetchedAt: Date.now(), commits };
        writeCache(nextCache);
        if (!disposed) {
          setState({
            commits,
            status: 'ready',
            isStale: false,
            error: null,
          });
        }
      } catch (error) {
        if (controller.signal.aborted || disposed) return;

        const message = getErrorMessage(error);
        setState(
          cached
            ? {
                commits: cached.commits,
                status: 'ready',
                isStale: true,
                error: message,
              }
            : {
                commits: [],
                status: 'error',
                isStale: false,
                error: message,
              },
        );
      }
    }

    void loadCommits();
    return () => {
      disposed = true;
      controller.abort();
    };
  }, [requestVersion]);

  if (state.status === 'loading') {
    return <p aria-live="polite">正在加载最近的提交记录……</p>;
  }

  if (state.status === 'error') {
    return (
      <div role="alert">
        <p>{state.error}</p>
        <p>
          <button
            type="button"
            onClick={() => setRequestVersion((value) => value + 1)}
          >
            重新加载
          </button>{' '}
          <a href={COMMITS_URL} target="_blank" rel="noreferrer">
            前往 GitHub 查看
          </a>
        </p>
      </div>
    );
  }

  return (
    <section aria-label="最近提交记录">
      {state.isStale && (
        <p role="status">
          当前显示的是缓存记录，可能不是最新内容。{state.error}{' '}
          <button
            type="button"
            onClick={() => setRequestVersion((value) => value + 1)}
          >
            重试
          </button>
        </p>
      )}
      <ul>
        {state.commits.map((commit) => (
          <li key={commit.sha}>
            <strong>{commit.message}</strong>
            <br />
            <small>
              <a href={commit.url} target="_blank" rel="noreferrer">
                <code>{commit.sha.slice(0, 7)}</code>
              </a>{' '}
              · {commit.author}
              {commit.date
                ? ` · ${dateFormatter.format(new Date(commit.date))}`
                : ''}
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
