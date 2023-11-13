const container = document.getElementById('menu');
container.addEventListener('click', (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.value.length > 0) {
    html = ""
    for(let i = 0; i < main_data[clickedElement.classList.value].length; i++) {
        html += `<div class="term">${main_data[clickedElement.classList.value][i]}<br/>-${i+1}-</div>`
    }
    let page_content = document.getElementById('page_content');
    page_content.innerHTML = "";
    page_content.innerHTML = html;
}
});