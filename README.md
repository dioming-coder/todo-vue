# Vue3 任务管理系统

基于 Vue3 + Vue Router + Pinia 开发的待办事项管理应用。

**在线预览：** [https://dioming-coder.github.io/todo-vue/](https://dioming-coder.github.io/todo-vue/)

## 技术栈

- Vue 3（Composition API + `&lt;script setup&gt;`）
- Vue Router（单页面路由切换）
- Pinia（全局状态管理）
- Vite（构建工具）
- GitHub Pages（静态部署）

## 功能特性

- ✅ 任务增删改查（CRUD）
- ✅ 任务状态切换（完成/未完成）
- ✅ 实时统计（总任务数、完成率、进度条）
- ✅ 筛选过滤（全部/进行中/已完成）
- ✅ 登录态模拟（JWT + localStorage）
- ✅ 路由守卫（未登录自动跳转）
- ✅ 数据持久化（localStorage 刷新不丢失）

## 本地运行

```bash
npm install
npm run dev