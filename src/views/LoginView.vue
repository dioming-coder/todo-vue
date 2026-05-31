<script setup>
import {ref} from "vue";
import {useTodoStore} from "@/stores/todo.js";
import {useRouter} from "vue-router";

const todoStore = useTodoStore()
const router = useRouter()

const username = ref('')
const password = ref('')

const login = () => {
  if (!username.value||!password.value){
   alert('请输入用户名密码')
     return
  }
  const token = 'fake-token-' + Date.now()
  todoStore.token = token
  localStorage.setItem('token',token)
  router.push('/todo')
}
</script>

<template>
  <div class="login">
    <h1>🔐 登录</h1>
    <input v-model="username" placeholder="用户名" />
    <br>
    <input v-model="password" type="password" placeholder="密码" />
    <br>
    <button @click="login">登录</button>
  </div>
</template>

<style scoped>
.login {
  max-width: 360px;
  margin: 80px auto;
  padding: 40px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  text-align: center;
}

.login h1 {
  font-size: 26px;
  color: #2c3e50;
  margin-bottom: 30px;
}

.login input {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.3s;
  box-sizing: border-box;   /* 加这一行 */
}

.login input:focus {
  outline: none;
  border-color: #42b983;
}

.login button {
  width: 100%;
  padding: 12px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;   /* 按钮也加上，保险 */
}

.login button:hover {
  background: #369870;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66,185,131,0.3);
}
</style>