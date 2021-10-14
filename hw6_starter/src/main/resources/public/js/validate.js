function validateUsername() {
    const name = document.getElementById("username");
    if (name.value.length < 1) {
        alert("Username cannot be empty!");
        return false;
    } else {
        return true;
    }
}

export function validateEmployerName() {
    let name = document.getElementById("name").value;
    var format = /[~@$%^]/;
    if(name.length < 2){
        alert("Employer name cannot be less than 2 characters, more than 150 characters, or include $, @, ^, %, ~!")
        return false;
    }
    else if(name.length > 150)
    {
        alert("Employer name cannot be less than 2 characters, more than 150 characters, or include $, @, ^, %, ~!");
        return false;
    }
    else if(format.test(name))
    {
        alert("Employer name cannot be less than 2 characters, more than 150 characters, or include $, @, ^, %, ~!");
        return false;
    }
    else{
        return true
    }
}

export function validateEmployerSector(){
    let sector = document.getElementById("sector").value;
    var format = /[~@$%^]/;
    if(sector.length < 2){
        alert("Employer sector cannot be less than 2 characters, more than 100 characters, or include any digits or $, @, ^, %, ~!")
        return false;
    }
    else if(sector.length > 100)
    {
        alert("Employer sector cannot be less than 2 characters, more than 100 characters, or include any digits or $, @, ^, %, ~!");
        return false;
    }
    else if(/\d/.test(sector))
    {
        alert("Employer sector cannot be less than 2 characters, more than 100 characters, or include any digits or $, @, ^, %, ~!");
        return false;
    }
    else if(format.test(sector))
    {
        alert("Employer sector cannot be less than 2 characters, more than 100 characters, or include any digits or $, @, ^, %, ~!");
        return false;
    }
    else{
        return true
    }

}