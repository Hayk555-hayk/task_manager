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
`<div>(git)
    Чтобы получить новые ветки нужна комманда git fetch
</div>`,]