import axios from 'axios'
import { ConstantService } from "@/service/ConstantService"
import {AlertService} from "@/service/AlertService";

const state = {
    isLoading : false,
};


const mutations = {
    set_is_loading(state,payload){
        state.isLoading = payload
    },
};


const actions = {};


const getters = {
    isReloading : state => state.isLoading,
};


/** export **/
export default {state, actions, mutations, getters};