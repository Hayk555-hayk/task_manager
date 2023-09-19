let page =  document.getElementsByClassName("active");
page = page[0].innerText;

let current_page_data = {};
let color = ""

switch (page) {
    case "Web Development":
        current_page_data = web_data;
        color = "#ab1f1f";
        break;
    case "Math":
        current_page_data = math_data;
        color = "#566c56";
        break;
    case "Languages":
        current_page_data = lang_data;
        color = "#56537e";
        break;
    default:
        console.log("Invalid page!"); // If the value doesn't match any case
}

let menu_html = ""
for (var key in current_page_data) {
    menu_html += `<div id="${key}" style="color: ${color};">${key.toUpperCase()}</div>`
}

let menu_container = document.getElementById("tutorial");
menu_container.innerHTML = menu_html;

menu_container.addEventListener("click", function(event) {
    if (event.target.id != "tutorial") {
        let sub_tutorial = document.getElementById('sub_tutorial');
        sub_tutorial.innerHTML = ""
        let sub_tutorial_html = ""
        if (event.target && event.target.nodeName === "DIV" && event.target.id) {
            let target_tutorial_name = event.target.id;
    
            console.log(current_page_data[target_tutorial_name])
            for (var i = 0; i < current_page_data[target_tutorial_name].length; i++) {
                sub_tutorial_html += `<div>${current_page_data[target_tutorial_name][i]} <br /> - ${i} -</div>`
            }
    
            sub_tutorial.innerHTML = sub_tutorial_html
        }   
    }
});
