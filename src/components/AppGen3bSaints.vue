<template>
  <div id="accordionSaints" role="tablist">
    <div class="card" v-for="(item, index) in selSaints">
      <div class="card-header" role="tab" :id="'headingSaints'+String(item)">
        <h5 class="mb-0">
          <a data-toggle="collapse" :href="'#'+'itemSaint'+String(item)" aria-expanded="true" :aria-controls="'itemSaint'+String(item)">
          <!-- <a data-toggle="collapse" :href=String(#)+String(temple+2000) aria-expanded="true" :aria-controls=temple+2000> -->
            <label :for="'headingSaints'+String(item)"> Saint : {{ saintsDetails.find(itm => itm.Id === item).Name }}</label>
          </a>
        </h5>
      </div>

      <div :id="'itemSaint'+String(item)" class="collapse" :class="{ show: index===0}" role="tabpanel" :aria-labelledby="'headingSaints'+String(item)" data-parent="#accordionSaints">
      <!-- <div :id=temple+2000 class="collapse show" role="tabpanel" :aria-labelledby=temple+2000 data-parent="#accordion"> -->
        <div class="card-body">
          Saint details {{ saintsDetails.find(itm => itm.Id === item).Detail1 }}
          <br />
          Body {{ saintsDetails.find(itm => itm.Id === item).Detail2 }}
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
    saintsMaster: 'saintsMasterGet',
    selSaints: 'selSaintsGet',
    saintsDetails: 'saintsDetailsGet',
    }),
  },

}


</script>
