<template>
  <div class="Themes">

    <h2 id="teman">Teman</h2>
    <div class="section">

      <p>
        Under ett MIK-jam arbetar deltagarna gruppvis utifrån olika bestämda teman med färdiga utmaningar och frågeställningar. Temat är en utgångspunkt för grupparbetet, och det går utmärkt att hämta inspiration från övriga teman eller formulera egna utmaningar att arbeta med.
      </p>

      <hr />

      <div v-for="(theme,key) in themes">
        <theme :theme="theme" :index="key+1" ></theme>
        <hr />
      </div>

    </div>

  </div>
</template>

<script>

import { store } from '@/store';
import Theme from '@/components/themes/Theme'

export default {
  name: 'Themes',
  components: {
    Theme
  },
  data () {
    return {
    }
  },
  props: {
  },
  computed: {
    themes: function () {
      return store.state.themes;
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.Themes{
}

</style>
