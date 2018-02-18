<template>
  <div>
    <zpagin :totalItems=this.selSongs.length
    :pagesToDisplay=pagesToDisplay
    :itemsppPrnt=this.itemspp3c
    :selpagePrnt=this.selpage3c
    :rangeippPrnt=this.rangeippPrnt
    @selectedipp="itemspp3cAct($event)"
    @selectedpage="selpage3cAct($event)"
    class="pagination-m"></zpagin>
    <div id="accordionSongs" role="tablist">
      <div class="card" v-for="(item, index) in filteredselSongs">
        <z30Son :details="songsComp.find(itm => itm.Id === songsMaster.find(itm => itm.Id === item).CompNo)" :itemno=item ></z30Son>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

// import z30Son from './AppGen3cSongs1.vue';
import zpagin from './AppPaginationVuex.vue';

const z30Son = () => ({
  // The component to load. Should be a Promise
  component: import('./AppGen3cSongs1.vue'),
});
// import z40Son from './AppGen3cSongs2.vue';

export default {
  computed: {
    ...mapGetters({
    songsMaster: 'songsMasterGet',
    selSongs: 'selSongsGet',
    // songsDetails: 'songsDetailsGet',
    songsComp: 'songsCompGet',

    itemspp3c: 'itemspp3cGet',
    selpage3c: 'selpage3cGet',
    }),


    filteredselSongs: function() {
      // filtered items to be in the range of (this.selpage3c-1)*this.itemspp3c AND this.selpage3c*this.itemspp3c
      // return this.selSongs.filter(function(element, index) { return index >= (this.selpage3c-1)*this.itemspp3c && index < this.selpage3c*this.itemspp3c}, this)
      return this.selSongs.slice((this.selpage3c-1)*this.itemspp3c, this.selpage3c*this.itemspp3c)
    }

  },

  components: {
    z30Son,
    zpagin
    // z40Son
  },

  data: function() {
    return {
      pagesToDisplay: 10,
      rangeippPrnt: [2,5,10,20],
    };
  },

  methods: {
    ...mapActions([
      'itemspp3cAct',
      'selpage3cAct'
    ])
  },

//  methods: {
// "itemspp = $event"
//    testitemspp: function (payload) {
//      this.itemspp = payload
//    }
//  }

}

</script>
