<template>
  <div id="app" class="wrap">
    <div id="nav">
      <div class="logo">LOGO</div>
      <ul class="user-info">
        <li>
          <router-link to="/user/login">登录</router-link>
        </li>
        /
        <li>
          <router-link to="/user/regist">注册</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {},
  methods: {},
};
</script>

<style lang="scss">
// vue-clic中配置的webpack默认不支持导入.scss文件
// @import url('./assets/style.scss')

* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

.wrap {
  width: 1200px;
  margin: 0 auto;
}

#nav {
  background: #ccc;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin-left: 20px;
  }

  .user-info {
    margin-right: 20px;
    display: flex;

    li {
      padding: 0 10px;
    }
  }
}

.content {
  text-align: center;
  display: flex;
}
.content form {
  width: 300px;
  margin: 50px auto;
}
</style>
