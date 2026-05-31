<<template>
  <div class="app">
    <nav class="nav">
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/todo" class="nav-link">任务</router-link>
      <router-link to="/stats" class="nav-link">统计</router-link>
      <router-link to="/login" class="nav-link">登录</router-link>
    </nav>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
}

.nav {
  background: #2c3e50;
  padding: 0 30px;
  display: flex;
  gap: 5px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-link {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  padding: 16px 20px;
  font-size: 15px;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #fff;
  background: rgba(255,255,255,0.05);
  border-bottom-color: #42b983;
}

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 20px;
}
</style>