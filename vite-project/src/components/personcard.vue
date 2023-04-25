<template>
  <div class="card">
    <h2>holy hell {{ deaths.name }}</h2>
  </div>
</template>

<script setup>
const prop = defineProps({
  age: Object,
  year: Number,
  cause: Object,
});
</script>

<style lang="scss" scoped></style>
