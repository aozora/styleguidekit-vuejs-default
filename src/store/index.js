import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// import {fetchResults} from './api'
import json from '../assets/mock-data/products.json';

Vue.use(Vuex);

const delay = 2500;

const store = new Vuex.Store({
  state: {
    isLoading: false,
    user: {
      authenticated: false,
      authenticationToken: '',
      profile: {}
    },
    query: '',
    results: {}
  },

  plugins: [createPersistedState()],

  mutations: {
    SET_IS_LOADING: (state, loading) => {
      /* eslint-disable no-param-reassign */
      state.isLoading = loading;
    },

    SET_IS_AUTHENTICATED: (state, logged) => {
      state.user.authenticated = logged;
    },

    SET_USER_PROFILE: (state, profile) => {
      state.user.profile = profile;
    },

    SET_SEARCH_QUERY: (state, query) => {
      /* eslint-disable no-param-reassign */
      state.query = query;
    },

    SET_SEARCH_RESULTS: (state, results) => {
      /* eslint-disable no-param-reassign */
      state.results = results;
    }
  },

  actions: {
    FETCH_RESULTS: ({ commit, state }, query) => {
      // console.log(`action FETCH_RESULTS: query = ${query}`);

      commit('SET_SEARCH_QUERY', query);
      commit('SET_IS_LOADING', true);

      if (query) {
        const p = new Promise((resolve, reject) => {
          /* eslint-disable arrow-body-style   */
          setTimeout(() => {
            return resolve(json);
          }, delay);
        });

        return p.then((result) => {
          // console.log('Fetch Promise OK! mutating state...');
          commit('SET_SEARCH_RESULTS', result);
          commit('SET_IS_LOADING', false);

          // if (result === '') {
          //   commit('SET_NORESULTS', true);
          // }
        });
      }

      commit('SET_IS_LOADING', false);
      return Promise.reject();
    },

    /**
     * Log in a user, setting its profile
     * @param commit
     * @param state
     * @param credentials
     * @constructor
     */
    USER_LOGIN: ({ commit, state }, credentials) => {
      // http call for login
      Vue.http.post('/api/Login', credentials).then((response) => {
        commit('SET_IS_AUTHENTICATED', true);
        commit('SET_USER_PROFILE', response.body);

        return Promise.resolve([]);
      }).catch((error) => {
        /* eslint-disable no-console */
        console.log(error);
        return Promise.reject(error);
      });
    },


    /**
     * Log out the current user, clearing the profile
     * @param commit
     * @constructor
     */
    USER_LOGOUT: ({ commit }) => {
      commit('SET_IS_AUTHENTICATED', false);
      commit('SET_USER_PROFILE', {});

      return Promise.resolve([]);
    }

  }
});

export default store;
