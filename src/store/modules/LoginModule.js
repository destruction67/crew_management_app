import {AuthenticationService} from "@/config/authentication.config";
import {CM} from "@/config/constants.config";
import {GlobalService} from "@/service/GlobalService";
import {UtilityService} from "@/service/UtilityService";

const state = {
    user: false,
};


const mutations = {
    setUser: (state, user) => {
        state.user = user
    },
};


const actions = {
    async authenticateLogin ({ commit }, credentials) {
        const user = await AuthenticationService.authenticate(credentials)
        if (user) {
            commit('setUser', user)
            return true
        }
        return false
    },

    pullUserDetails ({ commit }) {
        commit('setUser', JSON.parse(localStorage.getItem(CM.USER_DETAILS)))
    },



};


const getters = {
    user: state => UtilityService.capitalizeProperties(state.user),
};


/** export **/
export default {state, actions, mutations, getters};