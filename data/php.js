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
    </div>`

]
