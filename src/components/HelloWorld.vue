<template>
  <div class="home">
    <TabBar/>
    <Swiper/>
  </div>
</template>

<script>
import TabBar from "./slide/tabBar";
import Swiper from "./slide/swiper";
export default {
  name: 'HelloWorld',
  components:{
    "TabBar":TabBar,
    "Swiper":Swiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  height: 100%;
}
</style>
