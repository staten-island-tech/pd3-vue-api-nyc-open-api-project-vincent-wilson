<template>
  <div class="card">
    <h1>eventid: {{ id }}, permit: {{ category }} type:{{ event }}</h1>
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
