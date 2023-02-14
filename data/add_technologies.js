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
       `<div>(git)
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
        `<div class="checkpoint">(elastic)
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
    ]