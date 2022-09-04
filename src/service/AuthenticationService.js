import axios from 'axios'

import { LOGIN, TOKEN_NAME, USER_DETAILS } from "@/service/ConstantService";
import {GlobalService} from "@/service/GlobalService";
import {AlertService} from "@/service/AlertService";
// import {AlertService} from "@/service/AlertService";

export const AuthenticationService = {

    setHeader (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },

    deleteHeader () {
        delete axios.defaults.headers.common.Authorization
    },

    clearStorage () {
        localStorage.clear(TOKEN_NAME)
        localStorage.clear(USER_DETAILS)
    },

    async authenticate (credentials) {
        return await axios.post(LOGIN, credentials)
            .then(response => {
                const user = response.data.user
                const token = response.data.token
                if (user != null && token != null) {
                    AlertService.successAlert('LOGIN SUCCESS', 'LOGIN')
                    localStorage.setItem(TOKEN_NAME, token)
                    this.setHeader(token)
                    localStorage.setItem(USER_DETAILS, JSON.stringify(user))
                    return user
                }
                return false
            }).catch(error => {
                GlobalService.handleError(error, 'AuthenticationService')
                this.clearStorage()
                // console.log(error)
                return false
            })
    },


}


export default {
    AuthenticationService
}