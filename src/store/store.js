import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {

    nav2Sel: 0,
    statesMaster: [{"Id":1,"Name":"Tamilnadu"},
{"Id":2,"Name":"Kerala"},
{"Id":3,"Name":"Andhra"}],

// Only this is defined here with values, as this is the startingpoint.
    maxStates: [],
    selStates: [],
    difStates: [],

    maxSaints: [],
    selSaints: [],
    difSaints: [],



    templesMaster: [{"Id":1,"StateId":1,"Name":" Thiruvarangam - Sri Ranganathaswamy Temple","SaintId":[1,2],"SongId":[1, 11, 101, 1001]},
{"Id":2,"StateId":1,"Name":" Thirukkozhi - Sri Azhagiya Manavala Perumal Temple","SaintId":[2,3],"SongId":[2, 12, 102, 1002]},
{"Id":3,"StateId":2,"Name":" Thirukkarambanoor - Sri Purushothaman Perumal Temple","SaintId":[3,4],"SongId":[3, 13, 103, 1003]},
{"Id":4,"StateId":2,"Name":" Thiruvellarai - Sri Pundarikashan Perumal Temple","SaintId":[4,5],"SongId":[4, 14, 104, 1004]},
{"Id":5,"StateId":3,"Name":" Thiru Anbil - Sri Vadivazhagiya Nambi Perumal Temple","SaintId":[5,6],"SongId":[5, 15, 105, 1005]},
{"Id":6,"StateId":3,"Name":" Thirupper Nagar - Sri Appakkudathaan Perumal Temple","SaintId":[7,8,9,10,11,12],"SongId":[6, 16, 106, 1006]}],

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

    // selectedSaintsStart: [],
    // selectedSaints: [],
    // selAllSaintsindicator: true,


    selectedTemples: [],

  },

  getters: {

    nav2Sel: state => {
      return state.nav2Sel;
    },

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

    maxSaintsGet: state => {
      return state.maxSaints;
    },
    selSaintsGet: state => {
      return state.selSaints;
    },
    difSaintsGet: state => {
      return state.difSaints;
    },



    // selectedSaintsStartGet: state => {
    //   return state.selectedSaintsStart;
    // },
    //
    // selectedSaintsGet: state => {
    //   return state.selectedSaints;
    // },
    // selAllSaintsGet: state => {
    //   return state.selAllSaintsindicator;
    // },



    templesMasterGet: state => {
      return state.templesMaster;
    },

  },

  mutations: {

    initStore (state) {
      state.maxStates = state.statesMaster.map(x => x.Id);
      state.selStates = Array.from(state.maxStates);

      state.maxSaints = state.saintsMaster.map(x => x.Id);
      state.selSaints = Array.from(state.maxSaints);


    },


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
      });

      // get the impact of this deletion for the level below
      // get the newmaxSaints list filter > templesMaster > with stateId in selStates > map on SaintId > reduce them to the Ids > unique by Set > array
            var newmaxSaints = Array.from
                    (new Set((
                    state.templesMaster.filter(itm => state.selStates.indexOf(itm.StateId) >-1)
                    .map(a => a.SaintId))
                    .reduce((acc, a) => acc.concat(a),[])
                    ));

      // this will be the revised maxSaints
      // use filter condition and create a delselSaints and add to selSaints entries id selallsaints is true (ie difSaints.length===0)
            var deltaSaints = newmaxSaints.filter(i => state.selSaints.indexOf(i) === -1);
            if (state.difSaints.length === 0) {
              var newselSaints = state.selSaints.concat(deltaSaints);
              state.selSaints = newselSaints;
            };

      // now remap both these into maxSaints and difSaints
            state.maxSaints = newmaxSaints;
            state.difSaints = state.maxSaints.filter(function(i) {return state.selSaints.indexOf(i) < 0;});

    },

    delX (state, payload) {
// passing a obj is working only on a local variable, hence this part is done here
      var namStates = {'max': state.maxStates, 'sel': state.selStates, 'dif': state.difStates};
      var namSaints = {'max': state.maxSaints, 'sel': state.selSaints, 'dif': state.difSaints};

      // set this correctly as per the input coming like States, Saints....);
      if (payload[1] === 'States') {
        var namx = namStates;
        var namy = namSaints;
      } else if (payload[1] === 'Saints') {
        var namx = namSaints;
      };

      payload[0].forEach(function(item) {
        // alert (state.namStates['sel']);
        // this is a superficial check and may not be required

        var index = namx['sel'].indexOf(item);
        if (index !== -1) {
          namx['sel'].splice(index, 1);
          namx['dif'].push(item);
        };
      });
// get the impact of this deletion for the level below
// get the newmaxSaints list filter > templesMaster > with stateId in selStates > map on SaintId > reduce them to the Ids > unique by Set > array

// refactor this for all levels of propogation, presently this propgates to Saints only from States
      if (payload[1] === 'States') {
        // var namy = namSaints;
        var newmax = Array.from
                (new Set((
                state.templesMaster.filter(itm => state.selStates.indexOf(itm.StateId) >-1)
                .map(a => a.SaintId))
                .reduce((acc, a) => acc.concat(a),[])
                ));

  // this will be the revised maxSaints
  // use filter condition and create a newselSaints and remove the selSaints entries that are not in newsmaxSaints
        var newsel = state.selSaints.filter(i => newmax.indexOf(i) !== -1);
  // now remap both these into maxSaints and selSaints
        state.maxSaints = newmax;
        state.selSaints = newsel;
        state.difSaints = state.maxSaints.filter(function(i) {return state.selSaints.indexOf(i) < 0;});
      };


    },

    addSaints (state, payload) {
      // alert ("Hello2");

      payload.forEach(function(item) {
        var index = state.selSaints.indexOf(item);
        if (index === -1) {
          state.selSaints.push(item);
        };
        state.difSaints = state.maxSaints.filter(function(i) {return state.selSaints.indexOf(i) < 0;});
      });
    },

    delSaints (state, payload) {
      payload.forEach(function(item) {
        // alert (item);
        // this is a superficial check and may not be required
        var index = state.selSaints.indexOf(item);
        if (index !== -1) {
          state.selSaints.splice(index, 1);
          state.difSaints.push(item);
        };
      });
    },


    // updateSelSaintsStart (state) {
    //       state.selectedSaintsStart = Array.from
    //         (new Set((
    //         state.templesMaster.filter(itm => state.selectedStates.indexOf(itm.StateId) >-1)
    //         .map(a => a.SaintId))
    //         .reduce((acc, a) => acc.concat(a),[])
    //         ));
    //       state.selectedSaints = Array.from(state.selectedSaintsStart);
    // },
    //
    // selAllSaints (state) {
    //   state.selAllSaintsindicator = !state.selAllSaintsindicator;
    //
    //   if (state.selAllSaintsindicator) {
    //     state.selectedSaints = Array.from(state.selectedSaintsStart);
    //   } else {
    //     state.selectedSaints = [];
    //     };
    // },
    //
    // updateSelSaints (state, payload) {
    //   var index = state.selectedSaints.indexOf(payload);
    //   if (index === -1) {
    //     state.selectedSaints.push(payload);
    //   } else {
    //     state.selectedSaints.splice(index, 1);
    //     };
    //   },

  },

  actions: {

    initStore: ({commit}) => {
      commit('initStore');
      // alert ("Hello init");
    },

    updatenav2Sel: ({ commit }, payload) => {
      commit('updatenav2Sel', payload);
    },

    addStates: ({ commit }, payload) => {
      commit('addStates', payload);
      // alert ("Hello Action");
    },

    delX: ({ commit }, payload) => {
      commit('delX', payload);
      // alert ("Hello Action");
      // commit('updateSelSaintsStart');
    },

    addSaints: ({ commit }, payload) => {
      commit('addSaints', payload);
      // alert ("Hello Action");
      // commit('updateSelSaintsStart');
    },

    // delSaints: ({ commit }, payload) => {
    //   commit('delSaints', payload);
    //   // alert ("Hello Action");
    //   // commit('updateSelSaintsStart');
    // },



    // selAllSaints: ({commit}) => {
    //   commit('selAllSaints');
    // },
    // updateSelSaints: ({ commit }, payload) => {
    //   commit('updateSelSaints', payload);
    //   // commit('updateSelSaintsStart');  to refactir for next level of selections
    // },

  }

})
