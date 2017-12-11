<template>
  <div id="accordionTemples" role="tablist">
    <div class="card" v-for="(item, index) in selTemples">
      <!-- v-for="(item, index) - This index is used to show the first item as show - by default -->
      <div class="card-header" role="tab" :id="'headingTemples'+String(item)">
        <!-- :id="'headingTemples'+String(item)" - This is used to make the id unique across all components -->
        <h5 class="mb-0">
          <a data-toggle="collapse" :href="'#'+'itemTemple'+String(item)" aria-expanded="true" :aria-controls="'itemTemple'+String(item)">
            <label :for="'headingTemples'+String(item)">
               Temple : {{ item }}  {{ templesDetails.find(itm => itm.Id === item).Name }}
             </label>
          </a>
        </h5>
      </div>

      <div :id="'itemTemple'+String(item)" class="collapse" :class="{ show: index===0}" role="tabpanel" :aria-labelledby="'headingTemples'+String(item)" data-parent="#accordionTemples">
      <!-- <div :id=item+2000 class="collapse show" role="tabpanel" :aria-labelledby=item+2000 data-parent="#accordion"> -->
        <div class="card-body">
          Temple details {{ templesDetails.find(itm => itm.Id === item).Detail1 }}
          <br />
          Body {{ templesDetails.find(itm => itm.Id === item).Detail2 }}
        </div>
      </div>
    </div>

  </div>



</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
    templesMaster: 'templesMasterGet',
    selTemples: 'selTemplesGet',
    templesDetails: 'templesDetailsGet',
    // picked: 'filterselected',
    }),
  },

}


</script>
