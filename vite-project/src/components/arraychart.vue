<script setup>
import { ref, onMounted } from "vue";
const car = ref("");
async function getdata() {
  let data = await fetch(
    "https://data.cityofnewyork.us/resource/jb7j-dtam.json"
  );
  car.value = data.results;
}
onMounted(() => getdata());
</script>

<template>
  <div class="card">
    <h2>
      holy hell
      {{ car[1].sex }}
    </h2>
  </div>
</template>

<style scoped></style>
