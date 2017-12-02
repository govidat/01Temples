<template>
  <div class="site-wrapper">
    <div class="site-wrapper-inner">
      <div class="cover-container">
        <appMast></appMast>
        <appHome></appHome>
      </div>
    </div>
  </div>
</template>

<script>
  import appMast from './components/App1aMast.vue';
  import appHome from './components/App1bHome.vue';
  import appFeatures from './components/App1cFeatures.vue';
  import appContact from './components/App1dContact.vue';

  export default {
    components: {
      appMast,
      appHome,
      appFeatures,
      appContact
    }
  }
</script>
<style src="./css/cover.css"></style>
