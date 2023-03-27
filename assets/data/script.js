function get_random_task(array) {
    const random_index = Math.floor(Math.random() * array.length);
    task = array[random_index]
    return task
}

function get_tasks() {
    let tasks = [];
    tasks.push(get_random_task(task_title.religion));
    tasks.push(get_random_task(task_title.programming));
    tasks.push(get_random_task(task_title.math));
    tasks.push(get_random_task(task_title.languages));
    tasks.push(get_random_task(task_title.sport));
    
    let titles = ['Religion', 'Programming', 'Math', 'Languages', 'Sport'];
    let page_content = document.querySelector('.page_content');

    let page_content_new_html = '<div class="tasks">';
    for(let i = 0; i < tasks.length; i++) {
        page_content_new_html += `<div class='${tasks[i]}'><h3>${titles[i]}</h3>${tasks[i]}</div>`
    }
    page_content_new_html += '</div>';

    page_content.innerHTML = page_content_new_html;
}

function show_notes(e) {
    let note = document.querySelector('.notes');

    note.innerHTML = '';
    note.innerHTML = '<div>'

    if (notes[e.target.className] != undefined) {
        for(let i = 0; i < notes[e.target.className].length; i++) {
            note.innerHTML += `<div>${notes[e.target.className][i]}</div>`
        }
    }
    
    note.innerHTML += '</div>'

}

function target_note(note) {
    console.log(note);
}

const get_task = document.querySelector('.get_task');
get_task.addEventListener('click', get_tasks);

const target_notes = document.querySelector('.page_content');
target_notes.addEventListener('click', show_notes);
