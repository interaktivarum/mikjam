<template>
  <div class="Diploma">

    <three-cols>

      <div>

        <h2>Jag var en del av MIK-jam!</h2>

        <div class="section">

          <p>
            MIK står för medie- och informationskunnighet: att kunna hantera, värdera och analysera det informationsflöde som förekommer via olika medietyper. Det handlar om allt ifrån digital källkritik och reklamkunnighet till filmanalys och
            datorspel. MIK handlar om alla människors rätt till information och kunskap: kort och gott en demokratifråga.
          </p>

          <p>
            Under ett jam samlas människor från olika bakgrunder för att skapa tillsammans. MIK-jam pågår under en heldag, och fokus är på att ha roligt, lära sig, och inspireras av varandra.
          </p>

        </div>

      </div>

    </three-cols>

  </div>
</template>

<script>

import { store } from '@/store';

import ThreeCols from '@/components/ThreeCols'

export default {
  name: 'Diploma',
  components: {
    ThreeCols,
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Diploma {
  background-image: linear-gradient(to bottom right, Pink, LightSkyBlue);
  padding: 20px;
}

</style>
