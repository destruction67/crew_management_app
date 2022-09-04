'use strict'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { API_URL, TOKEN_NAME } from './ConstantService'
import { AlertService } from './AlertService'

export const GlobalService = {
    initializeAxios () {
        Vue.use(VueAxios, axios)
        axios.defaults.baseURL = API_URL
        axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem(TOKEN_NAME)
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )
    },

    handleError (error, source) {
        try {
            switch (error.response.status) {
                case 401:
                    AlertService.errorAlert('UNAUTHORIZED', source)

                // eslint-disable-next-line no-fallthrough
                case 403:
                    AlertService.errorAlert('UNAUTHORIZED', source)
                    return false

                case 404:
                    AlertService.errorAlert('File Not Found', source)

                // eslint-disable-next-line no-fallthrough
                case 500:
                    AlertService.errorAlert('SYSTEM ERROR', source)
                    return false

                case 400:
                    this.handleRequestErrors(error.response.data.errors, source)
                    return this.parseErrors(error.response.data.errors)
            }
            return { errors: error.response.data.errors }
        } catch (e) {
            // console.log(e, source)
        }
    },

    capitalizeProperties(value, except) {
        try {
            Object.keys(value).forEach(key => {
                if (except) {
                    if (except.includes(key)) return
                }

                if(value[key] && typeof value[key] === 'string') {
                    if(!this.caseException.includes(key)) {
                        value[key] = (value[key]) ? String(value[key]).toUpperCase() : '';
                    }
                } else {
                    value[key] = this.capitalizeProperties(value[key]);
                }
            });
        } catch (e) {
            return value;
        }
        localStorage.setItem('idleSeconds', 0);
        return value;
    },


}

export default { GlobalService }