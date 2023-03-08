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
    </div>`,
    `<div>(node)
    Обьект модуль является переменной которая существует в каждом модуле, ее можно увидеть так console.log(module) <br />
    Если модуль вызван из другого место то это можно проверить с if(module.parent) <br />
    Все exports переменные и методы прописываются в module.exports по этому нет разници в export.user = user или this.user = user <br />
    но лучше использовать export потому что this может потерять свой контекст <br />
    Модуль фабрика позволяет передавать параметры модулю var logger = require('logger')(module) передаем текущий модуль <br />
    А в logger пропишем следующий код
    <pre>
    module.exports = function(module) {
        return function(some arguments) {
            var args = [module.filename].concat([].slice.call(arguments))
            console.log.apply(console, args); // Вывод логов каждого модуля 
        }
    }
    </pre>
    </div>`,
    `<div>(node)
    NPM для node как composer для php можно загружать зависимости <br />
    Для создания своего пакета который возможно будет скачать из npm нужно прописать module.exports = function <br />
    и создать package json где пропишем name и version пакета (npm init создаст package json) <br />
    После создания пакета его нужно опубликовать npm publish но тут будет ошибка если не будет указан user <br />
    npm adduser поможет добавить пользователя если его нет <br />
    npm help покажет все команды npm <br />
    npm s some title поиск в npm <br />
    npm r packageName удаление пакета <br />
    npm up обновление всех модулей, npm up packageName обновление указаного модуля <br />
    Для установки нужной версии в npm i express@2 <br />
    Модули можно устанавливать глобально при помощи флажка npm -g i express или для mak sudo npm -g i
    </div>`,
    `<div>(node)
    Часто используемые модули 
    <pre>
    let util = require('util');
    util.inspect(obj); // beautiful log for node, if the object has method, that method will be called
    // console.log will call util automaticaly 
    </pre>
    Есть разница между console.log и console.warn - log стандартный поток вывода, warn поток ошибок (есть еще console.trace) <br />
    Error.captureStackTrace(this) выводит местоположение ошибки <br />
    EventEmitter основной обьект реализирующий работу с событиями в node js
    <pre>
    var EventEmitter = require('events').EventEmitter;

    var server = new EventEmitter;

    // request события выполнится по очереди 
    server.on('request', function(request){
        request.approved = true;
    });
    
    server.on('request', function(request){
        console.log(request);
    });

    server.emit('request', {from: 'client 1'});
    server.emit('request', {from: 'client 2'});

    server.on('error', function(err){
        //
    });

    server.emit('errer', new Error('some error'));
    </pre>
    </div>`,
    `<div>(node)
    Создания сервера на node js
    <pre>
    //ordinary feature
    var http = require('http');
    var server == new http.Server(); // new Server and httpCreateServer are the same things

    server.listen(3000, '127.0.0.1');

    server.on('request', function(req, res) {
        res.end('hello world');
    });
    -------------------------------------------------
    // echo text by get request (127.0.0.1/echo?message=hello)
    var http = require('http'); // The http is just a package that was required for node js 
    var url = require('url');

    var server new http.Server(function(req,res) {
        console.log(req.method);
        console.log(req.url);
        console.log(req.headers);

        var urlParsed = url.parse(req.url, true); // true превратит message=hello в message: hello
        console.log(urlParsed);

        if(urlParsed.pathname === '/echo' && urlParsd.query.message) {
            res.end(urlParsd.query.message);
        } else {
            res.statusCode = 404;
            res.end('page not found');
        }
    });

    server.listen(3000, '127.0.0.1'); // Starting the server 
    </pre>
    </div>`,
    `<div>(node)
    Модуль http включает в себя 2 функционала первый это createServer и второй createClient усторевший <br />
    Любые изменения в коде требуют перезапуска сервера, но для разработки удобнее использовать supervisor
    <pre>
    npm i -g supervisor // after installing we can use supervisor file.js instead of node file.js 
    </pre>
    Теперь после каждых изменений сервер будет перезапущен, но новые файлы не будут видны, придется перезапустить вручную
    </div>`,
    `<div>(node)
    debugger; в коде js выполняет дебаг кода, команда count продолжит выполнение кода 
    </div>`,
    `<div>(node)
    Модуль debug хорошо используется для дебага
    <pre>
    // server file
    var debug = require('debug')('server');

    debug("message")

    // request file
    var debug = require('debug')('server:request');

    debug("message")

    *DEBUG=server (windows: set DEBUG=server) node server js*
    -----------------------------------------------------------
    var log = require('winston');

    log.info('message', param1, param2);
    log.debug('message');
    log.error('message');
    -----------------------------------------------------------
    NODE_DEBUG="http net" node server.js // will debug all information 
    </pre>
    </div>`,
    `<div>(node)
    Синхронное и асинхронное программирование 
    <pre>
    var http = require('http');
    var fs = require('fs');
    
    http.createServer(function (req, res) {
        var info;
        
        if(req.url == '/') {
            // Sync -----------------------------------
            info = fs.readFileSync('index.html');
            res.end(info);
            // Async -----------------------------------
            fs.readFile('index.js', function(err, info) {
                res.end(info);
            })
        }
    }).listen(3000);
    </pre>
    </div>`,
    `<div class="checkpoint">(node)
    Библиотека LibUv встроенна в node JS и отвечает за кросплатформенный ввод и вывод а так же <br />
    поддержка основного событийного цикла в node js <br />
    process.memoryUsage( даст информацию об использовании памяти) <br />
    Если есть активный таймер то процесс не будет завершен
    </div>`,
    `<div>(node)
    Работа с файлами и дерикториями происходит так что у всех методов есть две имини одна просто имя другая с добавлением слово sync <br />
    Есть два основных типа потоков данных <br />
    1. stream.Readble - чтение (req, fs.ReadStream) <br />
    2. stream.Writable - запись (res, fs.WriteStream)
    </div>`,
    `<div>(node)
    Работа Router-a
    <pre>
    const http = require('http')
    const server = http.createServer((req, res) =>{
    if(req.url === '/about')
    res.end('The about page')
    else if(req.url === '/contact')
    res.end('The contact page')
    else if(req.url === '/')
    res.end('The home page')
    else {
    res.writeHead(404)
    res.end('page not found')
    }
    })
    server.listen(3000)
    </pre>
    Работа с fs 
    <pre>
    const http = require('http')
    const fs = require('fs') // Import file system module
    const homePage = fs.readFileSync('index.html')
    const aboutPage = fs.readFileSync('about.html')
    const contactPage = fs.readFileSync('contact.html')
    const notFoundPage = fs.readFileSync('notfound.html')
    const server = http.createServer((req, res) =>{
    if(req.url === '/about')
    res.end(aboutPage)
    else if(req.url === '/contact')
    res.end(contactPage)
    else if(req.url === '/')
    res.end(homePage)
    else {
    res.writeHead(404)
    res.end(notFoundPage)
    }
    })
    server.listen(3000)
    </pre>
    Для справки все npm пакеты можно найти на странице npmjs.com
    </div>`,
    `<div>(node)
    Для установки express js нужна комманда npm init(для package json) и npm install express <br />
    Выше приведенный код только уже на express 
    <pre>
    const express = require('express') // require express module
    const app = express() // calls express function to start new Express app
    app.listen(3000,()=>{
    console.log("App listening on port 3000")
    })

    app.get('/',(req,res)=>{
        res.json({
        name: 'Greg Lim'
        })
    })
    </pre>
    Для передачи html вайлов в express js можно использовать следующий код 
    <pre>
    const path = require('path')
    // some code 
    app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
    })
    </pre>
    </div>`,
]


let list = document.getElementById('list');

list.innerHTML = node_data.join('');
