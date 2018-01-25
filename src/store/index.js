import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import Panels from '../api/panels';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
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

  // plugins: [createPersistedState()],

  mutations: {
    SETUP: (state, patternData) => {
      /* eslint-disable no-param-reassign */
      state.config = patternData.config;
      state.ishControls = patternData.ishControls;
      state.navItems = patternData.navItems;
      state.patternPaths = patternData.patternPaths;
      state.viewAllPaths = patternData.viewAllPaths;
      state.plugins = patternData.plugins;
      state.defaultShowPatternInfo = patternData.defaultShowPatternInfo;
      state.defaultPattern = patternData.defaultPattern;
    }

  },

  actions: {
    SETUP: ({ state, commit }) => {
      const patternData = {};
      patternData.config = window.config;
      patternData.ishControls = window.ishControls;
      patternData.navItems = window.navItems;
      patternData.patternPaths = window.patternPaths;
      patternData.viewAllPaths = window.viewAllPaths;
      patternData.plugins = window.plugins;
      patternData.defaultShowPatternInfo = window.defaultShowPatternInfo;
      patternData.defaultPattern = window.defaultPattern;

      commit('SETUP', patternData);


      // Setup panels

      // set-up the base file extensions to fetch
      const fileSuffixPattern = ((state.config.outputFileSuffixes !== undefined) && (state.config.outputFileSuffixes.rawTemplate !== undefined)) ? state.config.outputFileSuffixes.rawTemplate : '';
      const fileSuffixMarkup = ((state.config.outputFileSuffixes !== undefined) && (state.config.outputFileSuffixes.markupOnly !== undefined)) ? state.config.outputFileSuffixes.markupOnly : '.markup-only';

      // add the default panels
      Panels.add({
        id: 'sg-panel-pattern',
        default: true,
        templateID: 'pl-panel-template-code',
        httpRequest: true,
        httpRequestReplace: fileSuffixPattern,
        httpRequestCompleted: false,
        prismHighlight: true,
        keyCombo: 'ctrl+shift+u'
      });

      Panels.add({
        id: 'sg-panel-html',
        name: 'HTML',
        default: false,
        templateID: 'pl-panel-template-code',
        httpRequest: true,
        httpRequestReplace: `${fileSuffixMarkup}.html`,
        httpRequestCompleted: false,
        prismHighlight: true,
        language: 'markup',
        keyCombo: 'ctrl+shift+y'
      });

      // for compatibility, add the Panels
      window.Panels = Panels;

      // // gather panels from plugins
      // Dispatcher.trigger('setupPanels');

      // eslint-disable-next-line no-console
      console.log('setup ok!');
      return Promise.resolve([]);
    }

  }
});

export default store;
