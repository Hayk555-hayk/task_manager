let web_data = {
    php: [
        `<div class ="legend">
        Learn PHP The Right Way - Full PHP Tutorial For Beginners & Advanced, Program With Gio (урок 4 03:50)<br />
        PHP Design Patterns, Applicable Programming<br />
        Design Patterns in Object Oriented Programming, Christopher Okhravi<br />
        MySQL tutorial for beginners, Bro Code<br />
        Книга design 1<br />
        Книга clear_code 7<br />
        Книга php 5<br />
        Книга php 1<br />
        Книга php 4<br />
        </div>`,
        `PHP запускается при помощи веб сервера, основные веб сервера это apache и nginx<br />
        При использовании XAMP можно в htdocs создать свой файл с проектами и запустить его при помощи ввода в url localhost и имя файла`,
        `php код пишется внутри тега php в файле .php &#x2770;?php ?&#x2771; если в файле .php только php код то он может не иметь закрывающийся тег <br />
        Но если там есть и html код по php тегом то закрывающийся тег обьязателен`,
        `echo "hello world" выводит текст, в консоле мы увидим просто текст потому что php это server side код,<br />
        print "hello world" тоже выводит текст, echo быстрее и многофункциональнее чем print`,
        `Обьязательно нужно ставить точку с запятой, есть исключения где точка с запятой не обьязятельно <br />
        - На последней строчке перед закрывающимся php тегом`,
        `php index.php выполняет код php <br />
        Интерполяцию строки php c переменной нужно ваполнять в двойных кавычках echo "Hello $var" или echo "Hello {$var}"<br/>
        можно конкатенировать переменные символом точки echo 'Hello' . ' ' . $var`,
        `Переменные начинаются со знака доллара $variable = "5x"; переменная не может начинатся с цивор или иметь зарезервированно емя как скажем $this`,
        `Два примера присвоения переменным значения с сылкой  и без<br />
        <img src="tutorial_data/web_img/php_1.png" /><br />
        <img src="tutorial_data/web_img/php_2.png" /><br />
        Пример использования php с html <br/>
        <img src="tutorial_data/web_img/php_3.png" /><br/>
        Тот же код но с каротким php тегом<br />
        <img src="tutorial_data/web_img/php_4.png" /><br/>
        Короткое написание пригодиться когда нужно бутет напечатать что нибудь, для полноценного кода нужен нормальный php тег`,
        `Константа это переменная которая не может быть изменена если ее уже определили<br />
        Есть два способа определить константу<br />
        1-define('name', 'value') define('STATUS', 'open') echo STATUS, проверка defined('STATUS') <br/>
        2- const STATUS = 'open'<br/>
        const определяется во время компиляции а define во время выполнения кода`,
    ],
    laravel: [
        `<div class ="legend">
        Laravel 9 tutorial, Code Step By Step (урок 3)<br />
        Laravel 10 full course for beginners, Bitfumes<br />
        Laravel From Scratch, Traversy Media<br />
        Книга  clear_code 8<br />
        Книга php 2<br />
        Книга php 3<br />
        </div>`,
    ],
    ruby: [
        `<div class ="legend">
        Ruby Tutorial For Beginners, ProgrammingKnowledge (урок 2)<br />
        Ruby - Programming Language | Tutorial, Giraffe Academy<br />
        Ruby Programming Tutorials, Jake Day<br />
        Книга clear_code 5<br />,
        Книга clear_code 4<br />
        Книга ruby 3<br />
        Книга ruby 1<br />
        </div>`,
        `Ruby файлы имеют расширение .rb, ruby -v покажет версию ruby, ruby fileName.rb запуск программы`,
        `Форматировка строки с переменными происходит следующим образом p "this is value of #{var_1}"<br />
        Так же вместо p можно использовать puts или print, puts отличается от print тем что каждый puts будет выведен с новой строки а print<br />
        друг за другом, можно выводить переменные используя запятую puts var_1, var_2`,
        `Пример определения и вызова ruby функции<br />
        '<img src="tutorial_data/web_img/ruby_1.png">'`,
        `Можно поменять переменные местами используя следующий синтаксис a,b = b,a<br />
        a,b,c = 1,2,3 пример определения переменных одной строкой`
    ],
    ror: [
        `<div class ="legend">
        Ruby on Rails for Beginners,GoRails (урок 3)<br />
        Full Stack Ruby on Rails Development Bootcamp, APPSIMPACT Academy<br />
        Postgres Tutorial - Beginners to Advanced, Analytics Excellence<br />
        Книга clear_code 3<br />
        Книга clear_code 2<br />
        Книга ruby 2<br />
        Книга clear_code 6<br />
        </div>`,
        `Если установлен ruby то можно использовать комманду gem install rails для установки ROR<br />
        rails new project_name создаст новый проект<br />
        Bundler устанавливает gem файлы, используется команда bundle install, rails s - старт сервера`
    ],
    js: [
        `<div class ="legend">
        JavaScript Tutorial for Beginners, Telusko<br />
        JavaScript Tutorial For Beginners To Experts | Full Course 2020, CoderLipi<br />
        TypeScript Tutorial, Net Ninja<br />
        Complete MongoDB Tutorial, Net Ninja<br />
        Книга js 1<br />
        Книга Грокаем Алгоритмы<br />
        </div>`,
        `При помощи JS можно создавать все типы веб приложений, компютер понимает байт кот компилер или интерпритатор переводит код в байт код<br />
        JS интерпритируется`,
        `Пример логики переменных<br />
        <img src="tutorial_data/web_img/js_1.png">
        `
    ],
    node: [
        `<div class ="legend">
        Node.js Tutorial, Codevolution<br />
        [In-Depth] Nest.JS Tutorial Series, Anson the Developer<br>
        Nest JS Master Course 2023, Code with tkssharma<br />
        Книга clear_code 1<br />
        Книга js 2<br />
        Книга js 3<br />
        </div>`,
        `JS версий 6 но на самрм деле 5 потому что 4-я версия не выходила, были EcmaScript 1,2,3,5,6`
    ],
    react: [
        `<div class ="legend">
        React JS Tutorial For Beginners 2023, Code Stoic<br />
        React Tutorials, Dave Gray<br />
        Next.js Tutorial for Beginners, Codevolution<br />
        Книга JS 5<br />
        </div>`,
        `React это открытая для всех библиотека для создания user interface, для установки react необходимо иметь node js потому что<br />
        нам нужен будет npm который установится с node js`,
        `На сайте npmjs.com можно найти пакет create-react-app (npm i create-react-app), npmx create-react-app projectName`
    ],
    mobile: [
        `<div class ="legend">
        Flutter totorial for beginners, the net ninja<br />
        Flutter totorial for beginners, Tech with Tim<br />
        React native totorial for beginners, the net ninja<br />
        React Native Tutorial, Programming with Mash
        </div>`,
    ]
}