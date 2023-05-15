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
function filterDataother() {
  filteredDataset.value = dataset.value.filter((data) => {
    return data.category.toLowerCase() === "theater";
  });
}
onMounted(getData);
</script>

<template>
  <div>
    <h1 class="thing">List</h1>
    <div>
      <button @click="filterDatat()" class="clicker">Filter to tele</button>
      <button @click="filterDatac()" class="clicker">Filter to com</button>
      <button @click="filterDataother()" class="clicker">
        Filter to theater
      </button>
      <router-link to="/graph" class="clicker router">go to graphs</router-link>
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
.clicker {
  padding: 15px;
  background-color: blanchedalmond;
  border: none;
  margin: 2px;
}
.router {
  float: right;
  margin-right: 30px;
}
</style>
