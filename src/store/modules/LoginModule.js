import {AuthenticationService} from "@/service/AuthenticationService";
import {USER_DETAILS} from "@/service/ConstantService";

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
        commit('setUser', JSON.parse(localStorage.getItem(USER_DETAILS)))
    },



};


const getters = {
    user: state => state.user,
};


/** export **/
export default {state, actions, mutations, getters};