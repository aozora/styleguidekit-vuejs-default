<template>
  <ol class="sg-nav" id="pl-pattern-nav-target">
    <li v-for="patternType in patternTypes">
      <a class="sg-acc-handle">{{ patternType.patternTypeUC }}</a>
      <ol class="sg-acc-panel">
        <li v-for="patternTypeItem in patternType.patternTypeItems">
          <a class="sg-acc-handle">{{ patternTypeItem.patternSubtypeUC }}</a>
          <ol class="sg-acc-panel sg-sub-nav">

            <li v-for="patternSubtypeItem in patternTypeItem.patternSubtypeItems">
              <a v-bind:href="getPatternUrl(patternSubtypeItem.patternPath)"
                 class="sg-pop"
                 v-bind:class="{'sg-pattern-state': patternSubtypeItem.patternState }"
                 v-bind:data-patternpartial="patternSubtypeItem.patternPartial">
                {{patternSubtypeItem.patternName}}
              </a>
            </li>

          </ol>
        </li>

        <li v-for="patternItem in patternType.patternItems">
          <a v-bind:href="getPatternUrl(patternItem.patternPath)"
             class="sg-pop"
             v-bind:class="{'sg-pattern-state': patternItem.patternState}"
             v-bind:data-patternpartial="patternItem.patternPartial">
            {{ patternItem.patternName }}
          </a>
        </li>
      </ol>
    </li>

    <li v-if="ishControlsHide && ishControlsHide['views-all'] === false">
      <a href="styleguide/html/styleguide.html" class="sg-pop" data-patternpartial="all">All</a>
    </li>
  </ol>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'PatternNav',

    computed: {
      ...mapState(
        [
          'patternTypes',
          'ishControlsHide'
        ]
      )

      // patternTypes() {
      //   return this.$store.navItems ? this.$store.navItems.patternTypes : [];
      // },
      //
      // ishControlsHide() {
      //   return this.$store.navItems ? this.$store.navItems.ishControlsHide : {};
      // }
    },

    methods: {
      getPatternUrl(patternPath) {
        return `patterns/${patternPath}`;
      }
    }
  }
  ;
</script>
