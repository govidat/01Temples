<template>
  <div class="card-header" role="tab" :id="'headingSongs'+String(itemno)">
    <h5 class="mb-0">
      <a data-toggle="collapse" :href="'#'+'itemSong'+String(itemno)" aria-expanded="true" :aria-controls="'itemSong'+String(itemno)" @click.prevent="myCollapse">
        Song # {{ itemno }} : {{ details.Alvar}} / {{details.Comp}} / {{ details.TamAlvar}} / {{details.TamComp}}
      </a>
    </h5>
    <!-- {{ this.isCollapsed0}}  {{ this.isCollapsed}} -->
    <div v-if="!isCollapsed">
      <!-- <div :id="'itemSong'+String(itemno)" class="collapse" role="tabpanel" :aria-labelledby="'headingSongs'+String(itemno)" data-parent="#accordionSongs" > -->
      <div :id="'itemSong'+String(itemno)" class="collapse" role="tabpanel" :aria-labelledby="'headingSongs'+String(itemno)" :data-parent="'headingSongs'+String(itemno)" >
        <z40Son :details="songsDetails.find(itm => itm.Id === itemno)"></z40Son>
        <!-- <z40Son :details="subdetails"></z40Son> -->
      </div>
    </div>

  </div>
</template>

<script>
// import axios from 'axios';
import { mapGetters } from 'vuex';

const z40Son = () => ({
  // The component to load. Should be a Promise
  component: import('./AppGen3cSongs2.vue'),
});
// import z40Son from './AppGen3cSongs2.vue';


export default {
  // created() {
  //   //do something after creating vue instance
  //   axios.get('https://temples-82a3c.firebaseio.com/mSongsDetails.json')
  //     .then(res => console.log(res))
  //     .catch(error => console.log(error))
  // },

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
      // isCollapsed: this.isCollapsed0
      isCollapsed: true
    }
  },
  watch: {
    songsDetails: function () {
      this.isCollapsed = true
    }
  },
  methods: {
    myCollapse: function(){
      this.isCollapsed = !this.isCollapsed;
    }
  },

  props: ['details', 'itemno'],
  // props: ['details', 'itemno', 'isCollapsed0'],

}
// Vue.use(Vuex);
// import payload from './modules/mod1';
// store.registerModule('mod1', payload)

</script>
