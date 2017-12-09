import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// helper functions
function deriveMaxSaints(state) {
  return Array.from
          (new Set((
          state.templesMaster.filter(itm => state.selStates.indexOf(itm.StateId) >-1)
          .map(a => a.SaintId))
          .reduce((acc, a) => acc.concat(a),[])
          ));
}

function deriveMaxTemples(state) {

  return Array.from
          (new Set((
          state.templesMaster.filter(itm => (
            (state.selStates.indexOf(itm.StateId) >-1)
            &&
            // atleast one element of saintarray in this temple itm is in selSaints
            (itm.SaintId.filter(function(n) {
                return state.selSaints.indexOf(n) > -1;
              }).length > 0
            )
          ))
          .map(a => a.Id))
          .reduce((acc, a) => acc.concat(a),[])
          ));
}

// end helper functions

export const store = new Vuex.Store({
  state: {

    nav2Sel: 0,
    statesMaster: [{"Id":1,"Name":"Tamilnadu"},
{"Id":2,"Name":"Kerala"},
{"Id":3,"Name":"Andhra"}],

// Only this is defined here with values, as this is the startingpoint.
    maxStates: [],
    selStates: [],

    maxSaints: [],
    selSaints: [],

    maxTemples: [],
    selTemples: [],


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

    maxSaintsGet: state => {
      return state.maxSaints;
    },
    selSaintsGet: state => {
      return state.selSaints;
    },

    templesMasterGet: state => {
      return state.templesMaster;
    },
    maxTemplesGet: state => {
      return state.maxTemples;
    },
    selTemplesGet: state => {
      return state.selTemples;
    },




  },

  mutations: {

    initStore (state) {
      // update this for any new table addition in selection
      state.maxStates = state.statesMaster.map(x => x.Id);
      state.selStates = Array.from(state.maxStates);

      state.maxSaints = state.saintsMaster.map(x => x.Id);
      state.selSaints = Array.from(state.maxSaints);

      state.maxTemples = state.templesMaster.map(x => x.Id);
      state.selTemples = Array.from(state.maxTemples);

      // using the Map set and get function to refer subsequently
      state.mapStates = new Map();
      state.mapStates.set('max', state.maxStates).set('sel', state.selStates);
      state.mapSaints = new Map();
      state.mapSaints.set('max', state.maxSaints).set('sel', state.selSaints);
      state.mapTemples = new Map();
      state.mapTemples.set('max', state.maxTemples).set('sel', state.selTemples);


    },


    updatenav2Sel (state, payload) {
        state.nav2Sel = payload;
      },

    addX (state, payload) {

      // update this for any new table addition in selection
      if (payload[1] === 'States') {
        var mapX = state.mapStates;
      } else if (payload[1] === 'Saints') {
        var mapX = state.mapSaints;
      } else if (payload[1] === 'Temples') {
        var mapX = state.mapTemples;
      };

      payload[0].forEach(function(item) {
        // for select all max is passed on as payload; else only one item is passed as payload
        // check if the item is in sel and if not found add to sel; if found, no need to add
        var index = mapX.get('sel').indexOf(item);
        if (index === -1) {
          mapX.get('sel').push(item);
        };
      });

      // update this for any new table addition in selection
      // Propogate this addition to the next level - have worked out only for Saints
      // get the newmaxSaints list filter > templesMaster > with stateId in selStates > map on SaintId > reduce them to the Ids > unique by Set > array

      if (payload[1] === 'States') {
        var mapY = state.mapSaints;
        var newmax = deriveMaxSaints(state);
        // var delta = newmax.filter(i => state.maxSaints.indexOf(i) === -1);
        var delta = newmax.filter(i => mapY.get('max').indexOf(i) === -1);
        // if select all indicator is on then push the delta to both max and sel; else just pust to max
        if (mapY.get('max').length === mapY.get('sel').length) {
          delta.forEach(function(item) {
              mapY.get('max').push(item);
              mapY.get('sel').push(item);
          });
        } else {
          delta.forEach(function(item) {
              mapY.get('max').push(item);
          });
        };
        // sort max to get the same order of display
        mapY.get('max').sort(function(a, b){ return a -b;});
        mapY.get('sel').sort(function(a, b){ return a -b;});
      };
      // refactor to update temples
      if ((payload[1] === 'States') || (payload[1] === 'Saints'))  {
        var mapY = state.mapTemples;
        var newmax = deriveMaxTemples(state);
        // alert(newmax);
        // var delta = newmax.filter(i => state.maxxxx.indexOf(i) === -1);
        var delta = newmax.filter(i => mapY.get('max').indexOf(i) === -1);
        // if select all indicator is on then push the delta to both max and sel; else just pust to max
        if (mapY.get('max').length === mapY.get('sel').length) {
          delta.forEach(function(item) {
              mapY.get('max').push(item);
              mapY.get('sel').push(item);
          });
        } else {
          delta.forEach(function(item) {
              mapY.get('max').push(item);
          });
        };
        // sort max to get the same order of display
        mapY.get('max').sort(function(a, b){ return a -b;});
        mapY.get('sel').sort(function(a, b){ return a -b;});
      };
    },

    delX (state, payload) {

      // set this correctly as per the input coming like States, Saints....);
      // update this for any new table addition in selection
      if (payload[1] === 'States') {
        var mapX = state.mapStates;
      } else if (payload[1] === 'Saints') {
        var mapX = state.mapSaints;
      } else if (payload[1] === 'Temples') {
        var mapX = state.mapTemples;
      };

      payload[0].forEach(function(item) {

        // this check is done to use the same functionality when deslecting all
        var index = mapX.get('sel').indexOf(item);
        if (index !== -1) {
          mapX.get('sel').splice(index, 1);
        };
      });
      // get the impact of this deletion for the level below
      // get the newmaxSaints list filter > templesMaster > with stateId in selStates > map on SaintId > reduce them to the Ids > unique by Set > array
      // refactor this for all levels of propogation, presently this propgates to Saints only from States
      // update this for any new table addition in selection
      if (payload[1] === 'States') {
        var mapY = state.mapSaints;
        var newmax = deriveMaxSaints(state);
        // find the delta difference  oldmax - newmax
        // var delta = state.maxSaints.filter(i => newmax.indexOf(i) === -1);
        var delta = mapY.get('max').filter(i => newmax.indexOf(i) === -1);
        delta.forEach(function(item) {
          // remove from maxSaints
          var index = mapY.get('max').indexOf(item);
          mapY.get('max').splice(index, 1);
          // remove from selSaints if found in that
          var index = mapY.get('sel').indexOf(item);
          if (index !== -1) {
            mapY.get('sel').splice(index, 1);
          };
        });
      };
      // refactor to update temples
      if ((payload[1] === 'States') || (payload[1] === 'Saints')) {
        var mapY = state.mapTemples;
        var newmax = deriveMaxTemples(state);
        // find the delta difference  oldmax - newmax
        // var delta = state.maxSaints.filter(i => newmax.indexOf(i) === -1);
        var delta = mapY.get('max').filter(i => newmax.indexOf(i) === -1);
        delta.forEach(function(item) {
          // remove from maxSaints
          var index = mapY.get('max').indexOf(item);
          mapY.get('max').splice(index, 1);
          // remove from selSaints if found in that
          var index = mapY.get('sel').indexOf(item);
          if (index !== -1) {
            mapY.get('sel').splice(index, 1);
          };
        });
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
