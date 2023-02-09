let php = document.getElementById('php');
let node = document.getElementById('node');
let add_techno = document.getElementById('add_techno');
let ruby = document.getElementById('ruby');
let selfdev = document.getElementById('selfdev')

php.addEventListener('click', showTutorial);
node.addEventListener('click', showTutorial);
add_techno.addEventListener('click', showTutorial);
ruby.addEventListener('click', showTutorial);
selfdev.addEventListener('click', showTutorial)

  function showTutorial() {
    let target = this.id;
    let taskIndex = 0;
    switch(target) {
      case "node":
        taskIndex = 1;
        break;
        case "add_techno":
        taskIndex = 2;
        break;
        case "ruby":
        taskIndex = 3;
        break;
        case "selfdev":
        taskIndex = 4;
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

  let get_task = document.getElementById('get_task');
  get_task.addEventListener('click', getRandomTask);

  function getRandomTask() {
    let task = Math.floor(Math.random() * 5);
    showTask(task)
  }