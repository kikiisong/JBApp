import { validateEmployerName, validateEmployerSector } from "./validate.js";

function deleteEmployer(employerName) {
    fetch('http://localhost:7000/employers?name=' + employerName, {
            method: 'Delete',
        }
    ).then(res => window.location.reload = window.location.reload(true));
}

let delButtons = document.querySelectorAll("li > button")
Array.prototype.forEach.call(delButtons, function(button) {
    button.addEventListener('click', deleteEmployer.bind(null, button.id));
});

function addEmployer(){
    if(validateEmployerName() && validateEmployerSector()){
        const name = document.getElementById("name").value;
        const sector = document.getElementById("sector").value;
        const summary = document.getElementById("summary").value;
        fetch('http://localhost:7000/employers?name=' + name + "&sector=" + sector + "&summary=" + summary, {
                method: 'POST',
            }
        ).then(res => window.location.reload = window.location.reload(true));
    }
}

document.getElementById("addButton").addEventListener("click", addEmployer);
