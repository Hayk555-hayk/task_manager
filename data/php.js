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
    </div>`,
    `<div>(laravel)
    Для установки проекта нужна команда composer create-project laravel/laravel example-app <br/>
    В composer.json находятся зависимости проекта <br/>
    Для начала проекта нужна команда php artisan serv </br>
    Роутинг происходит в  web и api php файлах 
    Пример роута
    <pre>
        Rpote::get('/path', [Controller::class, 'method'])->name('some name for this route');
        Route::get('/path/{user_id}, [Controller::class, 'method])->name('route.name');
        Route::get('/path/{user_id}, [Controller::class, 'method])-where('user_id, 'regular expression');
    </pre>
    В методe у контроллера такие аргументы принимаются как обычные аргументы
    Пример такого метода 
    <pre>
        public function some_method($user_id) {
            logic here ...
        }
    </pre>
    Такие параметры могут быть необьязательными, where после route создаст критерии для переданного аргумента
    <pre>
        Route::get('/path/{user_id?}, [Controller::class, 'method])->where('user_id', 'some regular expression')
        public function some_method($user_id = null) {
            logic here ...
        }
    </pre>
    Эти where могут быть и глобальными, в providers/RouteServiceProvider внутри метода booth
    под всей логикой можем прописать 
    <pre>
        Route::pattern('user_id', 'some regular expression');
    </pre>
    Можно прописать route и для post и для get
    <pre>
        Route::match(['get', 'post'], '/path', [Controller::class, 'method'])
        Route::any('/path', [Controller::class, 'method'])
        // To get the requested method
        public function some_method(Request $req) {
           dd($req->method());
        }
    </pre>
    </div>`,
    `<div>(laravel)
    В контроллерах пишется вся логика приложения, для создания контроллера используем команду php artisan make:controller NameController <br/>
    Общий вид по умолчанию в приложениях ларавел создается шаблонизатором blade они находятся в папке resources/views <br/>
    <pre>
        public function some_method($name) {
            $user_name = $name;
            return view('users', compact('user_name')); // but the file name is users.blade.php
        }
        //В blade Интерполяция происходит благодаря {{$user_name}}
    </pre>
    Создания blade компонента происходит при помощи php artisan make:component ComponentName команды
    Команда создаст 2 файла, первый app/views/created php file, второй resources/views/components/blade файл <br />
    Для вызова этого компонента в нужном blade пропишем ноый тег, через пропсы можно передавать данные x-componentName name="Hayk" :fruits="$fruits"
    и для того чтобы этод name был виден нужно в php файле компонента прописать следующий команда
    <pre>
    class Header extends Component {
        public $name;
        public function __construct($name) {
            $this->name = $name; // This name is available in Header blade as {{$name}}
        }
    }
    </pre>
    </div>`,
    `<div>(laravel)
    Для создания контроллера нужна команда php artisan make:controller NameController, а команда php artisan serve запускает сервер <br/>
    jsonplaceholder является хорошим местом для фейк api <br />
    Создаем запрос на другой ресурс из нашего проекта 
    <pre>
    public function makeRequest() {
        //GET EXAMPLE
        $request = Http::get('url');
        //POST EXAMPLE
        $request = Http::post('url', [data]);
        // PUT EXAMPLE
        $request = Http::put('url', [data]);
        //DELETE EXAMPLE
        $request = Http::delete('url');
        return $requrst->json();
    }
    </pre>
    </div>`,
    `<div>(laravel)
    Работа со строками 
    <pre>
    $str = Str::of('Welcome to tutorial')->after('Welcome to'); // will show tutoral
    $str = Str::of('Welcome\ to\ tutorial')->afterLast('\\'); // will show tutoral
    $str = Str::of('Welcome')->append(' to totorial'); // will show Welcom to tutoral
    $str = Str::of('WELCOME')->lower(); // will show welcome (same for upper)
    $str = Str::of('Welcome here')->replace('here', 'there'); // will show Welcome there
    $str = Str::of('this is a title')->title(); // will show This Is A Titile
    $str = Str::of('welcome to tutorial')->slug('-'); // will show welcome-to-tutorial
    $str = Str::of('welcome here')->substr(8); // will show here
    $str = Str::of('/laravel/')->trim('/'); // will show laravel
    </pre>
    </div>`,
    `<div>(laravel)
    Обработать request нужно при помощи либо кустомных реквестов которые создаются командой php artisan make:request RequestName <br />
    либо же использовать
    <pre>
    use Illuminate/Http/Request

    public function Method(Request $request) {
        ...
        $request->method() // method of the request (get, post, etc)
        $request->path() // url path of the request
        $request->url() // full url path of the request
        $request->fullUrl() //full url path of the request with get query params
        $request->all() // all request data in array
        $request->input('name') // get one input data from the form by the input name
        ...
    }
    </pre>
    </div>`, 
    `<div>(laravel)
    Каждая форма должна отправлять запрос к laravel при помощи csrf токена в blade есть директива @csrf <br />
    В blade форме чтобы отправить запрос достатачно прописать  следующий код
    <pre>
        &ltform method="POST" action="{{route('route.name')}}"&gt
        @csrf
        ...all inputs of the form
        &lt /form&gt
    </pre>
    </div>`,
    `<div>(laravel)
    Выполнения валидации 
    <pre>
    public function Method(Request $request) {
        $validData = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:4|max:14'
        ]);
    }
    </pre>
    Сообщения об ошибках валидации пишутся в blade следующим образом 
    <pre>
    @error('mail')
        {{$message}}
    @enderror
    </pre>
    </div>`,
    `<div>(laravel)
    В laravel есть resource контроллеры которые создают crud методы
    <pre>
    request type | request url              | controller method | url name 
    get             projects                    index()             projects.index
    get             projects/create             create()            projects.create
    post            projects                    store()             projects.store
    get             projects/{project}          show()              projects.show
    get             projects/{project}/edit     edit()              projects.edit
    put/patch       projects/{project}          update()            projects.update
    delete          projects/{project}          destroy()           projects.destroy
    </pre>
    </div>`,
    `<div>(laravel)
    Хорошей практикой является всегда чтото ретурнить потому что все приложения ларавел находится в обертках которые постоянно 
    чтото ретурнят 
    </div>`,
    `<div>(laravel)
    Есть специальный роут для перенаправления Route::redirect('/here', '/there', 301);
    Метод view принимает URI в качестве первого аргумента и имя шаблона в качестве второго аргумента. Кроме того, вы можете указать <br />
    массив данных для передачи в шаблон в качестве необязательного третьего аргумента: Route::view('/welcome', 'welcome', ['name' => 'Taylor']);
    </div>`,
    `<div>(laravel)
    Иногда может потребоваться указать параметр маршрута, который не всегда может присутствовать в URI. <br />
    Вы можете сделать это, поставив знак ? после имени параметра. <br />
    Не забудьте присвоить соответствующей переменной маршрута значение по умолчанию:
    <pre>
    Route::get('/user/{name?}', function ($name = null) {
        return $name;
    });
    </pre>
    Если вы хотите, чтобы параметр маршрута всегда ограничивался конкретным регулярным выражением, <br />
    то вы можете использовать метод pattern. Вы должны определить эти шаблоны в методе boot вашего класса 
    App-Providers-RouteServiceProvider:
    <pre>
    public function boot()
    {
        Route::pattern('id', '[0-9]+');
    }
    </pre>
    </div>`,
    
    `<div>(php)
    Функция isset($var) проверяет наличие переменной, а функция empty($var) проверяет пустая она или нет <br />
    Функция unset($var) удаляет переменную <br />
    В php есть конструкции if-elseid-else, switch-case, condition ? code for true : code for false, for, foreach, while, do-while <br />
    Мало распространенный if, for и isset 
    <pre>
    if(true):
        // code 
    endif;

    for($i = 0; $i < 55; $i++):
        // code 
    endfor;

    $user = $_SESSION['login'] ?? 0; // Два вопросительных установят user в 0 если нету $_SESSION['login']
    </pre>
    С помощью глобальных массивов $_GET $_POST можно брать данные от request-а <br />
    В конец массива можно добавлять данные и вот так $arr[] = 10;, а удалять можно так unset($arr[4]); <br />
    sort($arr) сортирует массив, asort($arr) сортирует асоциативный массив, array_unique($arr) только уникальные элементы, array_sum($arr) сумма массива, <br />
    array_product($arr) умножает друг на друга, count($arr) число элементов, in_array("5", $arr) покажет есть ли в массиве 5 <br />
    array_chunk($arr, 2) разбивает массив на указанное количество подмассивов <br />
    array_slice($array, 0, 4) выведит 4 элемета после 0-ого <br />
    array_splice($array, 0, 4, [1,2,3,4]) работает как slice но не вырезает а заменяет <br />
    $arr = range(1, 10); создаст массив от 1 до 10 <br />
    $arr = array_merge($arr1, $arr2); обьединение массивов <br />
    array_intersect($arr1, $arr2); показывает пересечения, одинаковые элементы в массиве, array_dif($arr1, $arr2) выявит различия <br />
    explode('-', $str); создает из строки массив по указанному разделителю, обратный процесс с помощью implode('-', $arr) <br />
    list($red, $green, $blue) = $array; каждая переменная по очереди возьмет свое значение из массива
    </div>`,
    `<div>(php)
    Функция создается ключевым словом function и может принимать аргумены, функция должна возвращять кокое то значения по return <br />
    Жесткая ссылка добавляется с помощью &,  такие ссылки нужны чтобы переменные менялись глобально а не толко локально внутри функции <br />
    У переменных 2 области видимости local/global 
    <pre>
    function sum($x, $y) {
        return $x + $y;
    }
    //with types
    function sum(int $x, int $y):int {
        return $x + $y;
    }
    // with link
    $x = 10;
    func(&$x); 
    </pre>
    </div>`,
    `<div>(php)
    Статические переменные, запоминают свое значение, если func вызвать 4 раза то на пятый раз у переменной $count будет значение 5
    <pre>
    function func() {
        static $count = 0;
        $count++;
    }
    </pre>
    </div>`,
    `<div>(php)
    require вызовит ошибку если вызовать один и тот же файл с функциями более одного раза, чтобы избежать случайной ошибки <br />
    можно вызовать require_once <br />
    В php есть анонимные функции, это функции без имени 
    <pre>
    $arr = [10,20,30];
    $average = function(array $arr) {
        return array_sum($arr)/count($arr);
    }; // в конце точка с запятой обьязательна 
    $average($arr); // feature call 
    </pre>
    </div>`,
    `<div>(php)
    Способы работы с датой и временим, даты начинаются от начало эпохи unix
    <pre>
    time() // time in seconds from 1 jan 1970, return miliseconds
    mktime(12,12,12, 5, 25, 1994) //make time (hours,minutes,seconds,mounths, days, year), return miliseconds
    date('Y-M-D H:i:S') return readble time in given format
    date('Y-M-D H:i:S', mktime(12,12,12, 5, 25, 1994)) return readble time in given format and date
    strtotime('now') // reurn today date
    strtotime('- 1 day') // reurn yesterday date
    strtotime('next monday') // reurn next monday date
    $date = new DateTime('2011-4-8'); // date class
    $date->modify('-1 day'); // DateTime method modify will change the date 
    echo $date->format('Y-M-D') // return date in given format of DateTime class 
    // counting the time of script execution 
    $start = microtime(true);
    $end = microtime(false);
    $executionTime = $end - $start;
    checkdate(12, 05, 1994) // return 1 as the date is correct
    checkdate(12, 305, 1994) // return nothing as the date is not correct
    </pre>
    </div>`,
    `<div class="checkpoint">(php)
    Математические и строковые функции 
    <pre>
    abs(-20) // module of the num return 20
    sqrt(9) // квадратный корень числа вернет 3
    pow(9, 3) // will 9 * 9 * 9
    M_PI = 3.14
    M_E = 2.7
    round(2.6) // округляет по математическим законам
    round(2.61, 1) // will return 2.6
    round(123, -1) // will return 150
    round(123, -2) // will return 100
    round with math rules, floor to bottom, ceil to top
    mt_rand(1, 400) // will return random number from 1 to 400
    min(1,4,5,7,8) and max(4,5,8,7,2,1) // will return minimal and maximal numbers, also as argument we can pass an array
    base_convert(2356, 10, 2) // (number, система исчесления, перевести в другую систему исчесления)
    strlen('str') // will return string length, russian simbols are length * 2 as they are 2 bites
    mb_strlen('привет') // for russain string length
    ucfirst('hayk') // will return Hayk for refers functionality lcfirst('Hayk') 
    ucwords('ha ha ha ha') // will return Ha Ha Ha Ha
    strtoupper('hayk') // will return HAYK, reverse strtolower
    // replaceing some string
    $str = "hello.world";
    str_replace('.', '-', $str);
    substr_replace($str, 'all', -5, -5) // where to change, new changed value, from wgere, how long
    trim($str); // will delete spaces from the text
    trim('@asldas!!!', '!@') // will delete also ! and @
    strrev('some') // will reverse string and return emos
    script_tags('text with tags or scripts') // will remove tags
    script_tags('text with tags or scripts', ['&ltp&gt']) // will remove all tags, but will save p tag
    htmlspecialchars('some text with tags') // will make tags be just string and will not delete them 
    // hashing data
    mb5("454545") // will return 374yr5n34y5of934y9jw4
    password_hash("454545454", PASSWORD_DEFAULT) // will return 374yr5n34y5of934y9jw4fgwe84pv5jpwe4urtj980we
    </pre>
    </div>`,
    `<div>(php)
    get и post запросы можно получать супер глобальными $_GET['input name'] или $_POST['input name'] а в action у form тега <br />
    прописать путь к запросу, в методе прописать get или post <br />
    exit ('warn text'); выйдет из программы с переданным текстом 
    </div>`,
    `<div>(php)
    Работа с базой данных
    <pre>
    // Connecting to the db
    define('SERVERNAME', 'localhost');
    define('DB_LOGIN', 'root');
    define('DB_PASSWORD', '1234');
    define('DB_NAME', 'shop_table');

    $connect = new mysqli(SERVERNAME, DB_LOGIN, DB_PASSWORD, DB_NAME);
    // update query
    $sql_query = "UPDATE \`heroes\` SET \`age\`=22 WHERE \`name\`='name'";
    $connect->query($sql_query); // make query
    $connect->close(); // closing the query

    //select query
    $sql_query = "SELECT * FROM \`heroes\`  WHERE \`name\`='name'";
    $result = connect->query($sql_query);
    $connect->close();
    // now the $result is an object of the data that was returned by the query, fetch_asoc function will make it to be an array
    $result = $result->fetch_asoc();

    // insert query
    $sql_query = "INSERT INTO \`heroes\` (\`name\`, \`age\`, \`rank\`) VALUES ('$name', '$age', '$rank')";
    </pre>
    header('Location: /'); выполнит редирект страници
    </div>`,
    `<div>(laravel)
    Мидлверы обрабатывают http реквесты перед тем как этот реквест войдет в наше приложение <br />
    Для создания middleware нужна команда php artisan make:middleare Name, директория app/http/middleware <br />
     Middleware могут быть использваны 3-я разными способами global level, local level и route level<br />
     Все мидлверы нужно регестрировать в kernel.php
     1) global level Работает на все приложения В массиве protected $middleware, внутри kernel, добавим новосозданный middleware <br />
     2) local level Работает на роутах, в массиве protected $middlewareGroups, внутри kernel у ключа  web, добавим <br />
     новый наш созданный middleware, тоже самое можно провести и с api, вот поэтому они считаются локальными <br />
     3) route level работает по определенному роуту в кернеле внутри массива protected $routeMiddleware регестрируем наш <br />
     middleware, можно добавить и имя для этого мидлвера, теперь в конце у роута можно добавить <br />
     ->middleware('middleware name')
    </div>`,
    `<div>(laravel)
    Http сессии 
    <pre>
    public function getSession(Request $request) {
        $request->session()->has('name'); // checking if session has name
        $request->session()->get('name'); // geting name from the session
        $request->session()->put('name', 'Hayk'); // setting session 
        $request->session()->forget('name');
    }
    </pre>
    </div>`,
    `<div>(php)
    Работа с файлами 
    <pre>
    $filename = 'data.txt';
    $f = fopen($filename, 'a+'); //a+ is oppening file for reading and writing, if there no such file the regime will create it
    fread($f, 300); // read the file, 300 mean how many symbols we whant to read, fread($f, filesize($filename)) read all file
    fwrite($f, 'text'); // writing some text in the file 
    fseek($f, $num); // откуда прочитать файл (с какой строки)
    fclose(); // in the end it is nesessary to close the file 
    // временный файл 
    $tmp = tmpfile(); // create temprorary file 
    // alternative file reading 
    $str = file_get_contents($filename); // read file 
    file_put_contents($filename, 'text'); // will rewrite the file, also can send and array, and it will be saved by lines in the text.txt, array argument should use implode feature 
    file_put_contents($filename, $str . ' text'); // will add text to the file, also can use file_put_contents($filename, ' text', FILE_APPEND);
    $arr = file('text.txt'); // will return text as an array by each line 
    PHP_EOL // перенос строки 
    copy('f1.txt', 'f2.txt'); // копирование файла 
    rename('f2.txt', 'renamed.txt'); // rename file name 
    unlink('filename.txt'); // delete the file 
    file_exists('file_name.txt'); // check if the file is existing or not 
    mkdir('name', 0777); // create new directory and insert the access (0, read, write, execute) 7 means that file is available for everybody, 6 for the owner and some users, 4 only for the owner
    mkdir('name/name', 0777, true); // need to write true to create file inside of file 
    rmdir('name'); // remove a directory 
    </pre>
    </div>`,
    `<div>(php)
    ООП (обьектно ориентированное программирования) <br />
    Если говорить просто свойства это переменные внутри класса, а методы это функции внутри класса <br />
    Создание класса
    <pre>
    // Creating class
    class ShoppingCard {

    }

    // creating object sample from the class
    $product1 = new ShoppingCard();
    $product2 = new ShoppingCard();
    $product3 = new ShoppingCard(); // each object has its own idintificator, which is can be seen by calling var_dump feature
    var_dump($product1 instanceof ShoppingCard); // check the owner of the object and return true or false
    </pre>
    </div>`,
    `<div>(php)
    Области видимости Public - все свойства и методы класса могут быть использованы в любой точке скрипта <br />
    Private - виден только внутри методов этого же класса <br />
    Protected - Свойства и методы могут использоваться внутри класса и дочернего класса, тоесть могут наследоваться, но в <br />
    дочерних классах protected привратится в private <br />
    Методы работают как обычные функции но они вызываются из контекста обьекта 
    <pre>
    class Shop() {
        private $name;

        public function naming() {
            $this->name = "SHOP"; // the only way to work with private variables 
            echo "Hello {$this->name}";
        }

        function getInfo() { // if there is no public/private or protected it will become public by default
            return "Name: {$this->name}";
        }
    }

    $shop = new Shop();
    $shop->naming();
    $shop->getInfo();

    // We can dynamicaly add new proporties to the object 
    $shop->surname = 'Janibekyan';
    </pre>
    </div>`,
    `<div>(php)
    Конструкторы, деструкторы и магические методы 
    <pre>
    class Person {
        public $name;
        public $surname;

        function __construct($name, $surname) { // in old verssions of php instead of __construct we should write clsss name such as Person
            $this->name = $name;
            $this->surname = $surname;
        }

        function __distruct() {
            echo "deleted"
        }
    }

    $person1 = new Person('Hayk', 'Khachatryan'); // конструктор вызывается при создании класса
    // деструктор вызывается при завершении скрипта или если на обьект больше нет ссылок после всего жизненного цикла отработает __distruct

    </pre>
    </div>`,
    `<div>(php)
    this и self <br />
    $this это специальная переменная которая используется для доступа к обьекту класса изнутри самого класса <br />
    self используется для обращения к внутреннему статическому содержимому класса
    <pre>
    class Person {
        private static $name;

        public static function setName($newName) {
            self::$name = $newName;
        }

    }

    Person::setName('Hayk'); // Теперь мы работаем не с экземпляром класса, а с самим классом 
    </pre>
    </div>`,
    `<div>(php)
    Наследование классов <br />
    Наследование это определение класса которое имеет теже свойства и методы что и родительский класс, плюс свои <br />
    Дочерний класс расширяет родительский, наследование происходит ключевым словом extends <br />
    Чтобы запретить наследование метода дочерним классам, в родительском классе перед функцией нужно прописать final <br />
    Чтобы запретить наследование от указоного класса вообще, перед словом class нужно прописать final <br />
    Инкапсуляция это private свойства и методы 
    <pre>
    class Person {
        private static $name;

        function __construct($ownName) {
            $this->name = $ownName;
        }

        public function getInfo() {
            $info = "name: {$this->name}";
            return $info;
        }
    }

    class Driver extends Person {
        public $drivingLicense;

        function __construct($ownName, $isDriver) {
            parent::__construct($ownName);
            $this->drivingLicense = $isDriver;
        }

        public function getInfo() {
            $info = parent::getInfo();
            $info .= "is driver: {$this->drivingLicense}"; // это называется полиморфоз
            return $info;
        }

    }

    $driver = new Driver("Hayk"); // all functions from Person class are available in Driver class
    $driver->getInfo();
    </pre>
    </div>`,
    `<div>(php)
    Константы класса всегда public <br />
    class User {
        const NATIONALITY = "Armenian";
    }

    echo User::NATIONALITY;
    </div>`,
    `<div>(php)
    Абстрактные классы это классы которые не могут иметь экземпляров, тоесть их невозможно определить словом new <br />
    по факту это просто шаблоны
    <pre>
    abstract class User {
        // можно определять свойства и методы, но методы не должны иметь тела хотя иногда их можно прописывать
        public $name;
        abstract public function func();
    }
    </pre>
    </div>`,
    `<div>(php)
    Интерфейсы это просто шаблоны, перечисление того что будет использовано в самом классе, его экземпляры невозможно создать, <br />
    а так же нельзя прописывать тела функций, для реализации интерфейса нужна ключевое слово implements <br />
    В отличии от class-ов interface позваляют осуществить множественное наследование
    <pre>
    interface FirstInterface {
        public function getName();
    }

    class Test implements FirstInterface, SecondInterface {
        // all methods of interface should be written here 
    }
    </pre>
    </div>`,
    `<div>(php)
    Трейты или примеси это механизм обеспичения повторного использования кода
    <pre>
    class Base {
        public function sayHello() {
            echo "Hello ";
        }
    }

    trait sayWord {
        public function sayHello() {
            parent::sayHello();
            echo "world";
        }
    } 

    class HelloWorld extends Base {
        use sayWord;
        // after that 'use' the sayHello extended method will be extendent by used trait 
    }
    </pre>
    </div>`,
    `<div>(php)
    Магические методы set, get, clone <br />
    Функция clone будет вызвана при клонировании обьекта 
    <pre>
    class User {
        public function __clone() {
            echo "cloned"; // context is clonned object not the original
        }
    }

    $newUser1 = new User;
    $newUser2 = clone $newUser1; // clone magic method now is called 

     //get set example
     class GetSet {
        private $number;

        function __get($name) {
            echo "You just get the $name";
        }

        function __set($name, $val) {
            echo "You just set the $name of with value {$val}";
        }        
     }

     $obj = new GetSet();
     $obj->number; // you just get the number
     $obj->number = 444; // You just set the number with value 444
    </pre>
    </div>`,
    `<div>(laravel)
    Конфигурирования базы данных происходит в .env файле <br />
    При помощи фасада DB::table('table_name) можно делать запросы к базе данным <br />
    Передавать данные к view можно через метод compact retur view('viewName', compact('var1','var2')); <br />
    Директива @foreach($posts as $post) / @endforeach в blade шаблоне отвечает за цикличность <br />
    Директива @csrf нужно поставить внутри form тега чтобы осуществлялись запросы через токен <br />
    POST запрсы можно в конце ретурнить так return back()->with('post_created', 'The post was created'); <br/>
    post_created можно в блейде получить так Session::has('post_created') Session::get('post_created') <br />
    action="{{route('route.name')}}" в blade можно использовать так <br />
    @if / @elseif / @endif директивы условий <br />
    Пример join запрса при помощи фасада DB
    <pre>
    // inner
    $request = DB::table('posts')->join('posts', 'users.id', '=', 'posts.user_id')->select('users.name', 'posts.title')->get();
    // left
    $request = DB::table('users')->leftJoin('posts', 'users.id', '=', 'posts.user_id')->select('users.name', 'posts.title')->get();
    // right
    $request = DB::table('users')->rightJoin('posts', 'users.id', '=', 'posts.user_id')->select('users.name', 'posts.title')->get();
    </pre>
    </div>`,
    `<div>(laravel)
    Модели отвечают за взоимодействия с базой данных php artisan make:model ModelName <br />
    Вместо фасада DB можно использовать модели для выполнения запросов <br />
    В них можно помещать следующие переменные 
    <pre>
    protected $table = 'table'; // define table
    protected $guarded = []; // define not fillable columns 
    protected $fillable = [] // define fillable columns
    </pre>
    Миграции осуществляют функционал каркаса базы данных php artisan make:migration create_posts_table --create=posts <br />
    php artisan migrate или php artisan migrate:fresh --seed запуск миграции <br />
    Миграция назад на один шаг выполняется командой php artisan migrate:rollback <br />
    php artisan migrate:refresh обновит миграции <br />
    Файл миграции выглядит следующим образом 
    <pre>
    $table->string('name');
    $table->text('text');
    </pre>
    Сидеры заполняют базы данных определенными значениями, пример сидеров 
    <pre>
    // run command php artisan make:seeder PostsTableSeeder
    //new created seeder file in function run
    $faker = Faker::create();
    foreach(range(1, 100) as $index) {
        DB::('posts')->insert([
            'title' => $faker->sentence(5),
            'body' => '$faker->paragraph(4)
        ]);
    }
    
    // registering the seeder inside of DatabaseSeeder file in run method
    $this->call([
        PostsTableSeeder::class,
    ])
    // in the end run php artisan db:seed
    </pre>
    Директивы blade интерполяция {{}}
    <pre>
    @php / @endphp // inside blade writing php code 
    @for($i = 0; $ < 10; $i++) / @endfor // blade loop
    @include('header') // file name that will be injected 
    @yield('title') // tell the section name 
    @extends('layout') // tell that this blade extends from layout part and its sections will be injected to the yield part
    @section('title') / @endsection // this will injected in yield part of extendet blade
    </pre>
    Пример пагинации 
    <pre>
    $users = User::paginate(10); // will take first 10 users
    {{$users->links()}} // to get access to the buttons of the pagination 
    </pre>
    Чтобы загрузить фото тип формы должен быть enctype="multipart/form-data", а в контроллере <br />
    нужно прописать $request->filename->store('public'); <br />
    В папке lang можно писать локализацию для проекта, ее можно интерполировать как {{__(langfilename.key)}} <br />
    В роутах можно произвести следующую операцию для локализации 
    <pre>
    Route::get('/{locale}', function($locale) {
        App::setLocale($locale);
        return view('welcome');
    })
    </pre>
    </div>`,
    `<div>(laravel)
Singleton – один из самых простых шаблонов для понимания. Основное назначение – <br />
гарантировать существование только одно экземпляра класса.<br />
Причиной обычно является следующее: требуется только один объект исходного класса и Вам необходимо <br />
что бы объект был доступен в любом месте приложения, т.е. глобальный доступ. <br />
Ключoм реализации шаблона Singleton является статическая переменная,<br />
переменная чье значение остается неизменным при исполнении за ее приделами.<br />
Это позволяет сохранить объект оригинальным между вызовами статического метода Settings::getInstance(),<br />
и возвратить ссылку на него при каждом последующем вызове метода.<br />
Имейте так же в виду, что конструктор, как правило, приватный. Что бы обеспечить использование всегда только<br />
одного объекта Settings мы должны ограничить доступ к конструктору, что бы при попытке создания нового объекта возникала ошибка.<br />
Так же следует иметь в виду, что данные ограничения не возможны в PHP4.<br />
<pre>
class Settings {
    private $settings = array();
    private static $_instance = null;
    private function __construct() {
    // приватный конструктор ограничивает реализацию getInstance ()
    }
    protected function __clone() {
    // ограничивает клонирование объекта
    }
    static public function getInstance() {
    if(is_null(self::$_instance))
    {
    self::$_instance = new self();
    }
    return self::$_instance;
    }
    public function import() {
    // ...
    }
    public function get() {
    // ...
    }
}
</pre>
</div>`,
`<div>(php)
Кратко перечислим основные различия протоколов:<br />
По-разному записывается URL-адрес. Для HTTP — http://, а для HTTPS — https://.<br />
HTTP является не защищенным, а HTTPS защищенным.<br />
HTTP посылает данные через порт 80, а HTTPS использует порт 443.<br />
HTTP работает на уровне приложений, а HTTPS — на транспортном уровне.<br />
Для HTTP не нужны SSL-сертификаты; для HTTPS нужен SSL-сертификат, подписанный центром сертификации.<br />
HTTP не требует проверки домена, тогда как HTTPS требует хотя бы проверки домена, а для некоторых сертификатов даже проверки юридического документа.<br />
В HTTP нет шифрования, HTTPS шифрует данные перед отправкой.<br />
Заключение<br />
HTTPS является более современным и безопасным протоколом.<br />
Воздержитесь от ввода данных кредиток или другой чувствительной информации на сайтах,<br />
работающих по протоколу HTTP. Главная цель использования HTTPS является обеспечение безопасности и конфиденциальности.<br />
Все данные передаются только в зашифрованном виде. Поэтому использование HTTPS имеет смысл для сайтов любого назначения.
</div>`,
`<div>(laravel)
Сервис-провайдеры – это центральное место начальной загрузки всех приложений Laravel.<br />
Ваше собственное приложение, а также все основные службы и сервисы Laravel загружаются через них.<br />
Если вы откроете файл config/app.php, включенный в Laravel, вы увидите массив 'providers'. Это все классы сервис-провайдеров,<br />
которые будут загружены вашим приложением. По умолчанию в этом массиве перечислены основные сервис-провайдеры Laravel.<br />
Они загружают основные компоненты Laravel, такие, как подсистема отправки почты, очередь, кеш и другие. Многие из этих провайдеров являются «отложенными»,<br />
что означает, что они не будут загружаться при каждом запросе, а только тогда, когда предоставляемые ими службы действительно необходимы.<br />
php artisan make:provider RiakServiceProvider<br />
Все сервис-провайдеры расширяют класс Illuminate\\Support\\ServiceProvider. Большинство сервис-провайдеров содержат метод register и boot.<br />
В рамках метода register следует только связывать (bind) сущности в контейнере служб. Никогда не следует пытаться зарегистрировать<br />
каких-либо слушателей событий, маршруты или что-то другое в методе register.<br />
В любом из методов сервис-провайдера у вас всегда есть доступ к свойству $app, которое обеспечивает доступ к контейнеру служб:
<pre>
class RiakServiceProvider extends ServiceProvider
{
    /**
     * Регистрация любых служб приложения.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(Connection::class, function ($app) {
            return new Connection(config('riak'));
        });
    }
}
</pre>
Итак, что, если нам нужно зарегистрировать компоновщик шаблонов в нашем сервис-провайдере?<br />
Это должно быть сделано в рамках метода boot. Этот метод вызывается после регистрации всех остальных сервис-провайдеров,<br />
что означает, что в этом месте у вас уже есть доступ ко всем другим службам, которые были зарегистрированы фреймворком:
<pre>
class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Загрузка любых служб приложения.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('view', function () {
            //
        });
    }
}
</pre>
Вы можете указывать тип зависимостей в методе boot сервис-провайдера. <br />
Контейнер служб автоматически внедрит любые необходимые зависимости:
<pre>
public function boot(ResponseFactory $response)
{
    $response->macro('serialized', function ($value) {
        //
    });
}
</pre>
Чтобы зарегистрировать сервис-провайдер, добавьте его в массив: config/app.php
<pre>
'providers' => [
    // Другие сервис-провайдеры
    App\\Providers\\ComposerServiceProvider::class,
],
</pre>
</div>`,
`<div>(laravel)
Создаем новый фасад, для этого создаем новую папку в папке app, внутри новой папки создаем новый файл payment.php
<pre>
namespace app\\payment;

class Payment {
    public static function process() {
        echo "processing the payment";
    }
}
</pre>
После создаем еще один новый файл paymentFacade.php
<pre>
namespace app\\payment;

class PaymentFacade {
    public static function getFacadeAccessor() {
        return 'payment';
    }
}
</pre>
После создаем сервис провайдер командой php artisan make:provider PaymentServiceProvider, в его register методе прописать 
<pre>
public function register(){
    $this->app->bind('payment', function() {
        return new Payment();
    })
}
</pre>
Теперь в файле config/app.php в массиве providers зарегестрировать наш сервис провайдер <br />
а в aliaces прописать 'payment' => paymentfacade <br />
Теперь в контроллнро можно прописать Payment::process();
</div>`,
`<div>(laravel)
Для создания custom 404 страници нужно в resources/views создать папку errors а внутри нее поместить 404.blade.php <br />
Теперь без всяких настроек все будет работать
</div>`,
`<div>(laravel)
Отправка email, для этого создаем класс mail - php artisan make:mail TestMail <br />
После основные настройки даются в env файле, каждый майл сервер имеет свои уникальные настройки <br />
В контроллере прописать 
<pre>
public function sendEmail() {
    $details = [
        'title' => 'some txt',
        'body' => 'some txt'
    ];

    Mail::to("some mail adress")->send(new TestEmail($details));
    return "email sent...";
}
</pre>
Теперь в TestEmail файле создатим public $details и в конструкторе проинициализируем его, а в build методе пропишем subject
<pre>
public $details; 
public function __construct($details) {
    $this->details = $details;
}

public function build() {
    return $this->subject('some txt')->view('emails.TestEmail); // in this blade we can use ordinary styles
    // in this blade we can use variables $details['title'], $details['body']
}
</pre>
</div>`,
`<div>(laravel)
    Создания логин регистр на laravel
    <pre>
    composer require laravel/jetstream // instaling the package
    php artisan jetstream:install livewire 
    php artisan migrate
    //After this instalations we can see Actions folber in app where everythink will be ready
    // Also in resources views auth we will have new blades for login registr
    </pre>
    Eloquent ORM CRUD
    <pre>
    // Creating post
    $post = new Post();
    $post->title = 'smth';
    $post->description = 'smth';
    $post->save();
    //Getting post
    Post::orderBy('id', 'DESC')->get();
    Post::where('id', $id)->first();
    Post::find($id);
    //Deletting the post
    Post::where('id', $id)->delete();
    //Updateing post
    $post = Post::find($id);
    $post->title = $request->title;
    $post->save();
    </pre>
</div>`,
`<div>(laravel)
    Для того чтобы соединять разные таблицы нужно иметь срртветственный ключь в таблице например user_id, phone_id, post_id...<br />
    В таблице присоеденения можно прописать следующую строку кода, хотя можно и пропустить это, потому что laravel делает это самостоятельно <br />
    Связь один к одному
    <pre>
    // phones table migration file 
    $table->bigInteger('user_id')->unsigned();
    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); // cascade will remove phones if user will be deleted 
    </pre>
    В моделе User и Phone нужно добавить следующую логику 
    <pre>
    // USER MODEL 
    public function phone() {
        return $this->hasOne(Phone::class);
    }
    //PHONE MODEL
    public function user() {
        return $this->belongsTo(User::class);
    }
    </pre>
    Манипулируем данные Phone и User 
    <pre>
    // Сохраняем 
    $phone = new Phone();
    $phone->phone = '1234567';

    $user = new User();
    $user->name = 'Hayk';
    $user->phone()->save($phone);

    // Получаем
    $phone = User::find($id)->phone;
    return $phone;
    </pre>
    Есть так же и связь один ко многим, допустим что у User может быть много телефонов, в этом случае в моделе User пропишем следующий код
    <pre>
    //User Model
    public function Phones() {
        return $this->hasMany(Phones::class);
    }
    </pre>
    Когда забираем соединенные данные то posts вызывается без функции <br />
    Можно так же использовать связь многие ко многим, такие связи намного сложнее 
    <pre>
    // Нужно создать 3-ю таблицу и сохранять id пользователя и роли 
    $table->bigInteger('user_id')->unsigned();
    $table->bigInteger('role_id')->unsigned();
    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    $table->foreign('role_id')->references('id')->on('role')->onDelete('cascade');

    // В модели нужно прописать такие же методы 
    // Role model
    public function users() {
        return $this->belongsToMany(User::class, 'role_users'); // second argument is a table name 
    }
    // User model 
    public function roles() {
        return $this->belongsToMany(Role::class, 'role_users'); // second argument is a table name 
    }

    //Saving User roles id's
    $user = new User();
    $user->name = $name;
    $user->save();

    $rolesId = [1,2,3,4];
    $user->roles()->attach($rolesId); // Data will be added in role_users table

    // returning roles with user id 
    $user = User::find($id);
    $roles = $user->roles;
    return $roles;

    // Returning all users with roles id 
    $roles = Role::find($id);
    $users = $roles->users;
    return $users;
    </pre> 
</div>`,
`<div>(laravel)
    Для экспорта данныв в exel или csv нужно установить пакет composer require maatwebsite/exel <br />
    В confif/app.php в массиве providers пропишем Maatwebsite/Excel/ExelServiceProvider::class <br />
    В массиве aliaces пропишем 'Excel' => Maatwebsite/Excel/Facades/Excel::class <br />
    После вводим команду php artisan vendor:publish --provider="Maatwebsite/Excel/ExelServiceProvider" <br />
    В нужной моделе создадим статический метод 
    <pre>
    public static function getEmployee() {
        $records = DB::table('employee')->select('id', 'name')->get()->toArray();
        return $records;
    }

    // php artisan make:export EmployeeExport --model=App/Models/Employee
    </pre>
    После этого в папке App/Exports появится новый класс в котором пропишем ... 
    <pre>
        public function headings():array 
        {
            return [
                'id',
                'name'
            ];
        }

        public function collection() {
            return collect(Employee::getEmoloye());
        }
    </pre> 
    В Employee контроллере пропишем ...
    <pre>
    public function ExportExel() {
        return Excel::download(new EmployeeExport, 'list.xlsx');
    }

    public function ExportCSV() {
        return Excel::download(new EmployeeExport, 'list.csv');
    }
    </pre>
    Логика для импорта данных выглядит следующим образом 
    <pre>
    php artisan make:import EmployeeImport --model=Employee// Creating import class
    //app/import/EmployeeImport is placed in mentioned folber 
    class EmployeeImport implements ToModel, WithHeadingRow {
        public function model(array $row) {
            return new Employee([
                'name' => $row['name'],
                'surname' => $row['surname'],
                'email' => $row['email'],
                'phone' => $row['phone'],
            ]);
        }
    }

    // Controller of employee 
    public function importFrom() {
        return view('import-form'); // blade with import button in form where user can choose the file to import
    }

    public function import(Request $request) {
        Excel::import(new EmployeeImport, $request->file);
        return 'imported...';
    }
    </pre>
</div>`,
`<div>(laravel)
    Экспорт данных в pdf происходит DOMPdf пакетом 
    <pre>
    composer require barryvdh/laravel-dompdf //downloading package 
    // config app.php
    // in providers array add Barryvdh/DomPDF/ServiceProvider::class,
    // In aliaces array add 'PDF' => Barryvdh/DomPDF/Facade::class,
    //php artisan vendor:publish --provider="Barryvdh/DomPDF/ServiceProvider"
    // Download pdf

    public function showFile() {
        $employee = Employee::all();
        return view('blade', compact('employee'));
    }
    public function downloadPDF() {
        $employee = Employee::all();
        $pdf = PDF::loadView('blade.name', compact('employee'));
        return $pdf->download('employee.pdf');
    }
    </pre>
</div>`,
`<div>(laravel)
Пакет для изменения размера фотографии
<pre>
    composer require intervention/image // downloading package 
    // In providers array we need to add Intervention/Image/ImageServiceProvider::class,
    // In aliaces we need to add 'Image' => Intervention/Image/Facades/Image::class,
    //Publishing configs php artisan vendor:publish --provider="Intervention/Image/ImageServiceProviderLaravelRecent"
    //controller 
    public function resizeImage() {
        return view('blade');
    }

    public function resizeImageSubmit(Request $request) {
        $image = $request->file;
        $filename = $image->getClientOriginalName();
        $image_resize = Image::make($image->getRealPath());
        $image_resize->resize(300, 300);
        $image_resize->save(public_path("images/$filename"));
        return 'saved...';
    }
</pre>
</div>`,
`<div>(laravel)
    При помощи dropzoneJS можно загружать файлы, установи в нужном месте cdn дропзона (dropzone.min.css, dropzone.min.js) <br />
    После создания формы в контроллере создается новый метод
    <pre>
        public function dropzone(Request $request) {
            $image = $request->file('file');
            $imageName = time() . '.' . $image->extension();
            $image->move(public_path('images'), $imageName);
            return response()->json(['success' => $imageName]);
        }
    </pre>
</div>`,
`<div>(laravel)
        Lazy Loading можно осуществить при помощи jQuery, в поисковике пропишем lazy loading jquery и установим нужные cdn <br />
        В нужном blade после установки cdn добавим скрипт 
        <pre>
        $(document).ready(function() {
            $('img').lazyload();
        });
        </pre>
</div>`,
`<div>(laravel)
        Использование tinyMCE в laravel, ищем сайт tiny.cloud, здесь нужно регестрироваться и следовать документации <br />
        Toast это js библиотека для красивых уведомлений, нужно загрузить toastr.min.css и toastr.min.js, теперь в нужном blade пишем 
        <pre>
            @if(Session::has('student_added'))
                <script>toastr.success("{!! Session::get('student_added') !!}")</script>
            @endif
        </pre>
        Кроме toastr есть и sweat alert
        <pre>
        @if(Session::has('student_added'))
                <script>swal("Great job", "{!! Session::get('student_added') !!}", "success", {
                    button: "ok"
                })</script>
            @endif
        </pre>
</div>`,
`<div>(laravel)
    Создания своего helper, в папке app создаем новую папку Helpers а внутри functions.php <br />
    <pre>
    // functions.php 
    function someLogic() {
        // some logic ...
    } 
    // Composer.json inside autoload array add comma after psr-4 and add "files" : ["app/helpers/function.php"]
    // after composer dump-autoload 
    // after that all now the function someLogic is available any where we need it 
    </pre>
</div>`,
`<div>(laravel)
Создание Zip файла 
<pre>
    $zip = new ZipArchive;
    $fileName = 'myZip.zip';
    if($zip->open(public_path($filename), ZipArchive::CREATE) === true) {
        $file = File::file(public_path('myFiles'));
        foreach($file as $key => $value) {
            $relativeNameInZipFile = basename($value);
            $zip->addFile($value, $relativeNameInZipFile);
        }
        $zip->close();
    }
    return response()->download(public_path($fileName));
</pre>
</div>`,
`<div>(laravel)
    База данных yajra
    <pre>
    composer require yajra/laravel-datatables // installing package
    // config/app.php in providers add Yajra/DataTables/DataTablesServiceProvider::class,
    // in aliaces of config/app.php add 'DataTables' => Yajra/DataTables/Facades/DataTables::class
    // php artisan vendor:publish --provider="Yajra/DataTables/DataTablesServiceProvider"
    //Controller
    public function index(EmployeeModel $table) {
        return $table->render('employee');
    }

    //from cdn.datatables.net download cdn, click in needed css framework and copy css and js cdns
    // in blade write the next code 
    &ltdiv&gt {!! $table->table() !!} &ltdiv / &gt
    {!! $table->scripts() !!} 

    //To export table as csv we need another package composer require yajra/laravel-datatables-buttons
    // config/app.php in providers add Yajra/DataTables/ButtonServiceProvider::class,
    // php artisan vendor:publish --tag=datatables-buttons
    </pre>
    Остольное согласно документации
</div>`,
`<div>(laravel)
    Примеры Ajax запросов 
    <pre>
        $('#studentForm').submit(function(e) {
            e.preventDefault;
            let val = $('input').val();
            let _token = $('input[name=_tocken]').val(); //@csrf

            $.ajax({
                url: "{(route(route.name))}",
                type: "POST",
                data: {
                    val: val,
                    _tocken: _tocken
                },
                success: {
                    // some js logic
                }
            });
        });
    </pre>
</div>`,
`<div>(laravel)
Бесконечный скролинг 
<pre>
    // controller
    public function index(Request $request) {
        $posts = Post::paginate(5);
        if($request->ajax()) {
            $view = view('blade', compact('posts'))->render();
            return response()->json(['html' => $view]);
        }
        return view('blade', compact('posts'));
    }
    // in blade show all new data, create new ajax query with ?page=, also you can add some loader 
    // the event when this feature will work will be the next 
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() >= $(document).height()) {
            page++;
            new ajax query 
        }
    });
</pre>
</div>`,
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
</div>`,
`<div>(laravel)
    Maintainance mode позволяет ввести сайт в режим обслуживания 
    <pre>
    php artisan down // now all pages will return 503 error with service unavailable 
    php artisan down --secret="code" // site will be able if after main url we will add /code 
    // in errors/503.blade.php we can costumize the 503 error page 
    php artisan up // will return site to normal behaviour 
    </pre>
</div>`,
`<div>(laravel)
    accessor позволяет изменять запрошенные данные а mutators позваляет изменять отправленные данные <br />
    Обе создаются в моделе 
    <pre>
    //model.php
    //mutator
    public function setEmailAttribute($value) {
        $this->attributes['email'] = strtolower($value);
    }
    //accessor
    public function getNameAttribute($value) {
        return strtoupper($value);
    }
    </pre>
    В laravel можно создавать свои команды php artisan make:command CommandName <br />
    Там можно писать любую логику и в конце в kernel.php назначить время их выполнения 
</div>`,
`<div>(laravel)
Livewire это фреймворк фреймворка 
<pre>
    composer require laravel/livewire // installing framework
    // on livevare blade files we should add @livewireStyles in header and {{ slot }} @livewireScripts in body
    // livevire is consisted by the components to create one such componend we should use 
    // php artisan make:livewire Post
    // 2 files created as ordinary laravel blade components class file and view 
    // class file at app/http/livewire 
    // to pass data or arguments in class we will add 
    public $data;
    public function mount() {
        $this->name = $name; // same as ordinary blade but instead __construct now it is mount
    }
    // view file at blade/livewire
    // Now we can access to this file by using not ordinary route logig 
    Route::get('/path', Post::class); post class is a livewire component 
    // components can be created without view file, such components called inline components
    php artisan make:livewire Post --inline
    //To add livewire component in blade just add @livewireStyles @livevireScripts and @livevire('post')
    //Also we can bind data of component as html attributes with wire:model="someVarName", every such model will send request to the server when the data will be changed, so to handle that we need wire:model.debounce.1000ms="someVarName"
    //To use above mentioned we need to make public variable in target class
    //
</pre>
</div>`,
`<div>(laravel)
Создание livewire actions
<pre>
php artisan make:livewire Action // make new component
// In class file create new function to handel the behavior
// In blade file add wire:click="createdMethodName(arguments)" on the button 
// We have also wire:keydown.enter="methodName($event.target.value)"
</pre>
В livewire есть жизненные циклы компонентов 
<pre>
mount()
hydrate()
updating()
updated()
render()
</pre>
</div>`,
`<div>(laravel)
В liviwire компоненте добавим следующий код для ваоидации формы 
<pre>
public function updated($fields) {
    $this->validateOnly($fields, [
        // same validation rules from submitForm method
    ])
}

public function submitForm() {
    $this->validate([
        // validation rules 
    ]);
}

// In livewire blade component you can show errors in that way 
@error('name')
    some html with interpolating an error
@enderror
</pre>
</div>`,
`<div>(laravel)
    Пагинация в Livewire компонентах 
    <pre>
    1. add this namespace in the component 
    use Livewire/WithPagination; // new namespace
    use WithPagination; // Add in class
    2. select from db
    $users = User::paginate(5);
    3. return view
    return view('view-name',['users'=>$users]);
    4. use {{$users->links()}} in blade for pagination
    </pre>
</div>`,
`<div>(laravel)
Sanctum auth
<pre>
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel/Sanctum/SanctumServiceProvider"
php artisan migrate

// http/kernel.php inside api array add this
/Laravel/Sanctum/Http/Middleware/EnsureFrontendRequestsAreStateful::class,

// User model
use Laravel/Sanctum/HasApiTokens;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
}

// Make new controller for auth 
php artisan make:controller AuthController
public function register(Requset $request) 
{
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|email',
        'password' => 'required'
    ]);

    if($validator->fails()) {
        return response()->json(['status_code' => 400, 'message' => 'Bad request']);
    }

    $user = new User();
    $user->name = $request->name;
    $user->email = $request->email;
    $user->password = bcrypt($request->password);
    $user->save();

    return response()->json([
        'status_code' => 200,
        'message' => 'User created'
    ]);
}

public function login(Request $request)
{
    $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => 'required'
    ]);

    if($validator->fails()) {
        return response()->json(['status_code' => 400, 'message' => 'Bad request']);
    }

    $credentials = request(['email', 'password']);

    if(!Auth::attempt($credentials)) {
        return response()->json([
            'status_code' => 500,
            'message' => 'Unauthorized'
        ]);
    }

    $user = User::where('email', $request->email)->first();
    $tokenResult = $user->createToken('authToken')->PlainTextToken;
    
    return response()->json([
        'status_code' => 200,
        'token' => $tokenResult
    ]);
}

publick function logout(Request $request) 
{
    $request->user()->currentAccessToken()->delete();
    return response()->json([
        'status_code' => 200,
        'message' => 'Token deleted'
    ]);
}

// Create Routes for this routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function() {
    // all routs for loged in user
})
</pre>
</div>`,
`<div>(laravel)
Множественная authentication
<pre>
composer require laravel/Jetstream
php artisan jetstream:install liveware

// open user table migration add add
$table->string('utype')->default('USR')->comment('ADM for admin and USR for normal user');

// In middleware folder inside AuthAdmin.php add 
public function handle(Request $request, Closure $next) 
{
    if(session('utype') === 'ADM') {
        return $next($request);
    } else {
        session()->flush();
        return redirect()->route('login');
    }
    return $next($request);
}

// In http kernel.php routeMiddleware array add
'authadmin' => /App/Http/Middleware/AuthAdmin::class

// In ROuteServiceProvider add 
public const HOME = '/user/dashboard';
public const ADMIN_HOME = '/admin/dashboard';

// In resources videws layouts add 
admin.blade.php file

// In app/view/components add AdminLayout.php 
// Inside that new layout return view('layouts.php')
</pre>
</div>`,
`<div>(php)
Базовые стандарты php гласят что если код составлен только из php то закрывающийся тег php не обьязателен
</div>`
]