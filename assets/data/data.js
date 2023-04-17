const task_title = {
    programming: ['Ruby', 'Ruby on Rails', 'PHP', 'Laravel', 'Node JS', 'Nest JS', 'JavaScript', 'React JS', 'Add techno'],
    math: ['Algebra', 'Geometry', 'Physics'],
    languages: ['English', 'German', 'Spanish', 'Japanese', 'Chinese', 'Hebrew'],
    religion: ['Reading the Bible', 'Writing a letter', 'Reading the Bible through an app'],
    sport: ['Sport']
}

const notes = {
    'Ruby': [
        'Чтение кники Ruby (страница 158)',
        'Обьект это сущность служащая контейнером для данных и управляющая доступом к эти данным',
        'Инкапсуляция ограничивает доступ к методам и данным обьекта',
        'Обьект это экземпляр класса',
        'В Ruby есть конструктор, но нет деструктора, благодаря зборщику мусора',
        'Наследование позволяет повторно использовать код',
        'Абстрактных классов в Руби не существует',
        'Ruby является интерпретируемым языком',
        'Имена глобальных переменных начинаются со знака $, @ переменная обьекта, @@ переменная класса',
        'Многострочные коментарии',
        `<img src='assets/code_examples/ruby/img1.png' />`,
        'При помощи этого синтаксиса можно вывести строку и переменную #{var_name}',
        'Все массивы это экземпляры класса Array, в которых могут хрянятся данные любых типов',
        'Синтаксис массива без запятых',
        `<img src='assets/code_examples/ruby/img2.png' />`,
        'Асоциативный массив в ruby называется хешом',
        'Операторы Ruby',
        `<img src='assets/code_examples/ruby/img3.png' />`,
        'В Ruby все что не nil и false возвращают true, доже 0 и пустая строка ""',
        'Восклицательный знак в конце метода предупреждает что метод возвращает новое значение',
        'Кроме if есть конструкция unless (пока не)',
        `<img src='assets/code_examples/ruby/img4.png' />`,
        'Для множества условий есть удобный switch case где вместо default используется else',
        `<img src='assets/code_examples/ruby/img5.png' />`,
        'Пример циклов',
        `<img src='assets/code_examples/ruby/img6.png' />`,
        'try/catch в руби выполняется следующим образом',
        `<img src='assets/code_examples/ruby/img7.png' />`,
        'Можно добавить несколько rescue для того что бы обработать ошибки по определенному типу',
        'Все числа, строки, массивы являются обьектами которые имеют свои методы',
        'все эти обьекты имеэт свой id который можно получить так "abc".object_id, а названия класса вот так "abc".class',
        'В RUBY как и множестве современных языков нет множественного наследования',
        'Имя класса это глольная константа, поэтому названия начинается с прописной буквы',
        `<img src='assets/code_examples/ruby/img8.png' />`,
        'initialize тот же конструктор в php, @@-переменные класса, @-переменная экземпляра',
        'attr_accessor - сеттер и геттер, attr_reader - геттер, attr_writer - сеттер',
        'Для управления видимостью есть методы private, public и protected',
        'private доступет только внутри класса может быть вызван с self, protected работает так же но может быть вызван без self',
        'Наследования классов происходит следующим синтаксисом FirstClass < SecondClass',
        'Если в строке множество подчеркиваний то ее можно представить с помощью %q[some "string"]',
        'Несколько методов строк',
        `<img src='assets/code_examples/ruby/img9.png' />`,
        'Пример регулярных выражений',
        `<img src='assets/code_examples/ruby/img10.png' />`,
        `<img src='assets/code_examples/ruby/img11.png' />`,
        `<img src='assets/code_examples/ruby/img12.png' />`,
        'Регулярные выражения нужно скомпелировать Regexp.compile("^foo.*")'
    ],
    'Ruby on Rails': [
        'Книга Rails стр(88)',
        'Валидация в rails осуществляется в моделях',
        `<img src='assets/code_examples/rails/img1.png' />`,
        'После того как rails приложение установлено нужна команда bundle install для установки всех gem-ов',
        'команда rails s запустит сервер',
        'rails работает шаблоном MVC',
        'Корневой маршрут который ответит на запрос / можно определить словом root',
        `<img src='assets/code_examples/rails/img2.png' />`,
        'Как и Laravel Ruby использует паттерн MVC',
        'Выполнение миграций bundle exec rake db:migrate',
        'rake это ruby make',
        `<img src='assets/code_examples/rails/img3.png' />`,
        'Роуты ресурсы можно создать командой resources: users',
        `<img src='assets/code_examples/rails/img4.png' />`,
        'Валидации происходят в моделях',
        'validates: :content, length: {maximum: 140}',
        'К примеру если у юзера множество постов то в моделях соединения пишутся следующим образом',
        'USERS MODEL => has_many :posts',
        'POSTS MODEL => belongs_to :user',
        'Модели наследуют ActiveRecord base',
        'Контроллеры наследуют от ApplicationController, а тот в свою очередь наследует от ActionController:base'
    ],
    'PHP': [
        'Уроки PHP на code.mu (основной учебник - урок 5)',
        'Для вывода php в html нужны теги php',
        'Если вы допустите в вашем PHP коде ошибку, то сервер выведет описание этой ошибки прямо в браузер.',
        'Ошибки бывают трех типов: notice, warning и fatal.',
        'Нотисы представляют собой замечания о том, что у вас в коде может что-то быть не так.',
        'Хотя код по-прежнему будет работать. Лучше, однако, эти ошибки не оставлять без внимания, а исправлять их.',
        'Ворнинги представляют собой предупреждения о том, что что-то пошло не так. Как правило при этом ваш код запустится,',
        'но будет работать не так, как вы хотите.',        
        'Фаталы возникают в том случае, когда PHP код не может быть выполнен. Как правило это будет связано с допущенной вами синтаксической ошибкой.',        
        'Есть, однако, проблема. По умолчанию нотисы и ворнинги выключены, а вместо фаталов вы будете видеть просто белый экран.',
        'Это, конечно же, малоинформативно. Давайте включим вывод всех ошибок',
        `<img src='assets/code_examples/php/img1.png' />`,
        ' однострочные коментарии //, многострочные коментарии /**/',
        'var_dump("12345"); // выведет "12345" и еще некоторую полезную инфу',
        'Переменные определяются знаком доллара $name = "Hayk"; echo $name;'
    ],
    'Laravel': [
        'Уроки Laravel на laravel.su (урок НАЧАЛО РАБОТЫ -> Структура каталогов)',
        'Для создания проекта есть несколько методов, самый лучший это использовать установщик',
        `<img src='assets/code_examples/laravel/img1.png' />`,
        'Laravel может служить как полностью full stack благодаря blade щаблону и как back если использовать только возможности API',
        'Все конфигурационные файлы фреймворка Laravel хранятся в каталоге config.',
        'Файл .env Laravel по умолчанию содержит некоторые основные значения конфигурации,',
        'которые могут зависеть от того, работает ли ваше приложение локально или на конечном веб-сервере.',
        'Эти значения могут быть получены из различных конфигурационных файлов каталога config Laravel с помощью глобальной функции env() Laravel.',
        'Обычно вы должны запускать команду php artisan config:cache как часть процесса развертывания эксплуатационного режима.',
        'Команду не следует запускать во время локальной разработки,',
        'поскольку конфигурационные параметры часто нужно будет изменять в ходе разработки вашего приложения.',
        'Чтобы включить режим обслуживания, выполните команду down Artisan: php artisan down',
        'Чтобы отключить режим обслуживания, используйте команду up: php artisan up',
    ],
    'Node JS': [
        'Уроки Node js на metanit.com (урок 1)'
    ],
    'Nest JS': [
        'Уроки по Nest JS на nestjs.ru (урок 1)'
    ],
    'JavaScript': [
        'Уроки JavaScript на metanit.com (урок 1)'
    ],
    'React JS': [
        'Уроки React js на metanit.com (урок 1)'
    ],
    'Add techno': [
        'Уроки Graphql  на https://tproger.ru/translations/graphql-beginners-guide/ (урок 1)'
    ],
    'English': [
        'lingust урок 2'
    ] ,
    'German': [
        'lingust урок 1'
    ] ,
    'Spanish': [
        'lingust урок 2',
        'Буквы b и v читаются одинаково. Каждая из них имеет по два звуковых соответствия',
        'Буква Q q [ку] соответствует русскому звуку [к]',
        'м. род. armario (шкаф); ж. род. mesa (стол); piano (пианино); silla (стул)',
        'Неопределенные артикли как в английском a, an - м.род un; ж.род una',
        `<pre>
            Словарь:
                querer	[кэрэр]	хотеть
                Quito	[кито]	Кито (стол. Эквадора)
                guerra	[гэрра]	война
                guitarra	[гитарра]	гитара
                cigüeña	[θигуэня]	аист
                pingüino	[пингуино]	пингвин
                pan y carne [пан и карнэ] хлеб и мясо
                ya [йа] уже
                buey [буэй] вол
                blanco y negro [бlанкой нэгро] белый и черный
                averiguáis [аβэригуа́йс] вы исследуете
                averigüéis [аβэригуэ́йс] чтобы вы исследовали
                limpiáis [лимпйа́йс] вы чистите
                limpiéis [лимпйэ́йс] чтобы вы почистили
                día [ди́-а] день
                sentíais [сэнти́-айс] вы чувствовали
                baúl [ба-у́l] чемодан
                boca [бока] губы, рот
                bastante [бастантэ] достаточный
                vaca [бака] корова
                ventana [бэнтана] окно
                cambiar [камбйар] менять
                sombra [сомбра] тень
                tranvía [трамби́-а] трамвай
                un vaso [умбасо] стакан
                la vaca [lаβака] корова
                abuela [аβуэlа] бабушка
                ave [аβэ] птица
                donde [дондэ] где
                sueldo [суэlдо] жалование (зарплата)
                mí мне
                mi мой, моя
                tú ты
                tu твой, твоя
                mas но
                más больше
                sí да
                si если
                él он
                el артикль
                ¿qué? [кэ] что?
 	            es [эс] есть
 	            esto [э́сто] это (на расстоянии вытянутой руки)
 	            eso [э́со] это, то (находится недалеко, но не достать рукой)
 	            aquello	[акэ́йо] это, то (находится далеко от говорящего)
 	            y [и] и; а
                una	mesa [мэ́са] стол *
                una	lámpara	[lа́мпара]	лампа
                una	silla	[си́йя]	стул *
                una	pluma	[пlума]	чернильная ручка
                un	bolígrafo	[боли́графо]	шариковая ручка, сокр.: boli
                una	ventana	[бэнта́на]	окно
                una	butaca	[бута́ка]	(мягкое) кресло
                un	armario	[арма́рйо]	шкаф
                un	piano	[пйа́но]	пианино *
                un	teléfono	[тэлэ́фоно]	телефон; teléfono móvil [мо́βил] — мобильный телефон
                Lección primera [lэкθйо́н примэ́ра] первый урок.
        </pre>`,
    ],
    'Japanese': [
        'lingust урок 1'
    ] ,
    'Chinese': [
        'lingust урок 1'
    ] ,
    'Hebrew': [
        'lingust урок 1'
    ] ,
    'Reading the Bible': ['Reading the Bible (стр 20 пункт 15)'],
    'Writing a letter': ['Writing a letter'],
    'Reading the Bible through an app': ['Reading the Bible through an app'],
    'Algebra': [
        'Уроки по метематике 5 класс DaVinch YouTube урок 11',
        'Натуральные числа можно написать с помощью чисел 0,1,2,3,4,5,6,7,8,9',
        'Цивры имеют разряды например 4957 - 4 тысячные, 9 сотые, 5 десятичные, 7 единици',
        'Отрезок это лииния от точки А к точке В, при помощи отрезков можно нарисовать разные геометрические фигуры',
        `<img src='assets/code_examples/math/img1.png' />`,
        '10mm = 1см, 10см = 1дц, 10дц = 1м, 1000м = 1км',
        'Плоскость, прямая и луч, плоскость это плоские предметы как доска, прямая бывает бесконечной',
        `<img src='assets/code_examples/math/img2.png' />`,
        'Шкалы и кординаты нарисованы на линейке',
        'Больше и меньше сравниваются знаками',
        'Можно измерать данные при помощи отрезков',
        `<img src='assets/code_examples/math/img3.png' />`,
        'При перестановке слогаемых сумма не меняется',
        'Сначало выполняется действие в скобках (3 + 8) + 4 это свойство сочетательности',
        'Можно найти периметор триугольника используя сложение прибавляя все отрезки',
        'Пример вычетания по отрезку',
        `<img src='assets/code_examples/math/img4.png' />`,
        'Буквенное выражение',
        `<img src='assets/code_examples/math/img5.png' />`,
        'Уравнение это равенство содержащее букву, значение которого нужно найти',
        `<img src='assets/code_examples/math/img6.png' />`,
        'В данном случае 66 это корень уравнения',

    ],
    'Geometry': [
        'Сначало нужно завершить математику 5, 6 классы'
    ],
    'Physics': [
        'Сначало нужно завершить математику 5, 6 классы'
    ],
    'Sport': [
        "Грудь жим лежа 1 минута",
        "Грудь жим удержание 1 минута 20 секунд",
        "Грудь резина горизонтальный жим стоя 1 минута",
        "Грудь резина как бицепс стоя 2 минуты",
        "Бицепс жим лежа 1 минута 10 секунд",
        "Бицепс жим удержание 1 минута",
        "Бицепс резина стоя 2 минуты",
        "Трицепс жим наоборот 1 минута",
        "Трицепс резина стоя молот 2 минуты",
        "Трицепс жим наоборот 1 минута",
        "Трицепс резина разводка крестиком 4 минуты",
        "Плечи жим касание плеч 1 минута",
        "Плечи резина разводка стоя 1 минута 30 секунд",
        "Плечи резина разврдка сидя 2 минуты",
        "Плечи разводка руками стоя 3 минуты",
        "Плечи жим стоя стена 1 минута",
        "Плечи жим касание плеч 1 минута",
        "Спина резина обычный 2 минуты",
        "Спина резина на себя 1 минута",
        "Спина карусель 2 минуты",
        "Ноги обычный 1 минута",
        "Ноги ягоды 3 минуты",
        "Ноги ягоды лежа 1 минута",
        "Пресс обычный 2 минуты",
        "Пресс планка 1 минута",
        "Пресс скалолаз 1 минута 40 секунд",
        "Пресс кисть 1 минута",
        "Пресс половина 2 минуты",
        "Пресс ноги 1 минута",
        "Пресс ноги удержания 1 минута",
        "Хлопки под ногами 2 миныты",
        "Хлопки перед собой 2 минуты",
        "Колени к локтям 2 минуты",
        "Бокс 2 минуты",
    ]
}
