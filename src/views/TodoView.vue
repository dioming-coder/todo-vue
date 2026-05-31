<script setup>
import {useTodoStore} from '@/stores/todo.js';
const todoStore = useTodoStore();

const add = (e) => {
  const title = e.target.value.trim()
    if (!title) return
    todoStore.addTodo({
      id: Date.now(),
      title: title,
      done: false
    })
    e.target.value = ''
  }

  const del = (id) => {
    todoStore.deleteTodo(id)
  }
</script>
<template>
  <div>
    <h1>📝 任务列表</h1>
    <p>全部{{todoStore.total}}项/已完成{{todoStore.doneTotal}}项</p>

    <input type="text" placeholder="输入任务" @keyup.enter = "add">

    <ul>
      <li v-for="item in todoStore.todos" :key="item.id">
        <input type="checkbox" :checked="item.done" @change="todoStore.toggleTodo(item.id)" />
        <span :class="{done:item.done}">{{item.title}}</span>
        <button @click="del(item.id)">删除</button>
      </li>
    </ul>
    <p v-if="todoStore.todos.length === 0" class="empty">暂无任务，添加一个吧</p>
  </div>
</template>
<style scoped>
.todo {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 8px;
}

.stats-bar {
  color: #7f8c8d;
  font-size: 14px;
  margin-bottom: 25px;
}

input[type="text"] {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.3s;
  margin-bottom: 25px;
}

input[type="text"]:focus {
  outline: none;
  border-color: #42b983;
}

ul {
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: transform 0.2s;
}

li:hover {
  transform: translateX(4px);
}

li input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #42b983;
  cursor: pointer;
}

li span {
  flex: 1;
  font-size: 15px;
  color: #2c3e50;
  transition: color 0.3s;
}

li span.done {
  text-decoration: line-through;
  color: #95a5a6;
}

li button {
  padding: 6px 14px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
}

li:hover button {
  opacity: 1;
}

li button:hover {
  background: #c0392b;
}

.empty {
  text-align: center;
  color: #95a5a6;
  padding: 40px;
  font-size: 15px;
}
</style>