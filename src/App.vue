<template>
  <!-- <div class="site-wrapper">
    <div class="site-wrapper-inner"> -->
      <div class="cover-container">
        <div class="container">
          <div class="row">
<!-- Qtr 11 -->
            <div class="card-header col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <z20Q11></z20Q11>
            </div>

<!-- Qtr 12 -->
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                <z20Q12></z20Q12>
              </div>
          </div>

          <div class="row">
<!-- Qtr 21               -->
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" :class="{'d-none': filterCollapsed}">
                <z20Q21></z20Q21>
              </div>
<!-- Qtr 22               -->
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9" :class="{'col-lg-12 col-md-12 col-sm-12 col-xs-12': filterCollapsed}">
                <z20Q22></z20Q22>
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
</template>

<script>
  import z20Q11 from './components/App11.vue';
  import z20Q12 from './components/App12.vue';
  import z20Q21 from './components/App21.vue';
  import z20Q22 from './components/App22.vue';

  import { mapGetters } from 'vuex';

  export default {

    computed: {
      ...mapGetters({
      // get the value of filterCollapsed
      filterCollapsed: 'filterCollapsed',
      }),
    },
    components: {
      z20Q11,
      z20Q12,
      z20Q21,
      z20Q22
    },
  }
</script>
