let ingredients = {
  base: null,
  meat: null,
  veggie: [],
  sauce: []
};

function allowDrop(event) {
  event.preventDefault();
}

function dropIngredient(event) {
  event.preventDefault();
  const type = event.dataTransfer.getData("type");
  const name = event.dataTransfer.getData("name");
  const src = event.dataTransfer.getData("src");

  // Logic for limiting selection
  if (type === "base" && ingredients.base) {
    alert("You can only choose one base.");
    return;
  }
  if (type === "meat" && ingredients.meat) {
    alert("Only one meat allowed.");
    return;
  }
  if (type === "veggie" && ingredients.veggie.includes(name)) {
    alert("Already added that veggie.");
    return;
  }
  if (type === "sauce" && ingredients.sauce.includes(name)) {
    alert("Already added that sauce.");
    return;
  }

  // Add ingredient
  const img = document.createElement("img");
  img.src = src;
  img.alt = name;
  document.getElementById("stack-area").appendChild(img);

  if (type === "base") ingredients.base = name;
  else if (type === "meat") ingredients.meat = name;
  else if (type === "veggie") ingredients.veggie.push(name);
  else if (type === "sauce") ingredients.sauce.push(name);
}

document.querySelectorAll(".ingredient").forEach(item => {
  item.addEventListener("dragstart", event => {
    event.dataTransfer.setData("type", item.dataset.type);
    event.dataTransfer.setData("name", item.dataset.name);
    event.dataTransfer.setData("src", item.src);
  });
});

function wrapShawarma() {
  if (!ingredients.base || !ingredients.meat) {
    alert("Please choose a base and a meat.");
    return;
  }

  let message = `You made a ${ingredients.base} shawarma with ${ingredients.meat}`;

  if (ingredients.veggie.length) {
    message += `, ${ingredients.veggie.join(" and ")}`;
  }
  if (ingredients.sauce.length) {
    message += `, topped with ${ingredients.sauce.join(" and ")}`;
  }

  message += " 😋";
  alert(message);
}

function resetShawarma() {
  ingredients = { base: null, meat: null, veggie: [], sauce: [] };
  document.getElementById("stack-area").innerHTML = "";
}
