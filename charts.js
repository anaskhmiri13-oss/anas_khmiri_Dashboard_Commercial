const salesCtx = document.getElementById("salesChart").getContext("2d");
const revenueCtx = document.getElementById("Chart").getContext("2d");
const productPriceCtx = document.getElementById("productPriceChart").getContext("2d");
new Chart(salesCtx, {
  type: "line",
  data: {
    labels: salesData.labels,
    datasets: [{ label: "Ventes", data: salesData.values, borderWidth: 2 }]
  },
  options: {
    responsive: true,
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
    responsive: true,
    maintainAspectRatio: false
  }
});
const productLabels = produit.map(p => p.nom);
const productPrices = produit.map(p => p.prix);
new Chart(productPriceCtx, {
  type: "doughnut",
  data: {
    labels: productLabels,
    datasets: [{
      label: "Prix des produits (€)",
      data: productPrices,
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
});