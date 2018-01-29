<template>
  <div id="sg-modal-container" class="sg-modal anim-ready" style="bottom: -2000px">

    <!-- modal close btn -->
    <button id="sg-modal-close-btn" class="sg-modal-close-btn" title="Hide pattern info">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" viewBox="0 0 12 12">
        <title>Close</title>
        <path fill="#808080" d="M11.8905,9.6405 L11.8905,9.6405 L8.25,6 L11.8905,2.3595 L11.8905,2.3595 C11.9295,2.3205 11.958,2.27475 11.976,2.226 C12.0255,2.0925 11.997,1.9365 11.8905,1.82925 L10.17075,0.1095 C10.0635,0.00225 9.9075,-0.02625 9.774,0.024 C9.72525,0.042 9.6795,0.0705 9.6405,0.1095 L9.6405,0.1095 L6,3.75 L2.3595,0.1095 L2.3595,0.1095 C2.3205,0.0705 2.27475,0.042 2.226,0.024 C2.0925,-0.0255 1.9365,0.00225 1.82925,0.1095 L0.1095,1.82925 C0.00225,1.9365 -0.02625,2.0925 0.024,2.226 C0.042,2.27475 0.0705,2.3205 0.1095,2.3595 L0.1095,2.3595 L3.75,6 L0.1095,9.6405 L0.1095,9.6405 C0.0705,9.6795 0.042,9.72525 0.024,9.774 C-0.0255,9.9075 0.00225,10.0635 0.1095,10.17075 L1.82925,11.8905 C1.9365,11.99775 2.0925,12.02625 2.226,11.976 C2.27475,11.958 2.3205,11.9295 2.3595,11.8905 L2.3595,11.8905 L6,8.25 L9.6405,11.8905 L9.6405,11.8905 C9.6795,11.9295 9.72525,11.958 9.774,11.976 C9.9075,12.0255 10.0635,11.99775 10.17075,11.8905 L11.8905,10.17075 C11.99775,10.0635 12.02625,9.9075 11.976,9.774 C11.958,9.72525 11.9295,9.6795 11.8905,9.6405 L11.8905,9.6405 Z"></path>
      </svg>
    </button><!--end .sg-modal-close-btn-->

    <div id="sg-modal-content" class="sg-modal-content"></div><!--end .sg-modal-content-->

  </div><!--end .sg-modal-->
</template>

<script>
import { mapState } from 'vuex';
import $ from 'jquery';
import urlHandler from '../api/url-handler';
import DataSaver from '../api/data-saver';
import panelsViewer from '../api/panels-viewer';

