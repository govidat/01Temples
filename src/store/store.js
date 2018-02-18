import Vue from 'vue';
import Vuex from 'vuex';
import {deriveMaxSaints, deriveMaxTemples, deriveMaxSongs} from './helper.js';
import {mstatesMaster} from './mastersUT/States.js';
import {mtemplesMaster, mtemplesDetails} from './mastersUT/Temples.js';
import {msaintsMaster, msaintsDetails} from './mastersUT/Saints.js';
import {msongsMaster, msongsComp} from './mastersUT/Songs.js';
import msongsDetails from './mastersUT/SongsDetails.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {

    nav2Sel: 0,
    // this flag is maintained to know the status of the filters in selection. If collapsed, to expend the right bottom
    filterCollapsed: false,

    maxStates: [],
    selStates: [],
    statesMaster: mstatesMaster,

    maxSaints: [],
    selSaints: [],
    saintsMaster: msaintsMaster,
    saintsDetails: msaintsDetails,

    maxTemples: [],
    selTemples: [],
    templesMaster: mtemplesMaster,
    templesDetails: mtemplesDetails,

    maxSongs: [],
    selSongs: [],
    songsMaster: msongsMaster,
    songsDetails: msongsDetails,
    songsComp: msongsComp,

    // for 3a Temples pagination
    itemspp3a: 5,
    selpage3a: 1,

    // for 3b Saints pagination
    itemspp3b: 5,
    selpage3b: 1,

    // for 3c Songs pagination
    itemspp3c: 5,
    selpage3c: 1,

  },


  getters: {

    nav2Sel: state => {
      return state.nav2Sel;
    },
    filterCollapsed: state => {
      return state.filterCollapsed;
    },

    statesMasterGet: state => {
      return state.statesMaster;
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
    saintsMasterGet: state => {
      return state.saintsMaster;
    },
    saintsDetailsGet: state => {
      return state.saintsDetails;
    },


    maxTemplesGet: state => {
      return state.maxTemples;
    },
    selTemplesGet: state => {
      return state.selTemples;
    },
    templesMasterGet: state => {
      return state.templesMaster;
    },
    templesDetailsGet: state => {
      return state.templesDetails;
    },

    maxSongsGet: state => {
      return state.maxSongs;
    },
    selSongsGet: state => {
      return state.selSongs;
    },
    songsMasterGet: state => {
      return state.songsMaster;
    },
    songsDetailsGet: state => {
      return state.songsDetails;
    },
    songsCompGet: state => {
      return state.songsComp;
    },

    itemspp3aGet: state => {
      return state.itemspp3a;
    },
    selpage3aGet: state => {
      return state.selpage3a;
    },

    itemspp3bGet: state => {
      return state.itemspp3b;
    },
    selpage3bGet: state => {
      return state.selpage3b;
    },

    itemspp3cGet: state => {
      return state.itemspp3c;
    },
    selpage3cGet: state => {
      return state.selpage3c;
    },


  },

  mutations: {

    initStore (state) {
      // update this for any new table addition
      state.maxStates = state.statesMaster.map(x => x.Id);
      state.selStates = Array.from(state.maxStates);

      state.maxSaints = state.saintsMaster.map(x => x.Id);
      state.selSaints = Array.from(state.maxSaints);

      state.maxTemples = state.templesMaster.map(x => x.Id);
      state.selTemples = Array.from(state.maxTemples);

      state.maxSongs = state.songsMaster.map(x => x.Id);
      state.selSongs = Array.from(state.maxSongs);


      // using the Map set and get function to refer subsequently
      state.mapStates = new Map();
      state.mapStates.set('max', state.maxStates).set('sel', state.selStates);
      state.mapSaints = new Map();
      state.mapSaints.set('max', state.maxSaints).set('sel', state.selSaints);
      state.mapTemples = new Map();
      state.mapTemples.set('max', state.maxTemples).set('sel', state.selTemples);
      state.mapSongs = new Map();
      state.mapSongs.set('max', state.maxSongs).set('sel', state.selSongs);

    },

    itemspp3aMut (state, payload) {
        state.itemspp3a = payload;
      },
    selpage3aMut (state, payload) {
        state.selpage3a = payload;
      },

    itemspp3bMut (state, payload) {
        state.itemspp3b = payload;
      },
    selpage3bMut (state, payload) {
        state.selpage3b = payload;
      },

    itemspp3cMut (state, payload) {
        state.itemspp3c = payload;
      },

    selpage3cMut (state, payload) {
        state.selpage3c = payload;
      },

    updatenav2Sel (state, payload) {
        state.nav2Sel = payload;
      },

    updatefilterCollapsed (state) {
        // alert ("Hello filtercollpased 1" +  state.filterCollapsed);
        state.filterCollapsed = !state.filterCollapsed;
        // alert ("Hello filtercollpased 2" +  state.filterCollapsed);
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

    // refactor to update songs max and sel are same as we are not providing for selection of songs
      if ((payload[1] === 'States') || (payload[1] === 'Saints') || (payload[1] === 'Temples'))  {
        var mapY = state.mapSongs;
        var newmax = deriveMaxSongs(state);
        // alert(newmax);
        // var delta = newmax.filter(i => state.maxxxx.indexOf(i) === -1);
        var delta = newmax.filter(i => mapY.get('max').indexOf(i) === -1);
        // push the delta to both max and sel
  //      if (mapY.get('max').length === mapY.get('sel').length) {
          delta.forEach(function(item) {
              mapY.get('max').push(item);
              mapY.get('sel').push(item);
          });
  //      } else {
  //        delta.forEach(function(item) {
  //            mapY.get('max').push(item);
  //        });
  //      };
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
      // refactor to update Songs
      if ((payload[1] === 'States') || (payload[1] === 'Saints') || (payload[1] === 'Temples')) {
        var mapY = state.mapSongs;
        var newmax = deriveMaxSongs(state);
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
    },

    updatenav2Sel: ({ commit }, payload) => {
      commit('updatenav2Sel', payload);
    },

    updatefilterCollapsed: ({commit}) => {
      commit('updatefilterCollapsed');
    },

    addX: ({ commit }, payload) => {
      commit('addX', payload);
    },

    delX: ({ commit }, payload) => {
      commit('delX', payload);
    },

    itemspp3aAct: ({commit}, payload) => {
      commit('itemspp3aMut', payload);
    },
    selpage3aAct: ({commit}, payload) => {
      commit('selpage3aMut', payload);
    },
    itemspp3bAct: ({commit}, payload) => {
      commit('itemspp3bMut', payload);
    },
    selpage3bAct: ({commit}, payload) => {
      commit('selpage3bMut', payload);
    },

    itemspp3cAct: ({commit}, payload) => {
      commit('itemspp3cMut', payload);
    },
    selpage3cAct: ({commit}, payload) => {
      commit('selpage3cMut', payload);
    },

  },

  // modules: {
  //   mod1
  // }

})

// import payload from './modules/mod1';
// store.registerModule('mod1', payload);
// // import('./modules/mod1').then(payload => {store.registerModule('mod1', payload)});
