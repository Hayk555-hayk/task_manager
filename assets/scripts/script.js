let date_id = new Date();

let tasks_html = "";

for(let i = 0; i < tasks.length; i++) {
    tasks_html += `
    <div class="${tasks[i].day_id == date_id.getDay() ? 'day active' : 'day'}">
        <div class="week_day">${tasks[i].day}</div>
        <div class="list_of_tasks">
            <div>${tasks[i].programming}</div>
            <hr />
            <div>${tasks[i].learned_part}</div>
            <hr />
            <div>${tasks[i].sport}</div>
            <hr />`;
            if(tasks[i].religion) {
                tasks_html += `<div>${tasks[i].religion}</div>
                <hr />`;
            }
            if(tasks[i].english) {
                tasks_html += `<div>${tasks[i].english}</div>
                <hr />`;
            }
            if(tasks[i].spain) {
                tasks_html += `<div>${tasks[i].spain}</div>`;
            }
            tasks_html += `</div>
        </div>`;
}

let task_element = document.querySelector('#tasks');

task_element.innerHTML = tasks_html;


let lessons_html = "";
for(let i = 0; i < lessons.length; i++) {
    lessons_html += `
    <a href="${lessons[i].src}">
        <div class="lesson">
            <div>${lessons[i].title}</div>
            <div class="list_of_tasks">
                <div>
                    <img class="img" src="${lessons[i].img}" />
                </div>
            </div>
        </div>
    </a>`;
}


let lessons_element = document.querySelector('#lessons');

lessons_element.innerHTML = lessons_html;