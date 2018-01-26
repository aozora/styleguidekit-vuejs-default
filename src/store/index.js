import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
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

  // plugins: [createPersistedState()],

  mutations,

  actions
});

export default store;
