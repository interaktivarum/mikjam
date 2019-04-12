<template>
  <div class="Landing">

    <three-cols>

      <div slot="left" class="left screenLarge">

        <a href="#hem" class="anchor">
          <h3>MIK-jam</h3>
        </a>

        <br />

        <a href="#mikjam" class="anchor">En insats för demokratin</a>

        <a href="#varfor" class="anchor">Varför ska jag delta?</a>

        <a href="#datum" class="anchor">Viktiga datum</a>

        <a href="#teman" class="anchor">Teman</a>

        <a href="#kontakt" class="anchor">Kontakt</a>

        <a href="#oss" class="anchor">Vilka är vi?</a>

      </div>

      <div>

        <h2 id="mikjam">
          <word-swap :words="['Designa','Koda','Skapa kultur','Samarbeta','Var kreativ','Gör en insats']"></word-swap>
          <br />
          för demokratin 💪
        </h2>

        <a href="https://forms.gle/CoJrVDAPCqPxoLUA6" target="_blank" class="register screenSmall">
          Ansök till MIK-jam!
        </a>

        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/327033405" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

        <br /><br />

        <div class="section">

          <div class="pitchRadios">
            Ge mig:
            <label>
              <input type="radio" name="pitch" value="false" v-model="moreInfo"/> den snabba pitchen
            </label>
            <label>
              <input type="radio" name="pitch" value="true" v-model="moreInfo"/> mer info
            </label>
          </div>

          <p class="semibold">
            Välkommen till MIK-jam, ett gratis heldagsevent <strong>13 maj på Arbetets Museum i Norrköping</strong> där 30 kreativa deltagare möts och arbetar tillsammans kring <a href="https://sv.wikipedia.org/wiki/Medie-_och_informationskunnighet" target="_blank">medie- och informationskunnighet (MIK)</a>.
          </p>

          <p class="semibold">
            Under dagen kommer nya koncept, aktiviteter och prototyper till digitala verktyg att ta form. Syftet är att stärka det egna MIK-arbetet inom bibliotek, skola och museum såväl som för allmänheten och organisationer att lära om MIK.
          </p>

          <h4>Teman</h4>
          <ol>
            <li v-for="(theme,key) in themes">
              {{theme.name}}
            </li>
          </ol>

          <a href="#teman">Läs mer om alla teman</a>

          <short-info v-if="!moreInfo || moreInfo == 'false'"></short-info>
          <more-info v-else></more-info>

          <h3>Jag vill delta!</h3>
          <p>
            Vad kul! Du ansöker om att delta genom att fylla i detta <a href="https://forms.gle/CoJrVDAPCqPxoLUA6" target="_blank">intresseformulär</a>.
          </p>

        </div>

        <h2 id="varfor">Varför ska jag delta?</h2>
        <div class="section">
          <why-participate></why-participate>
        </div>

        <h2 id="datum">Viktiga datum</h2>
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
                Lunch
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
                15.30
              </td>
              <td>
                Presentation av grupparbete
              </td>
            </tr>
            <tr>
              <td>
                16.30
              </td>
              <td>
                Avrundning och slutdiskussion
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
          </table>

        </div>

        <h2 id="teman">Teman</h2>
        <div class="section">

          <div v-for="(theme,key) in themes">
            <theme :theme="theme" :index="key+1" ></theme>
            <hr />
          </div>

        </div>

        <h2 id="kontakt">Kontakt</h2>
        <div class="section">

          <div class="cols">

            <div>
              <h3>Projektledare, Marcus Nygren</h3>
              <p>
                E-post: <a href="marcus@edvira.se">marcus@edvira.se</a>
                <br />
                Telefon: 0727-453337
              </p>
              <img src="/static/graphics/people/marcusnygren.jpg" alt="Marcus Nygren, projektledare"/>
            </div>

            <div>
              <h3>MIK- & innehållsansvarig, Martin Törnros</h3>
              <p>
                E-post: <a href="martin@interaktivarum.se">martin@interaktivarum.se</a>
                <br />
                Telefon: 0702-800054
              </p>
              <img src="/static/graphics/people/martintornros.jpg" alt="Martin Törnros, innehållsansvarig"/>
            </div>

          </div>

        </div>

        <h2 id="oss">Vilka är vi?</h2>
        <div class="section">

          <a href="https://interaktivarum.se" target="_blank">
            <img src="@/assets/graphics/interaktivarum.png" class="logo" alt="Interaktiva rum, logotyp"/>
          </a>
          <p>
            Interaktiva rum är en kreativ interaktionsbyrå som drivs av Martin Törnros, tidigare Medieteknik-student vid LiU och initiativtagare till MIK-jam. Interaktiva rum arbetar regelbundet med bibliotek, skola och museum runtom i landet kring MIK och digital källkritik och tilldelades 2018 Internetstiftelsens / Metros / Viralgranskarens årliga källkritikpris Det gyllene förstoringsglaset.
          </p>

          <br />
          <a href="http://www.edvira.com" target="_blank">
            <img src="@/assets/graphics/edvira.png" class="logo" alt="Edvira, logotyp"/>
          </a>
          <p>
            Edvira jobbar på kommun-nivå med programmering i skolan och drivs av Marcus Nygren och Linnea Rothin, tidigare Medieteknik-studenter vid LiU, med stor erfarenhet av att leda events såsom hackathons och jams. Edvira är verksamma i hela landet och drivs av att ge alla lärare förutsättningarna för kvalitativ ämnesundervisning, där programmering blir ett bra verktyg istället för ett jobbigt extramoment.
          </p>

          <br />
          <a href="http://www.filmiost.se" target="_blank">
            <img src="@/assets/graphics/filmiost.png" class="logo" alt="Film i Öst, logotyp" />
          </a>
          <p>
            Film i Öst är Östergötlands regionala utvecklingscentrum för film. Målet för verksamheten är att Östergötland ska vara en vital och spännande filmregion. Arbetet har tre huvudområden: produktion - visning - pedagogik. Skola och förskola står i centrum för det filmpedagogiska arbetet där MIK är centralt.
          </p>

          <br />
          <a href="https://www.regionostergotland.se" target="_blank">
            <img src="@/assets/graphics/regionostergotland.png" class="logo" alt="Region Östergötland, logotyp" />
          </a>
          <p>
            Region Östergötland leder det regionala utvecklingsarbetet för en långsiktig och hållbar utveckling i regionen genom sitt ansvar för regionala uppgifter och uppdraget att genomföra åtgärder inom områden som samhällsbyggnad, kompetensförsörjning, företagande, besöksnäring, kultur, folkbildning och folkhälsa.
          </p>

          <h3>
            Stort tack till:
          </h3>

          <br />

          <div class="logos">

            <a href="https://www.arbetetsmuseum.se" target="_blank">
              <img src="@/assets/graphics/arbetetsmuseum.png" class="logo sameWidth" alt="Arbetets Museum, logotyp"/>
            </a>

            <a href="https://www.liuinnovation.se/" target="_blank">
              <img src="@/assets/graphics/liuinnovation.png" class="logo sameWidth" alt="LiU Innovation, logotyp"/>
            </a>
          </div>

        </div>

      </div>

      <div slot="right" class="right">
        <h3>
          Datum: 13 maj 2019
          <br />
          Plats: Arbetets Museum, Norrköping
        </h3>
        <br />
        <a href="https://forms.gle/CoJrVDAPCqPxoLUA6" target="_blank" class="register">
          Ansök till MIK-jam!
        </a>
        <span class="small">
          ...så snart som möjligt, senast 18/4!
        </span>

        <p>
          <h4>MIK-jam på Facebook</h4>

          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMIK-jam-716220465446616%2F%3Fmodal%3Dadmin_todo_tour&tabs=events&width=250&height=310&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1196347747065674" width="250" height="310" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" class="fb"></iframe>
        </p>



      </div>

    </three-cols>




  </div>
