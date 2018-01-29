<template>
  <div id="accordionSongs" role="tablist">
    <div class="card" v-for="(item, index) in selSongs">
      <z30Son :details="songsComp.find(itm => itm.Id === songsMaster.find(itm => itm.Id === item).CompNo)" :itemno=item ></z30Son>

      <!-- <div class="card-header" role="tab" :id="'headingSongs'+String(item)">
        <h5 class="mb-0">
          <a data-toggle="collapse" :href="'#'+'itemSong'+String(item)" aria-expanded="true" :aria-controls="'itemSong'+String(item)">
            Song # {{ item }}
            <z30Son :details="songsComp.find(itm => itm.Id === songsMaster.find(itm => itm.Id === item).CompNo)" :itemno=item ></z30Son>
          </a>
        </h5>
      </div> -->

      <div :id="'itemSong'+String(item)" class="collapse" :class="{ show: index===0}" role="tabpanel" :aria-labelledby="'headingSongs'+String(item)" data-parent="#accordionSongs">
        <z40Son :details="songsDetails.find(itm => itm.Id === item)"></z40Son>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import z30Son from './AppGen3cSongs1.vue';
import z40Son from './AppGen3cSongs2.vue';

export default {
  computed: {
    ...mapGetters({
    songsMaster: 'songsMasterGet',
    selSongs: 'selSongsGet',
    songsDetails: 'songsDetailsGet',
    songsComp: 'songsCompGet',
    // picked: 'filterselected',
    }),
  },
  components: {
    z30Son,
    z40Son
  },

}
</script>
