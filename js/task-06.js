const input = document.querySelector("#validation-input");

let atributeData = Number(input.getAttribute("data-length"));
input.addEventListener("blur", ()=> {

    if(input.value.length === atributeData){
        input.classList.add("valid")
        input.classList.remove("invalid")
    }
    else{
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
})