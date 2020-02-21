let aboutContainer = document.querySelector("main.container.content");

setTimeout(function() {
    let newText = aboutContainer.innerHTML.replace(/The/g, "Replaced").replace(/the/g, "replaced");
    aboutContainer.innerHTML = newText;
}, 4000);