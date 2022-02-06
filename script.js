let properties = document.querySelector(".properties");
const cities = document.querySelectorAll(".city");
let activeCities = [];
let forSale;

fetch("https://radial-reinvented-shoe.glitch.me")
  .then((response) => response.json())
  .then((data) => {
    let newHTML = "";
    data.forEach((property) => {
      newHTML += `<div class="property">
    <img
    src="${property.image}"
      />
    <div class="prop-text">
    <h1>${String(property.price).slice(
      0,
      String(property.price).length - 3
    )}.${String(property.price).slice(String(property.price).length - 3)}€</h1>
    <h5>${property.city}</h5>
    <p>${property.description}</p>
    </div>
    </div>`;
    });
    properties.innerHTML = newHTML;
    forSale = document.querySelectorAll(".property");
  });