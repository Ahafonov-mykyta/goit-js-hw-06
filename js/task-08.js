const form = document.querySelector(".login-form");


form.addEventListener("submit", (event)=> {
    event.preventDefault();
   
    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value ==="" || password.value ==="" ){
        return alert("Все поля должны быть заполнены !!!");
    }

    const log= {
        email: email.value,
        password: password.value
    }

console.log(log)

event.currentTarget.reset();
})
