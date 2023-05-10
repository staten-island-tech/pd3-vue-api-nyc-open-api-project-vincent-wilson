<script setup>
import personcard from "../components/personcard.vue";

const response = await fetch(
  "https://data.cityofnewyork.us/resource/tg4x-b46p.json"
);
const data = await response.json();
dataset.value = data;
console.log(data);
</script>

<template>
  <div class="thing">
    <h1>film permit data</h1>
    <input
      type="text"
      placeholder="search category"
      v-model="search"
      @keyup="getdata()"
    />
    <button @click="filteredcate()"></button>
    <div class="container">
      <li v-for="data in dataset" :key="data.eventid">
        id:{{ data.eventid }} category:{{ data.category }} type:{{
          data.subcategoryname
        }}
      </li>
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
