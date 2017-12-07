<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
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
      this.$store.dispatch('SETUP');
    }
  };
</script>
