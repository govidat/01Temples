<template>
    <div>
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <!-- Surrounding parts to tbe visible only if the length is more than the range -->
          <template v-if="totalPages > pagesToDisplay">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="First" @click="resetstart(0)">
                <span aria-hidden="true">&par;&LessLess;</span>
                <span class="sr-only">First</span></a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous" @click="resetstart(1)">
                <span aria-hidden="true">&lt;</span>
                <span class="sr-only">Previous</span></a></li>
          </template>

          <li class="page-item" v-for="item in range" v-bind:class="{ active: item===selpage}"><a class="page-link" href="#" @click="selectpage(item)">{{item}}</a></li>

          <!-- to keep the width standard - pushing some blank cells. This is for the tail of the list
              This to be executed only if totalPages > pagesToDisplay-->
          <li class="page-item" v-if="totalPages > pagesToDisplay" v-for="i in pagesToDisplay-range.length"><a class="page-link" href="#">-</a></li>
          <!-- Surrounding parts to tbe visible only if the length is more than the range -->
          <template v-if="totalPages > pagesToDisplay">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next" @click="resetstart(2)">
                <span aria-hidden="true">&gt;</span>
                <span class="sr-only">Next</span></a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Last" @click="resetstart(3)">
                <span aria-hidden="true">&GreaterGreater;&par; ({{totalPages}})</span>
                <span class="sr-only">End({{totalPages}})</span></a></li>

            <li style="display: flex; justify-content:center; flex-direction:column;">Go to</li>
            <input v-model.number="rangestart" type="number" class="resizedTextbox" min="1" max="totalPages">
          </template>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      selpage: 1,
      rangestart: 1,
      // pagesToDisplay: 10,
    };
  },

  computed: {
    range: function() {
      // get an array called range like [1,2,3,...10]
      // return Array.from(new Array(this.pagesToDisplay), (x,i) => i + this.rangestart)
      // for the tail part, trying to get the Minimum of pagesToDisplay and the balance
      // Math.min(this.pagesToDisplay,(this.totalPages-this.rangestart+1))
            return Array.from(new Array(Math.min(this.pagesToDisplay,(this.totalPages-this.rangestart+1))), (x,i) => i + this.rangestart)
    }
  },

  methods: {
    resetstart(payload) {
      if (payload === 0) {
      this.rangestart = 1;
      } else if (payload === 1) {
        this.rangestart = Math.max(this.rangestart - this.pagesToDisplay , 1);
      } else if (payload === 2) {
        this.rangestart = Math.min(this.rangestart + this.pagesToDisplay , this.totalPages - this.pagesToDisplay + 1);
      } else if (payload === 3) {
        this.rangestart = Math.max(this.totalPages - this.pagesToDisplay +1 , 1);
      };
    },

    selectpage(payload) {
      this.selpage = payload;
      this.$emit('selectedpage', this.selpage);
    }
  },
  props: ['totalPages', 'pagesToDisplay']
}
</script>
<style>
.resizedTextbox {width: 40px ; text-align: right}

</style>
