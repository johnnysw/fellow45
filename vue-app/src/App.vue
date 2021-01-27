<template>
  <div id="app">
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
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .main {
    margin: 1rem 0;
  }
}

a {
  font-weight: bold;
  color: #000000;

  &.router-link-exact-active {
    color: #ffffff;
  }
}
</style>
