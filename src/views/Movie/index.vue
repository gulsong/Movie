<template>
  <div id="main">
      <Header title="XX电影"/>
      <div id="content">
        <div class="movie_menu">
          <router-link to="/movie/city" custom v-slot="{ navigate,isActive,isExactActive }">
              <div :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" class="city_name" @click="navigate">
                <span>哈尔滨</span><i class="iconfont icon-lower-triangle"></i>
              </div>
            </router-link>
          <div class="hot_swtich">
            <router-link to="/movie/nowPlaying" custom v-slot="{ navigate,isActive,isExactActive }">
              <div :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" class="hot_item" @click="navigate">
                正在热映
              </div>
            </router-link>
            <router-link to="/movie/comingSoon" custom v-slot="{ navigate,isActive,isExactActive }">
              <div :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" class="hot_item" @click="navigate">
                即将上映
              </div>
            </router-link>
          </div>
          <router-link to="/movie/search" custom v-slot="{ navigate,isActive,isExactActive }">
            <div :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" class="search_entry" @click="navigate">
              <i class="iconfont icon-sousuo"></i>
            </div>
          </router-link>
        </div>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
      <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
export default {
  name:'Movie',
  components:{
    Header,
    TabBar
  }
}
</script>

<style scoped>
  #content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
  .movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
  .movie_menu .city_name.active{ color: #6a5acd; border-bottom: 2px #6a5acd solid;}
  .movie_menu .city_name.router-link-active{ color: #6a5acd; border-bottom: 2px #6a5acd solid;}
  .movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
  .movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
  .movie_menu .hot_item.active{ color: #6a5acd; border-bottom: 2px #6a5acd solid;}
  .movie_menu .hot_item.router-link-active{ color: #6a5acd; border-bottom: 2px #6a5acd solid;}
  .movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
  .movie_menu .search_entry.active{ color: #6a5acd; border-bottom: 2px #6a5acd solid;}
  .movie_menu .search_entry.router-link-active{ color: #6a5acd; border-bottom: 2px #6a5acd solid;}
  .movie_menu .search_entry i{  font-size:24px; color:blue;}
</style>