</template>

<script>

import { store } from '@/store';

import ThreeCols from '@/components/ThreeCols'
import MoreInfo from '@/components/MoreInfo'
import ShortInfo from '@/components/ShortInfo'
import WhyParticipate from '@/components/WhyParticipate'
import Theme from '@/components/themes/Theme'
import WordSwap from '@/components/WordSwap'
import InfoCircle from '@/components/InfoCircle'

export default {
  name: 'Landing',
  components: {
    ThreeCols,
    MoreInfo,
    ShortInfo,
    WhyParticipate,
    Theme,
    WordSwap,
    InfoCircle
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
    store.commit('init',{});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Landing {
  background-image: linear-gradient(to bottom right, Pink, LightSkyBlue);
  padding: 20px;
}

.section {
  background: white;
  padding: 10px;
  box-shadow: 5px 5px 0 pink;
  word-break: normal;
}

.pitchRadios{
  background: LightSkyBlue;
  padding: 10px;
  margin-bottom: 20px;
}

.pitchRadios label{
  margin: 0px 0px 0px 10px;
  cursor: pointer;
}

.circle{
  margin-right: 20px;
}

.left, .right{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: sticky;
  top: 0px;
  padding: 20px;
}

.anchor{
  font-size: 1.1em;
  color: black;
  display: block;
}

.register{
  padding: 20px;
  background: white;
  border-radius: 10px;
  font-size: 1.5em;
  font-family: "Roboto Condensed";
  cursor: pointer;
  box-shadow: 5px 5px 0px pink;
  color: salmon;
  text-decoration: none;
  display: block;
  margin: 5px 0 10px 0;
  text-align: center;
}

.register:hover{
  background: salmon;
  color: white;
  box-shadow: 5px 5px 0px white;
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

.logos{
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.logos .logo{
  margin-right: 50px;
}

.logo{
  height: 50px;
}

.logo.sameWidth{
  width: 100px;
  height: auto;
}

img{
  max-width: 100%;
}



.fb{
}

</style>
