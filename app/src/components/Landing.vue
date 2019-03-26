<template>
  <div class="Landing">


    <three-cols>

      <!--div slot="left" class="left">
      </div-->

      <div>

        <h2>
          <word-swap :words="['Designa','Koda','Skapa kultur','Samarbeta','Gör en insats']"></word-swap>
          <br />
          för demokratin 💪
        </h2>
        <div class="section">

          <p>
            Välkommen till MIK-jam, ett gratis heldagsevent <strong>13 maj på Arbetets Museum i Norrköping</strong> där 30 bibliotekspersonal och universitetsstudenter möts och arbetar tillsammans kring <a href="https://sv.wikipedia.org/wiki/Medie-_och_informationskunnighet" target="_blank">medie- och informationskunnighet (MIK)</a>.
          </p>

          <p>
            Hur kan biblioteken arbeta med MIK tillsammans med besökarna? Under dagen kommer nya koncept, aktiviteter och digitala verktyg att ta form för användning av såväl bibliotek, skolor och museum som allmänheten, med flera.
          </p>

          <h3>
            Vad är ett jam?
          </h3>

          <p>
            Ett jam är...
          </p>

          <h3>Vem kan delta?</h3>

          <p>
            MIK-jam riktar sig huvudsakligen till: <strong>bibliotekspersonal</strong> i Region Östergötland och <strong>universitetsstudenter</strong> vid Linköpings universitet.
          </p>

          <p>
            Vem som helst, oavsett sysselsättning eller vart du bor, kan anmäla intresse att delta, men vår huvudsakliga målgrupp kommer att prioriteras för de 30 platserna.
          </p>

          <h4>Behöver jag studera något särskilt program?</h4>
          <p>
            Vi har inga krav på vad du ska studera. Studenter på följande LiU-program tror vi passar särskilt bra att delta: Medieteknik; Kultur, samhälle och mediegestaltning; Samhälls- och kulturanalys; Grafisk design och kommunikation.
          </p>

          <h3>Vad kostar det?</h3>
          <p>
            Att delta i MIK-jam kostar ingenting. Och vi bjuder på frukost, fika och lunch!
          </p>

          <h3>Jag vill delta!</h3>
          <p>
            Vad kul! Du anmäler dig genom att fylla i detta <a>intresseformulär</a>.
          </p>

        </div>

        <h2>Viktiga datum</h2>
        <div class="section">

          <table>
            <tr>
              <td>
                29/3
              </td>
              <td>
                Anmälan öppnar
              </td>
            </tr>
            <tr>
              <td>
                18/4
              </td>
              <td>
                Anmälan stänger
              </td>
            </tr>
            <tr>
              <td>
                26/4
              </td>
              <td>
                Alla anmälda får besked om plats + reserv
              </td>
            </tr>
            <tr>
              <td>
                3/5
              </td>
              <td>
                Tacka ja/nej till erbjuden plats
              </td>
            </tr>
            <tr>
              <td>
                6/5
              </td>
              <td>
                Reserver: Tacka ja/nej till erbjuden plats inom 48h
              </td>
            </tr>
            <tr>
              <td>
                13/5
              </td>
              <td>
                MIK-jam!
              </td>
            </tr>
          </table>

          <hr />

          <h3>Schema 13/5</h3>

          <table>
            <tr>
              <td>
                8.30
              </td>
              <td>
                Frukost
              </td>
            </tr>
            <tr>
              <td>
                9.00
              </td>
              <td>
                Introduktion och föreläsning
              </td>
            </tr>
            <tr>
              <td>
                10.00
              </td>
              <td>
                Grupparbete
              </td>
            </tr>
            <tr>
              <td>
                12.00
              </td>
              <td>
                Lunch (ingår)
              </td>
            </tr>
            <tr>
              <td>
                13.00
              </td>
              <td>
                Grupparbete
              </td>
            </tr>
            <tr>
              <td>
                16.00
              </td>
              <td>
                Presentation av grupparbete
              </td>
            </tr>
            <tr>
              <td>
                17.00
              </td>
              <td>
                Slut för MIK-jam!
              </td>
            </tr>
            <hr />
            <tr>
              <td>
                18.00
              </td>
              <td>
                Efterhäng, dryck och mat på Coffice
              </td>
            </tr>
            <tr>
              <td>
                22.00
              </td>
              <td>
                Tack & hej!
              </td>
            </tr>
          </table>

        </div>

        <h2>Teman</h2>
        <div class="section">

          <div v-for="(theme,key) in themes">
            <theme :theme="theme" :index="key+1" ></theme>
            <hr />
          </div>

        </div>

        <h2>Kontakt</h2>
        <div class="section">

          <div class="cols">

            <div>
                <h3>Projektledare, Marcus Nygren</h3>
                E-post: <a href="marcus@edvira.se">marcus@edvira.se</a>
                <br />
                Telefon: 0727-453337
            </div>

            <div>
              <h3>Innehållsansvarig, Martin Törnros</h3>
              E-post: <a href="martin@interaktivarum.se">martin@interaktivarum.se</a>
              <br />
              Telefon: 0702-800054
            </div>

          </div>

        </div>

        <h2>Vilka är vi?</h2>
        <div class="section">

          <img src="@/assets/graphics/regionostergotland.png" class="logo" />
          <p>
            Region Östergötland leder det regionala utvecklingsarbetet för en långsiktig och hållbar utveckling i regionen genom sitt ansvar för regionala uppgifter och uppdraget att genomföra åtgärder inom områden som samhällsbyggnad, kompetensförsörjning, företagande, besöksnäring, kultur, folkbildning och folkhälsa.
          </p>


          <img src="@/assets/graphics/interaktivarum.png" class="logo" />
          <p>
            Interaktiva rum drivs av Martin Törnros, tidigare Medieteknik-student vid LiU. Interaktiva rum arbetar återkommande med bibliotek och museum runtom i landet kring MIK och digital källkritik och tilldelades 2018 Internetstiftelsens/Metros/Viralgranskarens årliga källkritikpris Det gyllene förstoringsglaset.
          </p>

        </div>

      </div>

      <div slot="right" class="right">
        <h3>
          Datum: 13 maj 2019
          <br />
          Plats: Arbetets Museum, Norrköping
        </h3>
        <br />
        <div class="register">
          Anmäl dig till MIK-jam!
        </div>
      </div>

    </three-cols>


  </div>
