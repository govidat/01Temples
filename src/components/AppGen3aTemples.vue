<template>
  <div id="accordionTemples" role="tablist">
<!-- Have called components at a lower level as the accordion at this level is not functioning -->
    <div class="card" v-for="(item, index) in selTemples">
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
</template>

<script>
import { mapGetters } from 'vuex';
import z40Tem from './AppGen3aTemples2.vue';

export default {
  computed: {
    ...mapGetters({
    templesMaster: 'templesMasterGet',
    selTemples: 'selTemplesGet',
    templesDetails: 'templesDetailsGet',
    // picked: 'filterselected',
    }),
  },
  components: {
    // z41Tem,
    z40Tem
  },


}


</script>
