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

    templesMaster: [{"TempId":1,"StateId":1,"Name":" Thiruvarangam - Sri Ranganathaswamy Temple","SaintId":[1,2,4],"SongId":[1, 11, 101, 1001]},
{"TempId":2,"StateId":1,"Name":" Thirukkozhi - Sri Azhagiya Manavala Perumal Temple","SaintId":[2,7],"SongId":[2, 12, 102, 1002]},
{"TempId":3,"StateId":2,"Name":" Thirukkarambanoor - Sri Purushothaman Perumal Temple","SaintId":[1,4],"SongId":[3, 13, 103, 1003]},
{"TempId":4,"StateId":2,"Name":" Thiruvellarai - Sri Pundarikashan Perumal Temple","SaintId":[2,4,7],"SongId":[4, 14, 104, 1004]},
{"TempId":5,"StateId":3,"Name":" Thiru Anbil - Sri Vadivazhagiya Nambi Perumal Temple","SaintId":[1,2,4],"SongId":[5, 15, 105, 1005]},
{"TempId":6,"StateId":3,"Name":" Thirupper Nagar - Sri Appakkudathaan Perumal Temple","SaintId":[3,8,9],"SongId":[6, 16, 106, 1006]}],

    saintsMaster: [{"SaintId":1,"SaintName":"Poigai Alwar"},
{"SaintId":2,"SaintName":"Bhoodath Alwar"},
{"SaintId":3,"SaintName":"Pei Alwar"},
{"SaintId":4,"SaintName":"Thirumazhisai Alwar"},
{"SaintId":5,"SaintName":"Thirumangai Alwar"},
{"SaintId":6,"SaintName":"Thondaradippodi Alwar"},
{"SaintId":7,"SaintName":"Thiruppaan Alwar"},
{"SaintId":8,"SaintName":"Periyalwar"},
{"SaintId":9,"SaintName":"Sri Andal"},
{"SaintId":10,"SaintName":"Nammalwar"},
{"SaintId":11,"SaintName":"Madhurakavi Alwar"},
{"SaintId":12,"SaintName":"Kulasekara Alwar"}],

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
    saintsMasterGet: state => {
      return state.saintsMaster;
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
          // state.templesMaster1 = state.templesMaster.filter(itm => state.selectedStates.indexOf(itm.StateId) >-1);
          state.selectedSaints = Array.from
            (new Set((
            state.templesMaster.filter(itm => state.selectedStates.indexOf(itm.StateId) >-1)
            .map(a => a.SaintId))
            .reduce((acc, a) => acc.concat(a),[])
            ));
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
