<template>
  <div class="WhyParticipate">

    <p>
      MIK-jam är ett perfekt tillfälle att knyta <strong>nya kontakter</strong> och skapa nya former av <strong>samarbeten</strong>, samtidigt som du får <strong>nya kunskaper</strong> och gör en <strong>insats för demokratin och kulturen</strong>.
    </p>

    <p>
      För universitetsstudenter innebär dagen även en utmärkt <strong>erfarenhet</strong> av att arbeta i ett skarpt projekt tillsammans med yrkeslivet och studenter från andra program.
    </p>

    <p>
      Samtliga deltagare kommer att få ett signerat <strong>intyg och referenser</strong> för sitt deltagande i MIK-jam och har möjligheter till <strong>ekonomiskt stöd</strong> för fortsatt arbete och affärsutveckling av sina idéer.
    </p>

    <p>
       Det är ni deltagare som kommer att <strong>forma MIK-jam och resultatet</strong>! Den breda och tvärvetenskapliga blandningen av kompetenser är vad som kommer att göra dagen lyckad: du kommer att arbeta tillsammans med alltifrån programmerare och designers till bibliotekspersonal och kulturvetare.
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
