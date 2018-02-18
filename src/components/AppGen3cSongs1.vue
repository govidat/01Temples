<template>
  <!-- <div>
      {{ itemno}} {{ details.Alvar}} / {{details.Comp}} / {{ details.TamAlvar}} / {{details.TamComp}}
  </div> -->
  <div class="card-header" role="tab" :id="'headingSongs'+String(itemno)">
    <h5 class="mb-0">
      <a data-toggle="collapse" :href="'#'+'itemSong'+String(itemno)" aria-expanded="true" :aria-controls="'itemSong'+String(itemno)">
        Song # {{ itemno }} : {{ details.Alvar}} / {{details.Comp}} / {{ details.TamAlvar}} / {{details.TamComp}}
      </a>
    </h5>
    <!-- <div v-if="!isCollapsed"> -->
      <div :id="'itemSong'+String(itemno)" class="collapse" role="tabpanel" :aria-labelledby="'headingSongs'+String(itemno)" data-parent="#accordionSongs">
        <z40Son :details="songsDetails.find(itm => itm.Id === itemno)"></z40Son>
      </div>
    <!-- </div> -->

  </div>
</template>

<script>

import { mapGetters } from 'vuex';

const z40Son = () => ({
  // The component to load. Should be a Promise
  component: import('./AppGen3cSongs2.vue'),
});
// import z40Son from './AppGen3cSongs2.vue';

// async component
// const z40Son = () => ({
//   component: import('./AppGen3cSongs2.vue'),
  // loading: LoadingComp,
  // error: ErrorComp,
  // delay: 200,
  // timeout: 3000
// });

// import store from 'vuex';
// import payload from '../store/modules/mod1';
// store.registerModule('mod1', payload);

// import {
//   customer,
//   mapAddressFields,
//   mapContactMultiRowFields,
//   mapNameFields,
// } from '../../store/modules/customer';
// if (!store.state.customer) store.registerModule(`customer`, customer);

export default {
  computed: {
    ...mapGetters({
    songsDetails: 'songsDetailsGet',
    }),
  },
  components: {
    z40Son
  },
  data: function () {
    return {
      isCollapsed: true
    }
  },
  // methods: {
  //   myCollapse: function(){
  //     this.isCollapsed = !this.isCollapsed;
  //   }
  // },

  props: ['details', 'itemno'],

}
// Vue.use(Vuex);
// import payload from './modules/mod1';
// store.registerModule('mod1', payload)

</script>
