<template>
  <span class="WordSwap">
    <span class="word">{{word}}</span>
  </span>
</template>

<script>

//import Component from '@/components/Component'

export default {
  name: 'WordSwap',
  /*components: {
    Component
  },*/
  data () {
    return {
      wordId: -1,
      letterId: 0,
      word: "",
    }
  },
  props: {
    words: ""
  },
  computed: {
    maxLength: function () {
      return this.words.sort(function (a, b) { return b.length - a.length; })[0].length;
    }
  },
  methods: {
    nextWord: function () {
      this.word = "";
      this.wordId = (this.wordId+1) % this.words.length;
      this.letterId = 0;
      //this.letterInterval = setTimeout(this.addLetter,500);
      this.addLetter();
    },
    addLetter: function () {
      let w = this.words[this.wordId];
      this.word += w[this.letterId];
      this.letterId++;
      if(this.letterId < w.length){
        setTimeout(this.addLetter,100);
      }
      else{
        //setTimeout(this.nextWord,5000+Math.random()*10000);
        setTimeout(this.removeLetter,5000);
      }
    },
    removeLetter: function () {
      this.word = this.word.slice(0, -1);
      if(this.word.length == 0){
        setTimeout(this.nextWord,500);
      }
      else{
        setTimeout(this.removeLetter,50);
      }
    }
  },
  mounted: function () {
    this.nextWord();
  }
}
</script>

<style scoped>

.WordSwap{
}

.word{
  text-decoration: underline;
}

</style>
