---
author: Hugyyyy
title: 贡献指南
description: 了解如何通过网页编辑、提交 Pull Request、改进站点或参与审核来贡献文档。
---

# 贡献指南

欢迎为伏羲天团奥姆尼珀腾斯圣殿文档站点贡献内容。无论是否熟悉 Git 或网页开发，都可以选择适合自己的方式。修改文档内容前，请先阅读[文档编写规范](./documentation-standards.md)。

## 选择贡献方式

### 1. 使用网页编辑

适合初次贡献者，以及只需修正错字、补充少量内容或更新一个页面的情况。

1. 打开需要修改的文档页面，点击页面底部的“编辑此页”。
2. 在 GitHub 页面中编辑 Markdown 内容，并查看变更预览。
3. 填写修改说明并提交。没有仓库写权限时，GitHub 会引导你在自己的 Fork 中创建分支。
4. 创建 Pull Request（PR），将修改提交到 `preview` 分支。

### 2. Fork 仓库后在本地编辑

适合熟悉基本 Git 操作，或需要一次修改多个页面的贡献者。可以使用自己熟悉的编辑器编写 Markdown/MDX，再通过 PR 提交。

```bash
git clone https://github.com/<你的 GitHub 用户名>/fuxi-docs.git
cd fuxi-docs

git remote add upstream https://github.com/XiaomaiTX/fuxi-docs.git
git fetch upstream
git switch --create docs/update-page upstream/preview

# 修改文档后，检查差异并提交
git diff
git diff --check
git add docs/
git commit -m 'docs: 更新文档'
git push --set-upstream origin docs/update-page
```

推送后，在 GitHub 上创建 PR，目标仓库为 `XiaomaiTX/fuxi-docs`，目标分支为 `preview`。后续修改继续推送到同一分支，GitHub 会更新原有 PR。

### 3. 改进文档站点

适合熟悉 Git，并愿意修改站点功能或自动化流程的贡献者。例如可以改进导航、Rspress 配置、主题组件、作者字段检查脚本或 GitHub Actions。

这类改动同样通过 PR 提交到 `preview`。在项目根目录安装依赖后，可运行以下命令检查和构建：

```bash
pnpm install
pnpm run format
pnpm run lint
pnpm run build
```

PR 描述中请说明改动目的、影响范围和检查结果。涉及文档内容的改动也应遵循[文档编写规范](./documentation-standards.md)。

### 4. 参与审核和维护

适合审核员和核心贡献者。审核员可以检查提交到 `preview` 的 PR，核对内容、链接、导航和改动范围，并在 PR 中提出清晰的修改建议。获得相应权限后，也可以协助修复小问题和合并已通过审核的 PR。

核心贡献者还可以维护站点代码、自动化流程和分支发布流程。`preview` 内容稳定后，由审核员或核心贡献者发起 `preview` → `main` 的 PR；合并到 `main` 后，自动部署流程会发布站点。

## PR 提交后的流程

1. 普通文档和站点改进 PR 的目标分支都是 `preview`。
2. 审核员检查 PR 并反馈需要调整的内容，贡献者可继续推送到原分支更新 PR。
3. PR 合并到 `preview` 后，GitHub Actions 会运行 lint 和站点构建；若检查失败，由审核员或核心贡献者安排修复。
4. `preview` 内容确认稳定后，由审核员或核心贡献者发起合并到 `main` 的 PR。
5. 更新进入 `main` 后，自动部署流程会发布正式站点。
