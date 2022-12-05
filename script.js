let java = document.getElementById('java');
let php = document.getElementById('php');
let node = document.getElementById('node');
let front = document.getElementById('front');
let lang = document.getElementById('lang');

java.addEventListener('click', showTutorial);
php.addEventListener('click', showTutorial);
node.addEventListener('click', showTutorial);
front.addEventListener('click', showTutorial);
lang.addEventListener('click', showTutorial);


  function showTutorial() {
    target = this.id;
    let html = "";
    let tutorialPart = document.getElementById('called_tutorial');
    for(let i = 0; i < tutorials[target].length; i++) {
        html += tutorials[target][i];
    }

    tutorialPart.innerHTML = html;
  }

  let taskPopup = document.getElementById('the_task');
  let getTask = document.getElementById('get_task');

  getTask.addEventListener('click', showTask);

  let taskIndicator = true;
  function showTask() {
    if(taskIndicator) {
      taskPopup.style.top = '15px';
      let randomInt = Math.floor(Math.random() * tasks.length);
      taskPopup.innerHTML = tasks[randomInt];
    } else {
      taskPopup.style.top = '-250px';
      taskPopup.innerHTML = "";
    }

    taskIndicator = !taskIndicator;
  }