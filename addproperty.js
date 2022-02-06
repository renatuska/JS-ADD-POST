// sukuriama funkcija pagal formos laukus, kurie paduodami i6 formos
function addNewProperty(img, price, description, city) {
  const data = {
    city: city,
    description: description,
    image: img,
    price: price,
  };
  //Supostiname visą informaciją formos pagalba į nurodytą url
  fetch("https://radial-reinvented-shoe.glitch.me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      //Išsispausdiname errorą
      if (data.hasOwnProperty('error')) {
        document.getElementById("status").textContent = data.error;
      } else {
        document.getElementById("status").textContent = "Succesfully added!";
      }
    })
    //atsakymas tik iš serverio pusės, dėl ko nepavyko nusiųsti
    .catch((err) => {
      document.getElementById("status").textContent = "Error, please try again";
    });
}
document.querySelector("button[type=submit]").addEventListener("click", (e) => {
  let isFormValid = document.getElementById("propertyPost").checkValidity();
  if (isFormValid ==false ){
    document.getElementById("propertyPost").reportValidity();
  } else {
    e.preventDefault();
    addNewProperty(document.getElementById("imge").value,
    document.getElementById("price").value,
    document.getElementById("description").value,
    document.getElementById("city").value);
  }
});