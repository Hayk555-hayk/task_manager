let sportTitle = 'Спорт';

let sportTutorials = [
    'Штанга грудь лежа - трицепс лежа - пресс половина',
    'Штанга бицепс стоя широкий - ноги ягоды - пресс обычный',
    'Штанга плечи рвв - спина бордюр - пресс ноги',

    'Штанга грудь как бицепс - трицепс стоя - пресс скалолаз',
    'Штанга бицепс стоя узкий - ноги обычный - пресс паук',
    'Штанга плечи перед собой - спина обычный - пресс ноги согнутые',
];

const randomSportIndex = Math.floor(Math.random() * sportTutorials.length);
let sportTutorial = sportTutorials[randomSportIndex];