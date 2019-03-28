<template>
  <div class="ThreeCols">

    <div class="left">
      <slot name="left">
      </slot>
    </div>
    <div class="center">
      <slot name="default">
      </slot>
    </div>
    <div class="right">
      <slot name="right">
      </slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ThreeCols',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ThreeCols{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
}

.left, .right{
  flex: 1 0 0;
}

.center{
  flex: 0 1 800px;
}

</style>
