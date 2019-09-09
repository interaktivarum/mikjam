<template>
  <div class="Landing">

    <h2 id="mikjam">
      <word-swap :words="['Designa','Koda','Skapa kultur','Samarbeta','Var kreativ','Gör en insats']"></word-swap>
      <br />
      för demokratin 💪
    </h2>

    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/327033405" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

    <br /><br />

    <div class="section">

      <div class="pitchRadios">
        Jag vill läsa:
        <label>
          <input type="radio" name="pitch" value="false" v-model="moreInfo"/> den snabba pitchen
        </label>
        <label>
          <input type="radio" name="pitch" value="true" v-model="moreInfo"/> mer info
        </label>
      </div>

      <p class="semibold">
        Välkommen till MIK-jam, ett eventkoncept där kreativa deltagare med olika bakgrund och kompetenser möts och arbetar tillsammans kring <a href="https://sv.wikipedia.org/wiki/Medie-_och_informationskunnighet" target="_blank">medie- och informationskunnighet (MIK)</a>.
      </p>

      <p class="semibold">
        Under ett MIK-jam tar nya koncept, aktiviteter och prototyper till digitala verktyg att form. Syftet är att stärka MIK-arbetet inom bibliotek, skola och museum såväl som för allmänheten och organisationer att lära om MIK.
      </p>

      <h3>Teman</h3>
      <p>
        <div class="themebox" v-for="(theme,key) in themes">
          {{theme.name}}
        </div>
      </p>

      <short-info v-if="!moreInfo || moreInfo == 'false'"></short-info>
      <more-info v-else></more-info>

    </div>

    <h2 id="varfor">Varför ska jag delta?</h2>
    <div class="section">
      <why-participate></why-participate>
    </div>

  </div>
</template>

<script>

import { store } from '@/store';

import ThreeCols from '@/components/ThreeCols'
import MoreInfo from '@/components/MoreInfo'
import ShortInfo from '@/components/ShortInfo'
import WhyParticipate from '@/components/WhyParticipate'
import WordSwap from '@/components/WordSwap'
import ContactPerson from '@/components/ContactPerson'

export default {
  name: 'Landing',
  components: {
    ThreeCols,
    MoreInfo,
    ShortInfo,
    WhyParticipate,
    WordSwap,
    ContactPerson
  },
  data () {
    return {
      moreInfo: false
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Landing {

}

.pitchRadios{
  background: LightSkyBlue;
  padding: 10px;
  margin-bottom: 20px;
  font-family: 'Roboto Condensed';
  font-weight: 400;
}

.pitchRadios label{
  margin: 0px 0px 0px 10px;
  cursor: pointer;
}

.themebox{
  display: inline-block;
  padding: 5px;
  background: pink;
  margin: 0px 2px 2px 0px;
  font-weight: 400;
  font-family: 'Roboto Condensed';
}

</style>
