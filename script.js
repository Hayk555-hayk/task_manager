let java = document.getElementById('java');
let php = document.getElementById('php');
let node = document.getElementById('node');
let add = document.getElementById('add');


java.addEventListener('click', showTutorial);
php.addEventListener('click', showTutorial);
node.addEventListener('click', showTutorial);
add.addEventListener('click', showTutorial);

  function showTutorial() {
    target = this.id;
    let html = "";
    let tutorialPart = document.getElementById('called_tutorial');
    
    for(let i = 0; i < tutorials[target].length; i++) {
        html += tutorials[target][i];
    }

    tutorialPart.innerHTML = html;

}