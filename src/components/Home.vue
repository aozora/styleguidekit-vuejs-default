<template>
  <div>
    <!--Style Guide Header-->
    <header class="sg-header" role="banner">
      <a href="#sg-nav-container" class="sg-nav-toggle" v-on:click.prevent="toggleMenu">Menu</a>
      <div class="sg-nav-container" id="sg-nav-container">
        <!-- pattern lab nav will be inserted here -->
        <!--<pattern-nav></pattern-nav>-->
        <div class="sg-controls" id="sg-controls">
          <!-- ish Controls will be inserted here -->
          <!--<ish-control></ish-control>-->
        </div>
      </div>
    </header>
    <!--End Style Guide Header-->

    <!-- iFrame -->
    <div id="sg-vp-wrap">
      <div id="sg-cover"></div>
      <div id="sg-gen-container">
        <iframe id="sg-viewport" name="sg-viewport" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
        <div id="sg-rightpull-container">
          <div id="sg-rightpull"></div>
        </div>
      </div>
    </div>
    <!--end iFrame-->

    <!--<modal-viewer></modal-viewer>-->

  </div>
</template>

<script>
import { mapState } from 'vuex';
import $ from 'jquery';
import PatternNav from './PatternNav';
import IshControl from './IshControl';
import urlHandler from '../api/url-handler';
import ModalViewer from './ModalViewer';

export default {
  name: 'Home',

  components: {
    ModalViewer,
    IshControl,
    PatternNav
  },

  // eslint-disable-next-line object-shorthand,func-names
  data: function () {
    return {
      sw: document.body.clientWidth, // Viewport Width
      sh: $(document).height(), // Viewport Height

      minViewportWidth: 240,
      maxViewportWidth: 2600,

      viewportResizeHandleWidth: 14, // Width of the viewport drag-to-resize handle
      $sgViewport: $('#sg-viewport'), // Viewport element
      $sizePx: $('.sg-size-px'), // Px size input element in toolbar
      $sizeEms: $('.sg-size-em'), // Em size input element in toolbar
      $bodySize: parseInt($('body').css('font-size'), 10), // Body size of the document,
      $headerHeight: $('.sg-header').height(),
      discoID: false,
      discoMode: false,
      fullMode: true,
      hayMode: false
    };
  },

  computed: {
    ...mapState([
      'config'
    ])
  },

  methods: {
    toggleMenu() {
      $('.sg-nav-container').toggleClass('active');
    }
  },

  // eslint-disable-next-line func-names,object-shorthand
  mounted: function () {
    // get the request vars
    const oGetVars = urlHandler.getRequestVars();

    const baseIframePath = `${window.location.protocol}//${window.location.host}${window.location.pathname.replace('index.html', '')}`;
    let iFramePath = `${baseIframePath}styleguide/html/styleguide.html?${Date.now()}`;
    let patternName = ((this.$store.state.defaultPattern !== undefined) && (typeof this.$store.state.defaultPattern === 'string') && (this.$store.state.defaultPattern.trim().length > 0)) ? this.$store.state.defaultPattern : 'all';

    if ((oGetVars.p !== undefined) || (oGetVars.pattern !== undefined)) {
      patternName = (oGetVars.p !== undefined) ? oGetVars.p : oGetVars.pattern;
    }

    let patternPath;
    if (patternName !== 'all') {
      patternPath = urlHandler.getFileName(patternName);
      iFramePath = (patternPath !== '') ? `${baseIframePath}${patternPath}?${Date.now()}` : iFramePath;
      document.getElementById('title').innerHTML = `Pattern Lab - ${patternName}`;
      window.history.replaceState({ pattern: patternName }, null, null);
    }

    document.getElementById('sg-viewport').contentWindow.location.replace(iFramePath);


    // Viewport Height

    // set minimum and maximum viewport based on config
    if (this.config.ishMinimum !== undefined) {
      // eslint-disable-next-line prefer-destructuring
      this.minViewportWidth = parseInt(this.config.ishMinimum, 10); // Minimum Size for Viewport
    }
    if (this.config.ishMaximum !== undefined) {
      // eslint-disable-next-line prefer-destructuring
      this.maxViewportWidth = parseInt(this.config.ishMaximum, 10); // Maxiumum Size for Viewport
    }

    // alternatively, use the ishViewportRange object
    if (this.config.ishViewportRange !== undefined) {
      // eslint-disable-next-line prefer-destructuring
      this.minViewportWidth = this.config.ishViewportRange.s[0];
      // eslint-disable-next-line prefer-destructuring
      this.maxViewportWidth = this.config.ishViewportRange.l[1];
    }

    // Body size of the document,
    this.$bodySize = (this.config.ishFontSize !== undefined) ? parseInt(this.config.ishFontSize, 10) : parseInt($('body').css('font-size'), 10);
  }
};
</script>
