const lessonsList = document.getElementById('lessons-list');
const lessonContent = document.getElementById('lesson-content');
const lessonTitle = lessonContent.querySelector('h2');
const lessonText = document.getElementById('lesson-text');

// Массив с данными уроков
const lessons = [
    {
        title: devopsTitle,
        text: devopsTutorial
    },
    {
        title: phpTitle,
        text: phpTutorial
    },
    {
        title: nodeTitle,
        text: nodeTutorial
    },
    {
        title: dbTitle,
        text: dbTutorial
    },
    {
        title: sqlTitle,
        text: sqlTutorial
    },
    {
        title: algoTitle,
        text: algoTutorial
    },
    {
        title: codeTitle,
        text: codeTutorial
    },
    {
        title: reactTitle,
        text: reactTutorial
    },
    {
        title: nativeTitle,
        text: nativeTutorial
    },
    {
        title: pythonTitle,
        text: pythonTutorial
    },
    {
        title: relTitle,
        text: relTutorial
    },
    {
        title: algTitle,
        text: algTutorial
    },
    {
        title: geoTitle,
        text: geoTutorial
    },
    {
        title: phyTitle,
        text: phyTutorial
    },
    {
        title: engTitle,
        text: engTutorial
    },
    {
        title: gerTitle,
        text: gerTutorial
    },
    {
        title: japTitle,
        text: japTutorial
    },
    {
        title: sportTitle,
        text: sportTutorial
    },
    // Добавляйте другие уроки здесь
];

// Функция для отображения контента урока
function showLesson(lesson) {
    lessonTitle.textContent = lesson.title;
    lessonText.innerHTML = lesson.text;
}

// Создание списка уроков
lessons.forEach(lesson => {
    const listItem = document.createElement('li');
    listItem.textContent = lesson.title;
    listItem.addEventListener('click', () => showLesson(lesson));
    lessonsList.appendChild(listItem);
});

// Отображение контента рандомного урока по умолчанию
const randomIndex = Math.floor(Math.random() * lessons.length);
showLesson(lessons[randomIndex]);
