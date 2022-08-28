import {AlertService} from '@/service/alert.service';


export const AppMixins = {

  methods : {
    goBack() {
      this.$router.go(-1);
    },

    /** programmatically hide **/
    hideThisModal(__modalId = null) {
      return $(`#` + `${__modalId}`).modal('hide');
    },

    showThisModal(__modalId = nul) {
      return $(`#` + `${__modalId}`).modal({
        show: true,
        backdrop : 'static',
        keyboard : false,
      });
    },

    errorFormAlert(__text, __actionType) {
      return AlertService.errorAlertService(__text, __actionType);
    },

    infoFormAlert(__text, __actionType) {
      return AlertService.infoAlertService(__text, __actionType);
    },

    copyClipboardTextToast(__text) {
      return AlertService.copyClipboardTextToast(__text);
    },

    questionFormAlert(__html, __actionType, icon, __customCss) {
      return AlertService.questionAlertService(__html, __actionType, icon, __customCss);
    },

    successFormAlert(__text, __actionType) {
      return AlertService.successAlertService(__text, __actionType);
    },

    warningFormAlert(__text, __actionType) {
      return AlertService.warningAlertService(__text, __actionType);
    },

    autoCloseTimerFormAlert(__text, __secTimer, __actionType) {
      return AlertService.autoCloseTimerAlertService(__text, __secTimer, __actionType);
    },

    copyOnClipBoard(){
      this.copyClipboardTextToast('Copy to clipboard');
      document.execCommand('copy');
    },


    isRouteActive(routeName, exceptions = []) {
      let routes = this.$route.matched;
      let active = false;
      routes.forEach(route => {
        if (route.name === routeName) {
          active = true;
        }
      });
      routes.forEach(route => {
        if (exceptions.includes(route.name)) {
          active = false;
        }
      });
      return active;
    },


  }
};

export default {AppMixins};
