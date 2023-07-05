let date = new Date();

const day_1 = document.getElementById("day_1");
const day_2 = document.getElementById("day_2");
const day_3 = document.getElementById("day_3");
const card_title = document.getElementById("card_title");
const day_img = document.getElementById('day_img');


switch (date.getDay()) {
    case 0:
    case 3:
        day_1.classList.add("active_day");
        day_2.classList.add("inactive_day");
        day_3.classList.add("inactive_day");
        day_1.setAttribute('id', 'active_element');
        card_title.innerText = "PHP, LARAVEL, VUE, RELIGION"
        day_img.src = './assets/images/one.png'
    break;

    case 1:
    case 4:
    case 6:
        day_1.classList.add("inactive_day");
        day_2.classList.add("active_day");
        day_3.classList.add("inactive_day");
        day_2.setAttribute('id', 'active_element');
        card_title.innerText = "RUBY, RAILS, ANGULAR, SPORT"
        day_img.src = './assets/images/two.png'
    break;

    case 2:
    case 5:
        day_1.classList.add("inactive_day");
        day_2.classList.add("inactive_day");
        day_3.classList.add("active_day");
        day_3.setAttribute('id', 'active_element');
        card_title.innerText = "NODE, NEST, REACT, DOG TRAINING"
        day_img.src = './assets/images/three.png'
    break;
}

const active_element = document.getElementById("active_element");

let clicks_count = 1
const cart = document.getElementById("card");

active_element.addEventListener('click', function() {
    clicks_count += 1
    if (clicks_count % 2 == 0) {
        cart.style.opacity = '1'
    } else {
        cart.style.opacity = '0'
    }
  });