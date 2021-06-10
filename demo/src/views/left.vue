<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">无人机拍摄画面</span>
          <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center">
           <img :src=imgSrc height="487px" width="440px">
  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc:""
    };
  },
  components: {
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(this.rightthreeaxios, 2000);
      })
  },

  methods: {
    async   rightthreeaxios(){
      await	this.$axios.get("http://localhost:5000")
      .then(res=>{
          console.log(res);
           this.imgSrc = 'data:;base64,' + res.data
          })
          },  
          }
};
</script>

<style lang="scss">
#centerLeft1 {
  padding: 0.2rem;
  height: 6.825rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}
</style>