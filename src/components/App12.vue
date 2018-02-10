<template>
  <div class="card">
    <div class="card-header">
      <ul class="nav nav-pills card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#" data-toggle="pill" role="tab" aria-selected="true" @click.prevent="updatenav2Sel(0)">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" data-toggle="pill" role="tab" aria-selected="false">Maps</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="tab" role="pill" aria-selected="false" @click.prevent="updatenav2Sel(2)">Saints<span class="badge badge-primary badge-pill">{{ selSaints.length }}</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="tab" role="pill" aria-selected="false" @click.prevent="updatenav2Sel(3)">Temples<span class="badge badge-primary badge-pill">{{ selTemples.length }}</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="tab" role="pill" aria-selected="false" @click.prevent="updatenav2Sel(4)">Songs<span class="badge badge-primary badge-pill">{{ selSongs.length }}</span></a>
        </li>
        <li class="nav-item ml-auto">
          <a class="nav-link" href="#" data-toggle="tab" role="pill" aria-selected="false" @click.prevent="updatenav2Sel(5)">Contacts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-toggle="tab" role="pill" aria-selected="false" @click.prevent="updatenav2Sel(6)">Features</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

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
    }),
  },

  components: {
  },

  methods: {
    ...mapActions([
      'updatenav2Sel'
    ])
  }

}
</script>
