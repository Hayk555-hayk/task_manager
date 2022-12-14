let php = document.getElementById('php');
let node = document.getElementById('node');
let front = document.getElementById('front');
let ruby = document.getElementById('ruby');

php.addEventListener('click', showTutorial);
node.addEventListener('click', showTutorial);
front.addEventListener('click', showTutorial);
ruby.addEventListener('click', showTutorial);

  function showTutorial() {
    let target = this.id;
    let taskIndex = 0;
    switch(target) {
      case "node":
        taskIndex = 1;
        break;
        case "front":
        taskIndex = 2;
        case "ruby":
        taskIndex = 3;
        break;
    }
    let html = "";
    let tutorialPart = document.getElementById('called_tutorial');
    for(let i = 0; i < tutorials[target].length; i++) {
        html += tutorials[target][i];
    }

    tutorialPart.innerHTML = html;
    showTask(taskIndex)
  }

  let taskPopup = document.getElementById('the_task');

  let taskIndicator = true;
  function showTask(taskIndex) {
    if(taskIndicator) {
      taskPopup.style.top = '15px';
      let targetTask = taskIndex;
      taskPopup.innerHTML = tasks[targetTask];
    } else {
      taskPopup.style.top = '-250px';
      taskPopup.innerHTML = "";
    }

    taskIndicator = !taskIndicator;
  }