<template>
  <div class="home">
    Home...
  </div>
</template>

<script>

export default {
  name: 'Home',
  created(){
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      this.axios({
        method: "post",
        url: "http://localhost:3000/user/checkLogin",
        headers: {
          "Authorization": localStorage.getItem('mytoken')
        }
      }).then((res) => {
        let {state} = res.data;
        if(state === 'fail'){
          this.$router.push('/login');
        }
      });
    }
  }
}
</script>
