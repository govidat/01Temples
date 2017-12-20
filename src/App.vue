<template>
  <!-- <div class="site-wrapper">
    <div class="site-wrapper-inner"> -->
      <div class="cover-container">
        <div class="container">
          <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <!-- <div class="row"> -->
                <z20Left></z20Left>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
              <!-- <div> -->
                <z20Right></z20Right>
              </div>
          </div>
              <footer class="mastfoot">
                <div class="inner">
                  <p> by <a href="https://twitter.com/govidat">govidat@</a>.</p>
                </div>
              </footer>
        </div>


      </div>
    <!-- </div>
  </div> -->



  <!-- <div> -->
    <!-- <z20Nav></z20Nav> -->
    <!-- <div class="container">
      <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <z20Left></z20Left>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
            <z20Right></z20Right>
          </div>
      </div>
    </div>

    <footer class="mastfoot">
      <div class="inner">
        <p> by <a href="https://twitter.com/govidat">govidat@</a>.</p>
      </div>
    </footer>

  </div> -->
</template>

<script>
  import z20Left from './components/App2aLeft.vue';
  import z20Right from './components/App2bRight.vue';

  export default {
    components: {
      z20Left,
      z20Right
    }
  }
</script>
<!-- <style src="./css/Component2.css"></style> -->
