let date = new Date();

const day_1 = document.getElementById("day_1");
const day_2 = document.getElementById("day_2");
const day_3 = document.getElementById("day_3");
const card_title = document.getElementById("card_title");
const day_img = document.getElementById('day_img');

let target_tasks_sections = {}


switch (date.getDay()) {
    case 0:
    case 3:
        day_1.classList.add("active_day");
        day_2.classList.add("inactive_day");
        day_3.classList.add("inactive_day");
        day_1.setAttribute('id', 'active_element');
        card_title.innerText = "PHP, LARAVEL, VUE, RELIGION"
        day_img.src = './assets/images/one.png'
        target_tasks_sections.php = programming_lessons.php_laravel_vue.php
        target_tasks_sections.laravel = programming_lessons.php_laravel_vue.laravel
        target_tasks_sections.vue = programming_lessons.php_laravel_vue.vue
        target_tasks_sections.bible_book = programming_lessons.religion.bible_book
        target_tasks_sections.bible_app = programming_lessons.religion.bible_app
        target_tasks_sections.writing = programming_lessons.religion.writing
        target_tasks_sections.laravel_vue_practice = programming_lessons.web_practice.laravel_vue
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
        target_tasks_sections.ruby = programming_lessons.ruby_rails_angular.ruby
        target_tasks_sections.rails = programming_lessons.ruby_rails_angular.rails
        target_tasks_sections.angular = programming_lessons.ruby_rails_angular.angular
        target_tasks_sections.chest = programming_lessons.sport.сhest
        target_tasks_sections.biceps = programming_lessons.sport.biceps
        target_tasks_sections.triceps = programming_lessons.sport.triceps
        target_tasks_sections.shoulders = programming_lessons.sport.shoulders
        target_tasks_sections.legs = programming_lessons.sport.legs
        target_tasks_sections.abs = programming_lessons.sport.abs
        target_tasks_sections.back = programming_lessons.sport.back
        target_tasks_sections.ruby_react_practice = programming_lessons.web_practice.ruby_react
    break;

    case 2:
    case 5:
        day_1.classList.add("inactive_day");
        day_2.classList.add("inactive_day");
        day_3.classList.add("active_day");
        day_3.setAttribute('id', 'active_element');
        card_title.innerText = "NODE, NEST, REACT, DOG TRAINING"
        day_img.src = './assets/images/three.png'

        target_tasks_sections.node = programming_lessons.node_nest_react.node
        target_tasks_sections.nest = programming_lessons.node_nest_react.nest
        target_tasks_sections.react = programming_lessons.node_nest_react.react
        target_tasks_sections.dog_training_video = programming_lessons.dog_train.video
        target_tasks_sections.dog_training_books = programming_lessons.dog_train.book
        target_tasks_sections.nest_angular_practice = programming_lessons.web_practice.nest_angular
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
  
  let section_title = "";
  let section_task = "";
  let random_index = "";
  let random_tasks = document.getElementById("random_tasks");
  let html = "";
  
  for (let key in target_tasks_sections) {
    section_title = key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    random_index = Math.floor(Math.random() * target_tasks_sections[key].length);
    section_task = target_tasks_sections[key][random_index]
    html += `
        <div class="task-section">
            <h3>${section_title}</h3>
            <ul>
                <li>${section_task}</li>
            </ul>
        </div>
    `;
  }
  
  random_tasks.innerHTML = html