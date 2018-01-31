import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';
// import * as types from './mutation-types';
// import Panels from '../api/panels';

// const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const store = new Vuex.Store({
  // strict: debug,

  state: {
    isLoading: false,
    showPatternInfo: false,
    config: {},
    ishControls: {},
    navItems: {
      patternTypes: [],
      ishControlsHide: {}
    },
    patternPaths: {},
    viewAllPaths: {},
    plugins: {},
    defaultShowPatternInfo: false,
    defaultPattern: 'all'
  },

  mutations,

  actions

  // actions: {
  //   setup({ state, commit }) {
  //     const patternData = {};
  //     patternData.config = window.config || {};
  //     patternData.ishControls = window.ishControls || {};
  //     patternData.navItems = window.navItems || {};
  //     patternData.patternPaths = window.patternPaths || {};
  //     patternData.viewAllPaths = window.viewAllPaths || {};
  //     patternData.plugins = window.plugins || [];
  //     patternData.defaultShowPatternInfo = window.defaultShowPatternInfo || false;
  //     patternData.defaultPattern = window.defaultPattern || 'all';
  //
  //     commit('SETUP', patternData);
  //
  //
  //     // Setup panels
  //
  //     // set-up the base file extensions to fetch
  //     const fileSuffixPattern = ((patternData.config.outputFileSuffixes !== undefined) && (patternData.config.outputFileSuffixes.rawTemplate !== undefined)) ? patternData.config.outputFileSuffixes.rawTemplate : '';
  //     const fileSuffixMarkup = ((patternData.config.outputFileSuffixes !== undefined) && (patternData.config.outputFileSuffixes.markupOnly !== undefined)) ? patternData.config.outputFileSuffixes.markupOnly : '.markup-only';
  //
  //     // add the default panels
  //     Panels.add({
  //       id: 'sg-panel-pattern',
  //       default: true,
  //       templateID: 'pl-panel-template-code',
  //       httpRequest: true,
  //       httpRequestReplace: fileSuffixPattern,
  //       httpRequestCompleted: false,
  //       prismHighlight: true,
  //       keyCombo: 'ctrl+shift+u'
  //     });
  //
  //     Panels.add({
  //       id: 'sg-panel-html',
  //       name: 'HTML',
  //       default: false,
  //       templateID: 'pl-panel-template-code',
  //       httpRequest: true,
  //       httpRequestReplace: `${fileSuffixMarkup}.html`,
  //       httpRequestCompleted: false,
  //       prismHighlight: true,
  //       language: 'markup',
  //       keyCombo: 'ctrl+shift+y'
  //     });
  //
  //     // for compatibility, add the Panels
  //     window.Panels = Panels;
  //
  //     // // gather panels from plugins
  //     // Dispatcher.trigger('setupPanels');
  //
  //     // eslint-disable-next-line no-console
  //     console.log('setup ok!');
  //     return Promise.resolve([]);
  //   },
  //   togglePatternInfo({ state, commit }, show) {
  //     commit('SHOW_PATTERN_INFO', show);
  //     return Promise.resolve([]);
  //   }
  // }
});

export default store;
