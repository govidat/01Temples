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
            <input type="checkbox" class="toggle" id="idOne" @click="selAllStates">
              <label for="idOne">Select All</label>
            <div class="dropdown-divider"></div>
              <li class="list-group-item" v-for="item in statesMaster">
                <input type="checkbox" class="toggle" :checked="selectedStates.indexOf(item.StateId) !== -1" :id=item.StateId @click="updateSelStates(item.StateId)">
                <label :for=item.StateId> {{ item.StateDesc }}</label>
              </li>
              <br>
              <span>Selected States: {{ selectedStates }}</span>
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
            <input type="checkbox" class="toggle" id="idTwo" :checked="selAllSaintsindicator" @click="selAllSaints">
              <label for="idTwo">Select All</label>
            <div class="dropdown-divider"></div>
            <span>Selected Saints Start: {{ selectedSaintsStart }}</span>

            <li class="list-group-item" v-for="item in selectedSaintsStart">
              <input type="checkbox" class="toggle" :checked="selectedSaints.indexOf(item) !== -1" :id=item @click="updateSelSaints(item)">
              <label :for=item> {{ saintsMaster.find(itm => itm.SaintId === item).SaintName }}</label>
            </li>
            <br>
            <span>Selected Saints: {{ selectedSaints }}</span>

            <!-- <li class="list-group-item" v-for="item in selectedSaints">
                {{ saintsMaster.find(itm => itm.SaintId === item).SaintName }}
            </li> -->

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
    selectedStates: 'selectedStatesGet',
    templesMaster: 'templesMasterGet',
    selAllStatesindicator: 'selAllStatesGet',
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
      'updateSelStates',
      'selAllStates',
      'selAllSaints',
      'updateSelSaints',
    ]),

  }

}


</script>
