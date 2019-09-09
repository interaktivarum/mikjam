<template>
  <div class="WhyParticipate">

    <p>
      MIK-jam är ett perfekt tillfälle att knyta <strong>nya kontakter</strong> och skapa nya former av <strong>samarbeten</strong>, samtidigt som du får <strong>nya kunskaper</strong> och gör en <strong>insats för demokratin och kulturen</strong>.
    </p>

    <p>
       Det är deltagarna som tillsammans <strong>formar MIK-jam och resultatet</strong>! Den breda och tvärvetenskapliga blandningen av kompetenser är vad som gör ett MIK-jam lyckat, beroende på deltagare och målgrupp kan du komma att arbeta tillsammans med alltifrån programmerare och designers till bibliotekspersonal och kulturvetare.
    </p>

  </div>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'

export default {
  name: 'WhyParticipate',
  /*components: {
    Component
  },*/
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

.WhyParticipate{
}

.stakeholders{
  display: flex;
  flex-direction: row;
}

.stakeholders *{
  flex: 1;
}

ul{
  padding-left: 1em;
}

</style>
