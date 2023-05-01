<script setup>
import { ref, onMounted, computed } from "vue";
import personcard from "../components/personcard.vue";
export default {
  computed: {
  filter() {
    if(this.dataset.category === "television"){

    }
  }
}
}
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

<template>
  <div class="container">
    <personcard
      v-for="data in dataset"
      :key="data.eventid"
      :id="data.eventid"
      :category="data.category"
      :event="data.eventtype"
    />
  </div>
</template>

<style scoped></style>
