<script setup>
import {useTodoStore} from "@/stores/todo.js";

const todoStore = useTodoStore()
</script>

<template>
  <div class="home">
    <h1>🎯 任务管理系统</h1>
    <p>基于 Vue3 + Pinia + Vue Router 开发</p>

    <div class="info">
      <p>当前任务总数：{{ todoStore.total }}</p>
      <p>已完成：{{ todoStore.doneTotal }}</p>
      <router-link to="/todo">
        <button>进入任务列表</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 60px 20px;
}

.home h1 {
  font-size: 42px;
  color: #2c3e50;
  margin-bottom: 15px;
}

.home > p {
  color: #7f8c8d;
  font-size: 18px;
  margin-bottom: 50px;
}

.info {
  max-width: 400px;
  margin: 0 auto;
  padding: 35px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.info p {
  font-size: 16px;
  color: #555;
  margin: 12px 0;
}

button {
  margin-top: 25px;
  padding: 12px 32px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66,185,131,0.4);
}
</style>