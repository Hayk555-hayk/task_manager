let node_data = [
    `<div>(node)
    Основан на движок v8 + библиотеки для работы с файлами  <br />
    код в node работает как в обычнов javascript, для его запуска нужно прописать к командной строке node fileName <br />
    Команда require импортирует модули, все модули локальны и при экспорте или импорте нужно все определять, <br />
    но то что указано в обьекте global будет глобальным 
    <pre>
    //user.js
        function User(name) {
            this.name = name;
        }

        User.prototype.hello = function(who){
            console.log('hello' + who.name)
        }

        exports.User = User;

        // server.js
        var user = require('./user.js')
        var vasya = new user.User('Vasya');
        var petya = new user.User('Petya');

        vasya.hello(petya);
    </pre>
    <pre>
    //user.js
        function User(name) {
            this.name = name;
        }

        User.prototype.hello = function(who){
            console.log('hello' + who.name)
        }

        global.User = User;

        // server.js
        var user = require('./user.js')
        var vasya = new User('Vasya');
        var petya = new User('Petya');

        vasya.hello(petya);
    </pre>
    </div>`
]