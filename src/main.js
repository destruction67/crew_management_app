import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {IconConfig} from '@/config/icon.config';
import {ComponentConfig} from '@/config/component.config';
import {AppConfig} from '@/config/app.config';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../public/css/custom.scss';

import '@sweetalert2/theme-bootstrap-4';

import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/vue-fontawesome';

import 'popper.js';
import __ from 'lodash';
import $ from 'jquery';

import {GlobalService} from "@/service/GlobalService";
import {AlertService} from "@/service/AlertService";

// IDLE SESSION START
import IdleVue from 'idle-vue';

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 1080 * 1000, // 1080 * 1000 = 18 minutes,
  startAtIdle: false,
});
// IDLE SESSION END

Vue.config.productionTip = false

global.$ = $;
global.__ = __;

IconConfig.config();

Vue.use(require('vue-moment'));

ComponentConfig.pluginComponents();
ComponentConfig.baseComponent();

//enable when the time is right
// AppConfig.appConfig();
AppConfig.appSweetAlert2();
AppConfig.appProgressBar();
AppConfig.elementFocus();

GlobalService.initializeAxios()
AlertService.initializeSwal()




new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
