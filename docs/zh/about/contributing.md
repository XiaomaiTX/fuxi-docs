---
title: 贡献指南
description: 伏羲天团奥姆尼珀腾斯圣殿文档贡献指南。
---

# 贡献指南

感谢你为伏羲天团奥姆尼珀腾斯圣殿文档站点贡献内容。项目按贡献深度分为三种参与方式：普通贡献者可以直接编辑页面；熟悉 Git 的贡献者可以在本地编辑并提交 PR；审核员和核心贡献者负责内容审核以及完整的发布流程。

## 一、普通贡献者：使用“编辑此页”

这是最简单、也是最推荐的入门方式。不需要安装 Node.js、pnpm 或其他开发工具，只要会使用 GitHub 网页，就可以完成基础文档编辑。

### 操作步骤

1. 打开想要修改的文档页面。
2. 点击页面底部的“编辑此页”，进入 GitHub 中对应的源文件。
3. 点击 GitHub 的编辑按钮，在网页编辑器中修改 Markdown 内容。
4. 使用 GitHub 的变更预览检查标题、段落、列表、链接和代码格式。
5. 填写简短的修改说明并提交变更。没有仓库写权限时，GitHub 会引导你在自己的 Fork 中创建分支。
6. 创建 Pull Request，将修改提交到上游仓库的 `preview` 分支。

普通贡献者只需要专注文档内容本身：事实是否准确、表达是否清楚、链接是否有效、格式是否正确。后续由审核员负责检查构建结果和发布流程。

### 基础 Markdown 约定

- 中文文档位于 `docs/zh/` 目录。
- 普通文本页面使用 `.md` 文件；需要 React 组件或其他 MDX 能力时使用 `.mdx` 文件。
- 页面应保留 `title` 和 `description` frontmatter。
- 使用清晰的标题层级、列表、表格和带语言标记的代码块。
- 不要修改 `doc_build/` 中的构建产物；只修改 `docs/` 中的源文件。

## 二、文档贡献者：Fork + Git 提交 PR

如果希望在本地使用编辑器批量修改文档，只需要掌握 Git 的基本操作即可，不要求先深入学习 Node.js 或 Rspress。推荐使用 GitHub Web GUI 完成 Fork、创建 PR、查看差异和处理审核意见，把精力集中在文档编写上。

### 本地编辑流程

以下示例使用 GitHub 用户名占位符。上游仓库是 `XiaomaiTX/fuxi-docs`，PR 的目标分支是 `preview`。

```bash
git clone https://github.com/<你的 GitHub 用户名>/fuxi-docs.git
cd fuxi-docs

git remote add upstream https://github.com/XiaomaiTX/fuxi-docs.git
git fetch upstream

git switch --create docs/update-page upstream/preview

# 编辑 docs/zh/ 下的 Markdown 或 MDX 文件

git diff
git diff --check

git add docs/
git commit -m 'docs: 更新文档'
git push --set-upstream origin docs/update-page
```

推送后，在 GitHub 上创建 Pull Request：

- **base repository**：`XiaomaiTX/fuxi-docs`；
- **base branch**：`preview`；
- **compare branch**：自己 Fork 中的 `docs/update-page`；
- **PR 描述**：说明修改了哪些页面、解决了什么问题，以及是否检查过链接和格式。

后续如果需要修改，只要继续在同一个本地分支提交并推送，GitHub 会自动更新原有 PR。不会使用 Git 命令时，也可以直接在 GitHub Web GUI 中编辑文件、提交修改和创建 PR。

### 推荐使用 LLM 辅助文档协作

可以使用 LLM 帮助整理提纲、润色中文、转换 Markdown 格式、检查链接和生成 PR 描述。推荐的协作方式是：

1. 向 LLM 提供明确的页面位置、已有上下文和修改目标。
2. 让 LLM 输出可审阅的 Markdown/MDX 修改，而不是直接覆盖整个项目。
3. 在 GitHub Web GUI 的差异页面中逐段检查修改，确认事实、链接、标题和格式。
4. 对涉及军团规定、历史、成员信息或游戏机制的内容，必须由贡献者或审核员确认来源，不能直接采用 LLM 的猜测。

LLM 和 GitHub Web GUI 都是降低协作门槛的工具，最终提交仍应由贡献者确认内容准确，并由审核员完成正式审核。

## 三、审核员与核心贡献者

审核员是军团内指定的文档审核人员，负责把普通贡献者的修改安全地纳入文档站点。核心贡献者除承担审核工作外，还应了解项目的目录结构、技术栈、分支策略和自动部署流程。

