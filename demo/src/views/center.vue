<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">地图</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <!-- <dv-scroll-board :config="config" style="width:3.375rem;height:4.28rem" /> -->
         <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler" :high-resolution="true" :auto-resize="true" mapType="BMAP_SATELLITE_MAP">

           <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale> //比例尺
             <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>  //缩放
          <bm-map-type :map-types="['BMAP_SATELLITE_MAP','BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type> //类型

          <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="4"  @lineupdate="updatePolylinePath"></bm-polyline>  //画线
         </baidu-map>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
       polylinePath: [
        {lng: 106.309507, lat: 29.603487},
        {lng: 106.309407, lat: 29.603887},
        {lng: 106.309907, lat: 29.603187}
      ],
       imgUrl:require("../assets/1.png")  //地图小图标
    };
  },
  components: {},
  mounted() {},
  methods: {
      handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 106.309907
      this.center.lat = 29.603287
      this.zoom = 30
      // 创建无人机图标
      var myIcon = new BMap.Icon(this.imgUrl, new BMap.Size(20, 20));
    // 创建Marker标注，使用无人机图标
    var pt = new BMap.Point(106.309907, 29.603187);
    var marker = new BMap.Marker(pt, {
      icon: myIcon
      });
    // 将标注添加到地图
    map.addOverlay(marker);

    },
     updatePolylinePath (e) {
      this.polylinePath = e.target.getPath()
    },
    addPolylinePoint () {
      this.polylinePath.push({lng: 116.404, lat: 39.915})
    }
  }
};
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 476px;
}
#centerRight1 {
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
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
}
</style>