<template>
  <div class="container">
    <router-link to="/" class="router">go back</router-link>
    <router-link to="/graph2" class="router">go to next graph</router-link>
    <Bar v-if="loaded" :data="chartData" />
  </div>
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
      const response = await fetch(
        "https://data.cityofnewyork.us/resource/tg4x-b46p.json"
      );
      const data = await response.json();

      const categoryCounts = [];
      data.forEach((thing) => {
        const category = thing.category;
        const amount = categoryCounts.findIndex(
          (entry) => entry.category === category
        );
        if (amount !== -1) {
          categoryCounts[amount].count++;
        } else {
          categoryCounts.push({ category, count: 1 });
        }
      });

      this.chartData = {
        labels: categoryCounts.map((entry) => entry.category),
        datasets: [
          {
            label: "Category Counts",
            backgroundColor: "rgba(173, 173, 173)",
            data: categoryCounts.map((entry) => entry.count),
          },
        ],
      };

      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
.router {
  padding: 15px;
  background-color: blanchedalmond;
  border: none;
  margin: 2px;
}
</style>
