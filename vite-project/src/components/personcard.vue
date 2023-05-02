<template>
  <div>
    <div class="card">
      <h1>{{ id }} {{ category }} {{ event }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
    id: Number,
    category: Object,
  },
};
</script>

<style scoped></style>
