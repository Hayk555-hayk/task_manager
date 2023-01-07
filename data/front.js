let front_data = [
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
        `<div>(vue)
    Циклическое повторение
    <pre>
    &lttemplate&gt
        &ltdiv&gt

            &ltul&gt
                &ltli v-for="arr in rendArr"&gt {{arr}} &lt/li&gt // for ordinary array
                &ltli v-for="arr in shopData"&gt {{arr.name}} {{arr.number}} &lt/li&gt // for objects
                &ltli v-for="(arr, index) in shopData"&gt {{index}} - {{arr.name}} {{arr.number}} &lt/li&gt // with index
            &lt/ul&gt

        &lt/div&gt
    &lt/template&gt
    &ltscript&gt
        new Vue({
            el: '#app',
            data: {
                randArr: ['aaa', 'bbb', 'ccc'],
                shopData: [
                    {name: 'aaa', number: 25},
                    {name: 'bbb', number: 30},
                    {name: 'ccc', number: 35},
                ]
            },
        });
    &lt/script&gt
    </pre>
</div>`,
`<div>(git)
    Чтобы получить новые ветки нужна комманда git fetch
</div>`,
`<div>(vue)
    Можно создавать много vue сущностей используя класс new Vue <br />
    Во vue можно создавать множество компонентов, экспортировать и импортировать их, а после использовать как обычные теги <br />
    Внутри компонента обьект data теперь будет вункцией которая возвращает обьект <br />
    <pre>
    data: function() {
        return {
                number: 12,
            }
        }
    </pre>
</div>`,
`<div>(vue)
    Ссылки $refs ставятся на элемент html тега чтобы их возможно было выбирать
    <pre>
    // html template
    &ltinput type="text" ref="p_ref" /&gt
    // function that works with that ref
    let inpVal = this.$refs.p_ref.input.value;
    </pre>
</div>`,
`<div>(vue)
    Создавать vue приложения очень удобно через vue cli, чтобы установить vue cli раз и навсегда <br />
    Нужна команда npm install -g vue-cli после доступна команда vue init webpack-simple project-name
</div>`,
`<div>(vue)
    Все картинки ставятся в папке assets, main.js файл является основным javascript файлом 
    <pre>
    export default {
        name: 'COmponentName',
        data() {
            return() {
                // some data
            }
        },
        methods: {
            // some functions 
        }
    }
    </pre>
    Вставка компонента в компонент, в src создается новый файл а там уже размещаются новосозданные компоненты, <br />
    props позволяют передовать данные от компонента в компонент <br />
    События (events) могут передоваться от childe к parent компоненту
    <pre>
    //APP JS COMPONENT
    &lttemplate&gt
        &ltdiv&gt
        &ltp&gt {{title}} &lt/ p&gt
        &ltComponentName v-bind:propsName="data to send" v-on:eventName="methodNameForEmit($event)" /&gt // nested component
        &lt/div&gt
    &lt/template&gt
&ltscript&gt
import ComponentName from 'path.vue'
export default {
    name: 'COmponentName',
    components: {
        'COmponentName' COmponentName
    },
    data() {
        return() {
            title: 'Hello app',
        }
    },
    methods: {
        methodNameForEmit: function(param) {
            // some logic here for this.$emit function of child component
            // to get this param we need to use just param 
        }
    }
}
&lt/script&gt

// SECOND COMPONENT
&lttemplate&gt
    &ltdiv&gt
    &ltp&gt  &lt/p&gt
        &ltul&gt
        &ltli v-for="ninja in ninjas"&gt {{ninja}} &lt/ li&gt
        &lt/ ul&gt
    &lt/div&gt
&lt/template&gt
&ltscript&gt
export default {
    name: 'COmponentName',
    props: ['propsNameInArray'], // withouth validations of type
    props: {propsName: {type: Array, reguired: true}}, // with validations of type
    data() {
        return() {
            ninjas: [
                'name1',
                'name2',
                'name3'
            ]
        }
    },
    methods: {
        changeProps: function() {
            this.$emmit('eventName', 'second parametr is some data'); // this event will be lissened in parent component
        }
    }
}
&lt/script&gt
&ltstyle scoped &gt // scoped means styles only for that component
//css stuf
&lt / style&gt
    </pre>
    Для использования компонента глобально его нужно регестрировать в main.js
    <pre>
    import ComponentName from 'path.vue'
    Vue.component('name', ComponentName) // now this component is available everywhere in this project
    </pre>
</div>`,
`<div>(vue)
Во Vue js есть жизненные циклы компонента 
<pre>
export default {
    name: 'COmponentName',
    // Жизненные циклы
    beforeCreated() {}
    created() {}
    beforeMount() {}
    mounted() {}
    beforeUpdate() {}
    updated() {}
    beforeDestroy() {}
    destroyed() {}
    //-----------------
    data() {
        return() {}
    },
    methods: {}
    }
}
</pre>
</div>`,
`<div>(vue)
    Slots используется если нужно передавать что то большое от parent to child кпримеру целый html код <br />
    Slots может получать атрибут name и показывать только определенную часть, в parent вместо name пишется slot
    <pre>
    //APP JS COMPONENT
    &lttemplate&gt
        &ltdiv&gt
        &ltchild-component&gt
            // some html code here
        &lt / child-component&gt   
        &lt/div&gt
    &lt/template&gt
&ltscript&gt
export default {
    data() {
        return() {
            
        }
    },
}
&lt/script&gt

// SECOND COMPONENT
&lttemplate&gt
    &ltdiv&gt
    &ltslot&gt &lt/slot&gt // will show everithing that was written in parend component inside child companent tag 
    &lt/div&gt
&lt/template&gt
&ltscript&gt
export default {
    name: 'COmponentName',
    data() {
    },
}
&lt/script&gt
    </pre>
</div>`,
`<div>(vue)
    Для того чтобы показать разные компоненты можно использовать специальный тег component с атрибутом is <br />
    внутри которого будет записана имя компонента, можно схитрить и is превратить в v-bind:is и передать <br />
    переменную где будет хранится нужная переменная с именем компонента 
    Создание http реквеста происходит благодаря axios-a, также существует и vue-resource <br />
    v-on, v-for, v-if и так далее являются директивами vue js, но можно создавать и свои собственные <br />
    в нужном элементе проаишем нужную директиву, допустим v-rainbow, в main.js пропишем следующий код
    <pre>
    // main.js globaly
    Vue.directive('rainbow', {
        bind(el, binding, vnode) {
            el.style.color = '#' + Math.random().toString().slice(2, 8);
            //binding.value will sow the walue which is passed in the direcctive like this v-rainbob="some value"
        }
    });

    // localy in component
    directives: {
        'rainbow': {
            bind(....) {
                ....
            }
        }
    }
    </pre>
    Фильтры во Vue js
    <pre>
    //main.js globaly
    Vue.filter('to-uppercase', function(value) {
        return value.toUpperCase()
    });
    // we can create new filters localy by using filters object with its features
    filters: {
        'to-uppercase': function ...
    }
    // usage in everywhere
    {{var | to-uppercase}}

    </pre>
</div>`,
`<div>(vue)
    Миксины, отдельный код для увеличении читабельности кода 
    <pre>
    // create new folber in src with name mixins and add new js file
    //mixin file 
    export default {
        // same object as it was in components 
    }

    //import this new mixin js file in needed place
    import someMixin from 'path/path/file';

    export default {
        mixins: [someMixin],
        data ...
        methods ...
    }
    </pre>
</div>`,
`<div>(vue)
    Vue routing
    <pre>
        npm install vue-router --save// installing package
        //main.js
        import VueRouter from 'vue-router'
        import Routes from './routes'
        Vue.use(VueRouter);
        
        const router = new VueRouter({
            routes: Routes,
            mode: 'history' // will remove # from http request 
        });

        new Vue({
            el: '#app',
            render: h=>h(App),
            router: router
        })
        ---------------------
        //src/routes.js
        //import needed components
        export default [
            {path: 'some url', component: importedComponentName},
            {path: 'some url/:param', component: importedComponentName},
            {path: 'some url', component: importedComponentName},
        ]
        -------------------------------
        App.js
        &ltrouter-link to="path or name of the route "&gt some route name  &lt/router-link&gt
        &ltrouter-link to="path or name of the route "&gt some route name  &lt/router-link&gt
        &ltrouter-link to="path or name of the route "&gt some route name  &lt/router-link&gt

        &ltrouter-view&gt  &lt/router-view&gt
    </pre>
    Параметры роута могут быть получены так this.$route.params.id
</div>`,
`<div>(VueX)
    VueX это стейт менеджмент библиотека для Vue js, оно облегчает общение между child компонентами 
    <pre>
    npm install vuex --save
    //new folber store and new file inside it store.js where we will place all data
    // store.js----------------------------------
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    export const store = new Vuex.Store({
        strict: true, // will not allow to change data outside of mutations 
        state: {
            products: [
                {name: 'name', price: 'price'},
                {name: 'name', price: 'price'},
                {name: 'name', price: 'price'},
                {name: 'name', price: 'price'},
            ]
        },
        getters: {
            saleProducts: state => {
                // some logig with the data of the state
            }
        },
        mutations: {
            reducePrice: (state, payload) => {
                state.products.forEach(product => {
                    product.price -= payload;
                })
            }
        },
        actions: { // needed for working with server as it will allow to make async logic
            reducePrice: (context, payload) => { // payload is the passed argument
                context.commit('reducePrice', payload) // now it will work asynchrounesly
            }
        }
    });

    //main.js ---------------------------------------
    import { store } from './store/store'
    new Vue({
        store: store, // for using store in every component without props 
        el: '#app',
        render: h=>h(App),
        router: router
    });

    // Component.vue getting data from store
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            products() {
                return this.$store.state.products; // now we can use {{ products }} in our vue component 
            },
            // to get data from the getters we nedd to write the next
            // if we doesn't import mapGetters we should write in such way
            saleProducts() { 
                return this.$store.getters.saleProducts
            }
            //else if we import mapGetters we can just write 
        ...mapGetters([
                'saleProducts',
                'another computed proporties etc'
            ]),
        },
        methods: {
            // if we doesnt import mapActions we need to use actions in this way
            reducePrice: function(arguments) {
                this.$store.commit('reducePrice); // mutation name in arguments, calling mutation directly not async
                this.$store.dispatch('reducePrice', arguments); // calling the action, now it is async, best way to make it
            }
            // else if we import mapActions we can use it in this way 
            ...mapActions([
                'reducePrice',
                'other actions ...'
            ]);
        }
    }
    </pre>
    Если ...mapActions и ...mapGetters не работают нужно использовать babel preset 
</div>`
]
// &ltp&gt &lt/p&gt
