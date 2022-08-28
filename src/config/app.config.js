import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

import VueProgressBar from 'vue-progressbar';
import Swal from 'sweetalert2/dist/sweetalert2';
import {API_URL} from '@/config/apiurl.config';
import {AppService} from '@/service/app.service';
import {AlertService} from '@/service/alert.service';

export const AppConfig = {
  // appConfig() {
  //   const newVue = new Vue({});
  //   Vue.use(VueAxios, axios);
  //   axios.defaults.baseURL = API_URL.index();
  //   axios.interceptors.request.use(
  //       (config) => {
  //         newVue.$Progress.start();
  //         let token = localStorage.getItem();
  //
  //         if (token) {
  //           config.headers.Authorization = `Bearer ${token}`;
  //         }
  //         return config;
  //       },
  //
  //       (error) => {
  //         newVue.$Progress.fail();
  //         return Promise.reject(error);
  //       },
  //   );
  //
  //   axios.interceptors.response.use(
  //       response => {
  //         newVue.$Progress.finish();
  //         return Promise.resolve(response);
  //       },
  //       error => {
  //         newVue.$Progress.fail();
  //         // console.log(error, 'Connection Error');
  //         if (error.response.status === 401) {
  //           AlertService.unauthorizedAutoClose('Error1', 5,'Unauthorized','redirecting to login');
  //           localStorage.clear();
  //           this.$router.push({name: 'Login'});
  //         }
  //         return Promise.reject(error);
  //       },
  //   );
  // },

  appSweetAlert2() {
    return window.swal = Swal;
  },

  appProgressBar() {
    Vue.use(VueProgressBar, {
      color: '#007bff',
      failedColor: '#3B3E43',
      thickness: '7px',
      height: '2px',
      transition: {
        speed: '2s',
        opacity: '0.6s',
        termination: 100,
      },
      autoRevert: true,
      location: 'top',
      inverse: false,
    });
  },

  elementFocus() {
    Vue.directive('focus', {
      inserted: function(el) {
        el.focus();
      },
    });
  },
};
