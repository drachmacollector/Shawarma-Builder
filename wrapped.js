const summary = document.getElementById("summary");
const shawarma = JSON.parse(localStorage.getItem("shawarma"));

if (shawarma) {
  if (shawarma.base) summary.innerHTML += `<li>Base: ${shawarma.base}</li>`;
  if (shawarma.meat) summary.innerHTML += `<li>Meat: ${shawarma.meat}</li>`;
  if (shawarma.veggie.length) summary.innerHTML += `<li>Veggies: ${shawarma.veggie.join(", ")}</li>`;
  if (shawarma.dressing.length) summary.innerHTML += `<li>Dressings: ${shawarma.dressing.join(", ")}</li>`;
} else {
  summary.innerHTML = `<li>No shawarma selected :(</li>`;
}
