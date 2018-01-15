<template>
  <div class="card-body">
    Temple details {{ details.Detail1 }}
    <br />
    Body {{ details.Detail2 }}
  </div>
</template>

<script>

export default {
  props: ['details']
}


</script>