export default {
  name: 'ModalViewer',

  data: () => ({
    // set up some defaults
    active: false,
    switchText: true,
    template: 'info',
    patternData: {},
    targetOrigin: (window.location.protocol === 'file:') ? '*' : `${window.location.protocol}//${window.location.host}`
  }),

  computed: {
    ...mapState([
      'config'
    ])
  },

  watch: {
    '$store.state.showPatternInfo': () => {
      $('#sg-tools-toggle').removeClass('active');
      $('#sg-t-patterninfo').parents('ul').removeClass('active');

      this.toggle();
    }
  },

  methods: {
    /**
     * initialize the modal window
     */
    onReady() {
      // eslint-disable-next-line no-console
      console.log('ModalViewer: onReady()');

      // make sure the listener for checkpanels is set-up
      // Dispatcher.addListener('insertPanels', modalViewer.insert);

      // watch for resizes and hide the modal container as appropriate when the modal is already hidden
      $(window).on('resize', () => {
        if (DataSaver.findValue('modalActive') === 'false') {
          this.slide($('#sg-modal-container').outerHeight());
        }
      });

      // // add the info/code panel onclick handler
      // $('#sg-t-patterninfo').click((e) => {
      //   e.preventDefault();
      //   $('#sg-tools-toggle').removeClass('active');
      //   $(e.target).parents('ul').removeClass('active');
      //
      //   this.toggle();
      // });

      // make sure the close button handles the click
      $('#sg-modal-close-btn').on('click', (e) => {
        e.preventDefault();

        // hide any open annotations
        const obj = JSON.stringify({ event: 'patternLab.annotationsHighlightHide' });
        document.getElementById('sg-viewport').contentWindow.postMessage(obj, this.targetOrigin);

        // hide the viewer
        this.close();
      });

      // see if the modal is already active, if so update attributes as appropriate
      if (DataSaver.findValue('modalActive') === 'true') {
        this.active = true;
        $('#sg-t-patterninfo').html('Hide Pattern Info');
      }

      // make sure the modal viewer is not viewable, it's alway hidden by default. the pageLoad event determines when it actually opens
      this.hide();

      // review the query strings in case there is something the modal viewer is supposed to handle by default
      const queryStringVars = urlHandler.getRequestVars();

      // show the modal if code view is called via query string
      if ((queryStringVars.view !== undefined) && ((queryStringVars.view === 'code') || (queryStringVars.view === 'c'))) {
        this.queryPattern();
      }

      // show the modal if the old annotations view is called via query string
      if ((queryStringVars.view !== undefined) && ((queryStringVars.view === 'annotations') || (queryStringVars.view === 'a'))) {
        this.queryPattern();
      }
    },


    /**
     * toggle the modal window open and closed
     */
    toggle() {
      if (this.active === false) {
        this.queryPattern();
      } else {
        const obj = JSON.stringify({ event: 'patternLab.annotationsHighlightHide' });
        document.getElementById('sg-viewport').contentWindow.postMessage(obj, this.targetOrigin);
        this.close();
      }
    },

    /**
     * open the modal window
     */
    open() {
      // make sure the modal viewer and other options are off just in case
      this.close();

      // note it's turned on in the viewer
      DataSaver.updateValue('modalActive', 'true');
      this.active = true;

      // add an active class to the button that matches this template
      $(`#sg-t-${this.template} .sg-checkbox`).addClass('active');

      // Add active class to modal
      $('#sg-modal-container').addClass('active');

      // show the modal
      this.show();
    },

    /**
     * close the modal window
     */
    close() {
      // not that the modal viewer is no longer active
      DataSaver.updateValue('modalActive', 'false');
      this.active = false;

      // Add active class to modal
      $('#sg-modal-container').removeClass('active');

      // remove the active class from all of the checkbox items
      $('.sg-checkbox').removeClass('active');

      // hide the modal
      this.hide();

      // update the wording
      $('#sg-t-patterninfo').html('Show Pattern Info');

      // tell the styleguide to close
      const obj = JSON.stringify({ event: 'patternLab.patternModalClose' });
      document.getElementById('sg-viewport').contentWindow.postMessage(obj, this.targetOrigin);
    },

    /**
     * hide the modal window, add 30px to account for the X box
     */
    hide() {
      this.slide($('#sg-modal-container').outerHeight() + 30);
    },

    /**
     * insert the copy for the modal window. if it's meant to be sent back to the iframe do do
     * @param  {String}    templateRendered   the rendered template that should be inserted
     * @param  {String}    patternPartial   the patternPartial that the rendered template is related to
     * @param  {Boolean}   iframePassback   if the refresh is of a view-all view and the content should be sent back
     * @param  {Boolean}   switchText   if the text in the dropdown should be switched
     */
    insert(templateRendered, patternPartial, iframePassback, switchText) {
      if (iframePassback) {
        // send a message to the pattern
        const obj = JSON.stringify({
          event: 'patternLab.patternModalInsert',
          patternPartial,
          modalContent: templateRendered.outerHTML
        });

        document.getElementById('sg-viewport').contentWindow.postMessage(obj, this.targetOrigin);
      } else {
        // insert the panels and open the viewer
        $('#sg-modal-content').html(templateRendered);
        this.open();
      }

      // update the wording unless this is a default viewall opening
      if (switchText === true) {
        $('#sg-t-patterninfo').html('Hide Pattern Info');
      }
    },

    /**
     * refresh the modal if a new pattern is loaded and the modal is active
     * @param  {Object}    patternData   the patternData sent back from the query
     * @param  {Boolean}   iframePassback   if the refresh is of a view-all view and the content should be sent back
     * @param  {Boolean}   switchText   if the text in the dropdown should be switched
     */
    refresh(patternData, iframePassback, switchText) {
      // if this is a styleguide view close the modal
      if (iframePassback) {
        this.hide();
      }

      // gather the data that will fill the modal window
      panelsViewer.gatherPanels(patternData, iframePassback, switchText);
    },


    /**
     * slides the modal window into or out of view
     * @param  {Integer}      where the modal window should be slide to
     */
    slide(pos) {
      const newpos = (pos === 0) ? 0 : -pos;
      $('#sg-modal-container').css('bottom', newpos);
    },

    /**
     * slides the modal window to a particular annotation
     * @param  {Integer}      the number for the element that should be highlighted
     */
    slideToAnnotation(pos) {
      // remove active class
      const els = document.querySelectorAll('#sg-annotations > .sg-annotations-list > li');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < els.length; ++i) {
        els[i].classList.remove('active');
      }

      // add active class to called element and scroll to it
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < els.length; ++i) {
        if ((i + 1) === pos) {
          els[i].classList.add('active');
          $('.sg-pattern-extra-info').animate({ scrollTop: els[i].offsetTop - 10 }, 600);
        }
      }
    },

    /**
     * alias for slide
     */
    show() {
      this.slide(0);
    },

    /**
     * ask the pattern for info so we can open the modal window and populate it
     * @param  {Boolean}      if the dropdown text should be changed
     */
    queryPattern(switchText) {
      // note that the modal is active and set switchText
      if ((switchText === undefined) || (switchText)) {
        // eslint-disable-next-line no-param-reassign
        switchText = true;
        DataSaver.updateValue('modalActive', 'true');
        this.active = true;
      }

      // send a message to the pattern
      const obj = JSON.stringify({ event: 'patternLab.patternQuery', switchText });
      document.getElementById('sg-viewport').contentWindow.postMessage(obj, this.targetOrigin);
    },


    /**
     * toggle the comment pop-up based on a user clicking on the pattern
     * based on the great MDN docs at https://developer.mozilla.org/en-US/docs/Web/API/window.postMessage
     * @param  {Object}      event info
     */
    receiveIframeMessage(event) {
      // does the origin sending the message match the current host? if not dev/null the request
      if ((window.location.protocol !== 'file:') && (event.origin !== `${window.location.protocol}//${window.location.host}`)) {
        return;
      }

      let data = {};
      try {
        // data = (typeof event.data !== 'string') ? event.data : JSON.parse(event.data);
        if (typeof event.data !== 'string') {
          // eslint-disable-next-line prefer-destructuring
          data = event.data;
        } else if (event.data !== '') {
          data = JSON.parse(event.data);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }

      if ((data.event !== undefined) && (data.event === 'patternLab.pageLoad')) {
        if ((this.active === false) &&
          (data.patternpartial !== undefined) &&
          (data.patternpartial.indexOf('viewall-') === 0) &&
          (this.config.defaultShowPatternInfo !== undefined) &&
          (this.config.defaultShowPatternInfo)) {
          this.queryPattern(false);
        } else if (this.active === true) {
          this.queryPattern();
        }
      } else if ((data.event !== undefined) && (data.event === 'patternLab.patternQueryInfo')) {
        // refresh the modal if a new pattern is loaded and the modal is active
        this.refresh(data.patternData, data.iframePassback, data.switchText);
      } else if ((data.event !== undefined) && (data.event === 'patternLab.annotationNumberClicked')) {
        // slide to a given annoation
        this.slideToAnnotation(data.displayNumber);
      }
    }

  },

  mounted() {
    this.onReady();

    window.addEventListener('message', this.receiveIframeMessage, false);
  }
};
</script>
