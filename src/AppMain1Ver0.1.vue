<template>
  <div class="site-wrapper">
    <div class="site-wrapper-inner">
      <div class="cover-container">
        <appMast></appMast>
        <div v-if="nav1Sel == 1">
          <appFeatures></appFeatures>
        </div>
        <div v-else-if="nav1Sel == 2">
          <appContact></appContact>
        </div>
        <div v-else>
          <appHome></appHome>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import appMast from './components/App1aMast.vue';
  import appHome from './components/App1bHome.vue';
  import appFeatures from './components/App1cFeatures.vue';
  import appContact from './components/App1dContact.vue';

// Get the nav1Sel status from stores: If 0 display Home ; 1- Features ; 2 - appContact
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
      nav1Sel: 'nav1Sel',
      // picked: 'filterselected',
      }),
    },

    components: {
      appMast,
      appHome,
      appFeatures,
      appContact
    }
  }
</script>
<style src="./css/cover.css">

</style>
