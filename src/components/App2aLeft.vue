<template>
  <div class=" card list-group dropdown">
    <div class="card-header">Filter
    </div>
    <div id="accordion" role="tablist">
      <z30LeftCard name="States"></z30LeftCard>
      <z30LeftCard name="Saints"></z30LeftCard>
      <z30LeftCard name="Temples"></z30LeftCard>
    </div>
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
}
</script>
