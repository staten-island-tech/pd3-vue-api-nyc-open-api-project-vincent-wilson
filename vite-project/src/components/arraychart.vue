<script setup>
import personcard from "../components/personcard.vue";
</script>
<script>
export default {
  data() {
    return {
      search: "",
      dataset: [],
    };
  },
  methods: {
    getdata() {
      const response = fetch(
        "https://data.cityofnewyork.us/resource/tg4x-b46p.json"
      );
      this.dataset = response.json;
    },
    filteredcate() {
      if (this.search.toLowerCase() === this.dataset.category.toLowerCase()) {
        this.dataset = dataset.filter((dataset) =>
          dataset.category.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },

  created() {
    this.getdata();
  },
};
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
      <li />
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
