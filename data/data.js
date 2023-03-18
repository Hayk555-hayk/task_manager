
const now = new Date();
const hours = now.getHours();

let tasks = []

if (hours < 19) {
    tasks = [
        // ТЕОРИЯ PHP ---------------------------------------------------------------
        `<div>Теория: YouTube Rdavydov laravel(2)</div>`,
        `<div>YouTube Best Laravel PayPal (JsonFullstack)</div>`,
        `<div>YouTube Laravel Lighthouse/GraphQL</div>`,
        `<div>YouTube laravel + redis</div>`,
        `<div>YouTube agoalofalife орхид</div>`,
        // ТЕОРИЯ RUBY --------------------------------------------------------------
        `<div>Теория: YouTube Alexander Batashov Ruby on Rails (25)</div>`,
        `<div>YouTube Super Ruby By Yaraslav Shamanov (2)</div>`,
        `<div>YouTube Stripe Developers Stripe-Ruby</div>`,
        // ТЕОРИЯ NODE --------------------------------------------------------------
        `<div>Теория: YouTube Илья Кантор node от а до я (26)</div>`,
        `<div>YouTube #JS Code nest js Урок 5</div>`,
        `<div>YouTube Владилен typescript</div>`,
        `<div>YouTube the net ninja all js and typescript playlists</div>`,
        `<div>YouTube Talented developer stripe with node</div>`,
        // ТЕОРИЯ ADD TECHNO --------------------------------------------------------
        `<div>YouTube GraphQL Course - Beginner To Expert</div>`,
        `<div>Теория: Youtube Beginner's Crash Course to Elastic Stack Official Elastic Community (4)</div>`,
        `<div>YouTube Corey's Corner Stripe subscription</div>`,
        `<div>YouTube школа itProger mysql урок 1</div>`,
        `<div>YouTube gungner it mongodb</div>`,
        `<div>YouTube Sidekiq Redis Jsr ka Ladka</div>`,
        `<div>YouTube Аве кодер postgre</div>`,
        `<div>YouTube theurbanpenguin ubuntu</div>`,
        `<div>YouTube Гоша Дударь docker</div>`,
        `<div>YouTube the net ninja json server</div>`,
        `<div>YouTube msft webcast windows</div>`,
        `<div>YouTube learn linux tv centos</div>`,
        `<div>YouTube JavaScript ru git</div>`,
        // ТЕОРИЯ REACT -------------------------------------------------------------
        `<div>YouTube Ulbi TV React</div>`,
        `<div>YouTube Codevolution React Redux tutorial</div>`,
        `<div>YouTube The net ninja all MERN videos</div>`,
        `<div>YouTube Next js codevolution</div>`,
        // ТЕОРИЯ JAVA --------------------------------------------------------------
        `<div>Теория: YouTube изучем java создай проект (11)</div>`,
        `<div>YouTube Гоша Дударь spring</div>`,
        `<div>YouTube Alishev spring</div>`,
        // ДОКУМЕНТАЦИЯ --------------------------------------------------------------
        `<div>Documentation Laravel su урок 11</div>`,
        `<div>Documentation Metanit node</div>`,
        `<div>Documentation laravel demiart</div>`,
        `<div>Documentation code mu php урок 9</div>`,
        `<div>Documentation code mu oop & mvc</div>`,
        `<div>documentation docs nest com</div>`,
        `<div>Documentation typescript Metanit</div>`,
        `<div>Documentation React metanit (Глава 2 - рендеринг элементов)</div>`,
        `<div>Documentation React code.mu</div>`,
        `<div>Documentation Metanit SQL</div>`,
        `<div>Documentation Metanit mongodb</div>`,
        `<div>Documentation Python</div>`,
        // КНИГИ --------------------------------------------------------------------
        `<div>Книги по ruby: чтение стр. 36</div>`,
        `<div>Книги по NODE: чтение стр. 25</div>`,
        `<div>Книги по base: чтение стр. 76</div>`,
        `<div>Книги по JAVA: чтение</div>`,
        // САМОРАЗВИТИЕ -----------------------------------------------
        `<div>Чтение Библии книга чтение (14-13)</div>`,
        `<div>Чтение Библии приложение чтение</div>`,
        `<div>Арифметика уроки Да Винчи (5кл-5)</div>`,
        `<div>Английский язык с нуля за 50 уроков (3)</div>`,
        `<div>Испанский язык</div>`,
        `<div>Немецкий язык</div>`,
        `<div>Японский язык</div>`,
        `<div>Иврит</div>`,
        `<div>Японский и Иврит алфавит изучение</div>`,
        `<div>Религия написание письма</div>`,
        `<div>Создание словаря из 1500 слов</div>`,
        // КОНСПЕКТЫ -----------------------------------------------
        `<div>КОНСПЕКТЫ - PHP - LARAVEL</div>`,
        `<div>КОНСПЕКТЫ - RUBY - RAILS</div>`,
        `<div>КОНСПЕКТЫ - NODE - NEST - JAVASCRIPT</div>`,
        `<div>КОНСПЕКТЫ - JAVA - SPRING</div>`,
        `<div>КОНСПЕКТЫ - DATA BASES AND OS</div>`,
        `<div>КОНСПЕКТЫ - SELF DEVELOPEMENT</div>`,
    ];
    
} else {
    tasks = [
        // ПРАКТИКА PHP -----------------------------------------------------------------
        `<div>Практика: PHP ordinary CRUD APP</div>`,
        // `<div>PHP GraphQL CRUD APP</div>`,
        // `<div>PHP ordinary elastic-search CRUD APP</div>`,
        // `<div>PHP GraphQ elastic-searchL CRUD APP</div>`,
        // `<div>PHP ordinary stripe-api CRUD APP</div>`,
        // `<div>PHP GraphQL stripe-api CRUD APP</div>`,
        // ПРАКТИКА LARAVEL -----------------------------------------------------------------
        `<div>Laravel ordinary CRUD APP</div>`,
        // `<div>Laravel GraphQL CRUD APP</div>`,
        // `<div>Laravel ordinary elastic-search CRUD APP</div>`,
        // `<div>Laravel GraphQL elastic-search CRUD APP</div>`,
        // `<div>Laravel ordinary stripe-api CRUD APP</div>`,
        // `<div>Laravel GraphQl stripe-api CRUD APP</div>`,
        // ПРАКТИКА NODE -----------------------------------------------------------------
        `<div>Практика: Node ordinary CRUD APP</div>`,
        // `<div>Node GraphQL CRUD APP</div>`,
        // `<div>Node ordinary elastic-search CRUD APP</div>`,
        // `<div>Node GraphQ elastic-searchL CRUD APP</div>`,
        // `<div>Node ordinary stripe-api CRUD APP</div>`,
        // `<div>Node GraphQL stripe-api CRUD APP</div>`,
        // ПРАКТИКА NEST -----------------------------------------------------------------
        `<div>Nest ordinary CRUD APP</div>`,
        // `<div>Nest GraphQL CRUD APP</div>`,
        // `<div>Nest ordinary elastic-search CRUD APP</div>`,
        // `<div>Nest GraphQL elastic-search CRUD APP</div>`,
        // `<div>Nest ordinary stripe-api CRUD APP</div>`,
        // `<div>Nest GraphQl stripe-api CRUD APP</div>`,
        // ПРАКТИКА RUBY -----------------------------------------------------------------
        `<div>Ruby GraphQL CRUD APP</div>`,
        // `<div>Ruby ordinary elastic-search CRUD APP</div>`,
        // `<div>Ruby GraphQ elastic-searchL CRUD APP</div>`,
        // `<div>Ruby ordinary stripe-api CRUD APP</div>`,
        // `<div>Ruby GraphQL stripe-api CRUD APP</div>`,
        // ПРАКТИКА RAILS -----------------------------------------------------------------
        `<div>Rails ordinary CRUD APP</div>`,
        // `<div>Rails GraphQL CRUD APP</div>`,
        // `<div>Rails ordinary elastic-search CRUD APP</div>`,
        // `<div>Rails GraphQL elastic-search CRUD APP</div>`,
        // `<div>Rails ordinary stripe-api CRUD APP</div>`,
        // `<div>Rails GraphQl stripe-api CRUD APP</div>`,
        // ПРАКТИКА JAVA -----------------------------------------------------------------
        `<div>Практика: Java ordinary CRUD APP</div>`,
        // `<div>Java GraphQL CRUD APP</div>`,
        // `<div>Java ordinary elastic-search CRUD APP</div>`,
        // `<div>Java GraphQ elastic-searchL CRUD APP</div>`,
        // `<div>Java ordinary stripe-api CRUD APP</div>`,
        // `<div>Java GraphQL stripe-api CRUD APP</div>`,
        // ПРАКТИКА SPRING -----------------------------------------------------------------
        `<div>Spring ordinary CRUD APP</div>`,
        // `<div>Spring GraphQL CRUD APP</div>`,
        // `<div>Spring ordinary elastic-search CRUD APP</div>`,
        // `<div>Spring GraphQL elastic-search CRUD APP</div>`,
        // `<div>Spring ordinary stripe-api CRUD APP</div>`,
        // `<div>Spring GraphQl stripe-api CRUD APP</div>`,
        // ПРАКТИКА PYTHON -----------------------------------------------------------------
        `<div>Python ordinary CRUD APP</div>`,
        // `<div>Python GraphQL CRUD APP</div>`,
        // `<div>Python ordinary elastic-search CRUD APP</div>`,
        // `<div>Python GraphQL elastic-search CRUD APP</div>`,
        // `<div>Python ordinary stripe-api CRUD APP</div>`,
        // `<div>Python GraphQl stripe-api CRUD APP</div>`,
        // ПРАКТИКА DJANGO -----------------------------------------------------------------
        `<div>Django ordinary CRUD APP</div>`,
        // `<div>Django GraphQL CRUD APP</div>`,
        // `<div>Django ordinary elastic-search CRUD APP</div>`,
        // `<div>Django GraphQL elastic-search CRUD APP</div>`,
        // `<div>Django ordinary stripe-api CRUD APP</div>`,
        // `<div>Django GraphQl stripe-api CRUD APP</div>`,
        // ПРАКТИКА FASTAPI -----------------------------------------------------------------
        `<div>FastApi ordinary CRUD APP</div>`,
        // `<div>FastApi GraphQL CRUD APP</div>`,
        // `<div>FastApi ordinary elastic-search CRUD APP</div>`,
        // `<div>FastApi GraphQL elastic-search CRUD APP</div>`,
        // `<div>FastApi ordinary stripe-api CRUD APP</div>`,
        // `<div>FastApi GraphQl stripe-api CRUD APP</div>`,
        // ПРАКТИКА TKINTER -----------------------------------------------------------------
        `<div>Tkinter ordinary CRUD APP</div>`,
        // `<div>Tkintern GraphQL CRUD APP</div>`,
        // `<div>Tkinter ordinary elastic-search CRUD APP</div>`,
        // `<div>Tkinter GraphQL elastic-search CRUD APP</div>`,
        // `<div>Tkinter ordinary stripe-api CRUD APP</div>`,
        // `<div>Tkinter GraphQl stripe-api CRUD APP</div>`,
    ];
    
}


let list = document.getElementById('list');

list.innerHTML = tasks.join('');

let get_task = document.getElementById('get_task');

get_task.addEventListener("click", show_task)

function show_task() {
    const random_index = Math.floor(Math.random() * tasks.length);
    const random_task = tasks[random_index];
    let new_task = document.getElementById('random_block');
    new_task.innerHTML = random_task
}