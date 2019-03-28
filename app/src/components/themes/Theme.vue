<template>
  <div class="Theme">

    <h3 class="header">
      {{theme.name}}
    </h3>

    <p class="description">
      {{theme.description}}
    </p>

    <div class="cols">

      <div ref="mediaContainer">
        <iframe :width="mediaWidth" :height="mediaHeight" :src="'https://www.youtube.com/embed/'+theme.youtube.id" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>

      <p class="mediaDesc">
        <strong>Exempelresultat:</strong> {{theme.youtube.description}}
      </p>

    </div>

    <h4>Utmaningar & frågeställningar</h4>
    <ul class="challengesList">
      <li v-for="challenge in theme.challenges">
        {{challenge}}
      </li>
    </ul>

    <div v-if="theme.mil" class="screenLarge">
      <literacy v-for="(literacy, key) in mil" :literacy="literacy" :inactive="theme.mil.indexOf(key) == -1">
      </literacy>
    </div>

  </div>
</template>

<script>

import { store } from '@/store';
import Challenges from '@/components/themes/Challenges'
import Literacy from '@/components/themes/Literacy'
import InfoCircle from '@/components/InfoCircle'

export default {
  name: 'Theme',
  components: {
    Challenges,
    Literacy,
    InfoCircle
  },
  data () {
    return {
      mediaWidth: "",
      mediaHeight: ""
    }
  },
  props: {
    theme: "",
    index: ""
  },
  computed: {
    mil: function () {
      return store.state.mil;
    },
    youtubeWidth: function () {
    }
  },
  methods: {
    calcMediaDim: function () {
      this.mediaWidth = this.$refs["mediaContainer"].offsetWidth;
      this.mediaHeight = this.mediaWidth / 16 * 9;
      console.log(this.mediaWidth)
    }
  },
  mounted: function () {
    this.calcMediaDim();
  }
}
</script>

<style scoped>

.Theme{
  margin-bottom: 10px;
}

.header{
  display: inline;
}

.description{
}

.challengesList{
  font-weight: 400;
}

.challengesList li{
  margin-bottom: 5px;
}

.challengesList li:hover{
  color: Salmon;
}

.cols{
  margin: 20px 0 20px 0;
  padding: 10px;
  align-items: center;
  background: pink;
}

embed,
iframe,
object {
  min-width: 200px;
  max-width: 100%;
}

.mediaDesc{
  margin-left: 10px;
}

</style>
