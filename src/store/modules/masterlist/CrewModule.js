import axios from "axios";
import {CM} from "@/service/ConstantService"
import {AlertService} from "@/service/AlertService";
import {GlobalService} from "@/service/GlobalService";

const state = {
    crew: {},
    crews: [],
    newCrew: {},

    crewFormParam: {
        searchValue: null,
        type: null,
        level: null,
        count: 10,
        status: null,
        page: null,
    },


    crewPagination: {
        from: 1,
        currentPage: 1,
        lastPage: 0,
        perPage: 10,
        to: 9,
        total: 0,
    },
};


const mutations = {
    set_crews(state, params) {
        state.crews = params
    },

    set_crew(state, params) {
        state.crew = params
    },

    null_crews(state) {
        state.crews = []
    },

    null_crew(state) {
        state.crew = {}
    },

    set_crew_pagination(state, params) {
        state.crewPagination = {
            from: params.from,
            currentPage: params.current_page,
            lastPage: params.last_page,
            perPage: params.per_page,
            to: params.to,
            total: params.total,
        }
    },
};


const actions = {
    async set_crews({commit}, params) {
        commit('set_is_loading', true)
        return await axios.get(CM.CREW, {params}).then((r) => {
            commit('set_crews', r.data.data)
            commit('set_crew_pagination', r.data)
            commit('set_is_loading', false)
            return true

        }).catch((er) => {
            commit('set_is_loading', false)
            AlertService.serverErrorAlert('Get flags');
            return false
        })
    },

    reset_crew_pagination({commit}) {
        commit('set_crew_pagination')
    },

    null_crews({commit}) {
        commit('null_crews')
    },

    null_crew({commit}) {
        commit('null_crew')
    },
};


const getters = {
    crews: state => GlobalService.capitalizeProperties(state.crews),

    crewPagination: state => state.crewPagination,
    crewFormParam: state => state.crewFormParam,
};


/** export **/
export default {state, actions, mutations, getters};