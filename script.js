const form = document.getElementById('form');
const table = document.getElementById('table');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const addressInput = document.getElementById('address');
const pincodeInput = document.getElementById('pincode');
const genderInputs = document.getElementsByName('gender');
const foodInputs = document.querySelectorAll('[name="food"]');
const stateInput = document.getElementById('state');
const countryInput = document.getElementById('country');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get selected food choices
  const selectedFoods = [];
  foodInputs.forEach((input) => {
    if (input.checked) {
      selectedFoods.push(input.value);
    }
  });

  // Get selected gender
  let selectedGender;
  genderInputs.forEach((input) => {
    if (input.checked) {
      selectedGender = input.value;
    }
  });

  // Create table row
  const row = table.insertRow();

  const firstNameCell = row.insertCell();
  firstNameCell.innerHTML = firstNameInput.value;

  const lastNameCell = row.insertCell();
  lastNameCell.innerHTML = lastNameInput.value;

  const addressCell = row.insertCell();
  addressCell.innerHTML = addressInput.value;

  const pincodeCell = row.insertCell();
  pincodeCell.innerHTML = pincodeInput.value;

  const genderCell = row.insertCell();
  genderCell.innerHTML = selectedGender;

  const foodCell = row.insertCell();
  foodCell.innerHTML = selectedFoods.join(', ');

  const stateCell = row.insertCell();
  stateCell.innerHTML = stateInput.value;

  const countryCell = row.insertCell();
  countryCell.innerHTML = countryInput.value;

  // Clear form inputs
  form.reset();
});
