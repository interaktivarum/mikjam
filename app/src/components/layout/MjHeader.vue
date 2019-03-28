<template>
  <div class="MjHeader">

    <three-cols class="cols">
      <h1>
        <span class="h1">MIK-jam</span>
        <br />
        <span class="h2">13 maj 2019</span>
        <br />
        <span class="h3">
          Arbetets Museum
          Norrköping
        </span>
      </h1>
    </three-cols>

  </div>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'

import ThreeCols from '@/components/ThreeCols'

export default {
  name: 'MjHeader',
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

.MjHeader{
  background: white;
  border-bottom: 2px solid pink;
  padding: 0 20px 0 20px;
}

.h2{
  color: salmon;
}

</style>
