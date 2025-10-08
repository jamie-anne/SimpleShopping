let price = 0;

function updateTotal() {
  document.getElementById("totalPrice").innerText = "Total: Php " + price + ".00";
}

document.getElementById("button1").onclick = function(){
  const product_name1 = document.getElementById("label1").innerText;
  document.getElementById("cart1_label").innerText = product_name1;
  document.getElementById("cart1_picture").innerHTML = "<img src='IMAGES/pro1.jpg' width='180' height='180'>";
  document.getElementById("cart1_totalprize").innerText = "Php 650.00";
  document.getElementById("cart1").classList.add("carttt");
  document.getElementById("delete1").innerHTML = "<button onclick='deleteItem(1)'>Delete</button>";
  price += 650;
  updateTotal();
}

document.getElementById("button2").onclick = function(){
  const product_name2 = document.getElementById("label2").innerText;
  document.getElementById("cart2_label").innerText = product_name2;
  document.getElementById("cart2_picture").innerHTML = "<img src='IMAGES/pro2.jpg' width='180' height='180'>";
  document.getElementById("cart2_totalprize").innerText = "Php 500.00";
  document.getElementById("cart2").classList.add("carttt");
  document.getElementById("delete2").innerHTML = "<button onclick='deleteItem(2)'>Delete</button>";
  price += 500;
  updateTotal();
}

document.getElementById("button3").onclick = function(){
  const product_name3 = document.getElementById("label3").innerText;
  document.getElementById("cart3_label").innerText = product_name3;
  document.getElementById("cart3_picture").innerHTML = "<img src='IMAGES/pro3.jpg' width='180' height='180'>";
  document.getElementById("cart3_totalprize").innerText = "Php 700.00";
  document.getElementById("cart3").classList.add("carttt");
  document.getElementById("delete3").innerHTML = "<button onclick='deleteItem(3)'>Delete</button>";
  price += 700;
  updateTotal();
}

document.getElementById("button4").onclick = function(){
  const product_name4 = document.getElementById("label4").innerText;
  document.getElementById("cart4_label").innerText = product_name4;
  document.getElementById("cart4_picture").innerHTML = "<img src='IMAGES/pro4.jpg' width='180' height='180'>";
  document.getElementById("cart4_totalprize").innerText = "Php 680.00";
  document.getElementById("cart4").classList.add("carttt");
  document.getElementById("delete4").innerHTML = "<button onclick='deleteItem(4)'>Delete</button>";
  price += 680;
  updateTotal();
}

document.getElementById("button5").onclick = function(){
  const product_name5 = document.getElementById("label5").innerText;
  document.getElementById("cart5_label").innerText = product_name5;
  document.getElementById("cart5_picture").innerHTML = "<img src='IMAGES/pro5.jpg' width='180' height='180'>";
  document.getElementById("cart5_totalprize").innerText = "Php 720.00";
  document.getElementById("cart5").classList.add("carttt");
  document.getElementById("delete5").innerHTML = "<button onclick='deleteItem(5)'>Delete</button>";
  price += 720;
  updateTotal();
}


document.getElementById("button").onclick = function () {
  clear();
  const email = document.getElementById("email");
  const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/*
  if (!emailpattern.test(email.value)) {
    showError(email, "Enter a valid email.");
    */
};
/*
function showError(input, message) {
  input.classList.add("error");
  let msg = document.createElement("div");
  msg.className = "error-message";
  msg.innerText = message;
  input.parentNode.appendChild(msg);
}
*/
function clear() {
  document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
  document.querySelectorAll(".error-message").forEach(el => el.remove());
}

function deleteItem(num) {
  let priceToSubtract = 0;
  if (num === 1) priceToSubtract = 650;
  if (num === 2) priceToSubtract = 500;
  if (num === 3) priceToSubtract = 700;
  if (num === 4) priceToSubtract = 680;
  if (num === 5) priceToSubtract = 720;

  price -= priceToSubtract;
  if (price < 0) price = 0;

  document.getElementById(`cart${num}_label`).innerText = "";
  document.getElementById(`cart${num}_picture`).innerHTML = "";
  document.getElementById(`cart${num}_totalprize`).innerText = "";
  document.getElementById(`cart${num}`).classList.remove("carttt");
  document.getElementById(`delete${num}`).innerHTML = "";
  updateTotal();
}