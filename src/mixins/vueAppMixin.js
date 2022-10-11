import {AlertService} from "@/service/AlertService";
import {mapGetters, mapActions} from "vuex";

export const vueAppMixin = {

  data () {
    return {

    }
  },
  methods: {
    isActiveRoute (routeName, exceptions = []) {
      let routes = this.$route.matched
      let active = false
      routes.forEach(route => {
        if (route.name === routeName) {
          active = true
        }
      })
      routes.forEach(route => {
        if (exceptions.includes(route.name)) {
          active = false
        }
      })
      return active
    },

    goBack () {
      this.$router.go(-1)
      // console.log('go back')
    },

    async confirmCreateAlert (message) {
      return await AlertService.confirmCreateAlert(message)
    },

    async confirmUpdate (message) {
      return await AlertService.confirmUpdateAlert(message)
    },
    async confirmDeleteAlert (message) {
      return await AlertService.confirmDeleteAlert(message)
    },

    successAlert (message, actionType) {
      AlertService.successAlert(message, actionType)
    },

    errorAlert (message, actionType) {
      AlertService.errorAlert(message, actionType)
    },

    // userFullName() {
    //   return this.authUser;
    // },

  },


  computed: {
    ...mapGetters([
    ]),
  }
}
