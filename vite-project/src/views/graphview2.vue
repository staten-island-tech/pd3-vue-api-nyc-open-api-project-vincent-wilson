<template>
  <div class="container">
    <router-link to="/" class="router">go back</router-link>
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";
import Chart from "chart.js/auto";
import { Title, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale);

export default {
  name: "PieChart",
  components: { Pie },
  data() {
    return {
      loaded: false,
      chartData: null,
    };
  },
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
            backgroundColor: [
              "rgba(75, 192, 192)",
              "rgba(255, 99, 132)",
              "rgba(123, 142, 235)",
              "rgba(54, 162, 23)",
              "rgba(541, 162, 235)",
              "rgba(154, 62, 115)",
              "rgba(54, 12, 23)",
              "rgba(54, 832, 351)",
              "rgba(174, 162, 115)",
            ],
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
