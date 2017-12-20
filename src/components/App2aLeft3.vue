<template>
  <div class=" card list-group dropdown">
    <!-- <nav class="navbar-primary">
      <a href="#" class="btn-expand-collapse"><span class="glyphicon glyphicon-menu-left"></span></a> -->
      <div class="card-header" id="FilterHeader">
        <h5 class="mb-0">
          <a data-toggle="collapse" href="#FilterItems" aria-expanded="true" aria-controls="FilterItems" @click.prevent="updatefilterCollapsed">
            Filters
          </a>
        </h5>
      </div>

      <div id="FilterItems" role="tablist" class="collapse show" aria-labelledby="FilterHead" data-parent="#FilterHead">
        <z30LeftCard name="States"></z30LeftCard>
        <z30LeftCard name="Saints"></z30LeftCard>
        <z30LeftCard name="Temples"></z30LeftCard>
      </div>
    <!-- </nav> -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import z30LeftCard from './App2aLeftCard.vue';

export default {
  components: {
    z30LeftCard,
  },

  methods: {
    ...mapActions([
      'updatefilterCollapsed'
    ])
  },

}

</script>

<style>
/*.navbar-primary {
  background-color: #333;
  bottom: 0px;
  left: 0px;
  position: absolute;
  top: 51px;
  width: 200px;
  z-index: 8;
  overflow: hidden;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

.navbar-primary.collapsed {
  width: 60px;
}

.navbar-primary.collapsed .glyphicon {
  font-size: 22px;
}

.navbar-primary.collapsed .nav-label {
  display: none;
}

.btn-expand-collapse {
    position: absolute;
    display: block;
    left: 0px;
    bottom:0;
    width: 100%;
    padding: 8px 0;
    border-top:solid 1px #666;
    color: grey;
    font-size: 20px;
    text-align: center;
}

.btn-expand-collapse:hover,
.btn-expand-collapse:focus {
    background-color: #222;
    color: white;
}

.btn-expand-collapse:active {
    background-color: #111;
}

*/

</style>
