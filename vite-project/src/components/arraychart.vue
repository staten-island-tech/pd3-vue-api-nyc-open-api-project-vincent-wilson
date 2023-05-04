<script setup>
import personcard from "../components/personcard.vue";
</script>
<script>
export default {
  methods: {
    getdata() {
      fetch("https://data.cityofnewyork.us/resource/tg4x-b46p.json")
        .then((response) => response.json())
        .then((res) => {
          if (this.search) {
            this.dataset = res.results.filter((dataset) =>
              dataset.category.toLowerCase().includes(this.search.toLowerCase())
            );
          } else {
            this.people = res.results;
          }
        });
    },
  },
  computed: {
    filteredcate() {
      if (this.dataset) {
        this.dataset.filter((dataset) => {
          return dataset.category
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      }
      return false;
    },
  },
  data() {
    return {
      search: "",
      dataset: [],
    };
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
