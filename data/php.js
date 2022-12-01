let php_data = [
    `<div>(php)
    Кроме index.php нужно создать файл .htaccess и внутри прописать 
        <pre>
        AddDefaultCharset utf-8
        DirectoryIndex index.php
        </pre>
        php скрипты пишутся в тегах &lt?php ... ?&gt <br/>
        Кодировка utf-8 нужна для правильного прописания русского языка 
    </div>`,
    `<div>(php)
    Переменная это временная хранилище данных
    <pre>
    $name = 'Hayk';
    $age = 28;
    echo "hello my name is $name and my age is $age";
    </pre>
    В строке переменные можно выводить только двойными кавычками
    <br/>
    Чтобы вывести переменную и текст без пробелов можно использовать следующий тип написания
    <pre>
    echo "The traditions comes from {$age}th"
    </pre>
    Внедрять php в html очень легко 
    <pre>
    &ltdiv&gt some text &lt?php echo $name ?&gt some text &lt/div&gt
    </pre>
    Дата выводится при помощи функции date('y-m-d') <br/>
    Константа в отличии от простой переменной неизменчива 
    <pre>
    define('SOME_CONST', 45);
    const anodher_const = 35;
    echo SOME_CONST;
    define(CONST_ARRAY, [1,2,3]);
    echo CONST_ARRAY[1];
    </pre>
    Есть и встроенные константы, их много, но вот пример нескольких из них
    <pre>
    __DIR__
    __FILE__
    __LINE__
    PHP_VERSION 
    </pre>
    Кроме echo переменные можно вывести с помощью var_dump($arr), print($arr), print_r($arr)
    </div>`,
    `<div>(php)
    Ошибки бывают трех типов: notice, warning и fatal. Иногда 1-й и 2-й тип ошибок выключен 
    чтобы их видеть нужно прописать error_reporting(E_ALL); или ini_set('display_errors', 'on'); <br/>
    Чтобы каждый раз не прописывать выщеуказанный код можно его прописать в файле php.ini в самом низу <br />
    error_reporting=E_ALL
    display_errors=On
    </div>`,
    `<div>(laravel)
    Framework помогает быстрее разрабатывать, чтобы установить ларавел в первую очередь нужен компосер а потом нужно 
    в командной строке прописать composer create-project laravel/laravel example-app, а для запуска сервера php artisan serve <br />
    Laravel это mvc фруймворк (model-view-controller) <br />
    Точкой входа для всех запросов к приложению Laravel является файл public/index.php <br />
    Одним из наиболее важных поставщиков служб в вашем приложении является App-Providers-RouteServiceProvider.
    Этот поставщик загружает файлы маршрутов, содержащиеся в каталоге routes приложения
    </div>`,
    `<div>(php)
    Для того чтобы узнать тип переменной есть метот gettype($arr) <br />
    Метод is_string($var) проверяет переменную на строку, вернет 1 или '' <br />
    Метод is_int($var) проверяет переменную на номер, вернет 1 или '' <br />
    Аналогично is_string и is_int есть is_float, is_bool, is_null, is_array, is_resource
    var_dump также выведит число бит рядом с переменной <br />
    PHP_INT_MAX выводит максимальное число в php <br />
    Массив данных может быть обычым [1,2,3] и ассоциативным ['first' => 1, 'second' => 2] <br />
    Массивы ваводятся с var_dump или print_r потому что echo конвертирует данные в строку и это вызовет ошибку <br />
    Переменная ресурс содержит ссылку на внешний файл $book = fopen('dir/book.txt','r'); <br />
    Пример обьекта $mysql = new Mysqli('smt','smt','smt'); <br/>
    Типы данных string, int, float, boolean, null, array, resource, object <br/>
    Типы данных можно изменять явно и неявно, неявно это когда к примеру строку умножить на число, а явно
    это когда перед пееременной написать (int), (string), (bool), (array), (float)
    </div>`,
    `<div>(php)
    Арифметические операторы +, -, *, /, %, ** приоритет таких операций такой же как и в математике<br />
    Операторы присвоения =, +=, -=, *=, /=, %=, .= <br />
    Инкремент и декремент ++ и -- бывает префиксный и постфиксный, префиксный ++$x увеличивается потом выполняет код а постфиксный 
    $x++ выполняет код а потом увеличивает, инкремент сработает и с такой строкой как "A" <br />
    Операторы сравнения <, >, <=, >=, ==, ===, !=, !==
    </div>`,
    `<div>(php)
    Обьединять разнофайловые php коды можно при помощи 4-ех методов <br />
    1) include 'file.php' если не найдет warning error<br />
    2) include_once 'file.php' тожа самое что и include только 1 раз <br />
    3) require 'file.php' если не найдет fatal error<br />
    4) require_once 'file.php' тоже самое что и require только 1 раз <br />
    </div>`,
    `<div>(php)
    Метод header('Location: http://example.com'); выполнит редирект
    </div>`
]