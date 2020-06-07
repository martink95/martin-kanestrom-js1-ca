const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    
    const firstName = form.querySelector("#firstName");
    const lastName = form.querySelector("#lastName");
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message");

    if(firstName.value.trim()) {
        firstName.nextElementSibling.style.display = "none";
    } else {
        firstName.nextElementSibling.style.display = "block"
    }

    if(lastName.value.trim()) {
        lastName.nextElementSibling.style.display = "none";
    } else {
        lastName.nextElementSibling.style.display = "block";
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

    if(message.value.length > 10) {
        message.nextElementSibling.style.display = "none";
    } else {
        message.nextElementSibling.style.display = "block";
    }

}