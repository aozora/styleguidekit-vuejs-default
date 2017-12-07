import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
    config: {},
    ishControls: {},
    navItems: {},
    patternPaths: {},
    viewAllPaths: {},
    plugins: {},
    defaultShowPatternInfo: false,
    defaultPattern: 'all'
  },

  // plugins: [createPersistedState()],

  mutations: {
    SET_IS_LOADING: (state, loading) => {
      /* eslint-disable no-param-reassign */
      state.isLoading = loading;
    },

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
    SETUP: ({ commit, state }, patternData) => {
      commit('SETUP', patternData);

      // eslint-disable-next-line no-console
      console.log('setup ok!');
      return Promise.resolve([]);
    }

    // FETCH_RESULTS: ({ commit, state }, query) => {
    //   // console.log(`action FETCH_RESULTS: query = ${query}`);
    //
    //   commit('SET_SEARCH_QUERY', query);
    //   commit('SET_IS_LOADING', true);
    //
    //   if (query) {
    //     const p = new Promise((resolve, reject) => {
    //       /* eslint-disable arrow-body-style   */
    //       setTimeout(() => {
    //         return resolve(json);
    //       }, delay);
    //     });
    //
    //     return p.then((result) => {
    //       // console.log('Fetch Promise OK! mutating state...');
    //       commit('SET_SEARCH_RESULTS', result);
    //       commit('SET_IS_LOADING', false);
    //
    //       // if (result === '') {
    //       //   commit('SET_NORESULTS', true);
    //       // }
    //     });
    //   }
    //
    //   commit('SET_IS_LOADING', false);
    //   return Promise.reject();
    // },
  }
});

export default store;
