import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {

// This is a variable for the selection in first scree: 0 Home, 1 Features; 2 Contact
    // nav1Sel: 0,
    nav2Sel: 0,
    statesMaster: [{"Id":1,"Name":"Tamilnadu"},
{"Id":2,"Name":"Kerala"},
{"Id":3,"Name":"Andhra"}],

// Only this is defined here with values, as this is the startingpoint.
    maxStates: [1,2,3],
    selStates: [1,2,3],
    difStates: [],

    // selectedStates: [],

    // selAllStatesindicator: true,

    templesMaster: [{"Id":1,"StateId":1,"Name":" Thiruvarangam - Sri Ranganathaswamy Temple","SaintId":[1,2],"SongId":[1, 11, 101, 1001]},
{"Id":2,"StateId":1,"Name":" Thirukkozhi - Sri Azhagiya Manavala Perumal Temple","SaintId":[2,3],"SongId":[2, 12, 102, 1002]},
{"Id":3,"StateId":2,"Name":" Thirukkarambanoor - Sri Purushothaman Perumal Temple","SaintId":[3,4],"SongId":[3, 13, 103, 1003]},
{"Id":4,"StateId":2,"Name":" Thiruvellarai - Sri Pundarikashan Perumal Temple","SaintId":[4,5],"SongId":[4, 14, 104, 1004]},
{"Id":5,"StateId":3,"Name":" Thiru Anbil - Sri Vadivazhagiya Nambi Perumal Temple","SaintId":[5,6],"SongId":[5, 15, 105, 1005]},
{"Id":6,"StateId":3,"Name":" Thirupper Nagar - Sri Appakkudathaan Perumal Temple","SaintId":[7,8,9],"SongId":[6, 16, 106, 1006]}],

    saintsMaster: [{"Id":1,"Name":"Poigai Alwar"},
{"Id":2,"Name":"Bhoodath Alwar"},
{"Id":3,"Name":"Pei Alwar"},
{"Id":4,"Name":"Thirumazhisai Alwar"},
{"Id":5,"Name":"Thirumangai Alwar"},
{"Id":6,"Name":"Thondaradippodi Alwar"},
{"Id":7,"Name":"Thiruppaan Alwar"},
{"Id":8,"Name":"Periyalwar"},
{"Id":9,"Name":"Sri Andal"},
{"Id":10,"Name":"Nammalwar"},
{"Id":11,"Name":"Madhurakavi Alwar"},
{"Id":12,"Name":"Kulasekara Alwar"}],

    selectedSaintsStart: [],
    selectedSaints: [],
    selAllSaintsindicator: true,


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

    maxStatesGet: state => {
      return state.maxStates;
    },
    selStatesGet: state => {
      return state.selStates;
    },
    difStatesGet: state => {
      return state.difStates;
    },



    selectedStatesGet: state => {
      return state.selectedStates;
    },

    // selAllStatesGet: state => {
    //   return state.selAllStatesindicator;
    // },
    selectedSaintsStartGet: state => {
      return state.selectedSaintsStart;
    },
    selectedSaintsGet: state => {
      return state.selectedSaints;
    },
    selAllSaintsGet: state => {
      return state.selAllSaintsindicator;
    },



    templesMasterGet: state => {
      return state.templesMaster;
    },

    // selectedTemplesGet: state => {
    //   return state.selectedTemples;
    // },

  },

  mutations: {
    // updatenav1Sel (state, payload) {
    //     state.nav1Sel = payload;
    //   },
    updatenav2Sel (state, payload) {
        state.nav2Sel = payload;
      },

    addStates (state, payload) {
      // alert ("Hello2");

      payload.forEach(function(item) {
        var index = state.selStates.indexOf(item);
        if (index === -1) {
          state.selStates.push(item);
        };
        state.difStates = state.maxStates.filter(function(i) {return state.selStates.indexOf(i) < 0;});
        // else {
        //   state.selectedStates.splice(index, 1);
      });
    },

    delStates (state, payload) {
      payload.forEach(function(item) {
        // alert (item);
        // this is a superficial check and may not be required
        var index = state.selStates.indexOf(item);
        if (index !== -1) {
          state.selStates.splice(index, 1);
          state.difStates.push(item);
        };
      });
      state.selAllStatesindicator = false;
    },


    // updateSelStates (state, payload) {
    //   var index = state.selectedStates.indexOf(payload);
    //   if (index === -1) {
    //     state.selectedStates.push(payload);
    //   } else {
    //     state.selectedStates.splice(index, 1);
    //     };
    //   },

    selAllStates (state) {
      // toggles status of selAllStatesindicator
      // if indicator = true
      //  add all the stateid into state.selectedStates
      //
      // else remove content in state.selectedStates

      state.selAllStatesindicator = !state.selAllStatesindicator;

      // if (state.selAllStatesindicator) {
      //   state.selectedStates = state.statesMaster.map(a => a.StateId);
      // } else {
      //   state.selectedStates = [];
      //   };

      state.selectedStates = state.statesMaster.map(a => a.StateId);

    },

    delAllStates (state) {

      state.selAllStatesindicator = !state.selAllStatesindicator;

      state.selectedStates = [];

    },

    updateSelSaintsStart (state) {
          // state.templesMaster1 = state.templesMaster.filter(itm => state.selectedStates.indexOf(itm.StateId) >-1);
          state.selectedSaintsStart = Array.from
            (new Set((
            state.templesMaster.filter(itm => state.selectedStates.indexOf(itm.StateId) >-1)
            .map(a => a.SaintId))
            .reduce((acc, a) => acc.concat(a),[])
            ));
          // remove states in selectedSaints that are not in selectedSaintsStart
          // add states to selectedSaints corresponding to state
          state.selectedSaints = Array.from(state.selectedSaintsStart);
    },

    selAllSaints (state) {
      state.selAllSaintsindicator = !state.selAllSaintsindicator;

      if (state.selAllSaintsindicator) {
        state.selectedSaints = Array.from(state.selectedSaintsStart);
      } else {
        state.selectedSaints = [];
        };
    },

    updateSelSaints (state, payload) {
      var index = state.selectedSaints.indexOf(payload);
      if (index === -1) {
        state.selectedSaints.push(payload);
      } else {
        state.selectedSaints.splice(index, 1);
        };
      },

  },

  actions: {
    // updatenav1Sel: ({ commit }, payload) => {
    //   commit('updatenav1Sel', payload);
    // },
    updatenav2Sel: ({ commit }, payload) => {
      commit('updatenav2Sel', payload);
    },
//     updateSelStates: ({ commit }, payload) => {
//       commit('updateSelStates', payload);
//       commit('updateSelSaintsStart');
//     },
//     selAllStates: ({commit}) => {
//       commit('selAllStates');
//       commit('updateSelSaintsStart');
//     },
//     delAllStates: ({commit}) => {
//       commit('delAllStates');
// //    equivalent of delSaints  commit('updateSelSaintsStart');
//     },

    addStates: ({ commit }, payload) => {
      commit('addStates', payload);
      // alert ("Hello Action");
      // commit('updateSelSaintsStart');
    },

    delStates: ({ commit }, payload) => {
      commit('delStates', payload);
      // alert ("Hello Action");
      // commit('updateSelSaintsStart');
    },




    selAllSaints: ({commit}) => {
      commit('selAllSaints');
    },
    updateSelSaints: ({ commit }, payload) => {
      commit('updateSelSaints', payload);
      // commit('updateSelSaintsStart');  to refactir for next level of selections
    },

  }

})
