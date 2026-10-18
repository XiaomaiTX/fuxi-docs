# 仓库规则

本文档定义 `fuxi-docs` 仓库的通用维护规范。开始修改前请阅读本文；具体贡献流程还应遵循站点的[贡献指南](../docs/zh/about/contributing.md)和[文档编写规范](../docs/zh/about/documentation-standards.md)。

## 仓库内容

- `docs/` 存放由 Rspress 构建并发布到站点的内容。中文和英文内容分别维护在 `docs/zh/` 与 `docs/en/`。
- `repo_docs/` 存放面向仓库贡献者和维护者的规范、工作流和开发指南，不会作为站点内容发布。
- `scripts/` 存放仓库检查脚本；`theme/` 存放站点主题代码；站点配置位于仓库根目录。
- 修改源文件，不要手动编辑构建产物。

## 开发工具

使用 pnpm 管理依赖和运行项目脚本。常用命令如下：

```bash
pnpm install
pnpm run dev
pnpm run format
pnpm run lint
pnpm run build
```

- `pnpm run format` 使用 Prettier 格式化仓库文件。
- `pnpm run lint` 运行 ESLint 和文档作者字段检查。
- `pnpm run build` 检查文档作者字段并构建 Rspress 站点。
- 文档相关的 Rslint 参考资料见 <https://rslint.rs/llms.txt>；当前仓库检查入口为 `pnpm run lint`。

## 修改规范

- 让改动范围与任务一致，新增或调整自动化时同步维护相关说明。
- 新增站点页面时，遵循文档编写规范，并按需更新对应目录的 `_meta.json` 或语言导航配置。
- 涉及中英文页面的站点功能或规则变更时，检查两种语言是否都需要同步更新。
- 修改配置、脚本或组件时，沿用现有依赖和项目结构，避免引入与本次工作无关的改动。
- 提交前检查 `git diff` 与 `git diff --check`，并根据改动范围运行格式化、lint 和构建命令。

## 分支与 PR 工作流

- 普通文档修改和站点改进的 PR 目标分支为 `preview`。
- PR 应说明改动目的、影响范围和已执行的检查；审阅反馈应在原分支继续修改。
- 合并到 `preview` 后，由维护者确认内容稳定，再通过 `preview` 到 `main` 的 PR 发布。
- 合并到 `main` 后，由自动部署流程发布正式站点。

详细贡献方式和审核步骤见[贡献指南](../docs/zh/about/contributing.md)。

## 周期性维护任务

仓库周期性维护任务及其检查范围见[仓库维护任务清单](./repository-check.md)。
