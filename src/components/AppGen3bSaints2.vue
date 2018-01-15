<template>
  <div class="card-body">
    Saint details {{ details.Detail1 }}
    <br />
    Body {{ details.Detail2 }}
  </div>
</template>

<script>

export default {
  props: ['details']
}


</script>
