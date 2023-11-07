let web_data = {
    php: [
        `<div class ="legend">
        Learn PHP The Right Way - Full PHP Tutorial For Beginners & Advanced, Program With Gio (урок 4 03:50)<br />
        PHP Design Patterns, Applicable Programming<br />
        Design Patterns in Object Oriented Programming, Christopher Okhravi<br />
        Книга design 1<br />
        Книга clear_code 7<br />
        Книга php 5<br />
        Книга php 1<br />
        Книга php 4<br />
        stripe-php Stripe Developers
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
        Stripe Integration using Laravel Cashier Career Development Lab
        </div>`,
    ],
    ruby: [
        `<div class ="legend">
        Ruby Tutorial For Beginners, ProgrammingKnowledge (урок 4 08:07)<br />
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
        a,b,c = 1,2,3 пример определения переменных одной строкой`,
        `RUBY файл можно запустить коммандой ruby fileName.rb<br />
        x = true && false (будет false) x = true || false (будет true)`,
        `Пример условий<br/><img src="tutorial_data/web_img/ruby_2.png">`,
        `Пример цикла while<br/><img src="tutorial_data/web_img/ruby_3.png">`,
        `puts (1..100).to_a выведит числа от 1-го до 100, puts(1...100.to_a) выводит числа от 1 до 99`,
        `Пример цикла for in <br/><img src="tutorial_data/web_img/ruby_4.png">`,
        `Пример switch case <br/><img src="tutorial_data/web_img/ruby_5.png">`,
        `puts some_arr выведит с новой строки значения массива, а puts "#{some_arr}" выведит все значения в одну строку и поставит квадратные скобки`,
        `Массивы можно создавать несколькими путями arr = [] arr = Arr.new([])<br/>
        tmp = Array.new(5, 'hello') Создаст массив где 5 раз написано hello<br/>
        tm = Array(5..10) Создаст масив из чисел 5 до 10<br/>
        Длинну массива можно вычеслить arr.length, arr.size или arr.count<br />
        arr.first arr.last покажет первый и последний элемент в массиве<br/>
        arr.push(5) добавит 5 под конец массива, arr.pop удаляет последний элемент из массива<br/>
        arr.each_with_index {|val, index| p "#{val} #{index}"}<br/>
        arr.delete_at(4) удалит элемент массива пол индексом 4, arr.delete(20) удалит элемент 20 из массива
        arr = [1,2,3] проверка arr.include?(2)`,
        `Создание строки s = "str" или s = String.new("str")<br/>
        s.length, s.size длинна строки, s.upcase все буквы заглавные, s.downcase все буквы маленькие<br/>
        Восклицательный знак после метода изменит значение переменной s.upcase! puts s переменная s уже всегда будет с заглавными буквами`,
        `Обьекты в ruby называються hash obj = Hash.new<br/>><img src="tutorial_data/web_img/ruby_6.png">`
    ],
    ror: [
        `<div class ="legend">
        Ruby on Rails for Beginners,GoRails (урок 3)<br />
        Full Stack Ruby on Rails Development Bootcamp, APPSIMPACT Academy<br />
        Книга clear_code 3<br />
        Книга clear_code 2<br />
        Книга ruby 2<br />
        Книга clear_code 6<br />
        Ruby on Rails+ Stripe API: eCommerce store with Checkout SupeRails
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
        Книга js 1<br />
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
        Конспекты<br/>
        stripe-node Stripe Developers
        </div>`,
        `JS версий 6 но на самрм деле 5 потому что 4-я версия не выходила, были EcmaScript 1,2,3,5,6`
    ],
    python: [
        `<div class="legend">
            Python for Beginners (Full Course) | Programming Tutorial Telusko<br />
            Книга Грокаем Алгоритмы<br />
            stripe-python Stripe Developers
        </div>`
    ],
    django: [
        `<div class="legend">
            Try Django 3.2 - Python Web Development Tutorial Series CodingEntrepreneurs
        </div>`
    ],
    additional: [
        `<div class="legend">
            MySQL tutorial for beginners, Bro Code<br />
            Postgres Tutorial - Beginners to Advanced, Analytics Excellence<br />
            Complete MongoDB Tutorial, Net Ninja<br />
            Geek code основы ngnix<br/>
            Theurbanpenguine appache server<br/>
            Codeewithrajranjan kafka for beginners<br/>
            Abishek veermala complete devops from zero to hero<br/>
            Docker Crash Course Tutorial Net Ninja<br/>
            javascript.ru git курс
         </div>`
    ]
}