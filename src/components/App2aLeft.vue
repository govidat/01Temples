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
            <input v-if="difStates.length===0" :checked="difStates.length===0" type="checkbox" id="idOne" @click="delX([maxStates, 'States'])">
            <!-- if NOT all states are selected , show the box as unticked and on click activate selAllStates with difStates -->
            <input v-else type="checkbox" id="idOne" @click="addX([difStates, 'States'])">
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
        <div id="collapseTwoSel" class="collapse" role="tabpanel" aria-labelledby="headingTwoSel" data-parent="#accordion">
          <div class="card-body form-group">
            <input v-if="difSaints.length===0" :checked="difSaints.length===0" type="checkbox" id="idTwo" @click="delX([maxSaints, 'Saints'])">
            <input v-else type="checkbox" id="idTwo" @click="addX([difSaints, 'Saints'])">
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
                <p>Dif Saints: {{ difSaints }}</p>
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
    difStates: 'difStatesGet',

    maxSaints: 'maxSaintsGet',
    selSaints: 'selSaintsGet',
    difSaints: 'difSaintsGet',


//    selectedSaintsStart: 'selectedSaintsStartGet',
//    selectedSaints: 'selectedSaintsGet',

//    selAllSaintsindicator: 'selAllSaintsGet',

    // picked: 'filterselected',
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
