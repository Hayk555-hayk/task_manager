let tutorials = {
    java: java_data,

    node: node_data,

    php: php_data,

    front: front_data,

    lang: lang_data
}

let tasks = [
    `<span class="task_title">
    PHP
    </span><br />
    <span an class="task_description">
    YouTube html lab mysql (урок 1) 
    </span><br />
    <span class="small">
    YouTube Аве кодер postgre, YouTube Гоша Дударь docker, YouTube theurbanpenguin ubuntu, YouTube msft webcast windows, YouTube learn linux tv centos, Documentation code mu php урок 9, Documentation code mu oop & mvc, Documentation Metanit SQL
    </span>`,

    `<span class="task_title">
    Laravel
    </span><br />
    <span class="task_description">
    YouTube surfside media Урок 13
    </span> <br />
    <span class="small">
    YouTube Andrey Schemelyun laravel vue, YouTube agoalofalife орхид, YouTube coders tape all playlists, Documentation Laravel su урок 11, Documentation laravel demiart
    </span>`,

    // `<span class="task_title">
    // Node
    // </span><br />
    // <span class="task_description">
    // YouTube Илья Кантор node от а до я Урок 6
    // </span><br />
    // <span class="small">
    // YouTube gungner it mongodb, Documentation Metanit node, Documentation Metanit mongodb
    // </span>`,

    // `<span class="task_title">
    // Nest
    // </span><br />
    // <span class="task_description">
    // YouTube #JS Code nest js Урок 1
    // </span><br />
    // <span class="small">
    // documentation docs nest com
    // </span>`,

    // `<span class="task_title">
    // Java
    // </span><br />
    // <span class="task_description">
    // YouTube Уроки java Урок 4
    // </span><br />
    // <span class="small">
    // documentation Metanit
    // </span>`,

    // `<span class="task_title">
    // Spring
    // </span><br />
    // <span class="task_description">
    // YouTube Alishev spring framework Урок 1
    // </span>
    // <br />
    // <span class="small">
    // documentation Java spring io
    // </span>`,
    
    // `<span class="task_title">
    // React
    // </span><br />
    // <span class="task_description">
    // YouTube The net ninja all react and next js tutorials (complete react redux tutorial урок 6)
    // </span> <br />
    // <span class="small">
    // Documentation Metanit react, metanit js
    // </span>`,

    `<span class="task_title">
    Vue
    </span><br />
    <span class="task_description">
    YouTube The net ninja all vue tutorials (vue 2 tutorial урок 13)
    </span> <br />
    <span class="small">
    YouTube bitfumes nuxt js, YouTube JavaScript ru git, the net ninja all js playlists, Владилен typescript Documentation Metanit
    </span>`,

    // `<span class="task_title">
    // Angular
    // </span><br />
    // <span class="task_description">
    // YouTube leela web angular (урок 4)
    // </span> <br/>
    // <span class="small">
    // YouTube leela web ngrx Урок 1, codevolution chrome extension, Documentation Metanit
    // </span>`,

    // `<span class="task_title">
    // English
    // </span><br />
    // <span class="task_description">
    // YouTube уроки по плейлистам Урок 1 
    // </span> <br/>
    // <span class="small">
    // Словарь из 700 слов 
    // </span>`,

    // `<span class="task_title">
    // Spanish
    // </span><br />
    // <span class="task_description">
    // YouTube уроки по плейлистам Урок 1 (21:15)
    // </span> <br/>
    // <span class="small">
    // Словарь из 700 слов 
    // </span>`,

    // `<span class="task_title">
    // Чтение книг
    // </span><br />
    // <span class="task_description">
    // Поочередное чтение книг из папки books (книга 1, стр. 35)
    // </span>`,

    // `<span class="task_title">
    // Религия
    // </span><br />
    // <span class="task_description">
    // Чтение Библии по приложению
    // </span> <br/>
    // <span class="small">
    // Чтение Библии на армянском, написание письма
    // </span>`,

    // `<span class="task_title">
    // Конспекты
    // </span><br />
    // <span class="task_description">
    // Чтение конспектов по PHP & Laravel
    // </span>`,

    // `<span class="task_title">
    // Конспекты
    // </span><br />
    // <span class="task_description">
    // Чтение конспектов по Node & Nest
    // </span>`,

    // `<span class="task_title">
    // Конспекты
    // </span><br />
    // <span class="task_description">
    // Чтение конспектов по Front
    // </span>`,

    // `<span class="task_title">
    // Конспекты
    // </span><br />
    // <span class="task_description">
    // Чтение конспектов по Languages
    // </span>`,

    // `<span class="task_title">
    // Спорт комплекс-1
    // </span><br />
    // <span class="task_description">
    // Жим обычный и пресс скалолаз 15
    // </span>`,

    // `<span class="task_title">
    // Спорт комплекс-2
    // </span><br />
    // <span class="task_description">
    // Плечи хлопок в верх и колено в верх 25
    // </span>`,

    // `<span class="task_title">
    // Спорт комплекс-3
    // </span><br />
    // <span class="task_description">
    // Бицепс обычный и приседания 15
    // </span>`,

    // `<span class="task_title">
    // Спорт комплекс-4
    // </span><br />
    // <span class="task_description">
    // Спина обычный и спина на себя 25
    // </span>`,

    // `<span class="task_title">
    // Спорт комплекс-5
    // </span><br />
    // <span class="task_description">
    // Трицепс лежа и пресс обычный 25
    // </span>`,

    // `<span class="task_title">
    // Спорт комплекс-6
    // </span><br />
    // <span class="task_description">
    // Бицепс сидя и рвв сидя 25
    // </span>`,

    // `<span class="task_title">
    // Спорт комплекс-7
    // </span><br />
    // <span class="task_description">
    // Грудь лежа и пресс половина 25
    // </span>`,
];