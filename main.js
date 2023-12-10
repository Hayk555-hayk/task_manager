const container = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile-menu');
const pageContent = document.getElementById('page_content');

container.addEventListener('click', handleMenuClick);
mobileMenu.addEventListener('change', handleMobileMenuChange);

function handleMenuClick(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.value.length > 0) {
        displayContent(clickedElement.classList.value);
    }
}

function handleMobileMenuChange() {
    const selectedValue = mobileMenu.value;
    displayContent(selectedValue);
}

function displayContent(menuItem) {
    html = "";
    for (let i = 0; i < main_data[menuItem].length; i++) {
        html += `<div class="term">${main_data[menuItem][i]}<br/>-${i + 1}-</div>`;
    }
    pageContent.innerHTML = "";
    pageContent.innerHTML = html;
}