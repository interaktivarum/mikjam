<template>
  <div class="Theme">

    <!--info-circle :content="index" class="circle"></info-circle-->



    <div class="cols">

      <div>

        <h3 class="header">
          {{theme.name}}
        </h3>

        <p class="description">
          {{theme.description}}
        </p>

      </div>

      <iframe width="560" height="215" :src="'https://www.youtube.com/embed/'+theme.youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>

    <div class="challenges">
      <challenges :challenges="theme.challenges"></challenges>
    </div>

    <div v-if="theme.mil">
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
    milStr: function () {

    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.Theme{
  margin-bottom: 10px;
}

.index{
  border-radius: 50%;
  font-size: 1.5em;
  background: LightSkyBlue;
  box-shadow: 5px 5px 0 pink;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
}

.header{
  display: inline;
}

.cols{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cols *{
  flex: 0 0 49%;
}

.description{
}

</style>
