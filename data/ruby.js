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
        end
    </pre>
    </div>`,
    `<div class='checkpoint'>(ruby)
    Дополнительная информация
        <pre>
        rand max 100 // generating random number from 0 to 100
        5.times {puts "Ruby"} // Will echo rubi 5 times 

        hash = {age: 28, name: 'Unknown}
        hash.each_key {|i| puts i} // will show keys (age and name)

        array = [1,2,3,4]
        array.each_with_index {|value, index| puts value.to_s + " " + index.to_s} // will show indexes and values       

        // Если require_relative 'name' разрастается и много импортов то можно сделать следующее Dir["*.rb"].each {|file| require_relative file}
        
        // Операторы диапазноа
        1..5 //1,2,3,4,5
        1...5 //1,2,3,4

        // Список методов можно получить следующим образом
        1.methods
        "str".methods

        "str".chars // ["s","t","r"]
        str.split // as php explode

        arr = ["s","t","r"]
        arr.find_index("t")
        arr.fin_all {|num| num.odd?}

        hash = {a: "b", c: "c"}
        hash.reverse_each // {c: "c", a: "b"}

        items = []
        items << 1
        items << 2
        // now items is [1,2]

        ARGV в себе имеет переменные которые можно передать в консоле
        </pre>
    </div>`,
    `<div>(ruby)
    Запись и чтение файлов 
    <pre>
        def save
            File.open('some.txt', 'w') do |f|
                f.puts " Some text"
            end
        end
        
        def read
            file = File.readlines('some.txt')
        end
    </pre>
    </div>`,
    `<div>(ruby)
    try / catch в ruby
    <pre>
    begin 
    // some code
    rescue
    // logic if code above was with an error
    end

    //Другой способ
    raise 'Some message about an error' if some condition 
    </pre>
    </div>`,









    `<div>(rails)
    Автоматически база данных в rails это sqlite для того чтобы изменить это нужно прописать <br />
    new rails pName --database=postgresql <br />
    В файле database.yml находятся настройки баз данных в default добавим username, password, host и port <br />
    <pre>
    rails c // php artisan tinker
    exec rake db:create // Создание баз данных 
    rails g controller Items // Создание контроллера, также создастся хелпер и папка во view где будут создаваться одноименные по методу html.erb файлы
    rails g model Item // Создание модели и миграции
    bundle exec rake db:migrate // Выполнение миграции 
    bundle exec rake db:rollback // Назад по миграции

    // In migration file can add 
    t.float : price
    t.string: name
    t.boolean: is_checked

    rails g migration add_description_column_to_items // migration for adding new column in existing table 
    // In created migration inside def change add the next code 
    add_column table_name :items, column_name :description, type :string // then again rake db:migrate 

    bundle exec rake db:drop // delete all databases 
    bundle exec rake db:migrate:reset // as migrate:fresh in laravel 

    //In migration file after def change we can add some code to add index
    add_index :items, :price // items is a table name price is a column name
    add_index :items, :name
    </pre>
    </div>`,
    `<div>(rails)
    Создание данных 
    <pre>
    it = Item.new({name: 'name', price: 55})
    it.save
    // or
    Item.create(name: 'name', price: 55)
    </pre>
    Обновление данных 
    <pre>
    Item.where(name: 'name').update(name: 'another name')
    </pre>
    Удаление данных 
    <pre>
    Item.where(name: 'name').first.destroy
    </pre>
    Валидация в моделе и колбеки
    <pre>
        // Inside model
        validates :price, numericality: {greather_than: 0}
        validates :name, :anotherColumn, presence: true

        // There are many call backs in ruby here some of them 
        after_initialize {}// Will be called after Item.new or Item.first will be used in code 
        after_save {} // Will be called after Item.create or Item.save
        after_update {}
        after_create {}
        after_destroy {}
    </pre>
    Логика из контроллера
    <pre>
    skip_before_action :verify_authencity_token // отменяет запрос на токен 
    def index 
        @items = Item.all
    end

    def create
        Item.create(item_params)
    end

    def show
        @item = Item.where(id: params[:id]).first
    end

    def destroy
        @item = Item.where(id: params[:id]).first.destroy

        //destroy button from view 
        <%= button_to 'delete', item_path(item), method: :delete %>
    end

    private
    def items_param
        params.permit(:name, :price)
    end
    </pre>
    View 
    <pre>
    <% @someМariable.each do |item| %> // так выводятся переменные 
    <%= item.name %>
    <% end %> 
    Если в контроллере длбавить layout false то подключения view не будет требоваться 

    <%= form_tag new_item_path, method :post do %>
    <%= label_tag :name %>
    <%= text_field_tag :name %>
    <%= submit_tag "save", class: "asd sad" %>
    <% end %>
    </pre>
    Роутинг
    <pre>
    get '/items', to 'controller#method' 
    post '/items', to 'controller#method'
    
    resources :items
    </pre>
    Загрузка фото
    <pre>
    //console
    gem 'carrierwave', '>= 3.0.0.beta', '< 4.0'
    bundle install
    rails g uploader picture

    //model 
    moun_uploader :picure, PictureUploader
    
    //view
    <%= f.file_field :picture %>

    // add picture to new method of creating new data 
    </pre>
    </div>`,
    `<div> (rails)
        Использование Graphql с Ruby <br />
        Существует три типа операций, которые моделирует GraphQL: <br />
        query – выборка только для чтения. <br />
        мутация — запись с последующей выборкой. <br />
        подписка — долгоживущий запрос, который извлекает данные в ответ на исходные события.
        <pre>
        gem 'graphql'
        gem 'graphiql-rails'
        rails generate graphql:install 
        // after this new graphql folber will be added in app 
        // also in routs will be added new post request "/graphql" to "graphql/execute"
        // Now we can generate graphqls objects 
        rails g graphql:object user // new file will be located at app/graphql/types folber 

        // we can modify our route in such way for more comfortable work 
        Rails.application.routes.draw do 
            if Rails.env.development?
                mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: "graphql:execute"
            end

            post "/graphql", to: "graphql#execute"
        end

        // In application.rb do not forget to uncomment require "sprockets/railtie"
        // Also in app folber add assets folber and in assets add config folber where you need to locate manifest.js 
        //In manifest js add this two lines of code 
        //= link graphiql/rails/application.css
        //= link graphiql/rails/application.js

        // Now in rails/info/routes we can see our route list 
        // Where we can find graphiql route, it is something like postaman only for graphql

        // The query logic are going to be located in graphql/types some_type.rb 
        // Here in for example UserType class we cann add the next code 
        module Types
            class UserType < Types::BaseObject
                field :id, ID, null: false
                field :name, String, null: true
                field :email, String, null: false
                field :posts, [Types::PostType], null: true // This will return posts of user which are located in another module and table
                field :posts_count, Integer, null: true // This is a method that will return posts count

                def posts_count // we dafined this posts_count method here 
                    object.posts.size
                end
            end
        end
        // Same example for posts 
        module Types
            class PostType < Types::BaseObject
                field :id, ID, null: false
                field :title, String, null: false
                field :body, String, null: false
            end
        end

        // This part of code is in query_type.rb where the logic for getting data is located
        module Types
            class QueryType < Types::BaseObject
            # /users
            field :users, [Types::UserType], null: false
            def users
                User.all
            end

            field :user, Types::UserType, null: false do
                argument :id, ID, required: true
            end
            def user(id:) 
                User.find(id)
            end
        end

        // Now after that we can make graphql query like this
        {
            user(id:2) {
                name
                email
                posts {
                    title
                    body
                }
            }
        }

        // For modifing the data we need to use mutations, in mutations folber we need to add base_mutation.rb
        // base_mutation.rb 
        class Mutations::BaseMutation < GraphQL::Schema::RelayClassicMutation
        end

        // Now in the mutations folber we will add create_user.rb file 
        //create_user.rb
        class Mutations::CreateUser < Mutations::BaseMutation
            argument :name, String, required: true
            argument :email, String, required: true

            field :user, Types::UserType, null: false
            field :errors, [String], null: false

            def resolve(name:, email:) 
                user = User.new(name: name, email: email)

                if user.save
                {
                    user: user,
                    errors: []
                }
                else 
                {
                    user: nil,
                    errors: user.errors.full_messages
                }
            end

        end

        // Now in types folber inside mutation_type.rb add the next code 
        // mutation_type.rb
        module Types
            class MutationType < Types::BaseObject
                field :create_user, mutation: Mutations::CreateUser
            end
        end

        // Now the query for creating users is ready
        // Graphql query
        mutation {
            createUser(input:{
                name: "Some name",
                email: "Some email"
            }) {
                user {
                    id,
                    name,
                    email
                }
                errors {

                }
            }
        }
        </pre>
    </div>`,
    `<div>(graphql)
        Синтакс graphql
        <pre>
            // Простой запрос с нужными полями
            {
                user(id: 2) {
                  id
                  firstName
                  lastName
                  birthday {
                    month
                    day
                  }
                  users {
                    name
                  }
                }
              }

            // Запрос на пользователя с определенным размером изображения
            {
                user(id: 4) {
                    id
                    name
                    profilePic(size: 100)
                }
            }

            // Использование фрагментов для повторяющегося кода
            query withFragments {
                user(id: 4) {
                  friends(first: 10) {
                    ...friendFields
                  }
                  mutualFriends(first: 10) {
                    ...friendFields
                  }
                }
              }
              
              fragment friendFields on User {
                id
                name
                profilePic(size: 50)
              }

            // Фрагмент в фрагменте 
            query withNestedFragments {
                user(id: 4) {
                  friends(first: 10) {
                    ...friendFields
                  }
                  mutualFriends(first: 10) {
                    ...friendFields
                  }
                }
              }
              
              fragment friendFields on User {
                id
                name
                ...standardProfilePic
              }
              
              fragment standardProfilePic on User {
                profilePic(size: 50)
              }

            // Блочные строки 
            mutation {
                sendEmail(message: """
                  Hello,
                    World!
              
                  Yours,
                    GraphQL.
                """)
              }

            // Переменные в запросах 
            query getZuckProfile($devicePicSize: Int) {
                user(id: 4) {
                  id
                  name
                  profilePic(size: $devicePicSize)
                }
              }
              {
                "devicePicSize": 60
              }

            // Например, эта операция мутации может «лайкнуть» историю, а затем получить новое количество лайков:
            mutation {
                likeStory(storyID: 12345) {
                    story {
                        likeCount
                    }
                }
            }

            //Типизироваеие запроса 
            query inlineFragmentTyping {
                profiles(handles: ["zuck", "coca-cola"]) {
                  handle
                  ... on User {
                    friends {
                      count
                    }
                  }
                  ... on Page {
                    likers {
                      count
                    }
                  }
                }
              }

            //  Встроенные фрагменты также могут использоваться для применения директивы к группе полей. Если TypeCondition опущен, встроенный фрагмент считается относящимся к тому же типу, что и окружающий контекст.
            query inlineFragmentNoType($expandedInfo: Boolean) {
                user(handle: "zuck") {
                  id
                  name
                  ... @include(if: $expandedInfo) {
                    firstName
                    lastName
                    birthday
                  }
                }
              }           
        </pre>
    </div>`,
    `<div>(ruby)
    Если в контроллере прописать функцию method_missing то она автоматически будет работать
    <pre>
    def method_missing(method_name)
        puts "Method #{method_name} is not exist at all" 
    end
    </pre>
    </div>`,
    `<div>(ruby)
    Логика singletone подразумевает вызов определенного класса один раз и в лебом месте 
    <pre>
    class StoreApplocation
        class << self 
            def new 
              unless @store
                //some logic 
              @store ||= self
              end
            end
        end
    end
    </pre>
    </div>`,
    `<div>(ruby)
    В  ruby статические методы можно прописывать и таким образом
    <pre>
    Class Dog
        // Some class methods 
        
        //Static part
        class << self
            //Some methods
        end
        //end Static part
    end
    </pre>
    </div>`,
    `<div>(ruby)
    Отправка mail
    <pre>
        // gem 'pony' is needed
        //define method
        require 'pony'
        def send
            Pony.mail({
                :to => 'mail address of the reciever',
                from: 'My store <mail@gmail.com>'
                :via => :smtp,
                :via_options => {
                    address: 'smtp.gmail.com',
                    port: '587',
                    :enable_starttls_auto => true,
                    user_name: 'mail address of the sender'
                    password: 'some password',
                    domain: 'mail.google.com',
                    authentication: :plain,
                    domain: 'gmail.com',
                },
                subject: 'smth',
                body: 'smth'
            })
        end
    </pre>
    </div>`,
    `<div>(ruby)
    Потоки выполняют код паролельно
    <pre>
    Thread.new do 
        // some code 
    end
    </pre>
    </div>`,
    `<div>(ruby)
    Метод .freeze замораживает обьекты <br />
    Работа со временем Time.now
    </div>`,
    `<div>(ruby)
    Тестирование RSpec
    <pre>
    // gem install rspec
    bundler exec rspec spec // run the tests 
    rspec spec test_file.rb // run the exact test
    // To create new test add new file tesdedClassName_spec.rb
    require 'rspec'
    require_relative 'classThatWillBeTested'

    describe ClassName do
        it 'calculate correct price' do
            price = Item.price + 10
            expext(price).to be 200
        end
    end
    </pre>
    </div>`
]