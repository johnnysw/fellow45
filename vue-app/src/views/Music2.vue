<template>
  <div>
    <aplayer
      :audio="audio"
      :lrcType="0"
      @listSwitch="switchSong"
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
    };
  },
  methods: {
    getData() {
      this.axios
        .get("https://bird.ioliu.cn/netease/playlist?id=5462180032")
        .then((res) => {
          console.log(res);
          this.playList = res.data.playlist.tracks;
          this.audio = this.playList.map((item) => {
            this.getSong(item.id);
            return {
              name: item.name,
              artist: item.ar[0].name,
              url: this.mp3Url,
              cover: item.al.picUrl, // prettier-ignore
              id: item.id,
            };
          });
        });
    },
    getSong(id) {
      this.axios
        .get("https://bird.ioliu.cn/netease/song?id=" + id)
        .then((res) => {
          console.log(res);
          this.mp3Url = res.data.data.mp3.url;
        });
    },
    switchSong() {
      console.log(666);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>