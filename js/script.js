let $ = document;

const inputElem = $.querySelector('#input-field'),
    colorBoxArray = $.querySelectorAll('.color-box'),
    btnSaveElem = $.querySelector('#btn-save'),
    btnDeleteElem = $.querySelector('#btn-delete'),
    divContainer = $.querySelector('#listed');



colorBoxArray.forEach(itemColor => {
    itemColor.addEventListener('click', (event) => {
        inputElem.style.backgroundColor = event.target.style.backgroundColor;
    })
})

inputElem.addEventListener('keypress', (event) => {
    if (event.code == 'Enter') {
        generateTodo()
    }
})

function generateTodo() {
    if (inputElem.value) {
        divContainer.insertAdjacentHTML('beforeend', `<div class="card shadow-sm rounded"
        style="background-color: ${inputElem.style.backgroundColor}; --darkreader-inline-bgcolor:#181a1b;"
        data-darkreader-inline-bgcolor="">
        <p class="card-text p-3">${inputElem.value}</p>
        </div>`)
        deleteContentInput()
    } else {
        alert('please enter a value')
    }
}

divContainer.addEventListener('click', (e) => {
    if (e.target.tagName == 'P') {
        e.target.parentElement.remove()
    }
})



function deleteContentInput() {
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
}

btnDeleteElem.addEventListener('click', deleteContentInput)
btnSaveElem.addEventListener('click', generateTodo)