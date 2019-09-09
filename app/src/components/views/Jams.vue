<template>
  <div class="Jams">

    <h2 id="teman">Genomförda jams</h2>
    <div class="section">

      <div v-for="jam in jams">
        <jam :jam="jam" ></jam>
      </div>

    </div>

  </div>
</template>

<script>

import { store } from '@/store';
import Jam from '@/components/jams/Jam'

export default {
  name: 'Jams',
  components: {
    Jam
  },
  data () {
    return {
    }
  },
  props: {
  },
  computed: {
    jams: function () {
      return store.state.jams;
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.Jams{
}

</style>
