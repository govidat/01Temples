<template>
  <div>
    <zpagin :totalItems=this.selTemples.length
    :pagesToDisplay=pagesToDisplay
    :itemsppPrnt=this.itemspp3a
    :selpagePrnt=this.selpage3a
    :rangeippPrnt=this.rangeippPrnt
    @selectedipp="itemspp3aAct($event)"
    @selectedpage="selpage3aAct($event)"
    class="pagination-m"></zpagin>

    <div id="accordionTemples" role="tablist">
  <!-- Have called components at a lower level as the accordion at this level is not functioning -->
      <div class="card" v-for="(item, index) in filteredselTemples">
        <!-- v-for="(item, index) - This index is used to show the first item as show - by default -->
        <div class="card-header" role="tab" :id="'headingTemples'+String(item)">
          <h5 class="mb-0">
            <a data-toggle="collapse" :href="'#'+'itemTemple'+String(item)" aria-expanded="true" :aria-controls="'itemTemple'+String(item)">
              <label :for="'headingTemples'+String(item)">
                 Temple : {{ item }}  {{templesMaster.find(itm => itm.Id === item).Name }}
               </label>
            </a>
          </h5>
        </div>

        <div :id="'itemTemple'+String(item)" class="collapse" :class="{ show: index===0}" role="tabpanel" :aria-labelledby="'headingTemples'+String(item)" data-parent="#accordionTemples">
          <!-- Show the details for each item -->
          <z40Tem :details="templesDetails.find(itm => itm.Id === item)"></z40Tem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import z40Tem from './AppGen3aTemples2.vue';
import zpagin from './AppPaginationVuex.vue';

export default {
  computed: {
    ...mapGetters({
    templesMaster: 'templesMasterGet',
    selTemples: 'selTemplesGet',
    templesDetails: 'templesDetailsGet',
    // picked: 'filterselected',
    itemspp3a: 'itemspp3aGet',
    selpage3a: 'selpage3aGet',
    }),

    filteredselTemples: function() {
      // filtered items to be in the range of (this.selpage3c-1)*this.itemspp3c AND this.selpage3c*this.itemspp3c
      // return this.selTemples.filter(function(element, index) { return index >= (this.selpage3a-1)*this.itemspp3a && index < this.selpage3a*this.itemspp3a}, this)
      return this.selTemples.slice((this.selpage3a-1)*this.itemspp3a, this.selpage3a*this.itemspp3a)

    }
  },
  components: {
    // z41Tem,
    z40Tem,
    zpagin
  },

  data: function() {
    return {
      pagesToDisplay: 10,
      rangeippPrnt: [2,5,10],
    };
  },

  methods: {
    ...mapActions([
      'itemspp3aAct',
      'selpage3aAct'
    ])
  },


}


</script>
