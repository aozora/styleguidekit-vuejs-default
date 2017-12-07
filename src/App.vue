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
      const patternData = {};
      patternData.config = window.config;
      patternData.ishControls = window.ishControls;
      patternData.navItems = window.navItems;
      patternData.patternPaths = window.patternPaths;
      patternData.viewAllPaths = window.viewAllPaths;
      patternData.plugins = window.plugins;
      patternData.defaultShowPatternInfo = window.defaultShowPatternInfo;
      patternData.defaultPattern = window.defaultPattern;

      this.$store.dispatch('SETUP', patternData);
    }
  };
</script>
