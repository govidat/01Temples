<template>
  <div class="card">
    <div class="card-body" v-bind:class="{'col-lg-12 col-md-12 col-sm-12 col-xs-12': filterCollapsed}">
      <div v-if="nav2Sel == 2">
        <z30Sai></z30Sai>
      </div>
      <div v-else-if="nav2Sel == 3">
        <z30Tem></z30Tem>
      </div>
      <div v-else-if="nav2Sel == 4">
        <z30Son></z30Son>
      </div>
      <div v-else-if="nav2Sel == 5">
        <z30Con></z30Con>
      </div>
      <div v-else-if="nav2Sel == 6">
        <z30Fea></z30Fea>
      </div>
      <div v-else>
        <z30Gen></z30Gen>
      </div>
    </div>
  </div>
</template>

<script>
import z30Gen from './AppGen3.vue';
import z30Tem from './AppGen3aTemples.vue';
import z30Sai from './AppGen3bSaints.vue';
import z30Son from './AppGen3cSongs.vue';
import z30Con from './AppGen3dContact.vue';
import z30Fea from './AppGen3dFeatures.vue';

// Get the nav2Sel status from stores: If 0 display Home ; 1- Features ; 2 - appContact
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
    nav2Sel: 'nav2Sel',

    // get the value of filterCollapsed
    filterCollapsed: 'filterCollapsed',
    // picked: 'filterselected',
    }),
  },

  components: {
    z30Gen,
    z30Tem,
    z30Sai,
    z30Son,
    z30Con,
    z30Fea
  },

  methods: {
    ...mapActions([
    ])
  }

}
</script>
<style src="../css/carousel.css"></style>
