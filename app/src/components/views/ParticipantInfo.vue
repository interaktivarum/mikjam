<template>
  <div class="ParticipantInfo">

    <three-cols>

      <div>

        <h2>Deltagarinfo och bra-att-ha!</h2>

        <div class="section">
          <p>
            Praktiskt <a href="https://docs.google.com/document/d/1-c5U8g92rXNUBEDvOgmhkGc6jce5Fbu6GsSIJdFai8k/edit?usp=sharing" target="_blank">Google-dokument med deltagarinfo</a> inför och under MIK-jam.
          </p>

          <p>
            Den mesta informationen gällande MIK-jam kommer att presenteras under dagen. Google-dokumentet kan vara bra att luta sig tillbaka mot, om det är någon särskild information som du letar efter.
          </p>

          <p>
            Dokumentet kan komma att uppdateras under dagen. Saknar du någon information? Maila till marcus@edvira.com eller ta   kontakt med någon av oss under dagen.
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
  name: 'ParticipantInfo',
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

.ParticipantInfo {
  background-image: linear-gradient(to bottom right, Pink, LightSkyBlue);
  padding: 20px;
}


</style>
