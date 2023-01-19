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
        <pre>
        rand max 100 // generating random number from 0 to 100
        </pre>
    </div>`
]