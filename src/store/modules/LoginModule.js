import {AuthenticationService} from "@/service/AuthenticationService";
import {CM} from "@/service/ConstantService";
import {GlobalService} from "@/service/GlobalService";

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
    user: state => GlobalService.capitalizeProperties(state.user),
};


/** export **/
export default {state, actions, mutations, getters};