
function show_notes(e) {
    let note = document.querySelector('.notes');

    let target = undefined;

    if(e.target.value != undefined) {
        target = e.target.value
    }

    if (notes[target] != undefined) {
        note.innerHTML = '';
        note.innerHTML = '<div>';
        for(let i = 0; i < notes[target].length; i++) {
            note.innerHTML += `<div>${notes[target][i]}</div>`
        }
        note.innerHTML += '</div>'
    }
    

}

const target_notes = document.querySelector('#targeting_task');
target_notes.addEventListener('change', show_notes);
