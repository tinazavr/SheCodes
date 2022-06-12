function sayOrder(name, userPhone, amount, dish) {
  // if (name !== null && phone !== null && amount !== null) {
  alert(
    `Hi ${name}! We received your order for ${amount} portions of ${dish}. Our chefs have already started cooking your order. For delivery details we will write to you: ${userPhone}`
  );
  // } else {
  //   alert(
  //     "🤷🏻‍♀️ Sorry, you have to enter your name, phone number and quantity of portions so that we can fulfill your order. "
  //   );
  // }
}
function orderData(dish) {
  let name = returnName();
  let userPhone = returnPhone();
  let amount = returnAmount();
  if (name.length > 0 && amount.length > 0) {
    sayOrder(name, userPhone, amount, dish);
  } else {
    alert(
      "🤷🏻‍♀️ Sorry, you have to enter your name, phone number and quantity of portions so that we can fulfill your order. Please try again."
    );
  }
}

function checkPhone(userPhone) {
  if (
    !Number.isInteger(Number(userPhone)) ||
    userPhone.length >= 15 ||
    !userPhone
  ) {
    alert("Please, enter your phone number");
    let phone = returnPhone();
    return phone;
  } else {
    return userPhone;
  }
}

function returnName() {
  let name = prompt("What is your name?");
  return name.trim();
}

function returnPhone() {
  let userPhone = prompt("Please, enter your phone number:");

  userPhone = checkPhone(userPhone);
  return userPhone.trim();
}

function returnAmount() {
  let amount = prompt(`How many portions you want to recieve? 🍽`);
  return amount;
}

function buyBorsch() {
  orderData("Traditional Borsch in rye Bread 🥘");
}

let buyBorschButton = document.querySelector("#borsch button");
buyBorschButton.addEventListener("click", buyBorsch);

function buyPlyatsok() {
  orderData("Awesome Plyatsok 🍰");
}
let buyPlyatsokButton = document.querySelector("#plyatsok button");
buyPlyatsokButton.addEventListener("click", buyPlyatsok);

function buyVarenyky() {
  orderData("Perfect Varenyky 🥟");
}
let buyVarenykyButton = document.querySelector("#varenyky button");
buyVarenykyButton.addEventListener("click", buyVarenyky);
