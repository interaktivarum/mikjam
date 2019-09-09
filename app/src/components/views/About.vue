<template>
  <div class="About">

    <h2 id="kontakt">Om MIK-jam</h2>
    <div class="section">

      <p>
        MIK-jam är ett initiativ av <a href="https://interaktivarum.se" target="_blank">Interaktiva rum</a>, <a href="http://www.edvira.com" target="_blank">Edvira</a>, <a href="http://www.filmiost.se" target="_blank">Film i Öst</a> och <a href="https://www.regionostergotland.se" target="_blank">Region Östergötland</a>, som tidigare arbetat inom olika MIK-områden såsom digital källkritik, filmpedagogik och programmering i skolan.
      </p>

      <p>
        MIK berör alla i samhället. Såväl privatpersoner som offentliga och privata aktörer behöver dagligen hantera och värdera stora mängder information i såväl analoga som digitala kanaler. Idén om att anordna ett första MIK-jam 2019 uppstod ur förståelsen att vi alla har olika behov av nya MIK-relaterade kompetenser, samt ur insikten att någon annan ofta besitter denna kunskap och erfarenhet. En vision uppstod att låta olika aktörer träffas, arbeta tillsammans och lära av varandra - en slags matchmaking på temat MIK.
      </p>

      <p>
        Det första MIK-jammet ägde rum i Arbetets Museum i Norrköping maj 2019. Alla var välkomna att ansöka och bland särskilt inbjudna fanns bibliotekspersonal, pedagoger, journalister och universitetsstudenter. Totalt deltog nära 40 personer som under en heldag designade och utvecklade nio demokratifrämjande koncept och prototyper.
      </p>

    </div>

    <h2 id="kontakt">Jag vill anordna ett MIK-jam</h2>
    <div class="section">
      <p>
        Vad kul! MIK-jam är ett öppet koncept och metod som är fri att kopiera eller inspireras av.
      </p>

      <p>
         Under <router-link :to="{ name: 'Jams', params: {} }">Genomförda jams</router-link> finns länkar till den planering, upplägg och praktisk information som har delats ut till deltagarna inför respektive jam. Dokumenten innehåller mycket matnyttig information för att hjälpa er komma igång.
      </p>

      <p>
        Vid önskan eller behov finns vi tillgängliga att hjälpa till med att anordna ditt event. Vi kan assistera med alltifrån planering och deltagarrekrytering till att medverka under eventet med föreläsningar och experthjälp. Tveka inte att kontakta oss för mer information.
      </p>
    </div>

    <h2 id="kontakt">Kontakt</h2>
    <div class="section">

      <div class="cols">

        <contact-person name="Martin Törnros" role="MIK- & innehållsansvarig" email="martin@interaktivarum.se" phone="0702-800054" img="/static/graphics/people/martintornros.jpg"></contact-person>

        <contact-person name="Marcus Nygren" role="Projektledare" email="marcus@edvira.se" phone="0727-453337" img="/static/graphics/people/marcusnygren.jpg"></contact-person>

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

    </div>

  </div>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'
import ContactPerson from '@/components/ContactPerson'

export default {
  name: 'About',
  components: {
    ContactPerson
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

.About{
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

</style>
