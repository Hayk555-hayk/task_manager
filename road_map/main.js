const lessons = [
    {
        title: 'ТЕОРИЯ IT BACKEND',
        content: `<ul>
            <li>С# Документация https://learn.microsoft.com/en-us/dotnet/csharp/</li>
            <li>.NET Документация https://learn.microsoft.com/en-us/dotnet/</li>
	        <li>PHP Документация https://www.php.net/docs.php</li>
	        <li>Laravel Документация https://laravel.com/docs/11.x/readme</li>
	        <li>Node JS Документация https://nodejs.org/docs/latest/api/</li>
	        <li>Nest JS Документация https://docs.nestjs.com/</li>
	        <li>Go Документация https://go.dev/doc/</li>
	        <li>Python Документация https://docs.python.org/3/</li>
	        <li>Django Документация https://docs.djangoproject.com/en/5.1/</li>
	        <li>Ruby On Rails Документация https://guides.rubyonrails.org/</li>
	        <li>Java Документация https://docs.oracle.com/en/java/</li>
	        <li>Java spring boot Документация https://docs.spring.io/spring-boot/index.html</li>
        </ul>`
    },

    {
        title: 'ТЕОРИЯ IT FRONTEND',
        content: `<ul>
            <li>React JS Документация https://legacy.reactjs.org/docs/getting-started.html</li>
	        <li>Next JS Документация https://nextjs.org/docs</li>
	        <li>JS Документация https://developer.mozilla.org/en-US/docs/Web/JavaScript</li>
	        <li>Vue JS Документация https://vuejs.org/guide/introduction.html</li>
	        <li>Nuxt JS Документация https://nuxt.com/docs/getting-started/introduction</li>
	        <li>Angular Документация https://v17.angular.io/docs</li>
	        <li>TypeScript Документация https://www.typescriptlang.org/docs/</li>
        </ul>`
    },

    {
        title: 'ТЕОРИЯ IT ADDTECHNO',
        content: `<ul>
            <li>MySQL Документация https://dev.mysql.com/doc/</li>
	        <li>Elastic search Документация https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html</li>
	        <li>Redis Документация https://redis.io/docs/latest/</li>
	        <li>MongoDB Документация https://www.mongodb.com/docs/</li>
	        <li>FireBase документация https://firebase.google.com/docs?hl=ru</li>
	        <li>AWS Документация https://docs.aws.amazon.com/</li>
	        <li>Google cloud Документация https://cloud.google.com/docs/?gad_source=1&gclid=CjwKCAjwlbu2BhA3EiwA3yXyu6MO-WrR1bGr-M2ZGHexqSA9W1PwBgViEbOVKI6gLRlj-KKfsgNxuhoCUDMQAvD_BwE&gclsrc=aw.ds</li>
	        <li>Graphql Документация https://graphql.org/learn/</li>
	        <li>Чистый код Документация https://refactoring.guru/ru</li>
	        <li>Internet protocol Документация https://www.ibm.com/docs/en/aix/7.1?topic=protocols-internet-protocol</li>
	        <li>CORS Документация https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS</li>
	        <li>Websocket Документация https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API</li>
	        <li>Stripe Документация https://docs.stripe.com/</li>
	        <li>PayPal Документация https://developer.paypal.com/home/</li>
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
        title: 'ПРАКТИКА',
        content: `<ul>
            <li>Изучение конспектов наизусть</li>
	        <li>Практика Laravel и Vue JS с graphql https://youtube.com/playlist?list=PLEhEHUEU3x5qsA5JnRzhgOghrH9Vqz4cg&si=m1exEw-LEAOKRa9-</li>
        </ul>`
    },

    

    
];


let lessonsHtml = '<div>';
const mainElement = document.querySelector('main');

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
        <div class='lesson'>
            <h3>${lesson.title}</h3>
            <p>${tempContainer.innerHTML}</p>
        </div>
    `;
});


lessonsHtml += '</div>';
mainElement.innerHTML = lessonsHtml;