import * as types from './mutation-types';

export default {
  [types.SETUP](state, patternData) {
    /* eslint-disable no-param-reassign */
    state.config = patternData.config;
    state.ishControls = patternData.ishControls;
    state.navItems = patternData.navItems;
    state.patternPaths = patternData.patternPaths;
    state.viewAllPaths = patternData.viewAllPaths;
    state.plugins = patternData.plugins;
    state.defaultShowPatternInfo = patternData.defaultShowPatternInfo;
    state.defaultPattern = patternData.defaultPattern;
  },

  [types.SHOW_PATTERN_INFO]: (state, show) => {
    state.showPatternInfo = show;
  }
};
