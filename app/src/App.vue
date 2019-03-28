<template>
  <div id="app">
    <mj-header id="hem"></mj-header>
    <router-view/>
  </div>
</template>

<script>

import MjHeader from '@/components/layout/MjHeader'

export default {
  name: 'App',
  components: {
    MjHeader
  }
}
</script>

<style>

@import './assets/style/layout.css';
@import './assets/style/text.css';
@import './assets/style/screens.css';

</style>
