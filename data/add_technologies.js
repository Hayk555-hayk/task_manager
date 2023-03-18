let techno = [
    `<div>(git)
            Git это система сохраняющая изменения в наших файлах <br />
            Позволяет просмотр всех версий файла <br />
            Позволяет многим людям кооперировать <br />
        </div>`,
        `<div>(git)
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
       `<div class="checkpoint">(git)
            Для обьединения веток переходим в нужную ветку допустим master и прописываем git merge branchName <br />
            Если возникают конфликты, решаем их и после git add . , git commit, wg enter <br />
        </div>`,
        `<div>(git)
            Работа с online репазиторием <br />
            git clone path_of_repository <br />
            после add и commit добавляется push git push origin branchName<br />
            Можно обнавлять свою ветку воизбежания конфликтов git pull origin branchName<br />
            git remote -v покажет origin<br />
            git remote add origin path_of_repository если нет origin но как правило он автоматически сгенерируется <br />
        </div>`,
        `<div>(git)
            Чтобы получить новые ветки нужна комманда git fetch
        </div>`,
        `<div>(elastic)
        Шаги работы эластик search - client -> server -> search query to elastic search<br />
        -> elastic search response to the server -> server respons to the client <br />
        Kibana помогает визуализировать данные, сущности эластик поиска является node которые находятся в cluster-e <br />
        В cluster-e находятся множество node-ов, все node-ы находятся в разных серверах, но поскольку они пренадлежат <br/>
        одному кластеру то задача выполняется как из одного компьютера, у node-ов множество ролей одна из них хранение данных <br />
        Данные хранятся как документы в формате json, можно индексировать данные это поможет осуществить более быстрый поиск <br/>
        Каждая node может хранить данные, поиск данных из множество node происходит за раз, вот поэтому правельнее хранить данные <br/>
        во множественных node-ах, если одна из node упадет то все данные будут потеряны, для того чтобы не допустить этого <br/>
        нужно копировать данные в разных node-ах 
        <pre>
        bin/elasticsearch // will start elastic search, you should start this command from the elastic search folder 
        // 127.0.0.1:9200 port will allow us to use elastic search api 
        // curl command to http://localhost:9200/ will show all information about elastic search
        // bin/kibana will run kibana interface will run at http://localhost:5601/ (dashboard)
        // we can change elastic search name (elasticsearch will give us some folders as laravel or rails)
        // elasticsearch.yml at line 17 cluster.name, uncomment it and add your cluster name 
        // at the same file you can change node.name
        // At kibana search console you can make queries 
        GET _cluster/health 
        GET _nodes/status
        PUT some_title_index // creating some index

        // Query with index in elastic search
        POST some_title_index/_doc {
            "key":"value"
        }

        // Creating 
        PUT some_title_index/_create/1 {
            "key":"value"
        }

        // Updating 
        POST some_title_index/_update/1 {
            "key":"value"
        }

        // Creating or updating some data
        PUT some_title_index/_doc/1 {
            "key":"value"
        }
        PUT some_title_index/_doc/2 {
            "key":"value"
        }

        // Getting some data 
        GET some_title_index/_doc/2

        // Delete
        DELETE some_title_index/_doc/2

        // _version in response will show how many times target data was updated 
        </pre>
        </div>`,
        `<div>(elastic)
        Способ и архитектура запроса похожа на GraphQL архетиктуру
        <pre>
        // match query
        GET news_headlines/_search
        {
            "query": {
                "match": {
                    "headline": {
                        "query": "Some search"
                    }
                }
            }
        }

        // aggregations request get by category 
        GET news_headlines/_search
        {
            "aggregations":{
                "by_category": {
                    "terms": {
                        "field": "category",
                        "size": 100
                    }
                }
            }
        }

        // match phrase query
        GET news_headlines/_search
        {
            "query": {
                "match_phrase": {
                    "headline": {
                        "query": "Some search"
                    }
                }
            }
        }

        //multi match query 
        GET news_headlines/_search {
            "query": {
                "multi_match": {
                    "query": "Michelle Obama",
                    "fields": [
                        "headline",
                        "short_description",
                        "authors"
                    ]
                }
            }
        }

        //multi match query with type
        GET news_headlines/_search {
            "query": {
                "multi_match": {
                    "query": "Michelle Obama",
                    "fields": [
                        "headline",
                        "short_description",
                        "authors"
                    ],
                    "type": "phrase"
                }
            }
        }

        //bool query
        GET my_index/_search
            {
            "query": {
                "bool": {
                "must": [
                    {
                    "match": {
                        "field1": "value1"
                    }
                    },
                    {
                    "range": {
                        "field2": {
                        "gte": "2022-01-01",
                        "lte": "2022-12-31"
                        }
                    }
                    }
                ],
                "should": [
                    {
                    "match": {
                        "field3": "value3"
                    }
                    }
                ],
                "must_not": [
                    {
                    "match": {
                        "field4": "value4"
                    }
                    }
                ]
                }
            }
            }
        </pre>
        </div>`,
        `<div>(git)
        Создание ssh key происходит командлй ssh-keygen, после чего нужжно ввести директорию для сохранения <br />
        и ответить на пару вопроссов, сгенерируется 2 ключа, один приватный, другой публичный<br />
        Добавка public ssh ключа на сервер ssh-copy-id -i ~/.ssh/id_rsα.pub gituser@git.server.com <br />
        При попытке запушить ветку в первый раз нужно использовать git push --set-upstream origin baranch_name<br />
        Основные команды git 
        <pre>
        git init - инициализирует новый репозиторий
        git clone - клонирует репозиторий с удаленного сервера
        git add - добавляет файлы для индексации (в стадию подготовки)
        git commit - сохраняет изменения в локальном репозитории
        git push - отправляет изменения в удаленный репозиторий
        git pull - получает изменения из удаленного репозитория и объединяет их с локальными изменениями
        git branch - показывает список веток
        git checkout - переключает между ветками
        git merge - объединяет изменения из одной ветки в другую
        git status - показывает состояние репозитория
        git log - показывает историю коммитов
        git stash - сохраняет изменения, которые не готовы к коммиту, в "промежуточный" стек
        git tag - помечает определенный коммит для будущей ссылки на этот коммит
        git remote - управляет удаленными репозиториями
        Каждая из этих команд имеет дополнительные параметры и опции, которые позволяют уточнять их поведение. Если у вас есть конкретные вопросы по какой-либо из команд Git, не стесняйтесь задавать их.
        </pre>
        Команда git stash используется для сохранения изменений в стеке stash (временном хранилище)<br />
        и удаления их из рабочей директории.<br />
        Команда git stash может быть полезна, когда вы работаете над некоторым изменением, но должны<br />
        переключиться на другую задачу или ветку, и вы не готовы закоммитить ваши текущие изменения.<br />
        В этом случае, вы можете использовать git stash, чтобы сохранить изменения в стеке stash и очистить<br />
        рабочую директорию для выполнения другой работы.<br />
        Когда вы готовы вернуться к работе над сохраненными изменениями, вы можете использовать одну из команд,<br />
        чтобы применить сохраненные изменения обратно в вашу рабочую директорию:<br />
        git stash apply - применяет последние сохраненные изменения из стека stash в рабочую директорию.<br />
        Эта команда не удаляет сохраненные изменения из стека stash.<br />
        git stash pop - применяет последние сохраненные изменения из стека stash в рабочую директорию и удаляет<br />
        сохраненные изменения из стека stash.<br />
        git stash list - показывает список всех сохраненных изменений в стеке stash.<br />
        Пример использования команды git stash:
        <pre>
        # сохраняем изменения в стеке stash
        git stash
        # выполняем другую работу
        ...
        # возвращаемся к сохраненным изменениям
        git stash apply
        </pre>
        Важно отметить, что сохранение изменений в стеке stash не является заменой коммитов и не должно<br />
        использоваться вместо коммитов для постоянного хранения изменений в вашем репозитории. <br />
        git stash предназначена только для временного хранения изменений во время переключения между задачами или ветками.
        </div>`,
        `<div>(git)
        Git revert - это команда, позволяющая отменить один или несколько коммитов в вашем Git-репозитории,<br />
        создавая новый коммит, который "отменяет" изменения, сделанные в оригинальном коммите.<br />
        --soft, --mixed и --hard - это опции, которые можно использовать с командой git reset. Они определяют,<br />
        как Git должен изменять состояние индекса и рабочей директории при выполнении операции сброса.<br />
        --soft сохраняет изменения в индексе и рабочей директории, которые были внесены в коммит, который вы хотите<br />
        сбросить. Никаких изменений в индексе или рабочей директории не происходит при использовании этой опции, и<br />
        вы можете легко создать новый коммит на основе ваших изменений.<br />
        --mixed является значением по умолчанию и сбрасывает индекс на указанный коммит, но не изменяет рабочую<br />
        директорию. Эта опция помещает изменения, внесенные в коммит, в рабочую директорию, но не отмечает их в<br />
        индексе. Вы можете использовать git add для добавления этих изменений в индекс и затем создать новый коммит.<br />
        --hard сбрасывает индекс и рабочую директорию на указанный коммит, удаляя все изменения, внесенные после<br />
        этого коммита. Будьте осторожны при использовании этой опции, потому что все изменения, которые не были<br />
        зафиксированы в коммиты, будут потеряны без возможности восстановления.<br />
        Git tag - это ссылка на определенный коммит в Git-репозитории, которая помечает его как важный момент в<br />
        истории вашего проекта. Он обычно используется для пометки релизов, важных событий и промежуточных версий вашего проекта.<br />
        <pre>
        Создание тега в Git:
        git tag <tag_name> [<commit_sha>]
        Здесь <tag_name> - это название вашего тега, а <commit_sha> - это SHA-1 хэш коммита, который вы
        хотите пометить тегом. Если <commit_sha> не указан, Git использует HEAD (последний коммит) в качестве маркера.
        Удаление тега в Git:
        git tag -d <tag_name>
        Отправка тегов на удаленный сервер в Git:
        git push origin <tag_name>
        Здесь <tag_name> - это название вашего тега.
        Загрузка тегов из удаленного репозитория в Git
        git fetch --tags
        </pre>
        Эта команда загрузит все теги из удаленного репозитория, которых нет в локальном репозитории.
        </div>`

    ]

    
let list = document.getElementById('list');

list.innerHTML = techno.join('');
