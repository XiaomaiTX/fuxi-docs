---
author: Hugyyyy
title: 贡献指南
description: 了解如何通过问卷、网页编辑、Pull Request、站点改进或审核来贡献文档。
---

# 贡献指南

欢迎为伏羲天团奥姆尼珀腾斯圣殿文档站点贡献内容。无论是否熟悉 Git 或网页开发，都可以选择适合自己的方式。只想反馈意见时，填写问卷即可；直接编辑或新增文档时，请先阅读[文档编写规范](./documentation-standards.md)。

## 选择贡献方式

### 1. 所有人：通过问卷提交修改意见

不需要 GitHub 账号，也不需要安装任何工具。填写[【腾讯文档】伏羲圣殿文档站 · 修改意见反馈](https://docs.qq.com/form/page/DQmVPZ1RHakxvaEFh)即可。

#### 提交后会经历什么

1. **认领**：编辑组会不定期检查问卷提交结果，并按页面认领意见。
2. **核实**：涉及军团规定、历史、成员信息或游戏机制的内容，贡献者会要求提供来源；无法核实的意见不予采纳。
3. **落地**：认领意见的贡献者会代为提交 PR，或在获得权限后直接修改。你不需要操作 Git。
4. **致谢**：采纳了实质内容的意见，会在文档更新说明中致谢。填写游戏 ID 即视为同意署名；留空则匿名处理。

#### 想新增一篇文档怎么填

- 反馈类型选「想新增一篇文档」。
- 「涉及哪个页面」填写希望新增的文档主题，并在前面加上「新增」，例如 `【新增】军团活动报名流程说明`。
- 「问题所在位置」填写设想的内容大纲。
- 「依据或来源」必须填写。公告原文、群内通知、实测记录等都可以；没有来源的提案无法核实，只能暂时搁置。

#### 新增文档提案的署名规则

- **只提需求、不提供内容**：文档由认领的贡献者独立撰写，`author` 只写实际撰写者；提案人在文档更新说明中致谢，不计入 `author`。
- **提供了被采用的大纲或草稿**：提案人视为内容作者之一，按[文档编写规范](./documentation-standards.md)中的作者署名规则列入 `author`；代为提交的贡献者仅为提交者。
- 判断标准是「这段文字是谁写的」，而不是「这个主意是谁提的」。认领该提案的贡献者应在提交前与提案人确认署名。

#### 紧急反馈与不采纳情形

安全风险、严重事实错误等紧急问题，建议先通过[问卷](https://docs.qq.com/form/page/DQmVPZ1RHakxvaEFh)提交问题详情及依据，再私聊联系[关于页面](./index.md)列出的核心贡献者或文档编辑组成员提醒处理。

常见的不采纳原因包括：

- 来源无法核实，例如传闻或他人转述；
- 与现有文档规范或军团既有规定冲突；
- 属于站点范围之外的内容；
- 反馈人标注「不确定」，且没有提供可供核实的进一步信息。

### 2. 使用网页编辑

适合初次贡献者，以及只需修正错字、补充少量内容或更新一个页面的情况。

1. 打开需要修改的文档页面，点击页面底部的“编辑此页”。
2. 在 GitHub 页面中编辑 Markdown 内容，并查看变更预览。
3. 填写修改说明并提交。没有仓库写权限时，GitHub 会引导你在自己的 Fork 中创建分支。
4. 创建 Pull Request（PR），将修改提交到 `preview` 分支。

### 3. Fork 仓库后在本地编辑

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

### 4. 改进文档站点

适合熟悉 Git，并愿意修改站点功能或自动化流程的贡献者。例如可以改进导航、Rspress 配置、主题组件、作者字段检查脚本或 GitHub Actions。

这类改动同样通过 PR 提交到 `preview`。在项目根目录安装依赖后，可运行以下命令检查和构建：

```bash
pnpm install
pnpm run format
pnpm run lint
pnpm run build
```

PR 描述中请说明改动目的、影响范围和检查结果。涉及文档内容的改动也应遵循[文档编写规范](./documentation-standards.md)。

### 5. 参与审核和维护

适合审核员和核心贡献者。审核员可以检查提交到 `preview` 的 PR，核对内容、链接、导航和改动范围，并在 PR 中提出清晰的修改建议。获得相应权限后，也可以协助修复小问题和合并已通过审核的 PR。

核心贡献者还可以维护站点代码、自动化流程和分支发布流程。`preview` 内容稳定后，由审核员或核心贡献者发起 `preview` → `main` 的 PR；合并到 `main` 后，自动部署流程会发布站点。

## GitHub 贡献的后续流程

1. 普通文档和站点改进 PR 的目标分支都是 `preview`。
2. 审核员检查 PR 并反馈需要调整的内容，贡献者可继续推送到原分支更新 PR。
3. PR 合并到 `preview` 后，GitHub Actions 会运行 lint 和站点构建；若检查失败，由审核员或核心贡献者安排修复。
4. `preview` 内容确认稳定后，由审核员或核心贡献者发起合并到 `main` 的 PR。
5. 更新进入 `main` 后，自动部署流程会发布正式站点。
