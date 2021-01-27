<template>
  <div>
    <aplayer
      :audio="audio"
      :lrcType="0"
    />
  </div>
</template>

<script>
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer, {
  defaultCover: "https://github.com/u3u.png",
  productionTip: true,
});
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      audio: [],
      playList: [],
      mp3Url: "",
      id: "",
    };
  },
  methods: {
    getData() {
      this.axios
        .get("https://bird.ioliu.cn/netease/playlist?id=5462180032")
        .then(async (res) => {
          console.log(res);
          this.playList = res.data.playlist.tracks;
          this.audio = this.playList.map((item, index) => {       
            this.getSong(item.id, index);// 异步的操作不会立刻拿到结果，所以在该方法的 then 里面去修改 mp3 的 url
            return {
              name: item.name,
              artist: item.ar[0].name,
              url: this.mp3Url,
              cover: item.al.picUrl, 
              id: item.id,
            };
          });
        });
    },
    getSong(id, index) {
      this.axios
        .get("https://bird.ioliu.cn/netease/song?id=" + id)
        .then((res) => {
          this.audio[index].url = res.data.data.mp3.url;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>