<template>
      <div class="card">
        <div class="card-header" role="tab" :id="'heading'+name">
          <h5 class="mb-0">
            <button class="btn btn-block btn-secondary" data-toggle="collapse" :href="'#items'+name" aria-expanded="true" :aria-controls="'items'+name">
              <!-- <i class="fa fa-arrows-v fa-lg"></i> -->
              Select {{ name }}
            </button>
          </h5>
        </div>
        <div :id="'items'+name" class="collapse" :class="{ show: name==='States'}" role="tabpanel" aria-labelledby="'heading'+name" data-parent="#FilterItems">
          <div class="card-body form-group">
            <!-- If the previois selecton option is deselect all, then the subsequent selection screen should displya a message -->
            <div v-if="mapName.get('max').length===0">
              <label>Select atleast one from previous </label>
            </div>
            <div v-else>
              <!-- if all options are selected, show the box as ticked and on click activate delAll with maxXXX -->
              <input v-if="mapName.get('max').length===mapName.get('sel').length" :checked="mapName.get('max').length===mapName.get('sel').length" type="checkbox" :id="'idOne'+name" @click="delX([mapName.get('max'), name])">
              <!-- if NOT all options are selected , show the box as unticked and on click activate selAllXXX -->
              <input v-else type="checkbox" :id="'idOne'+name" @click="addX([mapName.get('max'), name])">
                <label :for="'idOne'+name">Select/ Deselect All</label>
              <div class="dropdown-divider"></div>
              <li class="list-group-item" v-for="item in mapName.get('max')">
                  <input v-if="mapName.get('sel').indexOf(item) !== -1" :checked="mapName.get('sel').indexOf(item) !== -1" type="checkbox" :id="name+String(item)" @click="delX([[item],name])">
                  <input v-else type="checkbox" :id="name+String(item)" @click="addX([[item],name])">
                  <label :for="name+String(item)"> {{ mapName.get('master').find(itm => itm.Id === item).Name }}</label>
              </li>
            </div>
            <!-- <br>
            <div>
                <p>Max : {{ name }} {{ mapName.get('max') }}</p>
                <p>Sel : {{ name }} {{ mapName.get('sel') }}</p>
            </div> -->
          </div>
        </div>
      </div>

</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  // using the Map set and get function to refer subsequently - DRY and call all Selection Options in a loop
 function derivemapName() {
   var mapName = new Map();
   // update this for any addition
   if (this.name === 'States') {
   return mapName.set('max', this.maxStates).set('sel', this.selStates).set('master', this.statesMaster);
   } else if (this.name === 'Saints') {
   return mapName.set('max', this.maxSaints).set('sel', this.selSaints).set('master', this.saintsMaster);
   } else if (this.name === 'Temples') {
   return mapName.set('max', this.maxTemples).set('sel', this.selTemples).set('master', this.templesMaster);
   };
 }

export default {
  props: ['name'],

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

    mapName:  derivemapName,
  },

  methods: {
    ...mapActions([
      'addX',
      'delX',
    ]),

  },

}
</script>

<style lang="css">
</style>
