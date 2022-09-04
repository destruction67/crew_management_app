import Swal from 'sweetalert2'

export const AlertService = {
  initializeSwal () {
    window.swal = Swal

    window.confirmCreateAlert = Swal.mixin({
      customClass: {
        confirmButton: 'e-btn e-btn-blue e-text-white mr-2',
        cancelButton: 'e-btn e-btn-blue-gray e-text-white'
      },
      icon: 'question',
      buttonsStyling: false
    })

    window.confirmUpdateAlert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-warning font-weight-bolder mr-2',
        cancelButton: 'btn btn-outline-secondary font-weight-bolder'
      },
      buttonsStyling: false
    })

    window.deleteAlert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger font-weight-bolder mr-2',
        cancelButton: 'btn btn-outline-secondary font-weight-bolder'
      },
      buttonsStyling: false
    })

    window.serverErrorAlert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger font-weight-bolder mr-2'
      },
      buttonsStyling: false
    })

    window.successAlert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success font-weight-bolder mr-2'
      },
      buttonsStyling: false
    })

    window.errorAlert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger font-weight-bolder mr-2'
      },
      buttonsStyling: false,
      allowOutsideClick: false
    })

    window.systemUpdateModal = Swal.mixin({
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: 'swal-wide'
    })
  },

  serverErrorAlert (message) {
    // eslint-disable-next-line no-undef
    serverErrorAlert.fire({
      title: 'SERVER ERROR',
      text: `ERROR ON ${message}`,
      footer: '<a href="mailto:albert.arbowez@elitesdsi.com">PLEASE CONTACT SYSTEM ADMINISTRATOR</a>',
      scrollbarPadding: false
    })
  },

  loading () {
    Swal.fire({
      title: 'Please Wait . . . .',
      imageWidth: 100,
      imageHeight: 50,
      imageAlt: 'Custom image',
      showConfirmButton: false,
      scrollbarPadding: false
    })
  },

  async confirmCreateAlert (message) {
    if (!message) message = 'Are you sure you want to add this record?'
    // eslint-disable-next-line no-undef
    return await confirmCreateAlert.fire({
      title: 'ADD RECORD CONFIRMATION',
      text: message,
      showCancelButton: true,
      confirmButtonText: 'Yes, add it!',
      scrollbarPadding: false
    }).then((result) => {
      return result.value
    })
  },

  async confirmUpdateAlert (message) {
    if (!message) message = 'Are you sure you want to update this record?'
    // eslint-disable-next-line no-undef
    return await confirmUpdateAlert.fire({
      title: 'CONFIRM UPDATE',
      text: message,
      showCancelButton: true,
      confirmButtonText: 'Yes, update it!',
      scrollbarPadding: false
    }).then((result) => {
      return result.value
    })
  },

  async confirmDeleteAlert (message) {
    if (!message) message = 'Are you sure you want to delete this record?'
    // eslint-disable-next-line no-undef
    return await deleteAlert.fire({
      title: 'CONFIRM DELETE',
      text: message,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      scrollbarPadding: false
    }).then((result) => {
      return result.value
    })
  },

  // success
  successAlert (text, actionType = '', html) {
    let ht = html ? html : ''
    return swal.fire({
      title: `${actionType}`,
      icon: `success`,
      text: `${text}`,
      html: `${ht}`,
      showCancelButton: false,
      allowOutsideClick: false,
    }).then(r => {
      return r.value

    })
  },

  errorAlert (message, actionType) {
    // eslint-disable-next-line no-undef
    errorAlert.fire({
      title: `${actionType.toUpperCase()} FAILED`,
      html: message,
      showConfirmButton: true,
      scrollbarPadding: false
    })
  }
}
