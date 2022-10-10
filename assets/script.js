
let task_line = document.querySelector('.task_wrapper');
let generated_html = "";

let active = 2;

console.log(tasks.length)
for(let i = 0; i < tasks.length; i++) {
    generated_html += `
    <div class="one_task ${i == active ? "active" : ""} ${tasks[i].task_status == true ? "done" : ""}">
        <div class="title">${tasks[i].title}</div>
        <div class="description">${tasks[i].description}</div>
    </div>`;
}

task_line.innerHTML = generated_html;

let task_status = document.querySelector('.status');

task_status.innerHTML = `${active}/${tasks.length}`;
