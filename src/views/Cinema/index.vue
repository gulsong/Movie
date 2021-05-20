<template>
  <div id="main">
      <Header title="XX影院"/>
      <div id="content">
        <div class="cinema_menu">
          <router-link to="/cinema/ciList" custom v-slot="{ navigate,isActive,isExactActive }">
            <div :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" class="city_switch" @click="navigate">
              全城 <i class="iconfont icon-lower-triangle"></i>
            </div>
          </router-link>
          <router-link to="/cinema/brList" custom v-slot="{ navigate,isActive,isExactActive }">
            <div :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" class="brand_swtich" @click="navigate">
              品牌 <i class="iconfont icon-lower-triangle"></i>
            </div>
          </router-link>
          <router-link to="/cinema/feList" custom v-slot="{ navigate,isActive,isExactActive }">
            <div :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" class="feature_switch" @click="navigate">
              特色 <i class="iconfont icon-lower-triangle"></i>
            </div>
          </router-link>
        </div>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
      <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
export default {
  name:'Cinema',
  components:{
    Header,
    TabBar
  }
}
</script>

<style scoped>
  #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;} 
  .cinema_menu .city_switch{ height:100%; line-height: 45px;}
  .cinema_menu .city_switch.router-link-active{ color: #6a5acd; border-bottom: 2px #6a5acd solid;}
  .cinema_menu .brand_swtich{ height:100%; line-height: 45px;}
  .cinema_menu .brand_swtich.router-link-active{ color: #6a5acd; border-bottom: 2px #6a5acd solid;}
  .cinema_menu .feature_switch{ height:100%; line-height: 45px;}
  .cinema_menu .feature_switch.router-link-active{ color: #6a5acd; border-bottom: 2px #6a5acd solid;}
</style>