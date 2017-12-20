<template>
  <div id="accordionSongs" role="tablist">
    <div class="card" v-for="(item, index) in selSongs">
      <div class="card-header" role="tab" :id="'headingSongs'+String(item)">
        <h5 class="mb-0">
            <!-- data-target="#multiCollapseExample2" aria-expanded="false"  -->
          <a data-toggle="collapse" :href="'#'+'itemSong'+String(item)" aria-expanded="true" :aria-controls="'itemSong'+String(item)">
            Song # {{ item }}
          </a>
        </h5>
      </div>
      <div :id="'itemSong'+String(item)" class="collapse" :class="{ show: index===0}" role="tabpanel" :aria-labelledby="'headingSongs'+String(item)" data-parent="#accordionSongs">
        <div class="card-body">
          Song Details {{ item }}
          <div class="card-header" role="tab" :id="'subheading1Songs'+String(item)">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" :href="'#'+'subitem1Song'+String(item)" aria-expanded="false" :aria-controls="'subitem1Song'+String(item)">
                Song # {{ item }} .1 - Transileteration
              </a>
            </h5>
          </div>
          <!-- <div id="collapseOnedotOne" class="collapse" role="tabpanel" aria-labelledby="headingOnedotOne" data-parent="#accordionTemples"> -->
          <div :id="'subitem1Song'+String(item)" class="collapse" role="tabpanel" :aria-labelledby="'subheading1Songs'+String(item)" :data-parent="'#'+'headingSongs'+String(item)">
            <div class="card-body">
              Song # {{ item }} .1 Transileteration Details.
            </div>
          </div>
          <div class="card-header" role="tab" :id="'subheading2Songs'+String(item)">
            <h5 class="mb-0">
              <a class="collapsed" data-toggle="collapse" :href="'#'+'subitem2Song'+String(item)" aria-expanded="false" :aria-controls="'subitem2Song'+String(item)">
                Song # {{ item }} .2 - Tamil language explanation
              </a>
            </h5>
          </div>
          <div :id="'subitem2Song'+String(item)" class="collapse" role="tabpanel" :aria-labelledby="'subheading2Songs'+String(item)" :data-parent="'#'+'headingSongs'+String(item)">
            <div class="card-body">
              Song {{ item }} .2 Tamil Explanantion Anim pariatur
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="card">
      <div class="card-header" role="tab" id="headingTwo">
        <h5 class="mb-0">
          <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Saint details #2
          </a>
        </h5>
      </div>
      <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordionTemples">
        <div class="card-body">
          Collapse 2 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" role="tab" id="headingThree">
        <h5 class="mb-0">
          <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Saint details #3
          </a>
        </h5>
      </div>
      <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordionTemples">
        <div class="card-body">
          Collapse 3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
    songsMaster: 'songsMasterGet',
    selSongs: 'selSongsGet',
    songsDetails: 'songsDetailsGet',
    // picked: 'filterselected',
    }),
  },

}
</script>
