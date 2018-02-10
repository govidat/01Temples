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
import z40Son from './AppGen3cSongs2.vue';

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

</script>
