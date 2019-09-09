<template>
  <div class="Group">

    <h4>
      {{group.name}}
    </h4>

    <div class="cols">



    <div ref="mediaContainer" class="mediaContainer">
      <iframe :width="mediaWidth" :height="mediaHeight" :src="'https://www.youtube.com/embed/'+group.youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div>


      <div>
        <div v-for="person in group.people">
          <span class="semibold">{{person.name}}</span>, {{person.from}}
        </div>
      </div>

      <p v-if="group.urls">
        <strong>Externa länkar</strong>
        <a :href="url" target="_blank" v-for="url in group.urls">{{url}}</a>
      </p>

      <p>
        <strong>Licens:</strong> gruppens resultat är publicerat under <a :href="group.licence.url" target="_blank">{{group.licence.name}}</a>.
      </p>

    </div>
    </div>

  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'Group',
  components: {
  },
  data () {
    return {
      mediaWidth: "",
      mediaHeight: ""
    }
  },
  props: {
    group: ""
  },
  computed: {
  },
  methods: {
    calcMediaDim: function () {
      this.mediaWidth = this.$refs["mediaContainer"].offsetWidth;
      this.mediaHeight = this.mediaWidth / 16 * 9;
    }
  },
  mounted: function () {
    this.calcMediaDim();
  }
}
</script>

<style scoped>

.Group{
}

.mediaContainer {
  max-width: 400px;
}

embed,
iframe,
object {
  min-width: 200px;
  width: 100%;
}

</style>
