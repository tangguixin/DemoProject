<template>
  <div id="bottomRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-area"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">光强度传感器</span>
          <div class="decoration2">
            <dv-decoration-2 :reverse="true" style="width:5px;height:4.0rem;" />
          </div>
        </div>
      </div>
      <div class="chart-box">
        <BottomRightChart />
      </div>
    </div>
  </div>
</template>

<script>
import BottomRightChart from "@/components/echart/bottom/bottomRightChart";
export default {
  data() {
    return {};
  },
  components: {
    BottomRightChart
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#bottomRight {
  padding: 0.3rem 0.2rem 0;
  height: 4.7rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height:4.2625rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  } //下滑线动态
  .decoration2 {
    position: absolute;
    right: 0.125rem;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 100%;
    height: 4.7rem;
    margin-top: -0.5rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}
</style>