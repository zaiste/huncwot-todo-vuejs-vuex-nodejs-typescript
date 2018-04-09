import Vue from 'vue';

import router from './router';
import store from './store';
import provide from './graphql';

import App from './components/App';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide,
  router,
  store,
  render: h => h(App)
})
