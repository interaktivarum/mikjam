<template>
  <span class="InfoCircle">
    {{content}}
  </span>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'

export default {
  name: 'InfoCircle',
  /*components: {
    Component
  },*/
  data () {
    return {
    }
  },
  props: {
    content: ""
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

.InfoCircle{
  border-radius: 1.5em;
  font-size: 1.2em;
  background: LightSkyBlue;
  box-shadow: 5px 5px 0 pink;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 2.5em;
  padding: 1px 10px 1px 10px;
}

</style>
