<template>
  <div class="card">
    <h1>{{ year }} {{ cause }} {{ sex }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    sex: Object,
    race: Object,
    year: Number,
    cause: Object,
  },
};
</script>

<style scoped></style>
