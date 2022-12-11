let front_data = [
    `<div>(angular)
    Ангуляр имеет CLI, для его устоновки нужна комманда npm install -g @angular/cli <br/>
    После чего можно вводить следующие команды <br />
    ng new app-name <br/>
    ng serve <br />
    Компонент в angular имеет .css, .html, .js или .ts файлы <br />
    .html отвечает за каркас компонента, интерполяция происходит при помощи {{name}} <br />
    .module.ts производятся разнородные импорты <br />
    .component.ts в этом файле прописывается логика, в експортном обьекте можно обьявлять переменные 
    </div>`,
    `<div>(react)
    Изменения в представлении происходят быстро благодаря virtual dom, для ее изменения не нужна императивное программирование,
    а нужно декларативное <br />
    React можно установить и командной строкой и с cdn <br />
    Компоненты бывают классовыми и функциональными 
    <pre>
        class App extends React.Component {
            state = {
                name: 'Hayk',
                age: 28
            }
            render() {
                return (
                    &ltdiv className="smt"&gt 
                        &ltdiv className="smt"&gt jsx &lt/div&gt
                        &ltdiv className="smt"&gt {this.state.name} &lt/div&gt
                        &ltdiv className="smt"&gt {this.state.age} &lt/div&gt
                    &lt/div&gt
                )
            }
        }

        ReactDOM.render(&ltApp /&gt, document.getElementById('root'));
        // do not use class use className as class is reserved word
    </pre>
    </div>`,
    `<div>(vue)
    Основной приоритет vue js по сровнению с другими frameworks это его легковесность <br />
    Роутинг происходит при помощи отдельного пакета <br />
    Vue можно установить при помощи CDN, npm и CLI <br />
    После установки vue можно прописать следующий код 
    <pre>
    // html template
    &lttemplate&gt
        &ltdiv @click="greet" &gt
        &ltp&gt {{name}} &lt/p&gt
        &lta :href='website'&gt site &lt/a&gt // data binding : or v-bind:
         &ltinput :value='name' /&gt
         &ltp v-html='someHtml'&gt  &lt/p&gt //for html drawing
        &lt/div&gt
    &lt/template&gt
    &ltscript&gt
        new Vue({
            el: '#app', // select element
            data: { // all data
                name: 'Smth',
                age: 25,
                website: 'https://www.youtube.com/watch?v=xIOw',
                someHtml: '&ltinput /&gt'
            },
            methods: {
                greet: function() {
                    console.log('ordinary ja logick');
                    console.log(this.name); // get data from data
                }
            }
        });
    &lt/script&gt
    </pre>
    </div>`,
    `<div>(vue)
    События во vue js - click, dblclick, mousemove, keyup <br />
    Модификаторы событий once, prevent <br />
    keyup это события клавиатуры, у него есть модификаторы keyup.enter
    <pre>
    &lttemplate&gt
        &ltdiv&gt
            &ltp&gt {{age}} &lt/p&gt
            &ltbutton @click.once='toggleYear('add')'&gt add a year &lt/button&gt
            &ltbutton @click='toggleYear('remove')'&gt remove a year &lt/button&gt
        &lt/div&gt
    &lt/template&gt
    &ltscript&gt
        new Vue({
            el: '#app',
            data: {
                age: 25,
            },
            methods: {
                toggleYear: function(type) {
                    if(type === 'add') {
                        this.age += 1;
                    } else {
                        this.age -= 1;
                    }
                }
            }
        });
    &lt/script&gt
    </pre>
    </div>`,
    `<div>(vue)
    Чтобы осуществить двухпоточный байндинг вместо v-bind нужно использовать v-model
    <pre>
    &ltinput v-bind:value='name' /&gt
    &ltinput v-model='name' /&gt
    </pre>
    </div>`,
    `<div>(vue)
    Вычесляемые (computed) переменные во vue js, как только какая то переменная изменится vue js вновь запустит функции addToA и addToB <br />
    без разници какая переменная была изменена  a или b, но если эти методы прописать в обьекте computed то такой ошибки больше не будет
    <pre>
    &lttemplate&gt
        &ltdiv&gt
            &ltp&gt {{age}} &lt/p&gt
            &ltbutton @click='a++'&gt add to A &lt/button&gt
            &ltbutton @click='b++'&gt add to B &lt/button&gt
            &ltp&gt {{a}} &lt/p&gt
            &ltp&gt {{b}} &lt/p&gt
            &ltp&gt Age + A = {{addToA()}} not computed &lt/p&gt
            &ltp&gt Age + B = {{addToB()}} not computed &lt/p&gt
            &ltp&gt Age + A = {{addToA}} computed &lt/p&gt
            &ltp&gt Age + B = {{addToB}} computed &lt/p&gt
        &lt/div&gt
    &lt/template&gt
    &ltscript&gt
        new Vue({
            el: '#app',
            data: {
                age: 28,
                a: 0,
                b: 0
            },
            // features in method object
            methods: {
                addToA: function() {
                    return this.a + this.age;
                },

                addToB: function() {
                    return this.b + this.age;
                }
            }
            //same features in computed object, but we also need to remove function call for addToA
            // and addToB as they are not functions they are computed variables
            computed: {
                addToA: function() {
                    return this.a + this.age;
                },

                addToB: function() {
                    return this.b + this.age;
                }
            }
        });
    &lt/script&gt
    </pre>
    </div>`,
    `<div>(vue)
    Пример байндига класса стилей css, вместо true и false могут быть переменные vue которые будут менятся динамично
    <pre>
    &ltp v-bind:class="{red: true, blue: false}"&gt some text &lt/p&gt
    </pre>
    </div>`,
    `<div>(vue)
    Условный рендеринг во vue js пишится при помощи v-if или v-show, разница в том что v-show добавляет display: noden; стили а <br />
    v-if вместо display:none; добавит &lt!-----&gt
    <pre>
    &ltp v-if="show_smth"&gt smt... &lt/p&gt
    &ltp v-else-if="show_smth_another"&gt smt... &lt/p&gt
    &ltp v-else&gt smt... &lt/p&gt

    &ltp v-show="true"&gt smt... &lt/p&gt
    </pre>
    </div>`,
    `<div>(git)
            Git это система сохраняющая изменения в наших файлах <br />
            Позволяет просмотр всех версий файла <br />
            Позволяет многим людям кооперировать <br />
        </div>`,
        `<div>(git>)
            Для изменения пользователя git нужны следующие команды <br />
            git config --global user.name someName <br />
            git config --global user.email email@email <br />
            Для получения данных нужно прописать  <br />
            git config user.name <br />
            git config user.email  <br />
        </div>`,
        `<div>(git)
            Простые команды git <br />>
            cd ../smt/smt2 изменения директории <br />
            ls или dir лист файлов в директории <br />
            mkdir smth создания новой папки <br />
            touch index.html создания файла <br />
            rm index.html Удаления файла <br />
            rmdir smth удаление директории <br />
        </div>`,
        `<div>(git)
            Репозитория указывается .git файлом в проекте <br />
            commit анологичен быстрому сохранению в играх, благодаря этому мы можем возвращатся обратно если что то сломали <br />
            git init Для создания репазитория<br />
            git status покажет какие файлы были изменены <br />
            git add filename или git add . добавит измененные файлы в стейджинг <br />
            git rm --chached filename Для удаления файла из стейджинга который был добавлен не правильно<br />
            git commit -m "description of changes" <br />
            git log покажет все commit которые были сделаны <br />
            git log --oneline покажет все commit которые были сделаны одной строкой<br />
            git checkouot some_id_from_git_log мы увидим код во время этих изменений <br />
            git revert some_id_from_git_log удалит выбранный commit (появится скрин где мы пропишем wq и нажмем enter)<br />
            git reset some_id_from_git_log удалит все commit после выбранного, код останится на всякий случай и мы сможем <br />
            его вновь использовать, но если реально нужно удалить то git reset some_id_from_git_log --hard <br />
        </div>`,
        `<div>(git)
            Ветки создают изолированный enviroment для тестинга кода  <br />
            git branch branchName создание ветки  <br />
            git branch -a показывает все ветки  <br />
            git checkout branchName смена ветки  <br />
            Для удаления ветки переходим на master ветку и вводим git branch -D branchName  <br />
            git checkouot -b branchName создаст и перенаправит на новую ветку  <br />
        </div>`,
       `<div>(git)
            Для обьединения веток переходим в нужную ветку допустим master и прописываем git merge branchName <br />
            Если возникают конфликты, решаем их и после git add . , git commit, wg enter <br /
        </div>`,
        `<div>(git)
            Работа с online репазиторием <br />
            git clone path_of_repository <br />
            после add и commit добавляется push git push origin branchName<br />
            Можно обнавлять свою ветку воизбежания конфликтов git pull origin branchName<br />
            git remote -v покажет origin<br />
            git remote add origin path_of_repository если нет origin но как правило он автоматически сгенерируется <br />
        </div>`,

        

]
// &ltp&gt &lt/p&gt
