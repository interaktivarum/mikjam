<template>
  <div id="app">
    <!--mj-header id="header"></mj-header-->
    <div id="mj-content">
      <mj-left id="left"></mj-left>
      <router-view id="router"/>
      <mj-right id="right"></mj-right>
    </div>

  </div>
</template>

<script>

import { store } from '@/store';

import MjHeader from '@/components/layout/MjHeader'
import MjLeft from '@/components/layout/MjLeft'
import MjRight from '@/components/layout/MjRight'

export default {
  name: 'App',
  components: {
    MjHeader,
    MjLeft,
    MjRight
  },
  mounted: function () {
    store.commit('init',{});
  }
}
</script>

<style>

@import './assets/style/layout.css';
@import './assets/style/text.css';
@import './assets/style/screens.css';

#app{
  background-image: linear-gradient(to bottom right, Pink, LightSkyBlue);
}

</style>
