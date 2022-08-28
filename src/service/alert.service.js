export const AlertService = {
  /** error alert service  **/
  errorAlertService(text, actionType) {
    swal.fire({
      title: `${actionType}`,
      icon: `error`,
      text: `${text}`,
      showCancelButton: false,
      allowOutsideClick: false,
    }).then((r) => {
      return r.value;
    });
  },

  /** error with response data use this for the module **/
  errorWithResponseDataService(message, html, actionType) {
    return swal.fire({
      title: `${actionType}`,
      icon: `error`,
      text: `${message}`,
      html: `${html}`,
      customClass: {
        confirmButton: 'btn btn-sm btn-primary font-weight-bolder',
        cancelButton: 'btn btn-sm btn-danger font-weight-bolder',
      },
      showCancelButton: false,
      allowOutsideClick: false,
    }).then((r) => {
      return r.value;
    });
  },

  /** info alert service **/
  infoAlertService(text, actionType) {
    return swal.fire({
      title: `${actionType}`,
      icon: `info`,
      text: `${text}`,
      customClass: {
        confirmButton: 'btn btn-sm btn-primary font-weight-bolder',
        cancelButton: 'btn btn-sm btn-danger font-weight-bolder',
      },
      showCancelButton: false,
      allowOutsideClick: false,
    }).then((r) => {
      return r.value;
    });
  },

  /** sample toast **/
  copyClipboardTextToast(text) {
    return swal.fire({
      toast: true,
      icon: `info`,
      text: `${text}`,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
        input: 'your-input-class',
      },
      showConfirmButton: false,
      timer: 900,
      timerProgressBar: true,

    }).then((r) => {
      return r.value;
    });
  },

  /** question alert service **/
  questionAlertService(__html, actionType, __icon, __customCss) {
    let icon = __icon ? __icon : 1;
    switch (icon) {
      case 1:
        icon = `question`;
        break;

      case 2:
        icon = `warning`;
        break;

      case 3:
        icon = `error`;
        break;
    }
    return swal.fire({
      title: `${actionType}`,
      icon: `${icon}`,
      html: `<pre class="ml-1 small">${__html}</pre>`,
      customClass: {
        confirmButton: 'btn btn-sm btn-primary font-weight-bolder',
        cancelButton: 'btn btn-sm btn-danger font-weight-bolder',
      },
      showCancelButton: true,
      allowOutsideClick: false,
    }).then((r) => {
      return r.value;
    });
  },

  /** success alert service **/
  successAlertService(text, actionType = '') {
    return swal.fire({
      title: `${actionType}`,
      icon: `success`,
      text: `${text}`,
      customClass: {
        confirmButton: 'btn btn-sm btn-primary font-weight-bolder',
      },
      showCancelButton: false,
      allowOutsideClick: false,
    }).then((r) => {
      return r.value;
    });
  },

  /** warning alert service **/
  warningAlertService(text, actionType = '') {
    swal.fire({
      title: `${actionType}`,
      icon: 'warning',
      text: `${text}`,
      showCancelButton: false,
      allowOutsideClick: false,
    }).then((r) => {
      return r.value;
    });
  },

  /** auto close timer alert service **/
  autoCloseTimerAlertService(text, secTimer, actionType = '') {
    let timerInterval;
    let valTimer = parseInt(secTimer, 10);
    // console.log('This is sectimer',secTimer)

    swal.fire({
      title: `${actionType}`,
      html: 'This will close in <b></b> milliseconds.',
      timer: valTimer * 1000,
      timerProgressBar: true,
      didOpen: () => {
        swal.showLoading();
        const b = swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = swal.getTimerLeft();
        }, 100);
      },
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === swal.DismissReason.timer) {
        // console.log('I was closed by the timer')
      }
    });
  },

  unauthorizedAutoClose(text, secTimer, actionType = '') {
    let timerInterval;
    let valTimer = parseInt(secTimer, 10);
    swal.fire({
      title: `${actionType}`,
      html: 'You do not have access to this content.' + '<br><br> ' +
          'This will be redirected in <b></b> seconds.' + '' +
          '<button id="backToLogin" class="btn btn-secondary mt-4">' +
          'Back to Login' +
          '</button><br/><br/>',

      timer: valTimer * 1000,
      timerProgressBar: true,
      didOpen: () => {
        const content = swal.getHtmlContainer();
        const $ = content.querySelector.bind(content);
        const backToLogin = $('#backToLogin');

        backToLogin.addEventListener('click', () => {
          window.location = "/";
        });

        swal.showLoading();

        const b = swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = (swal.getTimerLeft() / 1000).toFixed();
        }, 100);
      },
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === swal.DismissReason.timer) {
        location.reload();
        location.reload();
        location.reload();
        location.reload();
        location.reload();
        location.reload();
        location.reload();
        location.reload();
        location.reload();
        location.reload();
        location.reload();
        location.reload();
      }
    });
  },

  sessionExpireAlert() {
    let timerInterval;
    let valTimer = parseInt(30, 10);

    swal.fire({
      title: `Session Expiring`,
      html: 'This will close in <b></b> seconds.' +
          '<br><br> Click outside if you wish to continue.' + '<br><br>' +
          '<button id="continueSession" class="btn btn-secondary">' +
          'Continue Session' +
          '</button><br/><br/>',

      text: 'You clicked the button!',
      timer: valTimer * 1000,
      timerProgressBar: true,
      didOpen: () => {

        const b = swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = (swal.getTimerLeft() / 1000).toFixed();
        }, 100);

        const content = swal.getHtmlContainer();
        const $ = content.querySelector.bind(content);
        const continueSession = $('#continueSession');
        const endSession = $('#endSession');
        swal.showLoading();
        continueSession.addEventListener('click', () => {
          swal.close();
        });

      },
      // showCancelButton: true,
      // cancelButtonText: "Continue Session",
      // closeOnClickOutside: true,
      allowEnterKey: false,
      allowEscapeKey: false,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === swal.DismissReason.timer) {
        localStorage.clear();
        location.reload();
      }
    });
  },

  sessionExpireAlert2() {
    let timerInterval;
    let valTimer = parseInt(5, 10);

    swal.fire({
      title: `Session Expiring`,
      html: 'This will close in <b></b> seconds.' +
          '<br><br> Click outside if you wish to continue.' + '<br><br>' +
          '<button id="continueSession" class="btn btn-secondary">' +
          'Continue Session' +
          '</button><br/><br/>',

      text: 'You clicked the button!',
      timer: valTimer * 1000,
      timerProgressBar: true,
      didOpen: () => {

        const b = swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = (swal.getTimerLeft() / 1000).toFixed();
        }, 100);

        const content = swal.getHtmlContainer();
        const $ = content.querySelector.bind(content);
        const continueSession = $('#continueSession');
        const endSession = $('#endSession');
        swal.showLoading();
        continueSession.addEventListener('click', () => {
          swal.close();
        });

      },
      // showCancelButton: true,
      // cancelButtonText: "Continue Session",
      // closeOnClickOutside: true,
      allowEnterKey: false,
      allowEscapeKey: false,
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === swal.DismissReason.timer) {
        localStorage.clear();
        location.reload();
      }
    });
  },

  /** handle response **/
  handleResponseError(erMsg) {
    let msgHtml = '';
    if (erMsg) {
      Object.keys(erMsg).forEach((key, index) => {
        msgHtml += `<p class="text-left">${index + 1}. ${erMsg[key]}</p>`;
      });
    }
    return msgHtml;
  },

  parseErrors(errors) {
    let errorMessages = [];
    Object.keys(errors).forEach(column => errorMessages[column] = errors[column].join(', '));
    return {errors: errorMessages};
  },

  /** response alert message  **/
  responseAlertMessage(objEr, actionType = '') {
    if (objEr.response) {
      let resCode = objEr.response.status;
      switch (resCode) {
          //ok
        case 200:
          this.successAlertService(`${actionType} success`, actionType);
          break;

          //created
        case 201:
          this.successAlertService(`${actionType} created`, actionType);
          break;

          //accepted
        case 202:
          this.successAlertService(`${actionType} accepted`, actionType);
          break;

          //no content
        case 204:
          this.successAlertService(`${actionType} success no content`, actionType);
          break;

          //bad request
        case 400:
          if (objEr.response.data.errors) {
            this.errorWithResponseDataService(
                null,
                this.handleResponseError(objEr.response.data.errors),
                actionType,
            );
          } else {
            this.errorAlertService('Bad request', actionType);
          }
          break;

        case 401:
          if (objEr.response.data.errors) {
            this.errorWithResponseDataService(
                null,
                this.handleResponseError(objEr.response.data.errors),
                actionType,
            );
          } else {
            this.errorAlertService('Unauthorized', actionType);
          }
          break;

        case 403:
          if (objEr.response.data.errors) {
            this.errorWithResponseDataService(
                null,
                this.handleResponseError(objEr.response.data.errors),
                actionType,
            );
          } else {
            this.errorAlertService('Forbidden', actionType);
          }

          break;

        case 404:
          if (objEr.response.data.errors) {
            this.errorWithResponseDataService(
                null,
                this.handleResponseError(objEr.response.data.errors),
                actionType,
            );
          } else {
            this.errorAlertService('Not found', actionType);
          }

          break;

        case 422:
          if (objEr.response.data.errors) {
            this.errorWithResponseDataService(
                null,
                this.handleResponseError(objEr.response.data.errors),
                actionType,
            );
          } else {
            this.errorAlertService('Unprocessable Content', actionType);
          }
          break;

        case 500:
          if (objEr.response.data.errors) {
            this.errorWithResponseDataService(
                null,
                this.handleResponseError(objEr.response.data.errors),
                actionType,
            );
          } else {
            this.errorAlertService('Internal Server Error', actionType);
          }

          break;

        case 501:
          if (objEr.response.data.errors) {
            this.errorWithResponseDataService(
                null,
                this.handleResponseError(objEr.response.data.errors),
                actionType,
            );
          } else {
            this.errorAlertService('Not Implemented', actionType);
          }
          break;

        case 502:
          if (objEr.response.data.errors) {
            this.errorWithResponseDataService(
                null,
                this.handleResponseError(objEr.response.data.errors),
                actionType,
            );
          } else {
            this.errorAlertService('Bad Gateway', actionType);
          }
          break;

        case 503:
          if (objEr.response.data.errors) {
            this.errorWithResponseDataService(
                null,
                this.handleResponseError(objEr.response.data.errors),
                actionType,
            );
          } else {
            this.errorAlertService('Service Unavailable', actionType);

          }
          break;
      }
    }
  },
};

export default {AlertService};
