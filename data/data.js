let tutorials = {

    node: node_data,

    php: php_data,

    front: front_data,
}

let tasks = [
//-------------------------------------------ПРОГРАММИРОВАНИЕ---------------------------------------------------------------------
    `<span class="task_title">
    PHP LARAVEL
    </span><br />
    <span an class="task_description">
    YouTube surfside media Урок 58
    </span><br />
    <span class="small">
    YouTube школа itProger mysql, YouTube Andrey Schemelyun laravel vue,  Documentation Laravel su урок 11, Documentation laravel demiart, Documentation code mu php урок 9, Documentation code mu oop & mvc, Documentation Metanit SQL, YouTube Аве кодер postgre, YouTube agoalofalife орхид, YouTube Гоша Дударь docker, YouTube coders tape all playlists, YouTube theurbanpenguin ubuntu, YouTube msft webcast windows, YouTube learn linux tv centos, books php
    </span>`,

    `<span class="task_title">
    NODE NEST
    </span><br />
    <span class="task_description">
    YouTube Илья Кантор node от а до я Урок 19
    </span><br />
    <span class="small">
    YouTube #JS Code nest js Урок 1, YouTube gungner it mongodb, the net ninja json server and graph ql, Documentation Metanit node, Documentation Metanit mongodb, documentation docs nest com, books node
    </span>`,

    `<span class="task_title">
    VUE NUXT
    </span><br />
    <span class="task_description">
    YouTube The net ninja all vue and nuxt tutorials (vue 2 tutorial урок 19)
    </span> <br />
    <span class="small">
    YouTube bitfumes nuxt js, the net ninja all js and typescript playlists, Youtube the net ninja tailwind tutorials,YouTube JavaScript ru git, Владилен typescript, Documentation vue2 vue3 typescript Metanit, books vue
    </span>`,
    `<div>
    Соединение к болле чем одной базы данных, в .env скопировать часть настроек к базе данных и вставить их там же, но с другим <br />
    названием, в config database.php файле скопировать mysql массив и изменить ее название и прописать новосозданные переменные <br />
    из env по default все подключается к первой базе данных, для подключения ко второй базе в файле миграции пропишем 
    <pre>
        Schema::connection('mysql2')->create('posts', function(Blueprint $table) {
            // table columns ...
        })
        // also need to add in model the next part of the code 
        protected $connection = 'mysql2';
    </pre>
    </div>`,
    `<div>
    parsley.js создает многоходовую форму из несколько шагов 
    </div>`
];
