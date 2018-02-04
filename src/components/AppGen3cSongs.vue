<template>
  <div id="accordionSongs" role="tablist">
    <div class="card" v-for="(item, index) in selSongs">
      <z30Son :details="songsComp.find(itm => itm.Id === songsMaster.find(itm => itm.Id === item).CompNo)" :itemno=item ></z30Son>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import z30Son from './AppGen3cSongs1.vue';
// import z40Son from './AppGen3cSongs2.vue';

export default {
  computed: {
    ...mapGetters({
    songsMaster: 'songsMasterGet',
    selSongs: 'selSongsGet',
    // songsDetails: 'songsDetailsGet',
    songsComp: 'songsCompGet',
    // picked: 'filterselected',
    }),
  },
  components: {
    z30Son,
    // z40Son
  },

}
</script>
