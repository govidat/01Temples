<template>
  <!-- <div>
      {{ itemno}} {{ details.Alvar}} / {{details.Comp}} / {{ details.TamAlvar}} / {{details.TamComp}}
  </div> -->
  <div class="card-header" role="tab" :id="'headingSongs'+String(itemno)">
    <h5 class="mb-0">
      <a data-toggle="collapse" :href="'#'+'itemSong'+String(itemno)" aria-expanded="true" :aria-controls="'itemSong'+String(itemno)">
        Song # {{ itemno }} : {{ details.Alvar}} / {{details.Comp}} / {{ details.TamAlvar}} / {{details.TamComp}}
      </a>
    </h5>
  </div>
</template>

<script>

export default {
  props: ['details', 'itemno']
}

</script>
