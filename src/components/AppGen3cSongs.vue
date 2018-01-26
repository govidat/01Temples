<template>
  <div id="accordionSongs" role="tablist">
    <div class="card" v-for="(item, index) in selSongs">
      <div class="card-header" role="tab" :id="'headingSongs'+String(item)">
        <h5 class="mb-0">
            <!-- data-target="#multiCollapseExample2" aria-expanded="false"  -->
          <a data-toggle="collapse" :href="'#'+'itemSong'+String(item)" aria-expanded="true" :aria-controls="'itemSong'+String(item)">
            Song # {{ item }}
          </a>
        </h5>
      </div>
      <div :id="'itemSong'+String(item)" class="collapse" :class="{ show: index===0}" role="tabpanel" :aria-labelledby="'headingSongs'+String(item)" data-parent="#accordionSongs">
        <z40Son :details="songsDetails.find(itm => itm.Id === item)"></z40Son>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import z40Son from './AppGen3cSongs2.vue';

export default {
  computed: {
    ...mapGetters({
    songsMaster: 'songsMasterGet',
    selSongs: 'selSongsGet',
    songsDetails: 'songsDetailsGet',
    // picked: 'filterselected',
    }),
  },
  components: {
    z40Son
  },

}
</script>
