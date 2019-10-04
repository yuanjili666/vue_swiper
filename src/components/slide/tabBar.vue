<template>
  <div class="tabbar">
    <ul>
      <li 
        v-for="(item,index) in tabBar"
        :class="index == tabBarActiveIndex?'active':''"
        @click="handleToggle(index)"
      >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      tabBar: [
        {
          title: "页面一"
        },
        {
          title: "页面二"
        },
        {
          title: "页面三"
        }
      ]
    };
  },
  computed: {
      ...Vuex.mapState({
          tabBarActiveIndex:state=>state.tabBaractiveIndex
      })
  },
  methods:{
      ...Vuex.mapMutations({
          handleToggle:"handleToggle",
          handleToggleCom:"handleToggleCom"
      }),
      slideTab(index){
          this.handleToggleCom(index)
      }
  }
};
</script>

<style>
.tabbar {
  width: 100%;
}
.tabbar > ul {
  display: flex;
  width: 100%;
}
.tabbar > ul > li {
  width: 100%;
  height: 40px;
  background: #ccc;
  color: #fff;
  line-height: 40px;
  text-align: center;
}
.tabbar > ul > .active{
    background: #c33;
    color: #fff;
}
</style>