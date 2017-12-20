<template>
  <!-- <div class="site-wrapper">
    <div class="site-wrapper-inner"> -->
      <div class="cover-container">
        <div class="container">
          <div class="row">
<!-- Left1 -->

              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <button class="btn btn-warning" @click.prevent="toggle3">Toggle Filter </button>
              </div>
<!-- Right2 -->
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
              <!-- <div> -->
                <z20Right2></z20Right2>
              </div>
          </div>

          <div class="row">
<!-- Left3               -->
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="sidebar">
              <!-- <div class="row"> -->
                <z20Left></z20Left>
              </div>
<!-- Right4               -->
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9" id="mainbar">
              <!-- <div> -->
                <z20Right4></z20Right4>
              </div>
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
  import z20Left from './components/App2aLeft3.vue';
  import z20Right2 from './components/App2bRight2.vue';
  import z20Right4 from './components/App2bRight4.vue';

  export default {
    components: {
      z20Left,
      z20Right2,
      z20Right4
    },
    methods: {
      toggle3: function() {
        document.getElementById('sidebar').classList.toggle('d-none')
        document.getElementById('mainbar').classList.toggle('col-lg-9')
        document.getElementById('mainbar').classList.toggle('col-lg-12')
      }
    }
  }
</script>
<!-- <style src="./css/Component2.css"></style> -->
