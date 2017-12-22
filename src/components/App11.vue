<template>
  <div class="card">
    <h5 class="mb-0">
      <button class="btn btn-block btn-primary" @click.prevent="updatefilterCollapsed">
        Selections <i  :class="{'fa fa-arrow-down fa-lg': filterCollapsed , 'fa fa-arrow-up fa-lg': !filterCollapsed }"></i>
      </button>

    </h5>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
      // get the value of filterCollapsed
      filterCollapsed: 'filterCollapsed',
      }),
    },

    components: {
    },

    methods: {
      ...mapActions([
        'updatefilterCollapsed'
      ]),
    }
  }
</script>