</template>

<script>

import { store } from '@/store';

import ThreeCols from '@/components/ThreeCols'
import Theme from '@/components/themes/Theme'
import WordSwap from '@/components/WordSwap'
import InfoCircle from '@/components/InfoCircle'

export default {
  name: 'Landing',
  components: {
    ThreeCols,
    Theme,
    WordSwap,
    InfoCircle
  },
  data () {
    return {
    }
  },
  computed: {
    themes: function () {
      return store.state.themes;
    }
  },
  mounted: function () {
    store.commit('init',{});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Landing {
  background-image: linear-gradient(to bottom right, Pink, LightSkyBlue  	);
  padding: 20px;
}

.section {
  background: white;
  padding: 10px;
  box-shadow: 5px 5px 0 pink;
}

.circle{
  margin-right: 20px;
}

.right{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: sticky;
  top: 0px;
  padding: 50px;
}

.register{
  padding: 20px;
  background: white;
  border-radius: 10px;
  font-size: 1.5em;
  font-family: "Roboto Condensed";
  cursor: pointer;
}

.register:hover{
  box-shadow: 5px 5px 0px pink;
}

table{
}

td{
  padding: 5px;
}

td:first-child{
  background: LightSkyBlue;
  text-align: center;
}

tr:hover{
  background: pink;
}

td:not(:first-child){
  font-weight: bold;
}

.logo{
  display: inline;
  height: 50px;
}

</style>
