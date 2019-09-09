<template>
  <div class="MjLeft">

    <div class="stick">


      <router-link :to="{ name: 'Landing', params: {} }" class="menuHeader">
        <h1>MIK-jam</h1>
      </router-link>

      <router-link :to="{ name: 'Landing', params: {} }" class="menuItem">En insats för demokratin</router-link>
      <router-link :to="{ name: 'Themes', params: {} }" class="menuItem">Teman</router-link>
      <router-link :to="{ name: 'Jams', params: {} }" class="menuItem">Genomförda jams</router-link>
      <router-link :to="{ name: 'About', params: {} }" class="menuItem">Om MIK-jam</router-link>

    </div>

  </div>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'

import ThreeCols from '@/components/ThreeCols'

export default {
  name: 'MjLeft',
  components: {
    ThreeCols
  },
  data () {
    return {
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.MjLeft{
}

.menuHeader{
  color: black;
}

.menuHeader:hover{
  text-decoration: none;
  color: salmon;
}

.menuItem{
  color: black;
  display: block;
}

.stick{
  position: sticky;
  top: 20px;
}

</style>
