const lessons = [
    {
        title: 'ТЕОРИЯ IT',
        content: `<ul>
            <li>Книга по программированию</li>
	        <li>Практика Laravel и React JS https://www.youtube.com/watch?v=z0UqqoedPkQ&list=PL8p2I9GklV441mpKgiou6lQ7cDFmqYA3B</li>
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
        </ul>`
    },

    {
        title: 'СПОРТ',
        content: `<ul>
            <li>Пресс удары коленями 5 минут</li>
            <li>
                Гантели грудь лежа 30x3<br/>
                Гантели бицепс стоя обычный 30x3<br/>
                Гантели трицепс стоя 30x3<br/>
                Гантели плечи перед собой 30x3<br/>
                Гантели спина обычный 30x3<br/>
                Гантели ноги приседания 30x3<br/>
                Пресс обычный 40x3<br/>
            </li>
            <li>Гантели на грудь 5 минут</li>
            <li>
                Гантели грудь разводка лежа 30x3<br/>
                Гантели бицепс сидя по 1-й руке 30x3<br/>
                Гантели трицепс сидя 30x3<br/>
                Гантели плечи разводка стоя 30x3<br/>
                Гантели спина на себя 30x3<br/>
                Гантели ноги ягоды 30x3<br/>
                Пресс ног 30x3<br/>
            </li>
            <li>Гантели на бицепс 5 минут</li>
            <li>
                Гантели грудь стоя как бицепс 30x3<br/>
                Гантели бицепс стоя по 1-й руке 30x3<br/>
                Гантели трицепс стоя с наклоном как бицепс 30x3<br/>
                Гантели плечи рвв сидя 30x3<br/>
                Гантели спина бордюр 2-я руками 30x3<br/>
                Гантели ноги утиный шаг 30x3<br/>
                Пресс скалолаз 30x3<br/>
            </li>
            <li>Гантели на плечи рвв стоя 5 минут</li>
            <li>
                Жим грудь лежа 15x3<br/>
                Жим на бицепс лежа 15x3<br/>
                Жим узкий хват на трицепс 15x3<br/>
                Жим стена для плеч 40x3<br/>
                Спина мельница касание ног стоя 40x3<br/>
                Ноги ягоды сидя нога в верх 20x3<br/>
                Удары коленями 50x3<br/>
                Пресс паук 30x3<br/>
            </li>
            <li>Гантели приседания 5 минут</li>
        </ul>`
    },

    {
        title: 'ИЗУЧЕНИЕ ПРОЙДЕННОГО',
        content: `<ul>
            <li>Изучение конспектов наизусть</li>
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
