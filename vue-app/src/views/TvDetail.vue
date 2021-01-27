<template>
  <div>
    <div class="content">
      <h2>{{this.tvObj.title}}</h2>
      <p>{{this.tvObj.info}}</p>
    </div>
    <div class="img-box">
      <img
        :src="'https://images.weserv.nl/?url=' +this.tvObj.img"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tvObj: {
        img: "",
        title: "",
        info: "",
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get(
          "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/tv/" +
            this.$route.params.id
        )
        .then((res) => {
          this.tvObj.img = res.data.cover_url;
          this.tvObj.title = res.data.title;
          this.tvObj.info = res.data.intro;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>