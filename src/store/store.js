import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {

// This is a variable for the selection in first scree: 0 Home, 1 Features; 2 Contact
    // nav1Sel: 0,
    nav2Sel: 0,
    statesMaster: [{"StateId":1,"StateDesc":"Tamilnadu"},
{"StateId":2,"StateDesc":"Kerala"},
{"StateId":3,"StateDesc":"Andhra"}],

    selectedStates: [],

    selAllStatesindicator: false,

    templesMaster: [{"TempCode":1,"StateId":1,"Name":" Thiruvarangam - Sri Ranganathaswamy Temple","SaintId":[1,2,4],"SongId":[1, 11, 101, 1001]},
{"TempCode":2,"StateId":1,"Name":" Thirukkozhi - Sri Azhagiya Manavala Perumal Temple","SaintId":[2,7],"SongId":[2, 12, 102, 1002]},
{"TempCode":3,"StateId":2,"Name":" Thirukkarambanoor - Sri Purushothaman Perumal Temple","SaintId":[1,4],"SongId":[3, 13, 103, 1003]},
{"TempCode":4,"StateId":2,"Name":" Thiruvellarai - Sri Pundarikashan Perumal Temple","SaintId":[2,4,7],"SongId":[4, 14, 104, 1004]},
{"TempCode":5,"StateId":3,"Name":" Thiru Anbil - Sri Vadivazhagiya Nambi Perumal Temple","SaintId":[1,2,4],"SongId":[5, 15, 105, 1005]},
{"TempCode":6,"StateId":3,"Name":" Thirupper Nagar - Sri Appakkudathaan Perumal Temple","SaintId":[3,8,9],"SongId":[6, 16, 106, 1006]}],

    templesMaster1: [],

    selectedSaints: [],
    selectedTemples: [],

  },

  getters: {
    // nav1Sel: state => {
    //   return state.nav1Sel;
    // },
    nav2Sel: state => {
      return state.nav2Sel;
    },
    // filterselected: state => {
    //   return state.picked;
    // },

    statesMasterGet: state => {
      return state.statesMaster;
    },

    selectedStatesGet: state => {
      return state.selectedStates;
    },

    selAllStatesGet: state => {
      return state.selAllStatesindicator;
    },

    selectedSaintsGet: state => {
      return state.selectedSaints;
    },


    templesMasterGet: state => {
      return state.templesMaster;
    },

    // selectedTemplesGet: state => {
    //   return state.selectedTemples;
    // },

  },

  mutations: {
    updatenav1Sel (state, payload) {
        state.nav1Sel = payload;
      },
    updatenav2Sel (state, payload) {
        state.nav2Sel = payload;
      },
    updateSelStates (state, payload) {
      var index = state.selectedStates.indexOf(payload);
      if (index === -1) {
        state.selectedStates.push(payload);
      } else {
        state.selectedStates.splice(index, 1);
        };
      },

      selAllStates (state) {
      // toggles status of selAllStatesindicator
      // if indicator = true
      //  add all the stateid into state.selectedStates
      //
      // else remove content in state.selectedStates

      state.selAllStatesindicator = !state.selAllStatesindicator;

      if (state.selAllStatesindicator) {
        state.selectedStates = state.statesMaster.map(a => a.StateId);
      } else {
        state.selectedStates = [];
        };

      },

      updateSelSaints (state) {
          state.templesMaster1 = state.templesMaster.filter(itm => state.selectedStates.indexOf(itm.StateId) >-1);
          state.selectedSaints = Array.from(new Set((state.templesMaster1.map(a => a.SaintId)).reduce((acc, a) => acc.concat(a),[])));
      },


    },

  actions: {
    updatenav1Sel: ({ commit }, payload) => {
      commit('updatenav1Sel', payload);
    },
    updatenav2Sel: ({ commit }, payload) => {
      commit('updatenav2Sel', payload);
    },
    updateSelStates: ({ commit }, payload) => {
      commit('updateSelStates', payload);
      commit('updateSelSaints');
    },
    selAllStates: ({commit}) => {
      commit('selAllStates');
      commit('updateSelSaints');
    },

  }

})
