<template>
  <div>
    <zpagin :totalItems=this.selSongs.length
    :pagesToDisplay=pagesToDisplay
    :itemsppPrnt=this.itemspp3c
    :selpagePrnt=this.selpage3c
    :rangeippPrnt=this.rangeippPrnt
    @selectedipp="itemspp3cAct($event)"
    @selectedpage="selpage3cAct($event)"
    @pageResetCall="resetSongsDetails"
    class="pagination-m"></zpagin>
    <div id="accordionSongs" role="tablist">
      <div class="card" v-for="(item, index) in filteredselSongs">
        <z30Son
        :details="songsComp.find(itm => itm.Id === songsMaster.find(itm => itm.Id === item).CompNo)"
        :itemno=item>
        </z30Son>
      </div>
    </div>
  </div>
<!-- :subdetails="songsDetails.find(itm => itm.Id === item)" -->
</template>

<script>

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

import z30Son from './AppGen3cSongs1.vue';
import zpagin from './AppPaginationVuex.vue';
// import axios from 'axios';

// const z30Son = () => ({
//   // The component to load. Should be a Promise
//   component: import('./AppGen3cSongs1.vue'),
// });
// import z40Son from './AppGen3cSongs2.vue';

export default {

  computed: {
    ...mapGetters({
    songsMaster: 'songsMasterGet',
    selSongs: 'selSongsGet',
    songsDetails: 'songsDetailsGet',
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
  // beforeUpdate() {
  mounted() {
    // this.loadSongs()
    this.$store.dispatch('songsDetailsAct',[this.filteredselSongs[0], this.itemspp3c])
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
      // to pass the isCollapsed as true when ever a page selection is passed. this avoids the error of not gettinf asyn call
      //isCollapsed : true
    };
  },

  methods: {
    ...mapActions([
      'itemspp3cAct',
      'selpage3cAct'
    ]),

    resetSongsDetails: function (payload) {
      // this.$store.dispatch('selpage3cAct',payload)
      this.$store.dispatch('songsDetailsAct',[this.filteredselSongs[0], this.itemspp3c])
    }

    // loadSongs: function () {
    //   //do something after creating vue instance
    //   //startAt = first item in filteredselSongs[0]
    //   //limitToFirst = length of filteredselSongs.length
    //   const a = this.filteredselSongs[0]
    //   const b = this.filteredselSongs.length
    //   this.xsongsDetails = []
    //   axios.get('https://temples-82a3c.firebaseio.com/mSongsDetails.json?orderBy="Id"&startAt=' + a + '&limitToFirst=' + b )
    //     .then(res => {
    //       console.log(res)
    //       const data = res.data
    //       for (let key in data) {
    //         if ( key !== null) {
    //           const sdetail = data[key]
    //           this.xsongsDetails.push(sdetail)
    //         }
    //       }
    //       console.log(this.xsongsDetails)})
    //     .catch(error => console.log(error))
    // }

  },

//  methods: {
// "itemspp = $event"
//    testitemspp: function (payload) {
//      this.itemspp = payload
//    }
//  }

}

</script>
