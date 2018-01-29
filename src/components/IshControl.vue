<template>
  <div class="sg-control-content">
    <ul class="sg-control">
      <li class="sg-size">
        <div class="sg-current-size">
          <form id="sg-form">
            <label for="sg-size-px">Size</label>
            <input type="text" class="sg-input sg-size-px" id="sg-size-px" value="---">px /
            <input type="text" class="sg-input sg-size-em" value="---">em
          </form><!--end #sg-form-->
        </div><!--end #sg-current-size-->

        <ul class="sg-size-options">
          <li v-if="!ishControls.ishControlsHide.s">
            <a href="#" id="sg-size-s">S</a>
          </li>

          <li v-if="!ishControls.ishControlsHide.m">
            <a href="#" id="sg-size-m">M</a>
          </li>

          <li v-if="!ishControls.ishControlsHide.l">
            <a href="#" id="sg-size-l">L</a>
          </li>

          <li v-if="!ishControls.ishControlsHide.full">
            <a href="#" id="sg-size-full">Full</a>
          </li>

          <li v-if="!ishControls.ishControlsHide.random">
            <a href="#" id="sg-size-random">Rand</a>
          </li>

          <li v-if="!ishControls.ishControlsHide.disco">
            <a href="#" class="mode-link" id="sg-size-disco">Disco</a>
          </li>

          <li v-if="!ishControls.ishControlsHide.hay">
            <a href="#" class="mode-link" id="sg-size-hay">Hay!</a>
          </li>
        </ul>
      </li>

      <li v-if="!ishControls.ishControlsHide['tools-all']" class="sg-tools">
        <button v-on:click.prevent="togglePanel" class="sg-acc-handle sg-tools-toggle" id="sg-tools-toggle" title="Tools">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
            <title>Pattern Lab Tools</title>
            <path fill="#808080" d="M12.767 8.343c-0.735-1.272-0.293-2.903 0.986-3.643l-1.376-2.383c-0.393 0.23-0.85 0.363-1.338 0.363-1.47 0-2.662-1.2-2.662-2.68h-2.752c0.004 0.457-0.11 0.92-0.355 1.343-0.735 1.272-2.367 1.705-3.649 0.967l-1.376 2.383c0.396 0.225 0.739 0.555 0.983 0.977 0.733 1.27 0.294 2.897-0.98 3.64l1.376 2.383c0.392-0.228 0.847-0.359 1.332-0.359 1.466 0 2.654 1.192 2.662 2.665h2.752c-0.001-0.452 0.113-0.91 0.355-1.329 0.733-1.27 2.362-1.703 3.642-0.971l1.376-2.383c-0.393-0.225-0.734-0.554-0.977-0.974zM7 9.835c-1.566 0-2.835-1.269-2.835-2.835s1.269-2.835 2.835-2.835c1.566 0 2.835 1.269 2.835 2.835s-1.269 2.835-2.835 2.835z"></path>
          </svg>
        </button>

        <ul class="sg-acc-panel sg-right sg-checklist">
          <li>
            <a v-on:click.prevent="togglePatternInfo" id="sg-t-patterninfo">Show Pattern Info</a>
          </li>

          <li v-if="!ishControls.ishControlsHide['views-new']">
            <a href="#" target="_blank" id="sg-raw">Open in new window</a>
          </li>

          <li v-if="!ishControls.ishControlsHide['tools-docs']">
            <a href="http://patternlab.io/docs/" target="_blank">Pattern Lab Docs</a>
          </li>

          <li v-if="!ishControls.ishControlsHide.find" id="sg-find">
            <input class="typeahead" id="typeahead" type="text" placeholder="Find pattern"/>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'IshControl',

  computed: {
    ...mapState([
      'ishControls',
      'showPatternInfo'
    ])
  },

  methods: {
    ...mapActions([
      'togglePatternInfo'
    ]),


    togglePanel($event) {
      const $this = $($event.target);
      const $panel = $this.next('.sg-acc-panel');
      // const subnav = $this.parent().parent().hasClass('sg-acc-panel');

      // // Close other panels if link isn't a subnavigation item
      // if (!subnav) {
      //   $('.sg-acc-handle').not($this).removeClass('active');
      //   $('.sg-acc-panel').not($panel).removeClass('active');
      // }

      // Activate selected panel
      $this.toggleClass('active');
      $panel.toggleClass('active');
      // this.setAccordionHeight();
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
