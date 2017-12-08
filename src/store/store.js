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


    templesMasterGet: state => {
      return state.templesMaster;
    },

  },

  mutations: {

    initStore (state) {
      // update this for any new table addition in selection
      state.maxStates = state.statesMaster.map(x => x.Id);
      state.selStates = Array.from(state.maxStates);

      state.maxSaints = state.saintsMaster.map(x => x.Id);
      state.selSaints = Array.from(state.maxSaints);

      // state.mapStates = new Map();
      // state.mapStates.set('max', state.maxStates).set('sel', state.selStates).set('dif', state.difStates);
      // state.mapSaints = new Map();
      // state.mapSaints.set('max', state.maxSaints).set('sel', state.selSaints).set('dif', state.difSaints);


    },


    updatenav2Sel (state, payload) {
        state.nav2Sel = payload;
      },

    addX (state, payload) {
      // alert ("Hello2");
      var namStates = {'max': state.maxStates, 'sel': state.selStates, 'dif': state.difStates};
      var namSaints = {'max': state.maxSaints, 'sel': state.selSaints, 'dif': state.difSaints};
      // update this for any new table addition in selection

      // set this correctly as per the input coming like States, Saints....);
      if (payload[1] === 'States') {
        var namx = namStates;
      } else if (payload[1] === 'Saints') {
        var namx = namSaints;
        // update this for any new table addition in selection

      };

      payload[0].forEach(function(item) {
          namx['sel'].push(item);
          // namx['dif'].splice(namx['dif'].indexOf(item), 1);  --- this gives errors
        // = does not work ---- namx['dif'] = namx['max'].filter(function(i) {return namx['sel'].indexOf(i) < 0;}).slice();
      });

// to be refactored -- = condition does not work correctly for referenced objects
      if (payload[1] === 'States') {
        state.difStates = namx['max'].filter(function(i) {return namx['sel'].indexOf(i) < 0;});
      } else if (payload[1] === 'Saints') {
        state.difSaints = namx['max'].filter(function(i) {return namx['sel'].indexOf(i) < 0;});
        // update this for any new table addition in selection
      };

      // update this for any new table addition in selection
      // Propogate this addition to the next level - have worked out only for Saints
      // get the newmaxSaints list filter > templesMaster > with stateId in selStates > map on SaintId > reduce them to the Ids > unique by Set > array
      if (payload[1] === 'States') {
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
      };
    },

    delX (state, payload) {
      // passing a obj is working only on a local variable, hence this part is done here
      // var namStates = {'max': state.maxStates, 'sel': state.selStates, 'dif': state.difStates};
      // var namSaints = {'max': state.maxSaints, 'sel': state.selSaints, 'dif': state.difSaints};

      var mapStates = new Map();
      mapStates.set('max', state.maxStates).set('sel', state.selStates).set('dif', state.difStates);
      var mapSaints = new Map();
      mapSaints.set('max', state.maxSaints).set('sel', state.selSaints).set('dif', state.difSaints);


      // alert (namStates2.get('max'));


      // update this for any new table addition in selection

      // set this correctly as per the input coming like States, Saints....);
      if (payload[1] === 'States') {
        var mapX = mapStates;
        // alert (namx.get('max'));
      } else if (payload[1] === 'Saints') {
        var mapX = mapSaints;
        alert (mapX.get('max'));
        // update this for any new table addition in selection
      };

      payload[0].forEach(function(item) {
        // alert (state.namStates['sel']);
        // this is a superficial check and may not be required

        // var index = namx['sel'].indexOf(item);
        var index = mapX.get('sel').indexOf(item);
        if (index !== -1) {
          // namx['sel'].splice(index, 1);
          mapX.get('sel').splice(index, 1);
          // alert (namx['sel']);
          // alert (namStates2.get('sel'));

          // namx['dif'].push(item);
          mapX.get('dif').push(item);
        };
      });
// get the impact of this deletion for the level below
// get the newmaxSaints list filter > templesMaster > with stateId in selStates > map on SaintId > reduce them to the Ids > unique by Set > array

// refactor this for all levels of propogation, presently this propgates to Saints only from States
// update this for any new table addition in selection
      if (payload[1] === 'States') {
        var mapY = mapSaints;
        // var mapY = mapSaints;
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
        //   alert (mapY.get('max'));
        // mapY.get('max') = newmax;
        // mapY.get('sel') = newsel;
        // mapY.get('dif') = mapY.get('max').filter(function(i) {return mapY.get('sel').indexOf(i) < 0;});


      };

    },

  },

  actions: {

    initStore: ({commit}) => {
      commit('initStore');
      // alert ("Hello init");
    },

    updatenav2Sel: ({ commit }, payload) => {
      commit('updatenav2Sel', payload);
    },

    addX: ({ commit }, payload) => {
      commit('addX', payload);
      // alert ("Hello Action");
    },

    delX: ({ commit }, payload) => {
      commit('delX', payload);
      // alert ("Hello Action");
    },

  },

})
