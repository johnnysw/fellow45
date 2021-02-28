<template>
  <div class="container">
    <div class="login-form">
        <h3>用户登录</h3>
        <p>
            用户名：<input type="text" v-model="username">
        </p>
        <p>
            密码：<input type="password" v-model="pass">
        </p>
        <p>
            <button @click="doLogin" class="btn">登录</button>
        </p>
    </div>Î
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      pass: "",
    };
  },
  methods: {
    doLogin() {
      this.$http.request({
        method: "post",
        url: "/user/login",
        data: {
          username: this.username,
          pass: this.pass,
        },
      }).then((res) => {
        let {state, token} = res.data;
        if(state === 'success'){
          localStorage.setItem('mytoken', token);
          this.$router.push('/');
        }else{
          alert('用户名或密码不正确!');
        }
      });
    },
  },
};
</script>
<style scoped>
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
}
.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
}
</style>