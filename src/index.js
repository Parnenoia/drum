import employeeJSON from './employees.json' assert {type: 'json'}

var employees = Object.values(employeeJSON)
console.log(employees)
var employeeOutput = document.querySelector('.personel')

if (typeof employees !== "undefined" && employees.length > 0) {
    employees.forEach((employee) => {
        employeeOutput.innerHTML += `
        <article>
            <p class="name" >${employee.name}</p>
            <p class="sirname" >${employee.sirname}</p>
            <p class="decription" >${employee.job}</p>
            <section class="controls">
                <article class="edit"></article>
                <article class="delete"></article>
            </section>
        </article>`
    });
} else {
    employeeOutput.innerHTML += `<p>No employees found</p>`;
}

/* CONTROLS */

// const editEmployees = document.querySelectorAll('.edit')
// editEmployees.forEach(editEmployee => {
//     editEmployee.addEventListener('click', x =>
//         editEmployee.parentNode.parentNode.childNodes.forEach(editNode => {
//             if(document.querySelectorAll('.temp').length>4){
//                 confirm('You still have unsaved changes, are you sure you want to progress?')
//             } else {
//                 if(editNode.tagName === 'P'){
//                     var editInput = document.createElement('input')
//                     editInput.classList.add('temp')
//                     editInput.value = editNode.innerHTML
//                     editNode.parentNode.replaceChild(editInput, editNode)
//                 }
//             }
//         })
//     )
// })