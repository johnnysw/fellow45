<template>
  <div>
    <aplayer
      :audio="audio"
      :lrcType="0"
    />
    <ul>
      <li
        v-for="(item,index) in playList"
        :key="item.id"
        @click="getSong(item.id)"
      >
        <span>{{index + 1}}</span>
        <span class="title">{{item.name}}</span>
        <span>{{item.ar[0].name}}</span>
      </li>
    </ul>
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
      audio: {
        name: "",
        artist: "",
        url: "",
        cover: '', // prettier-ignore
      },
      playList: [],
    };
  },
  methods: {
    getData() {
      this.axios
        .get("https://bird.ioliu.cn/netease/playlist?id=5462180032")
        .then((res) => {
          this.playList = res.data.playlist.tracks;
          this.getSong(this.playList[0].id);
        });
    },
    getSong(id) {
      this.axios
        .get("https://bird.ioliu.cn/netease/song?id=" + id)
        .then((res) => {
          this.audio = {
            name: res.data.data.name,
            artist: res.data.data.ar[0].name,
            url: res.data.data.mp3.url,
            cover: res.data.data.al.picUrl, // prettier-ignore
          };
        });
    },
  },
};
</script>

<style lang="scss" scoped> 
li {
  display: flex;
  span {
    flex: 1;
  }
  .title {
    flex: 2;
  }
}
</style>