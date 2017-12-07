<template>
  <ol class="sg-nav" id="pl-pattern-nav-target">
    <li v-for="patternType in navItems.patternTypes">
      <a class="sg-acc-handle">{{ patternType.patternTypeUC }}</a>
      <ol class="sg-acc-panel">
        <li v-for="patternTypeItem in patternType.patternTypeItems">
          <a class="sg-acc-handle">{{ patternTypeItem.patternSubtypeUC }}</a>
          <ol class="sg-acc-panel sg-sub-nav">

            <li v-for="patternSubtypeItem in patternTypeItem.patternSubtypeItems">
              <a v-bind:href="getPatternUrl(patternSubtypeItem.patternPath)"
                 v-on:click.prevent="selectPattern(patternSubtypeItem.patternPartial)"
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

    <li v-if="navItems.ishControlsHide && navItems.ishControlsHide['views-all'] === false">
      <a href="styleguide/html/styleguide.html" class="sg-pop" data-patternpartial="all">All</a>
    </li>
  </ol>
</template>

<script>
  import { mapState } from 'vuex';
  import urlHandler from '../api/url-handler';

  export default {
    name: 'PatternNav',

    computed: {
      ...mapState(
        [
          'navItems'
        ]
      )
    },

    methods: {
      getPatternUrl(patternPath) {
        return `patterns/${patternPath}`;
      },

      selectPattern(patternPartial) {
        // update the iframe with the source from clicked element in pull down menu. also close the menu
        // having it outside fixes an auto-close bug i ran into
        // update the iframe via the history api handler
        const obj = JSON.stringify({
          event: 'patternLab.updatePath',
          path: urlHandler.getFileName(patternPartial)
        });

        document.getElementById('sg-viewport').contentWindow.postMessage(obj, urlHandler.targetOrigin);

        // closePanels();
      }
    }
  };
</script>
