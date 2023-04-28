<template>
  <div class="card">
    <h2>id: {{ id }}</h2>
    <h3>category:{{ category }}, type:{{ event }}</h3>
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

<style scoped>
.card {
  background-color: beige;
  text-align: center;
  margin-left: 45rem;
  margin-right: 45rem;
}
</style>
