<template>

      <!-- <div class="site-wrapper">

        <div class="site-wrapper-inner">

          <div class="cover-container"> -->
          <div>
            <header class="masthead clearfix">
              <div class="inner">
                <h3 class="masthead-brand">Tirukovilgal</h3>
                <nav class="nav nav-masthead">
                  <a class="nav-link" @click.prevent="updatenav1Sel(0)">Home</a>
                  <a class="nav-link" @click.prevent="updatenav1Sel(1)">Features</a>
                  <a class="nav-link" @click.prevent="updatenav1Sel(2)">Contact</a>
                </nav>
              </div>
            </header>


            <footer class="mastfoot">
              <div class="inner">
                <p> by <a href="https://twitter.com/govidat">govidat@</a>.</p>
              </div>
            </footer>

          </div>

          <!-- </div>

        </div>

      </div> -->

</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'updatenav1Sel'
      ])
    }
  }

</script>
<!-- <style src="./css/cover.css"></style> -->
