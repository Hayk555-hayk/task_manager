const lessons = [
    {
        title: 'Lesson 1',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 2',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 1',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 2',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 1',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 2',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 1',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 2',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 1',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 2',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 1',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 2',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 1',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 2',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 1',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 2',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 1',
        content: 'some <b>content</b>'
    },
    {
        title: 'Lesson 2',
        content: 'some <b>content</b>'
    },
];

let lessonsHtml = '<div>';
const mainElement = document.querySelector('main');

lessons.forEach(lesson => {
    lessonsHtml += `
        <div class='lesson'>
            <h3>${lesson.title}</h3>
            <p>${lesson.content}</p>
        </div>
    `
});

lessonsHtml += '</div>';
mainElement.innerHTML = lessonsHtml;