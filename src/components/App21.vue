<template>
  <div class=" card list-group dropdown">
      <div id="FilterItems" role="tablist" class="collapse show" aria-labelledby="FilterHead" data-parent="#FilterHead">
        <z30LeftCard name="States"></z30LeftCard>
        <z30LeftCard name="Saints"></z30LeftCard>
        <z30LeftCard name="Temples"></z30LeftCard>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import z30LeftCard from './App21Card.vue';

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
<style></style>
