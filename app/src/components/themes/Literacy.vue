<template>
  <div class="Literacy" :class="{'inactive': inactive}">

    {{literacy}}

  </div>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'

export default {
  name: 'Literacy',
  /*components: {
    Component
  },*/
  data () {
    return {
    }
  },
  props: {
    literacy: "",
    inactive: true
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

.Literacy{
  background: lightskyblue;
  border-radius: 2px;
  border: 0px solid lightgray;
  margin: 2px;
  padding: 1px 3px 1px 3px;
  display: inline-block;
  font-size: smaller;
  font-family: "Roboto Condensed";
}

.inactive{
  background: rgb(240,240,240);
  color: lightgray;
}

</style>
