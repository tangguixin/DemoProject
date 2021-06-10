<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        rateData:[]
      },
      now:+new Date(1997, 9, 3),
      oneDay:24 * 3600 * 1000,
      value:Math.random() * 1000,
    };
  },
  components: {
    Chart,
  },
  mounted () {
    this.setData();
    this.changeTiming()
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
       for (var i = 0; i < 1000; i++) {
    this.cdata.rateData.push(this.randomData());
      }
    },
        changeTiming() {
      setInterval(() => {
        this.changeNumber();
      }, 3000);
    },
    changeNumber(){
  for (var i = 0; i < 5; i++) {
          this.cdata.rateData.shift();
          this.cdata.rateData.push(this.randomData())
    }
    },
    randomData() {
    this.now = new Date(+this.now + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
        name: this.now.toString(),
        value: [
            [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
            Math.round(this.value)
        ]
    };},


  }
};
</script>

<style lang="scss" scoped>
</style>