const lessons = [
    {
        title: 'ТЕОРИЯ IT',
        content: `<ul>
            <li>1715_Bezopasno_by_design.pdf</li>
            <li>1644_nadezhnost-nejronnyh-setej.pdf</li> 
            <li>1623_Laravel-9-bystraya-razrabotka-web-sajtov-na-PHP.pdf</li> 
            <li>1615_Django3.0.-Praktika-sozdaniya-veb-saytov-na-Python.pdf</li> 
            <li>1614_sekrety-python-pro.pdf</li> 
            <li>1608_oblachnye-tehnologii-prakticheskoe-rukovodstvo.pdf</li> 
            <li>1604_typescript-bystro.pdf </li>
            <li>1601_Software_Oshibki_i_kompromissy_pri_razrabotke_PO.pdf</li> 
            <li>1553_osnovy-TypeScript.pdf </li>
            <li>1546_Osnovyi_razrabotki_veb-prilozheniy_na_platformah_Node.js_i_Deno.pdf</li> 
            <li>1542_SQL-Pocket-guide.pdf </li>
            <li>1529_testirovanie-veb-api.pdf </li>
            <li>1524_bitcoin-ethereum.pdf </li>
            <li>1518_GO_idiomy_i_patterny_proektirovaniya.pdf </li>
            <li>1505_sozdaem-neironnyu-set.pdf </li>
            <li>1453_Paternu-OOP.pdf </li>
            <li>1449_Refaktoring_Uluchshenie_suschestvuyuschego_koda.pdf</li> 
            <li>1432_Pogruzhenie_v_patterny_proektirovanija.pdf </li>
            <li>1414_PHP-i-MySQL-servernaya-veb-razrabotka.pdf </li>
            <li>1410_PHP-glazami-hakera-5-izd.pdf </li>
            <li>1405_Grokaem-glubokoe-obuchenie.pdf </li>
            <li>1244_Head_First_GIT.pdf </li>
            <li>1236_Javascript_dlya_glubokogo_obucheniya.pdf </li>
            <li>1231_monitoring-postgresql.pdf </li>
            <li>1206_Izuchaem-TypeScript-3.pdf </li>
            <li>1153_Osnovyi-iskusstvennogo-intellekta.pdf </li>
            <li>1142_Effektivnaja_rabota-s-unasledovannym-kodom.pdf </li>
            <li>1102_Bazy_dannyh_Proektirovanie_i_razrabotka.pdf </li>
            <li>1056_Gid-po-Computer-Science-dlja-kazhdogo-programmista.pdf </li>
            <li>1045_Prakticheskij_Go_sozdanie_masshtabiruemyh_setevyh_i_nesetevyh_prilozhenij.pdf </li>
            <li>1031_Programmirovanie-bez-durakov.pdf </li>
            <li>1027_PHP-8-naibolee-polnoe-rukovodstvo.pdf </li>
            <li>1012_Kak-napisat-i-prodat-svoy-PHP-skript.pdf </li>
            <li>0919_python-ekspress-kurs.pdf</li>
            <li>elastic.pdf</li>
        </ul>`
    },

    {
        title: 'САМОРАЗВИТИЕ',
        content: `<ul>
            <li>Книга по Алгебре</li>
	        <li>Книга по Геометрии</li>
	        <li>Книга по Физике</li>
	        <li>Книга по Английскому</li>
	        <li>Книга по Немецкому</li>
	        <li>Книга по Испанском</li>
	        <li>Книга по Японскому</li>
	        <li>Библия APP</li>
	        <li>Библия Армянская книга</li>
	        <li>Библия Русская книга</li>
	        <li>Написание письма</li>
	        <li>Практика по программированию</li>
        </ul>`
    },

    {
        title: 'СПОРТ',
        content: `<ul>
            <li>
                Гантели грудь лежа 30<br/>
                Гантели бицепс стоя обычный 30<br/>
                Гантели трицепс стоя 30<br/>
                Гантели плечи перед собой 30<br/>
                Гантели спина обычный 30<br/>
                Гантели ноги приседания 30<br/>
                Пресс обычный 40<br/>
            </li>
            <li>
                Гантели грудь разводка лежа 30<br/>
                Гантели бицепс сидя по 1-й руке 30<br/>
                Гантели трицепс сидя 30<br/>
                Гантели плечи разводка стоя 30<br/>
                Гантели спина на себя 30<br/>
                Гантели ноги ягоды 30<br/>
                Пресс ног 30<br/>
            </li>
            <li>
                Гантели грудь стоя как бицепс 30<br/>
                Гантели бицепс стоя по 1-й руке 30<br/>
                Гантели трицепс стоя с наклоном как бицепс 30<br/>
                Гантели плечи рвв сидя 30<br/>
                Гантели спина бордюр 2-я руками 30<br/>
                Гантели ноги утиный шаг 30<br/>
                Пресс скалолаз 30<br/>
            </li>
            <li>
                Жим грудь лежа 15<br/>
                Жим на бицепс лежа 15<br/>
                Жим узкий хват на трицепс 15<br/>
                Жим стена для плеч 40<br/>
                Спина мельница касание ног стоя 40<br/>
                Ноги ягоды сидя нога в верх 20<br/>
                Пресс паук 30<br/>
            </li>
            <li>
                Бег каскад<br/>
                Отжимания на каждом этаже 25<br/>
                Пресс скалолаз на каждом этаже 25<br/>
                Приседания на каждом этаже 25<br/>
            </li>
            <li>
                Брусья на грудь 12<br/>
                Турники обычный 7<br/>
                Турники на бицепс 7<br/>
                Жим на грудь низкий турник 25<br/>
                Жим на руки низкий турник 25<br/>
                Пресс обычный 25<br/>
            </li>
            <li>
                Бег раздансое ущнлье с гантелями + форсаж 20 минут<br/>
                Жим на грудь 30<br/>
                Пресс скалолаз 25<br/>
                Пресс паук 25<br/>
                Пресс обычный 25<br/>
                Пресс ног 25<br/>
            </li>
        </ul>`
    },

    {
        title: 'ПРАКТИКА',
        content: `<ul>
            <li>Изучение конспектов наизусть</li>
	        <li>Практика Laravel и React JS https://www.youtube.com/watch?v=z0UqqoedPkQ&list=PL8p2I9GklV441mpKgiou6lQ7cDFmqYA3B</li>
        </ul>`
    },

    

    
];


let lessonsHtml = '<div>';
const mainElement = document.querySelector('main');
const randomActiveLesson = Math.floor(Math.random() * 4);

let lessonId = 0;

lessons.forEach(lesson => {
    // Create a temporary container to parse the content
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = lesson.content;

    // Get all li elements
    const liElements = tempContainer.querySelectorAll('li');
    
    // Randomly select one li element and add a class
    if (liElements.length > 0) {
        const randomIndex = Math.floor(Math.random() * liElements.length);
        liElements[randomIndex].classList.add('actual');
    }

    lessonsHtml += `
        <div id=${lessonId} class='lesson'>
            <h3>${lesson.title}</h3>
            <p>${tempContainer.innerHTML}</p>
        </div>
    `;

    lessonId +=1;
});

function generateUniqueRandomNumbers() {
    let numbers = new Set();

    while (numbers.size < 2) {
        let randomNumber = Math.floor(Math.random() * 6);
        numbers.add(randomNumber);
    }

    return Array.from(numbers);
}

lessonsHtml += '</div>';
mainElement.innerHTML = lessonsHtml;

const lesson = document.getElementById(randomActiveLesson);
    
lesson.style.opacity = '1';
