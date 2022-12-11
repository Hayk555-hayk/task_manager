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
    `<div>(php)
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
    </div>`

]
