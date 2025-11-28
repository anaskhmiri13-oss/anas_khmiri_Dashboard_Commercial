const menu = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll("main section");
const table = document.getElementById("Table");
menu.forEach(item => {
  item.addEventListener("click", () => {
    menu.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    const target = item.getAttribute("data-section");
    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) {
        sec.classList.add("active");
      }
    });
  });
});
produit.forEach(p => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${p.nom}</td>
    <td>${p.categorie}</td>
    <td>${p.prix} €</td>
  `;
  table.appendChild(row);
});
