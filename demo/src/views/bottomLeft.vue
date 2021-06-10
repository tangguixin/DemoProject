<template>
  <div id="bottomLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">温度传感器</span>
        </div>
      </div>
      <div class="chart-box">
        <BottomLeftChart />
      </div>
    </div>
  </div>
</template>

<script>
import BottomLeftChart from "@/components/echart/bottom/bottomLeftChart";
export default {
  data() {
    return {};
  },
  components: {
    BottomLeftChart
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#bottomLeft {
  padding: 0.3rem 0.2rem;
  height: 4.7rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.2625rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
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