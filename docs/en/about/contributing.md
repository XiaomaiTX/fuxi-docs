---
author: Hugyyyy
title: Contributing
description: How to contribute documentation through a feedback form, web editing, pull requests, site improvements, and review.
---

# Contributing

Contributions to the Fuxi Legion Omnipotence Temple documentation site are welcome. Whether or not you know Git or web development, you can choose an approach that works for you. To send feedback, fill in the form. Before editing or adding a page, read the [Documentation Standards](./documentation-standards.md).

## Choose how to contribute

### 1. Anyone: send feedback through the form

You do not need a GitHub account or any special tools. Fill out the [Fuxi Temple documentation feedback form on Tencent Docs](https://docs.qq.com/form/page/DQmVPZ1RHakxvaEFh).

#### What happens after you submit feedback?

1. **Claiming:** The editorial team reviews questionnaire submissions periodically and claims feedback by page.
2. **Verification:** For corporation rules, history, member information, or game mechanics, contributors may ask for sources. Unverifiable feedback will not be adopted.
3. **Implementation:** The contributor who claims your feedback can submit a pull request (PR) for you or edit the page directly if they have access. You do not need to use Git.
4. **Credit:** Substantial contributions that are adopted will be acknowledged in the changelog. Providing your in-game name means you agree to be credited; leave it blank to remain anonymous.

#### How to propose a new page

- Select **Propose a new page** as the feedback type.
- In **Page**, enter the topic and prefix it with **New**, for example: **New: Corporation fleet registration process**.
- In **Problem location**, provide an outline of the proposed content.
- **Sources or evidence are required.** Original announcements, group notices, and records from in-game testing are all useful. Proposals without sources cannot be verified and may be deferred.

#### Credit for new-page proposals

- **A request without draft content:** The contributor who claims the request writes the page. The **author** field lists only the actual writer; the proposer is thanked in the changelog and is not added to **author**.
- **An adopted outline or draft:** The proposer is one of the content authors and should be listed in **author** according to the [Documentation Standards](./documentation-standards.md). The contributor who submits the PR is listed only if they also wrote or substantially edited the content.
- The deciding factor is who wrote the text, not who suggested the idea. Before submitting, the contributor should confirm attribution with the proposer.

#### Urgent feedback and reasons feedback may not be adopted

For urgent issues such as safety risks or serious factual errors, submit the details and supporting evidence through the [feedback form](https://docs.qq.com/form/page/DQmVPZ1RHakxvaEFh) first, then privately message a core contributor or editorial team member listed on the [About page](./index.md) to alert them.

Common reasons feedback may not be adopted:

- Its source cannot be verified, for example, a rumor or second-hand report.
- It conflicts with existing documentation standards or corporation rules.
- It is outside the scope of this site.
- The feedback is marked **Uncertain** and does not include information that would help verify it.

### 2. Edit a page on the web

This is suitable for first-time contributors or anyone correcting a typo, adding a small amount of information, or updating one page.

1. Open the page you want to change and click **Edit this page** at the bottom.
2. Edit the Markdown on GitHub and review the change preview.
3. Describe your change and submit it. If you do not have write access, GitHub will guide you through creating a branch in your own fork.
4. Open a pull request (PR) targeting the **preview** branch.

### 3. Fork the repository and edit locally

This is suitable if you know basic Git or need to update several pages at once. Write Markdown or MDX in your preferred editor, then submit a PR.

```bash
git clone https://github.com/<your-github-username>/fuxi-docs.git
cd fuxi-docs

git remote add upstream https://github.com/XiaomaiTX/fuxi-docs.git
git fetch upstream
git switch --create docs/update-page upstream/preview

# Review and commit your documentation changes
git diff
git diff --check
git add docs/
git commit -m 'docs: update documentation'
git push --set-upstream origin docs/update-page
```

After pushing, open a PR on GitHub targeting the **preview** branch of **XiaomaiTX/fuxi-docs**. Continue pushing changes to the same branch to update that PR.

### 4. Improve the documentation site

This is suitable for contributors who know Git and want to work on site features or automation, such as navigation, Rspress configuration, theme components, the author-field checker, or GitHub Actions.

Submit these changes through a PR targeting **preview**. After installing dependencies from the repository root, you can run:

```bash
pnpm install
pnpm run format
pnpm run lint
pnpm run build
```

Describe the purpose, scope, and checks performed in the PR. Changes to documentation should also follow the [Documentation Standards](./documentation-standards.md).

### 5. Review and maintain

Reviewers and core contributors can check PRs targeting **preview**, verify content, links, navigation, and scope, and leave clear revision requests. With the appropriate access, they can also fix small issues and merge approved PRs.

Core contributors can maintain site code, automation, and release branches. Once the **preview** content is stable, a reviewer or core contributor opens a PR from **preview** to **main**. Merging into **main** triggers the site deployment workflow.

## What happens after a GitHub contribution?

1. PRs for documentation and site improvements both target **preview**.
2. Reviewers check the PR and request any needed changes. Contributors can push more commits to the same branch to update the PR.
3. After a PR merges into **preview**, GitHub Actions runs linting and the site build. If a check fails, a reviewer or core contributor will coordinate a fix.
4. When the **preview** content is stable, a reviewer or core contributor opens a PR to merge it into **main**.
5. After changes reach **main**, the deployment workflow publishes the live site.
