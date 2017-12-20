<template>
  <div class="card">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="updatenav2Sel(0)">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Maps</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="updatenav2Sel(2)">Saints<span class="badge badge-primary badge-pill">{{ selSaints.length }}</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="updatenav2Sel(3)">Temples<span class="badge badge-primary badge-pill">{{ selTemples.length }}</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="updatenav2Sel(4)">Songs<span class="badge badge-primary badge-pill">{{ selSongs.length }}</span></a>
        </li>
        <li class="nav-item ml-auto">
          <a class="nav-link" href="#" @click.prevent="updatenav2Sel(5)">Contacts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="updatenav2Sel(6)">Features</a>
        </li>

        <!-- <li class="nav-item dropdown ml-auto">
          <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#" @click.prevent="updatenav2Sel(5)">Contacts</a>
            <a class="dropdown-item" href="#">Another action-H</a>
            <a class="dropdown-item" href="#">Something else here-H</a>
          </div>
        </li> -->

      <!-- </ul> -->
      </ul>

    </div>
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
      <!-- <h4 class="card-title">Content goes here</h4>
      <p class="card-text">As per selection of temples in the left, this content changes for every tab</p> -->
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
    selTemples: 'selTemplesGet',
    selSaints: 'selSaintsGet',
    selSongs: 'selSongsGet',

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
      'updatenav2Sel'
    ])
  }

}
</script>
<style src="../css/carousel.css"></style>
