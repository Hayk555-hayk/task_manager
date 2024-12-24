const lessons = [
    {
        title: 'Математика 5 класс глава 1',
        content: `1,2,3,4,5,6,7,8,9,10,11,12... называются натуральными числами, 1/2 не натуральное число<br/>
        Рядом натуральных чисел называют натуральные числа в порядке возрастания, наименьшее натуральное число это 1 наибольшего нет<br/>
        Есть 10 цифр из них строятся числа (1,2,3,4,5,6,7,8,9,0), все числа кроме однозначных можно называть многозначными<br/>
        большие числа можно поделить на классы 17(миллионы) 450(тысячи) 124(единицы), каждый класс в свою очередь разделяется на <br/>
        единицы, десятки и сотни <img src='./images/algebra/1.png'/>
        Пример отрезка <img src='./images/algebra/2.png'/> длину отрезка можно измерять милиметрами, сантиметрами, дециметрами<br/>
        метрами и километрами, измерить отрезок это подщитать сколько единичных отрезков в нем помещяются<br/>
        Два отрезка считаются равными если при наложении друг на друга их длина одинакова<br/>
        Прямая это геометрическая фигура которая не имеет концов, у луча есть начало но нет конца
        <img src='./images/algebra/3.png'/>
        <img src='./images/algebra/4.png'/>`
    },
    {
        title: 'PHP Zandstra',
        content: `В PHP 7 было введено обьявление скалярных типов данных, а так же анонимных классов<br/>
        Класс это шаблон кода для создания обьектов
        <img src='./images/php/1.png'/>
        В php 4 и 5.1 можно выводить классы непосредственным путем но начиная с php 5.2 нужно добавить метод __toString()<br/>
        private, protected и public определяют оюласть кода для которого метод будет доступным
        <img src='./images/php/2.png'/>
        Передавать значения вышеуказаным способом не принятая практика, потому что создавая класс мы подразумеваем что у него уже есть<br/>
        свойство title<br/>
        В отличии от функции методы обьявляются внутри класса
        <img src='./images/php/3.png'/>
        public - открытый можно использовать за пределами класса<br/>
        Метод __construct вызывается при создании экземпляра класса, как и __toString() это магический метод, до php 5 метод __construct<br/>
        совпадал с именем класса, в php 8 обьявлять свойства можно в конструкторе<br/>
        <img src='./images/php/4.png'/>`
    },
    {
        title: 'PHP & Lighthouse',
        content: `Для установки можно воспользоваться официальным сайтом lighthouse-php.com, внутри laravel <br/>
        создасться директория graphql с файлом schema.graphql <br/>
        php artisan vendor:publish --tag=lighthouse-config в папке config создаст файл lighthouse.php с настройками graphql для laravel
        <img src='./images/php/5.png'/>
        ВОсклицательный знак означает required`
    },
    {
        title: 'Computer science',
        content: `Алгоритм белого списка (White List) — это подход, при котором разрешаются только заранее определённые и<br/>
        проверенные значения (например, данные, действия, IP-адреса или маршруты). Всё, что не входит в список, автоматически блокируется.
        <img src='./images/php/6.png'/>`
    },
    {
        title: 'PHP Zandstra',
        content: `В PHP 8 появились именованные аргкменты для методов
        <img src='./images/php/7.png'/>
        Для проверки типов данных использутся функции которые возвращают true/false
        <img src='./images/php/8.png'/>
        <img src='./images/php/9.png'/>
        С 5-й версии php были добавлены обьявления типов данных для методов, если не следовать канонам типизации то получим TypeError<br/>
        Если нужно создать необьязательный аргумент то можно воспользоваться следующим кодом function test(array $arr = null)<br/>
        php 8 - mixed означает смешанные типы данных
        <img src='./images/php/10.png'/>
        До php 8 обьявления переменных с несколькоми типами можно было сделать только в теле метода тепер это можно сделать так int|string|float<br/>
        Если переменная может получить тип null то ее можно определить следующим образом function test(string ?$arg)<br/>
        Можно обьявить тип возвращающего значения function test(string ?$arg): int<br/>
        Тип void возвращает ничего<br/>
        Наследование позволяет создовать несколько классов из одного базового`
    },
    {
        title: 'PHP & Lighthouse',
        content: `Schema похожа на схему в базах данных она описывает данные, есть 3 корневые типы Query, mutation и Subscription<br/>
        Scalar это определенные в type-ах значения типо int, string Id и так далее<br/>
        $carbon->diffForHumans() возвратит время как 38 minutes ago<br/>
        Определения скаляров можно таким образом
        <img src='./images/php/11.png'/>
        Директивы это очень мощный инструмент lighthouse
        <img src='./images/php/12.png'/>`
    },
    {
        title: 'Computer science',
        content: `Алгоритм бинарного поиска Объяснение работы: Массив должен быть отсортирован. Бинарный поиск работает только<br/>
        с отсортированными данными. Идея алгоритма: Делим массив на две половины. Сравниваем искомое число ($target) со<br/>
        средним элементом: Если совпадает — возвращаем индекс. Если меньше — продолжаем поиск в левой половине.<br/>
        Если больше — продолжаем поиск в правой половине. Повторяем до нахождения элемента или завершения диапазона.<br/>
        <img src='./images/php/13.png'/>`
    },
];

let lessonsHtml = '<div>';
const mainElement = document.querySelector('main');
let lessonCount = 0;

lessons.forEach(lesson => {
    lessonCount += 1;
    lessonsHtml += `
        <div class='lesson'>
            <h3>${lesson.title}</h3>
            <p>${lesson.content}</p>
            <p><b>-${lessonCount}-</b></p>
        </div>
    `
});

lessonsHtml += '</div>';
mainElement.innerHTML = lessonsHtml;