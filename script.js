// Order Button

let orderButton = document.querySelector(".btn");

const orderFood = () => {
  alert("Thank you for ordering from FoodZone!");
};

if (orderButton) {
  orderButton.addEventListener("click", orderFood);
}

// Contact Button

let sendButton = document.querySelector(".contact-form button");

const sendMessage = () => {
  alert("Your message has been sent!");
};

if (sendButton) {
  sendButton.addEventListener("click", sendMessage);
}

// Login Button

let loginButton = document.querySelector(".login-box button");

const login = () => {
  alert("Login Successful!");
};

if (loginButton) {
  loginButton.addEventListener("click", login);
}

// Register Button

let registerButton = document.querySelector(".register-box button");

const register = () => {
  alert("Registration Successful!");
};

if (registerButton) {
  registerButton.addEventListener("click", register);
}

// Gallery Images

let galleryImages = document.querySelectorAll(".gallery-item img");

const galleryMessage = () => {
  alert("Delicious Food Selected!");
};

galleryImages.forEach(function (image) {
  image.addEventListener("click", galleryMessage);
});
