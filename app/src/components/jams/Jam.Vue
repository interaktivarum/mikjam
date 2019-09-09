<template>
  <div class="Jam">

    <h3 class="header">
      {{jam.location}}
      <br />
      <span class="gray">{{jam.date}}</span>
    </h3>

    <p class="box">
      Praktisk <a href="https://docs.google.com/document/d/1-c5U8g92rXNUBEDvOgmhkGc6jce5Fbu6GsSIJdFai8k/edit?usp=sharing" target="_blank">deltagarinformation</a> inför dagen, publicerad och fri att användas under licens <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY</a>.
    </p>

    <div v-for="group in jam.groups">
      <group :group="group"></group>
    </div>

  </div>
</template>

<script>

import { store } from '@/store';
import Group from '@/components/jams/Group'

export default {
  name: 'Jam',
  components: {
    Group
  },
  data () {
    return {
    }
  },
  props: {
    jam: "",
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

.Jam{
  margin-bottom: 10px;
}

</style>
