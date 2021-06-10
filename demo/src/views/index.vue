<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">无人机数据收集</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="width: 6.; text-25remalign: left;background-color: #0f1325;"
            >
              <span class="react-before"></span>
              <span class="text">{{dateYear}} {{dateWeek}} {{dateDay}}</span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;">
              <span class="text colorRed">感知节点{？}</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left bg-color-blue mr-3" @click="uavmonitor">
              <span class="text fw-b" >无人机航拍</span>
            </div>
                     <div class="react-left bg-color-blue mr-3"  @click="groundmonitor">
              <span class="text fw-b" >地面监控</span>
            </div>
                     <div class="react-left bg-color-blue mr-3"  @click="datac">
              <span class="text fw-b">数据收集</span>
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">

            <div>
              <dv-border-box-12>
                <left />
              </dv-border-box-12>
            </div>
         
            <div>
              <dv-border-box-1>
                <center />
              </dv-border-box-1>
            </div>

            <!-- 中间 -->
            <div>
              <right/>
            </div>

          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-8>
              <bottomLeft />
            </dv-border-box-8>
            <dv-border-box-9>
              <bottomCenter />
            </dv-border-box-9>
                <dv-border-box-8 :reverse="true">
              <bottomRight />
            </dv-border-box-8>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import { formatTime } from '../utils/index.js'
import left from "./left";
import center from "./center";
import right from "./right";
import bottomLeft from "./bottomLeft";
import bottomRight from "./bottomRight";
import bottomCenter from "./bottomCenter";
export default {
  data () {
    return {
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components: {
    left,
    center,
    right,
    bottomLeft,
    bottomRight,
    bottomCenter
  },
  mounted () {
    this.timeFn();
    this.cancelLoading();
  },
  methods: {
    timeFn () {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000)
    },
    cancelLoading () {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    datac(){
      alert("开始数据采集")
    },
     uavmonitor(){
      alert("开始航拍")
    },
     groundmonitor(){
      alert("开始地面监控")
    }
  }
};
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
</style>