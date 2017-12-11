<template>
  <div class=" card list-group dropdown">
    <div class="card-header">Filter
      <!-- <span class="badge badge-primary badge-pill">{{statesMaster.length}}</span> -->
    </div>
    <div id="accordion" role="tablist">
      <div class="card">
        <div class="card-header" role="tab" id="headingStates">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#itemsStates" aria-expanded="true" aria-controls="itemsStates">
              Select States
            </a>
          </h5>
        </div>

        <div id="itemsStates" class="collapse show" role="tabpanel" aria-labelledby="headingStates" data-parent="#accordion">
          <div class="card-body form-group">
            <!-- if all states are selected, show the box as ticked and on click activate delAllStates with maxStates -->
            <input v-if="maxStates.length===selStates.length" :checked="maxStates.length===selStates.length" type="checkbox" id="idOne" @click="delX([maxStates, 'States'])">
            <!-- if NOT all states are selected , show the box as unticked and on click activate selAllStates -->
            <input v-else type="checkbox" id="idOne" @click="addX([maxStates, 'States'])">
              <label for="idOne">Select All</label>
            <div class="dropdown-divider"></div>
            <li class="list-group-item" v-for="item in maxStates">
                <input v-if="selStates.indexOf(item) !== -1" :checked="selStates.indexOf(item) !== -1" type="checkbox" :id=item @click="delX([[item],'States'])">
                <input v-else type="checkbox" :id=item @click="addX([[item],'States'])">
                <label :for=item> {{ statesMaster.find(itm => itm.Id === item).Name }}</label>
            </li>
            <br>
            <div>
                <p>Max States: {{ maxStates }}</p>
                <p>Sel States: {{ selStates }}</p>
            </div>

          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="headingSaints">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#itemsSaints" aria-expanded="true" aria-controls="itemsSaints">
              Select Saints
            </a>
          </h5>
        </div>
        <div id="itemsSaints" class="collapse" role="tabpanel" aria-labelledby="headingSaints" data-parent="#accordion">
          <div class="card-body form-group">
            <input v-if="maxSaints.length===selSaints.length" :checked="maxSaints.length===selSaints.length" type="checkbox" id="idTwo" @click="delX([maxSaints, 'Saints'])">
            <input v-else type="checkbox" id="idTwo" @click="addX([maxSaints, 'Saints'])">
              <label for="idTwo">Select All</label>
            <div class="dropdown-divider"></div>
            <li class="list-group-item" v-for="item in maxSaints">
              <input v-if="selSaints.indexOf(item) !== -1" :checked="selSaints.indexOf(item) !== -1" type="checkbox" :id=item+100 @click="delX([[item],'Saints'])">
              <input v-else type="checkbox" :id=item+100 @click="addX([[item], 'Saints'])">
              <label :for=item+100> {{ saintsMaster.find(itm => itm.Id === item).Name }}</label>
            </li>
            <br>
            <div>
                <p>Max Saints: {{ maxSaints }}</p>
                <p>Sel Saints: {{ selSaints }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="headingTemples">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#itemsTemples" aria-expanded="true" aria-controls="itemsTemples">
              Select Temples
            </a>
          </h5>
        </div>
        <div id="itemsTemples" class="collapse" role="tabpanel" aria-labelledby="headingTemples" data-parent="#accordion">
          <div class="card-body form-group">
            <input v-if="maxTemples.length===selTemples.length" :checked="maxTemples.length===selTemples.length" type="checkbox" id="idThree" @click="delX([maxTemples, 'Temples'])">
            <input v-else type="checkbox" id="idThree" @click="addX([maxTemples, 'Temples'])">
              <label for="idThree">Select All</label>
            <div class="dropdown-divider"></div>
            <li class="list-group-item" v-for="item in maxTemples">
              <input v-if="selTemples.indexOf(item) !== -1" :checked="selTemples.indexOf(item) !== -1" type="checkbox" :id=item+100 @click="delX([[item],'Temples'])">
              <input v-else type="checkbox" :id=item+1000 @click="addX([[item], 'Temples'])">
              <label :for=item+1000> {{ templesMaster.find(itm => itm.Id === item).Name }}</label>
            </li>
            <br>
            <div>
                <p>Max Temples: {{ maxTemples }}</p>
                <p>Sel Temples: {{ selTemples }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
// Get the statesMaster from stores:
// Push the selectedStatesMaster from this selection above
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';


export default {

  computed: {
    ...mapGetters({
    statesMaster: 'statesMasterGet',
    templesMaster: 'templesMasterGet',
    saintsMaster: 'saintsMasterGet',

    maxStates: 'maxStatesGet',
    selStates: 'selStatesGet',

    maxSaints: 'maxSaintsGet',
    selSaints: 'selSaintsGet',

    maxTemples: 'maxTemplesGet',
    selTemples: 'selTemplesGet',

    }),

  },


  components: {
    // z40States,
  },

  methods: {
    ...mapActions([

      'addX',
      'delX',

//      'selAllSaints',
//      'updateSelSaints',
    ]),

  }

}


</script>
