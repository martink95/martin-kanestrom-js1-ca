const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get("id")

if(!idParam) {
    window.location.replace("index.html");
}

let characterQuery = fetch(`https://rickandmortyapi.com/api/character/${idParam}`)
.then(response => {
    return response.json();
})
.then(json => {
    window.document.title = json.name;
    createDetailedCharacter(json);
})
.catch(error => {
    window.location.replace("error.html");
})

function createDetailedCharacter(characterDetail) {
    const detailContainer = document.querySelector(".detail-container");

    detailContainer.innerHTML = `
    <img class="details-image" src="${characterDetail.image}" alt="${characterDetail.name}" />
    <div class="detail-details">
        <h1>${characterDetail.name}</h1>
        <p>Status: <span class="value" id="status">${characterDetail.status}</span></p>
        <p>Species: <span class="value" id="species">${characterDetail.species}</span></p>
        <p>Origin: <span class="value" id="origin">${characterDetail.origin.name}</span></p>
        <p>Location: <span class="value" id="location">${characterDetail.location.name}</span></p>                   
    </div>`;
}