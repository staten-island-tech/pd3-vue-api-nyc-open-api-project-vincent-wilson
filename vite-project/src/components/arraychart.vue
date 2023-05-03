<script setup>
import { ref, onMounted, computed } from "vue";
import personcard from "../components/personcard.vue";

const dataset = ref([]);

async function getdata() {
  try {
    const response = await fetch(
      "https://data.cityofnewyork.us/resource/tg4x-b46p.json"
    );
    const data = await response.json();
    dataset.value = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

onMounted(getdata());
</script>
<script>
export default {
  computed: {
    filteredcate() {
      if (this.dataset) {
        return this.dataset.filter((dataset) => {
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
    };
  },
};
</script>

<template>
  <div class="thing">
    <h1>film permit data</h1>
    <input type="text" placeholder="search category" v-model="search" />
    <div class="container">
      <li v-for="data in filteredcate" :key="data.eventid">
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
