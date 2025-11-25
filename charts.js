const salesCtx = document.getElementById("salesChart").getContext("2d");
const revenueCtx = document.getElementById("Chart").getContext("2d");

new Chart(salesCtx, {
  type: "line",
  data: {
    labels: salesData.labels,
    datasets: [{ label: "Ventes", data: salesData.values, borderWidth: 2 }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false
  }
});

new Chart(revenueCtx, {
  type: "bar",
  data: {
    labels: revenueData.labels,
    datasets: [{ label: "Revenus", data: revenueData.values, borderWidth: 2 }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false
  }
});