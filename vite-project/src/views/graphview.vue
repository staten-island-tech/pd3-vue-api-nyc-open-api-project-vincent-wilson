<template>
  <div class="container">
    <button @click="fetchstuff()"></button>
    <router-link to="/" class="clicker router">go back</router-link>
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
  data() {
    return {
      loaded: false,
      chartData: [],
    };
  },
  mounted() {
    this.loaded = false;
    
  },
  
};

</script>
