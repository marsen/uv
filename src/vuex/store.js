import Vue from "vue";
import Vuex from "vuex";
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  uvjsons: null,
  updateTime: "",
  isRunning: false,
  pages: {
    cities: [],
    city: '',
    countyFilter: '',
    islistMode: true,
    tPage: 0,
    tPageLen: 0,
    tPageIndex: 0
  },
  tempTable: [],
  oldTempTable: [],
  myTable: null,
  mystring: "strings"
};


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});