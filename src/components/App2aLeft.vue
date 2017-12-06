<template>
  <div class=" card list-group dropdown">
    <div class="card-header">Selected Temples
      <span class="badge badge-primary badge-pill">{{statesMaster.length}}</span>
    </div>
    <div id="accordion" role="tablist">
      <div class="card">
        <div class="card-header" role="tab" id="headingOneSel">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#collapseOneSel" aria-expanded="true" aria-controls="collapseOneSel">
              Select States
            </a>
          </h5>
        </div>

        <div id="collapseOneSel" class="collapse show" role="tabpanel" aria-labelledby="headingOneSel" data-parent="#accordion">
          <div class="card-body form-group">
            <!-- if all states are selected, show the box as ticked and on click activate delAllStates with maxStates -->
            <input v-if="difStates.length===0" :checked="difStates.length===0" type="checkbox" id="idOne" @click="delStates(maxStates)">
            <!-- if NOT all states are selected , show the box as unticked and on click activate selAllStates with difStates -->
            <input v-else type="checkbox" id="idOne" @click="addStates(difStates)">
              <label for="idOne">Select All</label>
            <div class="dropdown-divider"></div>
              <li class="list-group-item" v-for="item in maxStates">
                <input v-if="selStates.indexOf(item) !== -1" :checked="selStates.indexOf(item) !== -1" type="checkbox" :id=item @click="delStates([item])">
                <input v-else type="checkbox" :id=item @click="addStates([item])">

                <label :for=item> {{ statesMaster.find(itm => itm.Id === item).Name }}</label>
              </li>
              <br>
              <div>
                <p>Max States: {{ maxStates }}</p>
                <p>Sel States: {{ selStates }}</p>
                <p>Dif States: {{ difStates }}</p>
              </div>

          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="headingTwoSel">
          <h5 class="mb-0">
            <a data-toggle="collapse" href="#collapseTwoSel" aria-expanded="true" aria-controls="collapseTwoSel">
              Select Saints
            </a>
          </h5>
        </div>
        <!-- <div id="collapseTwoSel" class="collapse" role="tabpanel" aria-labelledby="headingTwoSel" data-parent="#accordion">
          <div class="card-body form-group">
            <input v-if="difSaints.length===0" :checked="difSaints.length===0" type="checkbox" id="idTwo" @click="delSaints(maxSaints)">
            <input v-else type="checkbox" id="idTwo" @click="addSaints(difSaints)">

            <input type="checkbox" class="toggle" id="idTwo" :checked="selAllSaintsindicator" @click="selAllSaints">
              <label for="idTwo">Select All</label>
            <div class="dropdown-divider"></div>
            <span>Selected Saints Start: {{ selectedSaintsStart }}</span>

            <li class="list-group-item" v-for="item in selectedSaintsStart">
              <input type="checkbox" class="toggle" :checked="selectedSaints.indexOf(item) !== -1" :id=item+100 @click="updateSelSaints(item)">
              <label :for=item+100> {{ saintsMaster.find(itm => itm.Id === item).Name }}</label>
            </li>
            <br>
            <span>Selected Saints: {{ selectedSaints }}</span>
          </div>
        </div> -->
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

    maxStates: 'maxStatesGet',
    selStates: 'selStatesGet',
    difStates: 'difStatesGet',

    maxSaints: 'maxSaintsGet',
    selSaints: 'selSaintsGet',
    difSaints: 'difSaintsGet',


    selectedSaintsStart: 'selectedSaintsStartGet',
    selectedSaints: 'selectedSaintsGet',
    saintsMaster: 'saintsMasterGet',
    selAllSaintsindicator: 'selAllSaintsGet',

    // picked: 'filterselected',
    }),

  },


  components: {
    // z40States,
  },

  methods: {
    ...mapActions([

      'addStates',
      'delStates',

      'addSaints',
      'delSaints',

      'selAllSaints',
      'updateSelSaints',
    ]),

  }

}


</script>
