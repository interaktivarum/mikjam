<template>
  <div class="Challenges">

    <transition name="fade">
      <div :key="challenge">
        {{challenge}}
      </div>
    </transition>

  </div>
</template>

<script>

//import { store } from '@/store';
//import Component from '@/components/Component'

export default {
  name: 'Challenges',
  /*components: {
    Component
  },*/
  data () {
    return {
      id: -1,
      counter: 0,
      hide: false
    }
  },
  props: {
    challenges: ""
  },
  computed: {
    challenge: function () {
      return this.hide ? "" : this.challenges[this.id]
    },
    width: function () {
      return (10000-this.counter) / 100;
    }
  },
  methods: {
    nextChallenge: function () {
      this.id = (this.id+1) % this.challenges.length;
      this.counter = 10000;
      this.hide = false;
      setTimeout(this.hideChallenge,10000);
    },
    hideChallenge: function () {
      this.hide = true;
      setTimeout(this.nextChallenge,1000);
    },
    count: function () {
      this.counter -= 10;
      if(this.counter <= 0){
        this.nextChallenge();
      }
    }
  },
  created: function () {
    this.nextChallenge();
    //setInterval(this.count, 10);
  }
}
</script>

<style scoped>

.Challenges{
  height: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  color: Salmon;
  font-family: "Roboto Condensed";
}

.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
