<script setup>
import personcard from "../components/personcard.vue";
import { ref, onMounted } from "vue";

const dataset = ref([]);
const filteredDataset = ref([]);

async function getData() {
  try {
    const response = await fetch(
      "https://data.cityofnewyork.us/resource/tg4x-b46p.json"
    );
    const data = await response.json();
    dataset.value = data;
    filteredDataset.value = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function filterDatat() {
  filteredDataset.value = dataset.value.filter((data) => {
    return data.category.toLowerCase() === "television";
  });
}
function filterDatac() {
  filteredDataset.value = dataset.value.filter((data) => {
    return data.category.toLowerCase() === "commercial";
  });
}
onMounted(getData);
</script>

<template>
  <div>
    <h1 class="thing">List</h1>
    <div>
      <button @click="filterDatat()">Filter to tele</button>
      <button @click="filterDatac()">Filter to com</button>
    </div>
    <div class="container">
      <personcard
        v-for="data in filteredDataset"
        :key="data.eventid"
        :id="data.eventid"
        :category="data.category"
        :event="data.subcategoryname"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  font-size: 15px;
}

.thing {
  font-size: 35px;
  text-align: center;
}
</style>
