<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',

  /**
   * Add the PatternLab config to the store
   */
  created() {
    this.$store.dispatch('setup');
  }
};
</script>

<style lang="scss">
  @import 'assets/scss/styleguide.scss';
</style>
