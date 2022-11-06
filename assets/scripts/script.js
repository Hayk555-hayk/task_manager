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