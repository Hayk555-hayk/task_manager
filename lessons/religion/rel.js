let relTitle = 'Религия';

let relTutorials = [
    'Библия на Армянском',
    'Библия на Русском',
    'Библия по APP',
    'Написание письма',
];

const randomRelIndex = Math.floor(Math.random() * relTutorials.length);

let relTutorial = relTutorials[randomRelIndex];