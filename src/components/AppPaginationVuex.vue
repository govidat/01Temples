<template>
<!-- This is the template of the parent component
<template>
  <div>
    <zpagin :totalItems=number :pagesToDisplay=pagesToDisplay @selectedipp="itemspp = $event" @selectedpage="selpage = $event" class="pagination-m"></zpagin>
</template> -->

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

          <!-- Option1 to choose items per page in a dropdown-menu -->
          <div class="btn-group ml-auto">
            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Per Page ({{itemspp}})
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" v-for="item in rangeipp" v-bind:class="{ active: item===itemspp}" href="#" @click="selectipp(item)">{{item}}</a>
            </div>
          </div>
        </ul>
        <!-- Option2 to choose items per page as a separate line with pagination -->
        <!-- <ul class="pagination">
          <li style="display: flex; justify-content:center; flex-direction:column;">Items per page</li>
          <li class="page-item" v-for="item in rangeipp" v-bind:class="{ active: item===itemspp}"><a class="page-link" href="#" @click="selectipp(item)">{{item}}</a></li>
        </ul> -->
      </nav>
    </div>
</template>

<script>
// parent script  import zpagin from './AppPagination.vue';
// parent script  components: { zpagin},
// parent script data: function() { return { itemspp: 10,selpage: 1,pagesToDisplay: 10,}}


export default {
  data: function() {
    return {
// initiated and sent up
      selpage: this.selpagePrnt,
      itemspp: this.itemsppPrnt,
// range to dsiplay for items per page
      rangeipp: this.rangeippPrnt,
// initiated for working in this comp
      rangestart: 1,
    };
  },

  computed: {
    totalPages: function() {
        return Math.ceil(this.totalItems / this.itemspp)
    },

    range: function() {
      // get an array called range like [1,2,3,...10]
      // return Array.from(new Array(this.pagesToDisplay), (x,i) => i + this.rangestart)
      // for the tail part, trying to get the Minimum of pagesToDisplay and the balance
      // Math.min(this.pagesToDisplay,(this.totalPages-this.rangestart+1))
            return Array.from(new Array(Math.min(this.pagesToDisplay,(this.totalPages-this.rangestart+1))), (x,i) => i + this.rangestart)
    },

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
      // if this.selpage is not in revised range, then this.selpage = this.rangestart and emit selpage
      if (this.range.indexOf(this.selpage) < 0) {
        this.selectpage(this.rangestart);
      };
    },

    selectpage(payload) {
      this.selpage = payload;
      this.$emit('selectedpage', this.selpage);
    },

    selectipp(payload) {
      this.itemspp = payload;
      this.$emit('selectedipp', this.itemspp);
      // change of items per page to reset the selepage to 1
      this.selectpage(1);
    },
  },
  props: ['totalItems', 'pagesToDisplay', 'itemsppPrnt', 'selpagePrnt', 'rangeippPrnt']
}
</script>
<style>
.resizedTextbox {width: 40px ; text-align: right}

</style>
