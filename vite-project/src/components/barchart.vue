<template>
  <div></div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { onMounted } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null,
  }),
  async mounted() {
    this.loaded = false;

    try {
      const { api } = await fetch(
        "https://data.cityofnewyork.us/resource/tg4x-b46p.json"
      );
      this.chartdata = api;

      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};

onMounted(data());
</script>

<style scoped></style>
