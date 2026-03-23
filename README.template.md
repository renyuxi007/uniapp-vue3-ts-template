# uniapp-vue3-ts-template

## 使用方式

1. 复制 `uniapp-vue3-ts-template` 目录到新项目目录。
2. 执行 `pnpm install`。
3. 根据目标平台执行开发命令：
   - `pnpm dev:h5`
   - `pnpm dev:mp-weixin`
4. 发布前执行：
   - `pnpm lint:prod`
   - `pnpm type-check`
   - `pnpm build:mp-weixin`

## 模板特性

- ESM 工程结构，兼容 `@dcloudio/vite-plugin-uni` 的 CJS/ESM 导出差异。
- Flat ESLint 配置，区分开发与生产规则。
- TypeScript 独立校验链路，隔离第三方库类型噪音。
- 内置 uni-app + uview-pro 的基础可运行骨架。

## 首次初始化后需修改

- `src/manifest.json` 中的 `appid`。
- `package.json` 中的 `name`、`version`。
- 页面结构与业务目录组织。

## 目录结构

- `src/pages/index/index.vue`：默认首页。
- `src/main.ts`：应用入口。
- `src/App.vue`：应用生命周期入口。
- `vite.config.ts`：Vite 与 uni 插件配置。
- `tsconfig.json`：开发与 IDE 类型配置。
- `tsconfig.typecheck.json`：生产型类型校验配置。
- `eslint.config.dev.js`：开发规则。
- `eslint.config.prod.js`：生产规则。
