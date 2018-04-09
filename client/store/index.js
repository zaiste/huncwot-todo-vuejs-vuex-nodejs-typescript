import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as tasks from './tasks';

export default new Vuex.Store({
  modules: {
    tasks,
  }
})
