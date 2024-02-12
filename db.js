const main_data = {
    php: [
        1,2,3
    ],
    laravel: [
        4,5,6
    ],
    ruby: [
        `Ruby относительно новый язык, разработан Екихиро Мацумото в 1995 году <br/>
        Ruby считается удобным для программирования язык<br/>
        Это дружественный для программиста язык, в нем есть множество методов которые имеют свои синонимы<br/>
        Например подсчет элементов в массиве size, length<br/>
        Восклицательный знак в конце метода озночает модификацию и изменение сущности над которым был вызван сей метод<br/>
        В Ruby есть аналог конструктора класса но благодаря зборщику мусора нет деструктора<br/>
        Обьект считается экземпляром класса (создание обьекта от экземпляра класса инстанцированием)<br/>
        В Ruby запрешена множнственная наследование<br/>
        Полиморфоз способность применять разные формы и изменять обличие, в каждом подклассе метод радительского класса может быть переопределен,<br/>
        Абстрактный класс это класс от которого можно наследовать но создавать экземпляры этого класса не возможно в ruby абстрактных классов нет<br/>
        Полный перечень ключевых слов в Ruby <img src="./assets/ruby/1.png" />
        Имена глобальных переменных начинаются со знака $<br/>
        Имена переменноы пренадлежащей обьекту начинаются со знака @<br/>
        Имена переменной пренадлежащей классу начинаются со знаком @@<br/>
        Коментарии начинаются со знака решетки
        <img src="./assets/ruby/2.png" />`,
        `Все массивы это экземпляры класса Array
        <img src="./assets/ruby/3.png" />
        Ассоциативные массивы в Ruby называются хешами
        <img src="./assets/ruby/4.png" />
        В Ruby логически ложно вычисляются только nil и false<br/>
        В Ruby кроме if есть еще и unless который работает по противоположной логике
        <img src="./assets/ruby/5.png" />
        switch case в ruby это case when
        <img src="./assets/ruby/6.png" />
        Пример всех циклов в Ruby
        <img src="./assets/ruby/7.png" />
        <img src="./assets/ruby/8.png" />`,
        `Вывод ошибок try/catch выполняется обератором begin/rescue
        <img src="./assets/ruby/9.png" />
        <img src="./assets/ruby/10.png" />`,
        `В Ruby числа, строки регулярные выражения и другие сущности являются обьектами (веть у них есть свои методы)<br/>
        <img src="./assets/ruby/11.png" />
        Определение и использование класса в Ruby
        <img src="./assets/ruby/12.png" />
        Пример класса и ооп в ruby
        <img src="./assets/ruby/13.png" />
        <img src="./assets/ruby/14.png" />
        Здесь видны классические setter и getter но в Ruby есть более удобный способ установления setter и getter<br/>
        есть методы attr, attr_accessor, attr_reader и attr_writer<br/>
        В выше упомянутом классе можно все 3 метода заменить одной строкой attr_accessor :myvar<br />
        Для управления видимостью методов класса есть модификаторы private, protected и public
        <img src="./assets/ruby/15.png" />
        По умолчанию все методы класса кроме initialize являются открытыми`,
        `<img src="./assets/ruby/16.png" />
        Тип переменной можно определит методом var_name.class, метод is_a позволяет проверить принадлежность к классу
        <img src="./assets/ruby/17.png" />
        Полный перечень методов можно получить вызвав var_name.methods имеются так же и var_name.private_instance_methods var_name.public_instance_methods<br/>
        В классе object есть superclass который возвращает суперкласс обьекта или nil<br/>
        При вызове метода Ruby ишет их в синглетных методах, матоды определенные в классе object, методы определенные в предках класса<br/>
        Сборщик мусора удаляет обьект на который нет ссылок<br />
        Вызов метода можно выполнить со скобками или без foobar(5) или foobar 5 но hash в качестве аргумента следует ввести в скобки<br/>
        Диапазон чисел в switch case можно проверить следующим образом
        <img src="./assets/ruby/18.png" />`,
        `Иногда строки бывают с множеством одиночных и двойных кавычек, для таких строк можно использовать %q или %Q <br/>
        за ними идет символ ограничения, предпочтительнее будет использовать []
        <img src="./assets/ruby/19.png" />
        Для представления длинной строки где есть enter можно использовать обычные двойные кавычки<br/>
        От старых языко заимствован так же и этот способ написания длинных строк
        <img src="./assets/ruby/20.png" />
        Перед последним маркером EOF не должно быть пробелов<br/>
        Для получения длинны строки есть метод length и у него есть синоним size метод<br/>
        Допускается построчная обработка
        <img src="./assets/ruby/21.png" />
        В альтернативе можно было бы использовать each_with_index<br/>
        Метод split разбивают строку на части и возвращает массив лексем
        <img src="./assets/ruby/22.png" />
        <img src="./assets/ruby/23.png" />
        Метод sprintf формирует строки
        <img src="./assets/ruby/24.png" />
        Методы ljust, rjust и center принимают длину строки и дополняют ее указанным текстом
        <img src="./assets/ruby/25.png" />
        doencase переводит всю строку в нижний регистр, upcase переводит в верхний регистр, capitalize первый символ в верхнем а все остальное в нижнем регистрк<br/>
        swapcase метод переводит нижний регистр в внрхний а верхний в нижний<br/>
        casecmp мнтод сравнивает строки игнорируб регистр
        <img src="./assets/ruby/26.png" />
        <img src="./assets/ruby/27.png" />
        <img src="./assets/ruby/28.png" />  
        Метод index осуществляет поиск в строке
        <img src="./assets/ruby/29.png" />      
        метод reindex начинает поиск строки с конца но индекс найденного элемента будет как в index<br/>
        str.include? "some string" имеется ли в переменной данная строка<br/>
        to_s и to_str преобразуют обьект в строку, to_s реализован почти во всех системных классах в отличии от to_str<br/>
        chop удаляет последний символ в строке, chop('xz') удалит xz в конце строки<br/>
        strip удаляет пропуски в начале и конце строки (lstrip, rstrip)<br/>
        Строку можно преобразовать в чисто методами to_i и integer()
        <img src="./assets/ruby/30.png" />
        to_f и Float работают анологичным образом<br/>
        reverse метод переворачивающий строку<br/>
        squeeze метод удаляет дубликаты в строке, delete("b") удалит все b из строки<br/>
        succ превращает 2 в конце строки в 3, а B в C`,
        `Пример регулярных выражений
        <img src="./assets/ruby/31.png" />
        <img src="./assets/ruby/32.png" />
        <img src="./assets/ruby/33.png" />
        <img src="./assets/ruby/34.png" />`,
        `<img src="./assets/ruby/35.png" />`,
        `Числа это первичный тип данных естественный для каждого компютера<br/>
        Если числа большие то можно для избежания путаници ставить нижние подчеркивания 1_045_457 вместо 1045457
        <img src="./assets/ruby/36.png" />
        В классе float есть константы определяющие масимальное и минимальное число
        <img src="./assets/ruby/37.png" />
        num.round округляет числа <br/>
        Если нужно округлить число но не полностью можно использовать эти методы
        <img src="./assets/ruby/38.png" />
        Ruby позволяет работать с большими числами переход от Fixnum к Bignum происходит автоматически
        <img src="./assets/ruby/39.png" />
        <img src="./assets/ruby/40.png" />
        <img src="./assets/ruby/41.png" />
        Матрици массивов можно создавать методом Matrix, добавив false можно запретить копирование
        <img src="./assets/ruby/42.png" />
        Метод rand возвращант рандомное число rand(10) вернет рандомное число от 0 до 10`,
        `В Ruby встречаются такие типы данных как символы и диапазоны <br/>
        Символ похож на строку но у него есть всего 1 экземпляр, синтаксически он начинается с двоеточия : <br />
        В данном примере здесь множество строк 'foo' но один символ :foo с множеством ссылок arr = ['foo', 'foo', 'foo', :foo, :foo, :foo]
        <img src="./assets/ruby/43.png" />
        <img src="./assets/ruby/44.png" />
        0..9 это численный диапазон от 0 до 9
        <img src="./assets/ruby/45.png" />
        К диапазонным переменным можно задавать методы first/begin или last/end для получения первичной и конечной точки<br/>
        Нужно проявить осторожность к строковым диапазонам '7'..'10' ведь они будут сравниваться как строки, диапазно легко преобразовать в массив методом to_a`,
        `GMT и UTC по сути одно и тоже UTC это французская абревиатура, на самом деле на английском ето звучит так (Coordinated Universal Time)<br />
        Дата создается классом Time.new, для получения реального времени есть метод Time.now
        <img src="./assets/ruby/46.png" />
        Методы local и gm по сути делают тоже самое<br />
        Метод strftime показывает дату в удобном виде strftime('%a') Tue, strftime('%A') Tuesday`,
        `Массивы можно создать несколькоми вариантами<br/>
        x = Array.[](1,2,3)<br/>
        x = Array.[1,2,3]<br/>
        x = [1,2,3]<br/>
        Существует так же метод new 
        <img src="./assets/ruby/47.png" />
        Взять конкретное значения из массива можно двумя способами x[1] или x.at(1)<br/>
        Массив может автоматически вырасти в размере если присвоить новое значение к индексу которыу больше чем длинна массива
        <img src="./assets/ruby/48.png" />
        Специальные методы first и last возвращают первый и последний эллемент массива<br/>
        В Ruby массив можно создать и с таким синтаксом x = %w[a b c d] или %w(a b c d)<br/>
        С помощью метода values_at можно вернуть конкретный список элемента из массива
        <img src="./assets/ruby/49.png" />
        Массивы сравниваются методом <=> этот метод возвращает -1 меньше, 0 равно, 1 больше<br/>
        x.detect {|e| e == 3} метод detect найдет первый елемент который подойдет по условию, так же работают методы find, find_all select согласно своим названиям<br/>
        метод reject или reject! это полное противоположность метода select
        <img src="./assets/ruby/50.png" />
        Методы min и max ищут минимальное и максимальное значение в массиве, метод compact удаляет из массива все элементы равные nil<br/>
        Метод delete_at удаляет елемент по индексу
        <img src="./assets/ruby/51.png" />
        Метод pop удаляет последний элемент массива а метод shift первый, метод clear отчищает массив от данных и возвращает пустой массив<br/>
        arr = [1,2,3] метод << добавляет в конец массива новые значения arr << 4
        <img src="./assets/ruby/52.png" />
        Метод reverse_each обходит массив в обратном порядке, each в обычном, а each_with_index в обычном но с индексом элемента массива<br/>
        Массивы можно обьединять в строки методом join arr.join(", "), метод uniq удаляет дубликаты в массиве`,
        `Хеши так же известны под названием ассоциативнх массивов
        <img src="./assets/ruby/53.png" />
        <img src="./assets/ruby/54.png" />
        По умолчанию если вызвать несуществующий ключь у обьекта то он вернет nil это поведение тоже можно изменить либо при создании либо во время кода методом default
        <img src="./assets/ruby/55.png" />
        Для удаления пары ключ значения вызывается метод delete hash.delete(:key)<br/>
        Для обхода есть методы each, each_key, each_pair, each_value<br/>
        Поиск ключа
        <img src="./assets/ruby/56.png" />
        hash.keys вернет все ключи, hash.values все значения<br/>
        Для обьединения есть метод merge hash_1.merge(hash_2)`,
        `Чтобы получить множество есть класс Set, нужно прописать require 'set'
        <img src="./assets/ruby/57.png" />
        x.union(y) Обьединяет множества, как и в массивах тут есть методы x.include?(3) и x.member?(1)<br/>
        Set поддерживает так же и empty, clear, методы<br/>
        Методами subset и proper_subset можно узнать является ли одно множество подмножеством другого<br/>
        Метод add является синонемом метода << у массивов<br/>
        Множество можно сравнить интуитивно очевидным способом Set[1,2,3] == Set[2,1,3] вернет true`,
        `В основе ввода и вывода в руби сидит класс IO который и определяет поведение ввода и вывода с ним тесно связан класс File<br/>
        В класс File вложен класс Stat который инкапсулирует различные сведения о файле<br/>
        Методы ввода и вывода есть и в самом модуле Kernel, File.new создаст новый обьект file
        <img src="./assets/ruby/58.png" />
        После работы над файлом для предатврашения потери данных нужно закрыть его file_var.close, File.open синоним File.new <br/>
        Если открыть файл в блоке то он закроется автоматически
        <img src="./assets/ruby/59.png" />
        Знак + позваляет открыть файл для чтения и записи
        <img src="./assets/ruby/60.png" />
        Для дописания файла с конца нужен знак а
        <img src="./assets/ruby/61.png" />
        Файлы можно блокировать и разблокировать
        <img src="./assets/ruby/62.png" />
        Для простого ввода вывода данных есть методы p, puts <br/>
        FileTest::exist?("Filename") проверка наличие фпйла, размер файла можно узнать методом FileTest::size?("filename") или File.stat("filename").size<br/>
        Есть так же методы File.delete("filename") и его синоним File.unlink("filename"), File.rename("oldname","newname")<br/>
        Файлы можно усекать до нужного размера File.truncate("filename", 1000) не более 1000 байтов<br/>
        Создания CSV файла
        <img src="./assets/ruby/63.png" />`,
        `Запрос к базам данных MySql
        <img src="./assets/ruby/64.png" />
        Запрос к базам данных PostgreSQL
        <img src="./assets/ruby/65.png" />
        Подключения к Oracle
        <img src="./assets/ruby/66.png" />`,
        `В Ruby каждый класс имеет метод new, new вызывает метод initialize, который инициализирует атрибуты обьекта, после чего new возвращает ссылку на новый обьект<br/>
        Для установки и чтения данных есть методы getter и setter
        <img src="./assets/ruby/67.png" />
        Но в Ruby есть более краткий способ, метод attr
        <img src="./assets/ruby/68.png" />
        Передача блока в initialize
        <img src="./assets/ruby/69.png" />
        <img src="./assets/ruby/70.png" />
        Пример полноценного класса
        <img src="./assets/ruby/71.png" />
        Пример наследования класса
        <img src="./assets/ruby/72.png" />
        Метод super вызывает родительские методы, потомок может иметь дополнительные кметоды, это называется расширением класса, приватные методы создаются под методом private<br/>
        Метод freeze замораживает обьект и запрещает выполнять какие либо изменения, метод frozen? показывает заморожен или нет данный обьект<br/>
        Метод который встречается обин раз называется singleton`,
        `Для Ruby существует графический интерфейс Tk который может выполнять следующий код
        <img src="./assets/ruby/73.png" />
        <img src="./assets/ruby/74.png" />`,
        `В Ruby код может выполняться в разных патоках
        <img src="./assets/ruby/75.png" />
        <img src="./assets/ruby/76.png" />`
    ],
    rails: [
        `RoR это обыкновенный MVC фреймворк`
    ],
    js: [

    ],
    node: [

    ],
    nest: [

    ],
    devops: [

    ],
    pattern: [

    ],
    sql: [

    ],
    git: [

    ],
    algebra: [
        `Если одно число делится на другое то первое число называется делимое а второе делитель, а результат это частное<br/>
        Если деление происходит без остатка то второе число называется называется делителем первого числа
        <img src="./assets/math/algebra/1.png" />
        Каждое число имеет делитель 1, к примеру делителями числа 18 являются 1,2,3,6,9,18<br/>
        логика наоборот, если первое число назывется кратным второго числа которое делится без остатка, кратные числа идут до бесконечности
        <img src="./assets/math/algebra/2.png" />`,
        `Признаки делимости позволяют ответить на вопрос делится ли одно число на другое не производя деления, знак 3 точки означает делится без остатка<br/>
        Если в конце числа 0 то оно делится на 10, если число оканчивается на 0 или на 5 то оно делится на 5, признаками делимости на 2 является то что число оканчивается на 2,4,6,8,0<br/>
        такие числа еще можно называть четными`,
        `Признаки делимости на 9 и 3, число делится на 9 если сумма его чисел делится на 9, пример не соответствующего числа
        <img src="./assets/math/algebra/3.png" />
        252 это 2+5+2 = 9, 9 делятся на 9 значит это число имеет признак делимости на 9, рассуждая аналогично можно знать признак делимости на 3`,
        `Число которое имеет 2 делителя называется простым, напримеп 13 - 1 и 13, 18 имеет более двух делителей и называется состовным его делители 1,2,3,6,9,18<br/>
        число 1 не относится не к простым ни к состовным оно имеет один делитель, таким образом натуральные числа бывают 3 видов`,
        `Разложение на простые множетили 210 = 21 * 10 = 3 * 7 * 5 * 2(3,7,5,2 являются простыми числами мы разложили 210 на простые множитили)
        <img src="./assets/math/algebra/4.png" /> `,
        `Общие делители, в этом примере 12 это наибольший общий делитель, обозначают это так НОД(48,36) = 12<br/>
        Если НОД равен 1 то такие числа называются взаимо простыми
        <img src="./assets/math/algebra/5.png" />
        НОД можно узнать таким алгоритмом, разложи оба числа на простые множители, сапоставим их и вычеркнем из первого те числа которые не входят во вторую<br/>
        <img src="./assets/math/algebra/6.png" />`,
        `НОК это наименьшее обшее кратное
        <img src="./assets/math/algebra/7.png" />
        Алгоритм нахождения НОК, выписываем разложеные числа первой, а из второго числа вычеркиваем те которые уже встретились нам
        <img src="./assets/math/algebra/8.png" />`,
        `Основное свойство дроби
        <img src="./assets/math/algebra/9.png" />
        Если числитель и знаменатель дроби умножить или поделить на одно и тоже число то полученная дробь равна первой
        <img src="./assets/math/algebra/10.png" />`
    ],
    geometry: [
        
    ],
    physics: [
        
    ],
    english: [
        `Самые короткие предложения состоят из одного 'verb', более длинные предложения нуждаются в 'subject + verb'
        <img src="./assets/english/1.png" />
        Пример сложных предложений
        <img src="./assets/english/2.png" />`
    ],
    spanish: [
        `hola amigos- привет друзья, boenos dias - доброе утро, boenos tardes - добрый вечер, boenos noches - спокойной ночи или пока<br/>
        chao, adios - пока, hasta luego или hasta pronto - до встречи`
    ],
    hebrew: [

    ],
    german: [

    ],
    japanese: [
        
    ]
}