const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    
    const firstName = form.querySelector("#firstName").value.trim();
    const lastName = form.querySelector("#lastName").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value;

    if(firstName) {
        document.querySelector("#firstNameError").style.display = "none";
    } else {
        document.querySelector("#firstNameError").style.display = "block";
    }

    if(lastName) {
        document.querySelector("#lastNameError").style.display = "none";
    } else {
        document.querySelector("#lastNameError").style.display = "block";
    }

    let signs = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(signs.test(email)) {
        document.querySelector("#invalidEmailError").style.display = "none";
    } else {
        document.querySelector("#invalidEmailError").style.display = "block";
    }

    if(email) {
        document.querySelector("#emailError").style.display = "none";
    } else {
        document.querySelector("#emailError").style.display = "block";
    }

    if(message.length > 10) {
        document.querySelector("#messageError").style.display = "none";
    } else {
        document.querySelector("#messageError").style.display = "block";
    }

}