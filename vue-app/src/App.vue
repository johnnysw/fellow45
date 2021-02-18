<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

=======
    <ComHeader></ComHeader>
    <router-view class="main" />
    <ComFooter></ComFooter>
  </div>
</template>

<script>
import ComHeader from "./components/ComHeader";
import ComFooter from "@/components/ComFooter";
export default {
  components: {
    ComHeader,
    ComFooter,
  },
};
</script>
>>>>>>> 99a7f0e8cd769d47ed77fd80b50851b8f11a88b9
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
<<<<<<< HEAD
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
=======
  .main {
    margin: 1rem 0;
  }
}

a {
  font-weight: bold;
  color: #000000;

  &.router-link-exact-active {
    color: #ffffff;
>>>>>>> 99a7f0e8cd769d47ed77fd80b50851b8f11a88b9
  }
}
</style>
