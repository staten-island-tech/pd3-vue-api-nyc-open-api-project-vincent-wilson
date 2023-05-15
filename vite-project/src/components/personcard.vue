<template>
  <div class="person-card">
    <h2>{{ id }}</h2>
    <p class="info">{{ category }}</p>
    <p class="info">{{ event }}</p>
  </div>
</template>

<script>
export default {
  props: {
    category: Object,
    event: Object,
    id: Number,
  },
};
</script>

<style scoped>
.person-card {
  display: inline-block;
  text-align: center;
  font-size: 16px;
  background-color: antiquewhite;
  padding: 5px;
  margin: 5px;
}

.info {
  margin: 5px 0;
}
</style>
