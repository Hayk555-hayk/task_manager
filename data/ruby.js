let ruby_data = [
    `<div>(ruby)
        Установка Ruby
        <pre>
            sudo apt update
            sudo apt install ruby-full
            ruby --version
        </pre>
        Файлы руби имеют расширение rb
        <pre>
        puts "Helo world" // puts is the same as echo 
        **console** ruby filename.rb // will run the file
        </pre>
        Метод class показывет к какому классу пренадлежит та или иная переменная 
        <pre>
        puts "str".class // string
        puts "1".class // string
        puts 1.class // integer
        </pre>
        Работа с переменными 
        <pre>
        name = 'Hayk'
        puts name
        puts 'My name is ' + name
        puts "My name is #{name}"
        </pre>
        В reby есть те же операторы что и в php <br />
        Использование if / else и unless 
        <pre>
            if 2 > 1
                puts 'true'
            else 
                puts 'false'
            end

            puts 'yes' unless 2 < 1 // unless - пока не, это обратное оператору if

            name = 'Hayk'

            if name == 'Hayk'
                puts 'Hello Hayk'
            elseif name == 'Alexander' 
                puts 'Hello Alexander'
            else 
                puts 'false'
            end
        </pre>
        Циклы работают по тем же принципам что и в php
        <pre>
        i = 1
            while i < 5
                i += 1;
                puts i
            end
        </pre>
    </div>`,
    `<div>(ruby)
        Методы в Ruby это те же функцииб они создаются ключевым словом def <br />
        логика методов как и в обычном php схожа и в конце может использовать return
        <pre>
        // define a method
            def division_1
                puts 'it is a function'
            end
        // call a method 
        division_1

        // define a method
            def division_2(name)
                puts 'it is a function and your name is ' + "#{name}
            end
        // call a method 
        division_2('Hayk')

        // function with functions
        def division_3
            division_1
            division_2('Hayk')
        end

        division_3
        </pre>
        null в ruby это nil
    </div>`,
    `<div>(ruby)
        Классы и обьекты
        <pre>
            class Item
            itemName = 'phone'

                def price
                    return 100
                end

            end

            item1.Item.new // Object of the class 
            item1.price
            item1.itemName
        </pre>
        p является сокращенной версией puts
    </div>`,
    `<div>(ruby)
    Геттеры и сеттеры
    <pre>
            class Item
                def initialize // Эквивалент методу __construct в PHP
                    @price = 30
                end

                def price // This is a getter function thath will return variable
                    @someVariable // Getter variable 
                end

                def price=(value) // Setter function sign = must be written without space
                    @someVariable = value
                end

            end

            item = Item.new

            item.price=10 // Setting a value 
            p item.price // Getting a value
        </pre>
    </div>`,
    `<div>(ruby)
    attribute readers, writers and accessors
    <pre>
        class Item
            attr_reader :price, :height // Short verssion of getter (code by one line)
            attr_writer :price, :height // Short verssion of setter (again by one line)

            attr_accessor :height, :price // This is more shorter, this is attr_reader and attr_writter in same time
        end

        item = Item.new
        item.price = 40
        puts item.price
        </pre>
    </div>`,
    `<div>(ruby)
    irb устонавливается вместе с ruby это php artisan tinker <br />
    Обьекты в ruby называются хешами <br />
    ID строк при вызове "string".object_id всегда будет разным, а ID символа :smt.object_id всегда один и тот же <br />
    Конкатенация для символов не возможна 
    <pre>
    // Creating hash (object)
    objectVariable = {
        :name => 'Hayk' // => is an old syntacs 
        age: 28 // new syntacs both :name and age: are symbols
    }

    p objectVariable[:name] // Outupting name key 

    // Usage example
    class Item 
        def initialize(options)
            @model = options[:model]
            @price = options[:price]
        end

        attr_accessor :mode, :price
    end

    item1 = Item.new({model: 'phone', price: 454})
    </pre>
    </div>`,
    `<div>(ruby)
    Массивы в ruby
    <pre>
        array = ['w','x','y','z'] // New syntacs array = %w[w x y z]

        array.push('c') // add c to the end of array
        array.pop // delete array last element
        array.shift // delete array first element

        // Usage example
        class Cart 
        attr_reader :items

            def initialize
                @items = []
            end

            def add_item(item)
                @items.push(item)
            end

            def remove_item
                @items.pop
            end
        end

        // Using Cart class in another file
        require_relative 'cart'
        cart = Cart.new
    </pre>
    </div>`,
    `<div>(ruby)
    Итерация массивов
    <pre>
    array = %w[q a z x s d 15]

    array.each{ |letters| puts letters}

    array.each do |letters|
        puts letters if |letters| != 15
    end
    </pre>
    </div>`,
    `<div>(ruby)
    Блок начинается с do-end или {}, анонимные функции вызываются ключевым словом yield
    <pre>
    class Cart 
        def info
            if block_given?
                yield price
            else 
                puts "price is not given"
            end
        end
    end

    cart = Cart.new
    cart.info { |value| puts value}
    </pre>
    </div>`,
    `<div>(ruby)
    Класс File работает с другими файлами
    <pre>
    File.open("path/to/file.txt", "w") {|y| y.puts "Some text"}
    </pre>
    </div>`,
    `<div>(ruby)
    Переменные класса можно удалать по условию импользуя следующий синтакс @someClassVar.delete_if {logic}
    </div>`,
    `<div>(ruby)
    ООП, Наследование и полиморфизм<br />
    Наследование происходит знаком < <br />
    <pre>
    class Item 
        @@discount = 0.1

        def self.discount // Этот метод является статическим методом класса, его можно вызвать не на обьекте, а на самом классе (можно вызывать и в классе self.class.discount и вне класса Item.discount)
            if Time.now.month == 7
                puts "Discount 40%"
                @@discount += 3
            end
        end

        def price
            @price - @price * self.class.discount
        end

        // private method tax, все методы под private будут приватными  
        private 
        def tax
            type_tax = if self.class == VirtualItem
            1
            else 
            2
            end
        end

    end 
-------------------------------------------------------------
    class VirtualItem < Item

    end
----------------------------------------------------------------
    class RealItem < Item
        attr_accessor :weight

        def initialize(options)
            @weight = options[:weight] // adding new data to old data from Item 
            suber // now old data is available 
        end

        def info // method from parrent
            if block_given?
                yield weight // adding new logic
                super // getting the logig from parrent 
            end
        end
    end

    </pre>
    </div>`,
    `<div>(ruby)
    Модули 
    <pre>
        module ItemContainer
            // all methods and logic here
            module Manager
                // Module in module with its methods
            end
        end

        class Item
            include ItemContainer
            include ItemContainer::Manager // Including module from module
        end
    </pre>
    Можно инклудить модули при помощи callback-ов
    <pre>
        module ItemContainer
            // all methods and logic here

            module Manager
                // Module in module with its methods
            end

            module Initializer
                // Module in module with its methods
            end

            def self.included(class) // этот метод будет выполнен автоматически при создании обьекта класса
                class.extend Manager // Расширяем класс методами included
                class.class_eval include {Initializer} // добавляем остальные методы из другого вложенного модуля
            end

        end

        class Item
            include ItemContainer
            include ItemContainer::Manager // Including module from module
        end
    </pre>
    </div>`,









    `<div>(ruby)
    Дополнительная информация
        <pre>
        rand max 100 // generating random number from 0 to 100
        5.times {puts "Ruby"} // Will echo rubi 5 times 

        hash = {age: 28, name: 'Unknown}
        hash.each_key {|i| puts i} // will show keys (age and name)

        array = [1,2,3,4]
        array.each_with_index {|value, index| puts value.to_s + " " + index.to_s} // will show indexes and values       

        // Если require_relative 'name' разрастается и много импортов то можно сделать следующее Dir["*.rb"].each {|file| require_relative file}
        </pre>
    </div>`,
]