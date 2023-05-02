<script setup>
import { ref, onMounted } from "vue";
import personcard from "../components/personcard.vue";
import BarChart from "../components/barchart.vue";

const dataset = ref([]);

async function getdata() {
  try {
    const response = await fetch("/api/userlist");
    const data = await response.json();
    dataset.value = data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

onMounted(getdata());
</script>
wilson, make buttons that access graphs that display specific parts like a
piechart that compares the amount of comercial to televison or a bar graph of
how many are in each borough
<template>
  <div class="thing">
    <h1>film permit data</h1>
    <div class="container">
      <personcard
        v-for="data in dataset"
        :key="data.eventid"
        :id="data.eventid"
        :category="data.category"
        :event="data.subcategoryname"
      />
    </div>
  </div>
  <BarChart v-if="loaded" :data="chartData" />
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
