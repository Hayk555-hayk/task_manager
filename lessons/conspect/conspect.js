let conspectTitle = 'Повторение пройденного материала';

let conspectTutorials = [
    devopsTitle,
    phpTitle,
    nodeTitle,
    dbTitle,
    sqlTitle,
    algoTitle,
    codeTitle,
    reactTitle,
    nativeTitle,
    pythonTitle,
    algTitle,
    geoTitle,
    phyTitle,
    engTitle,
    gerTitle,
    japTitle,
    goTitle,
];

const randomConspectIndex = Math.floor(Math.random() * conspectTutorials.length);
let conspectTutorial = conspectTutorials[randomConspectIndex];