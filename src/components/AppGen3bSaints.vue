<template>
  <div id="accordionSaints" role="tablist">
<!-- Have called components at a lower level as the accordion at this level is not functioning -->
    <div class="card" v-for="(item, index) in selSaints">
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
</template>

<script>
import { mapGetters } from 'vuex';
import z40Sai from './AppGen3bSaints2.vue';

export default {
  computed: {
    ...mapGetters({
    saintsMaster: 'saintsMasterGet',
    selSaints: 'selSaintsGet',
    saintsDetails: 'saintsDetailsGet',
    }),
  },
  components: {
    z40Sai
  },
}
</script>
