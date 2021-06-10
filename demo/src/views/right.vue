<template>
  <div id="center">

 

      <div class="down">
      <div class="ranking bg-color-black">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1">无人机飞行信息</span>
            <!-- <span @click="playVideo">更改视频信息</span> -->
           <div class="up">
      <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
        <p class="ml-3 colorBlue fw-b">{{item.title}}</p>
        <div>
          <dv-digital-flop :config="item.number" style="width:1.25rem;height:.625rem;" />
        </div>
      </div>
    </div>
            <video-player ref="playerObj"></video-player>
      </div>
    </div>


  </div>
</template>

<script>
 import VideoPlayer from '../components/shipin/VideoPlayer'

export default {
  data () {
    return {
      titleItem: [
        {
          title: "经度",
          number: {
            number: [295.686034],
            toFixed: 5,
            content: "{nt}"
          }
        },
        {
          title: "海拔",
          number: {
            number: [18.125],
            toFixed: 3,
            content: "{nt}"
          }
        },
        {
          title: "风速",
          number: {
            number: [2],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "纬度",
          number: {
            number: [11.554],
            toFixed: 3,
            content: "{nt}"
          }
        },
        {
          title: "高度",
          number: {
            number: [106],
            toFixed: 1,
            content: "{nt}"
          }
        },
        {
          title: "电量",
          number: {
            number: [100],
            toFixed: 0,
            content: "{nt}"
          }
        }
      ],
    };
  },
  components: {
     VideoPlayer
  },
  methods:{
      playVideo() {
              this.$refs['playerObj'].videoSrc = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm' //更改子组件视频播放地址
          }
  }
};
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 0.0625rem;
      padding-top: 0.2rem;
      margin-top: 0.1rem;
      width: 32%;
      height: 0.875rem;
    }
  }
  .down {
    padding: 0.07rem 0.05rem;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 6.8775rem;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 0.0625rem;
    }
    .ranking {
      padding: 0.125rem;
      width: 100%;
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 1.5rem;
        span {
          margin-top: 0.0875rem;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
      }
    }
  }
}
</style>