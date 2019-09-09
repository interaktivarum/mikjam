<template>
  <div class="ContactPerson">
    <h3>{{role}}, {{name}}</h3>
    <p>
      E-post: <a :href="email">{{email}}</a>
      <br />
      Telefon: {{phone}}
    </p>
    <img :src="img" :alt="name + ', ' + role"/>
  </div>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'

export default {
  name: 'ContactPerson',
  /*components: {
    Component
  },*/
  data () {
    return {
    }
  },
  props: {
    name: "",
    role: "",
    email: "",
    phone: "",
    img: ""
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

.ContactPerson{
}

img{
  max-width: 100%;
}

</style>
