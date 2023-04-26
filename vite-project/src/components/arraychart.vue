<script setup>
import { ref, onMounted } from "vue";
import personcard from "../components/personcard.vue";

const dataset = ref([]);

async function getdata() {
  try {
    const response = await fetch(
      "https://data.cityofnewyork.us/resource/jb7j-dtam.json"
    );
    const data = await response.json();
    dataset.value = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

onMounted(getdata);
</script>

<template>
  <div class="container">
    <personcard
      v-for="(data, index) in dataset"
      :key="index"
      :year="data.year"
      :cause="data.leading_cause"
      :sex="data.sex"
    />
  </div>
</template>

<style scoped></style>
