<template>
  <div>
    <zpagin :totalPages=totalPages :pagesToDisplay=pagesToDisplay @selectedpage="selpage = $event" class="pagination-m"></zpagin>
    <!-- {{ selpage }}
    {{ filteredselSongs}} -->
    <div id="accordionSongs" role="tablist">
      <div class="card" v-for="(item, index) in filteredselSongs">
        <z30Son :details="songsComp.find(itm => itm.Id === songsMaster.find(itm => itm.Id === item).CompNo)" :itemno=item ></z30Son>
      </div>
    </div>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
import z30Son from './AppGen3cSongs1.vue';
import zpagin from './AppPagination.vue';

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

    totalPages: function() {
        return Math.ceil(this.selSongs.length / this.itemsPerPage)
    },

    filteredselSongs: function() {
      // filtered items to be in the range of (this.selpage-1)*this.itemsPerPage AND this.selpage*this.itemsPerPage
      return this.selSongs.filter(function(element, index) { return index >= (this.selpage-1)*this.itemsPerPage && index < this.selpage*this.itemsPerPage}, this)
    }

  },

  components: {
    z30Son,
    zpagin
    // z40Son
  },

  data: function() {
    return {
      itemsPerPage: 10,
      pagesToDisplay: 10,
      selpage: 1,
    };
  }

}
</script>
