<template>
  <div>
    <zpagin :totalItems=this.selSaints.length
    :pagesToDisplay=pagesToDisplay
    :itemsppPrnt=this.itemspp3b
    :selpagePrnt=this.selpage3b
    :rangeippPrnt=this.rangeippPrnt
    @selectedipp="itemspp3bAct($event)"
    @selectedpage="selpage3bAct($event)"
    class="pagination-m"></zpagin>

    <div id="accordionSaints" role="tablist">
  <!-- Have called components at a lower level as the accordion at this level is not functioning -->
      <div class="card" v-for="(item, index) in filteredselSaints">
        <!-- v-for="(item, index) - This index is used to show the first item as show - by default -->
        <div class="card-header" role="tab" :id="'headingSaints'+String(item)">
          <h5 class="mb-0">
            <a data-toggle="collapse" :href="'#'+'itemSaint'+String(item)" aria-expanded="true" :aria-controls="'itemSaint'+String(item)">
              <label :for="'headingSaints'+String(item)">
                Saint : {{ saintsDetails.find(itm => itm.Id === item).Name }}
              </label>
            </a>
          </h5>
        </div>

        <div :id="'itemSaint'+String(item)" class="collapse" :class="{ show: index===0}" role="tabpanel" :aria-labelledby="'headingSaints'+String(item)" data-parent="#accordionSaints">
          <!-- Show the details for each item -->
          <z40Sai :details="saintsDetails.find(itm => itm.Id === item)"></z40Sai>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import z40Sai from './AppGen3bSaints2.vue';
import zpagin from './AppPaginationVuex.vue';

export default {
  computed: {
    ...mapGetters({
    saintsMaster: 'saintsMasterGet',
    selSaints: 'selSaintsGet',
    saintsDetails: 'saintsDetailsGet',
    itemspp3b: 'itemspp3bGet',
    selpage3b: 'selpage3bGet',
    }),

    filteredselSaints: function() {
      // filtered items to be in the range of (this.selpage3c-1)*this.itemspp3c AND this.selpage3c*this.itemspp3c
      // return this.selSaints.filter(function(element, index) { return index >= (this.selpage3b-1)*this.itemspp3b && index < this.selpage3b*this.itemspp3b}, this)
      return this.selSaints.slice((this.selpage3b-1)*this.itemspp3b , this.selpage3b*this.itemspp3b)

    }


  },
  components: {
    z40Sai,
    zpagin
  },
  data: function() {
    return {
      pagesToDisplay: 10,
      rangeippPrnt: [2,5,10,20],
    };
  },

  methods: {
    ...mapActions([
      'itemspp3bAct',
      'selpage3bAct'
    ])
  },

}
</script>
