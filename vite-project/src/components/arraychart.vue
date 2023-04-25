<script setup>
import { ref, onMounted } from "vue";
import personcard from "../components/personcard.vue";
const deaths = ref("");
async function getdata() {
  try {
    let response = await fetch(
      "https://data.cityofnewyork.us/resource/jb7j-dtam.json"
    );
    let data = response.json;
    deaths.value = data.results;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => getdata());
</script>

<template>
  <div>
    <personcard
      v-for="(rate, year, cause) in deaths"
      :key="rate.age_adjusted_death_rate"
      :year="year.year"
      :cause="cause.leading_cause"
    />
  </div>
</template>

<style scoped></style>
