<template>
<div class="map">
  <Top />
    <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:6.6rem" @click="getClickInfo" :scroll-wheel-zoom='true'>
    </baidu-map>
    <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/Footer";
import Top from "@/components/Top";
export default {
  name: 'Map',
  components:{
    Footer,Top
  },
  data () {
    return {
      center: {lng: 109.45744048529967, lat: 36.49771311230842},
      zoom: 13
    }
  },
  methods: {
    handler ({BMap, map}) {
      var point = new BMap.Point(108.953292,34.265326)
      map.centerAndZoom(point, 16)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
        map.enableScrollWheelZoom(true);  //启用滚轮放大缩小，默认禁用
        map.enableKeyboard(true);         //启用键盘操作，默认禁用。
        map.enableDragging();             //启用地图拖拽，默认启用
        map.enableDoubleClickZoom();      //启用双击放大，默认启用
        map.addControl(new BMap.NavigationControl()); //平移缩放控件
        map.addControl(new BMap.ScaleControl());

    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
}}
</script>
<style scoped>
.map{width: 100%;height: 6.6rem;}
</style>