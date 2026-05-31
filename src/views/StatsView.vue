<script setup>
import {useTodoStore} from "@/stores/todo.js";

const todoStore = useTodoStore();

const rate = () => {
  if (todoStore.total === 0) return 0
  return Math.round(todoStore.doneTotal/todoStore.total * 100)
}
</script>
<template>
  <div class="stats-card">
    <div class="stats-item">
      <div class="number">{{todoStore.total}}</div>
      <div class="label">总任务</div>
    </div>
    <div class="stat-item">
      <div class="number">{{ todoStore.doneTotal }}</div>
      <div class="label">已完成</div>
    </div>
    <div class="stat-item">
      <div class="number">{{ rate() }}%</div>
      <div class="label">完成率</div>
    </div>
    <div class="progress-box">
      <p>进度</p>
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: rate() + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats {
  max-width: 700px;
  margin: 0 auto;
}

.stats h1 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 30px;
}

.stats-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 35px;
}

.stat-item {
  background: #fff;
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  transition: transform 0.3s;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.number {
  font-size: 36px;
  font-weight: bold;
  color: #42b983;
  margin-bottom: 8px;
}

.label {
  color: #7f8c8d;
  font-size: 14px;
}

.progress-box {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
}

.progress-box p {
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 12px;
}

.progress-bar {
  width: 100%;
  height: 24px;
  background: #ecf0f1;
  border-radius: 12px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b983, #369870);
  border-radius: 12px;
  transition: width 0.5s ease;
}

@media (max-width: 600px) {
  .stats-card {
    grid-template-columns: 1fr;
  }
}
</style>