### 审核员的工作流程

1. **审核 Preview PR**：检查普通贡献者提交到 `preview` 的 PR，确认修改范围、事实准确性、中文表达、Markdown/MDX 规范、页面链接和导航配置。
2. **提出修改意见**：在 PR 中逐条说明需要调整的内容，尽量给出明确的修改建议。
3. **顺手修复小问题**：对于错别字、格式、标题、链接等小问题，可以使用 GitHub 的 Suggested changes，或在获得分支权限后直接提交修复，减少来回沟通成本。
4. **合并进入 Preview**：问题处理完成并确认 PR 可以构建后，将普通贡献者的 PR 合并到 `preview`。
5. **检查 Preview 构建**：`preview` 更新后，自动工作流会执行 lint 和 Rspress 构建；若失败，需要定位并修复问题。
6. **发起 Preview 到 Main 的 PR**：确认 Preview 内容稳定后，由审核员或核心贡献者发起 `preview` → `main` 的 PR，进行最终检查。
7. **合并并完成发布**：最终 PR 审核通过后合并到 `main`，由自动部署流程完成生产站点更新。

### 审核员与核心贡献者需要了解的技术栈

本项目是使用 Rspress 构建的静态文档站点：

| 技术                 | 用途                                      |
| -------------------- | ----------------------------------------- |
| Git、GitHub          | 源代码管理、分支协作和 Pull Request 审核  |
| Node.js 24           | 本地开发和 CI 构建运行环境                |
| pnpm 10.15.0         | 依赖安装和项目脚本管理                    |
| Rspress 2            | 将 Markdown/MDX 文档构建为静态网站        |
| Markdown、MDX        | 编写文档内容；MDX 可扩展 React 组件       |
| TypeScript、React 19 | Rspress 配置、类型检查和 MDX 组件运行基础 |
| Prettier、ESLint     | 代码和文档格式化、静态检查                |
| Docker、Nginx        | 构建生产镜像并提供静态站点服务            |

文档源文件位于 `docs/`，中文文档位于 `docs/zh/`。`_nav.json` 控制顶层导航，`_meta.json` 控制侧边栏顺序和名称。Rspress 构建后的静态文件位于 `doc_build/`，不应手动修改或提交该目录。

### 分支、构建和部署流程

项目使用两个主要分支：

- `preview`：审核员合并普通贡献者 PR 后的集成和自动校验分支；
- `main`：最终稳定分支，更新后触发生产部署。

完整流程如下：

1. 普通贡献者通过“编辑此页”或 Fork + Git，将 PR 提交到 `preview`。
2. 审核员审核内容，提出修改意见，必要时顺手修复小问题，并将通过审核的 PR 合并到 `preview`。
3. `preview` 收到更新后，GitHub Actions 自动执行 `pnpm install --frozen-lockfile`、`pnpm run lint` 和 `pnpm run build`，验证文档站点可以正常构建。
4. Preview 稳定后，审核员或核心贡献者发起 `preview` → `main` 的 PR，完成最终审核并合并。
5. `main` 收到更新后，GitHub Actions 再次执行 lint 和 Rspress 构建，然后使用 Docker 构建生产镜像并推送镜像仓库。
6. Main 部署流程随后调用服务器部署 Webhook，触发服务器拉取新镜像并更新站点。
7. `preview` → `main` 的 PR 合并后，自动工作流会从最新的 `main` 重建 `preview`，为下一轮贡献准备干净的基线。

### 审核检查清单

- 修改是否属于本次 PR 的范围，是否有未经确认的事实或敏感信息；
- `title`、`description`、标题层级和 Markdown/MDX 语法是否正确；
- 页面链接、图片、代码示例和导航配置是否有效；
- 是否误改了 `doc_build/` 或其他生成文件；
- Preview 的 lint 和 build 是否通过；
- 合并到 `main` 前，是否已确认 Preview 内容完整、稳定且适合发布。

## 常用检查命令

具备本地运行环境的贡献者和审核员可以在项目根目录执行：

```bash
pnpm install
pnpm run format
pnpm run lint
pnpm run build
```

其中 `pnpm run format` 使用 Prettier 格式化项目文件，`pnpm run lint` 执行 ESLint 静态检查，`pnpm run build` 执行 Rspress 生产构建。普通贡献者不必为了完成基础编辑而安装这些工具，提交到 `preview` 后由自动化流程进行最终构建验证。
