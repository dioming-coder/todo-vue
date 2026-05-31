# Vue3 任务管理系统

基于 Vue 3 + Vue Router + Pinia 开发的待办事项管理应用，适合练习 Composition API、状态管理与路由守卫。

**在线预览：** [https://dioming-coder.github.io/todo-vue/](https://dioming-coder.github.io/todo-vue/)

## 技术栈

| 技术 | 说明 |
|------|------|
| [Vue 3](https://vuejs.org/) | Composition API + `<script setup>` |
| [Vue Router](https://router.vuejs.org/) | 单页应用路由与导航守卫 |
| [Pinia](https://pinia.vuejs.org/) | 全局状态管理 |
| [Vite](https://vite.dev/) | 开发与构建工具 |
| [GitHub Pages](https://pages.github.com/) | 静态站点部署 |

## 功能特性

- **任务管理**：新增任务、删除任务、标记完成/未完成
- **数据统计**：总任务数、已完成数量、完成率与进度条
- **登录模拟**：任意用户名/密码即可登录，Token 写入 `localStorage`
- **路由守卫**：未登录时访问受保护页面会自动跳转至登录页
- **数据持久化**：任务列表与登录态保存在浏览器本地，刷新页面不丢失

## 页面说明

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | 展示任务概览与快捷入口 |
| `/todo` | 任务列表 | 添加、完成、删除任务 |
| `/stats` | 统计 | 任务完成率与进度可视化 |
| `/login` | 登录 | 模拟登录（无需真实后端） |

## 环境要求

- Node.js `^20.19.0` 或 `>=22.12.0`

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

启动后在终端输出的地址打开即可（通常为 `http://localhost:5173`）。

## 构建与预览

```bash
# 类型检查 + 生产构建
npm run build

# 本地预览构建结果
npm run preview
```

## 部署到 GitHub Pages

项目已配置 `base: '/todo-vue/'`，部署命令：

```bash
npm run deploy
```

该命令会将 `dist` 目录发布到 `gh-pages` 分支。请确保仓库 Settings → Pages 已启用对应分支。

## 项目结构

```
src/
├── App.vue              # 根组件（导航栏 + 路由出口）
├── main.js              # 应用入口
├── router/
│   └── index.js         # 路由配置与登录守卫
├── stores/
│   └── todo.js          # 任务与登录态 Store
└── views/
    ├── HomeView.vue     # 首页
    ├── TodoView.vue     # 任务列表
    ├── StatsView.vue    # 统计页
    └── LoginView.vue    # 登录页
```

## 数据存储

| Key | 说明 |
|-----|------|
| `todos` | 任务列表（JSON 数组） |
| `token` | 登录 Token（模拟） |

数据均保存在浏览器 `localStorage` 中，清除站点数据会重置任务与登录状态。

## 常用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 类型检查并构建生产包 |
| `npm run preview` | 预览生产构建 |
| `npm run type-check` | 仅运行 TypeScript 类型检查 |
| `npm run deploy` | 构建并部署到 GitHub Pages |

## 说明

本项目为前端学习/demo 项目，登录为前端模拟，无真实用户鉴权与后端接口。如需扩展，可考虑：任务编辑、筛选过滤、退出登录、组件拆分与单元测试等。
