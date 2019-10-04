<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in page">
          <keep-alive>
          <component :is="item.component"></component>
          </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import One from "./one";
import Two from "./two";
import Three from "./three";
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
export default {
  data() {
    return {
      page: [
            { component: One },
            { component: Two }, 
            { component: Three }
        ]
    }
  },
  computed:{
      ...Vuex.mapState({
          activePage:state=>state.activePage,
          tabBaractiveIndex:state=>state.tabBaractiveIndex
      })
  },
  watch:{
      tabBaractiveIndex(){
          this.swiper.slideTo(this.tabBaractiveIndex, 500, true);
      }
  },
  methods:{
      ...Vuex.mapMutations({
          handleToggle:"handleToggle"
      })
  },
  mounted(){
      this.swiper = new Swiper(".swiper-container",{
          initialSlide:this.activePage =="One"?0:this.activePage == "Two"?1:this.activePage == "Three"?3:0
      })

      //监听滚动的下标
      this.swiper.on("slideChange",()=>{
          this.handleToggle(this.swiper.activeIndex)
      })
  }
};
</script>

<style scoped>
.swiper-container{
    height: 100%;
    margin-top: 30px;
}
.swiper-wrapper,.swiper-slide{
    width: 100%;
}
.swiper-slide{
    background: red;
}
</style>