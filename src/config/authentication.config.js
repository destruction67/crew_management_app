import axios from 'axios'

import { CM } from "@/config/constants.config";
import {GlobalService} from "@/service/GlobalService";
import {AlertService} from "@/service/AlertService";
// import {AlertService} from "@/service/AlertService";

export const AuthenticationService = {

    async authenticate (credentials) {
        return await axios.post(CM.LOGIN, credentials)
            .then(response => {
                const user = response.data.user
                const token = response.data.token
                if (user != null && token != null) {
                    localStorage.setItem(CM.TOKEN_NAME, token)
                    this.setHeader(token)
                    localStorage.setItem(CM.USER_DETAILS, JSON.stringify(user))
                    AlertService.successAlert('LOGIN SUCCESS', 'LOGIN')
                    return user
                }
                return false
            }).catch(error => {
                GlobalService.handleError(error, 'Authentication Service')
                this.clearStorage()
                // console.log(error)
                return false
            })
    },

    async logout() {
        return await axios.get(CM.LOGOUT)
            .then(response => {
                this.deleteHeader();
                this.clearStorage();
                return true;
            }).catch(error => {
                return false;
            });
    },

    setHeader (token) {
        // axios.defaults.headers.common.Authorization = `Bearer ${token}`
        axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
    },

    deleteHeader () {
        // delete axios.defaults.headers.common.Authorization
        delete axios.defaults.headers.common['Authorization'];
    },

    clearStorage () {
        localStorage.clear(CM.TOKEN_NAME)
        localStorage.clear(CM.USER_DETAILS)
    },


}


export default {
    AuthenticationService
}