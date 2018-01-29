<template>
  <ol class="sg-nav" id="pl-pattern-nav-target">
    <li v-if="navItems.patternTypes && navItems.patternTypes.length > 0"
        v-for="patternType in navItems.patternTypes"
        :key="patternType.patternTypeLC">
      <a v-on:click.prevent="toggleAccordion" class="sg-acc-handle">{{ patternType.patternTypeUC }}</a>
      <ol class="sg-acc-panel">
        <li v-for="patternTypeItem in patternType.patternTypeItems" :key="patternTypeItem.patternSubtypeLC">
          <a v-on:click.prevent="toggleAccordion" class="sg-acc-handle">{{ patternTypeItem.patternSubtypeUC }}</a>
          <ol class="sg-acc-panel sg-sub-nav">

            <li v-for="(patternSubtypeItem, subIndex) in patternTypeItem.patternSubtypeItems" :key="subIndex">
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

        <li v-for="patternItem in patternType.patternItems" :key="patternItem.patternPartial">
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
import $ from 'jquery';
import urlHandler from '../api/url-handler';

export default {
  name: 'PatternNav',

  computed: {
    ...mapState([
      'navItems'
    ])
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

      // eslint-disable-next-line no-console
      // console.dir(obj);

      // eslint-disable-next-line no-console
      console.log(`urlHandler.targetOrigin: ${urlHandler.targetOrigin}`);

      document.getElementById('sg-viewport').contentWindow.postMessage(obj, urlHandler.targetOrigin);

      // closePanels();
    },

    toggleAccordion($event) {
      const $this = $($event.target);
      const $panel = $this.next('.sg-acc-panel');
      const subnav = $this.parent().parent().hasClass('sg-acc-panel');

      // Close other panels if link isn't a subnavigation item
      if (!subnav) {
        $('.sg-acc-handle').not($this).removeClass('active');
        $('.sg-acc-panel').not($panel).removeClass('active');
      }

      // Activate selected panel
      $this.toggleClass('active');
      $panel.toggleClass('active');
      this.setAccordionHeight();
    },

    // Accordion Height
    setAccordionHeight() {
      const $activeAccordion = $('.sg-acc-panel.active').first();
      // const accordionHeight = $activeAccordion.height(); // this is unused.... !?
      const availableHeight = $(document).height() - $('.sg-header').height(); // Screen height minus the height of the header

      $activeAccordion.height(availableHeight); // Set height of accordion to the available height
    }
  }
};
</script>
