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




let otherCharacters = fetch("https://rickandmortyapi.com/api/character/")
    .then(response => {
        return response.json();
    })
    .then(json => {
        createOtherCharacterList(json.results);
        hideLoader();
    })
    .catch(error => {
        window.location.replace("error.html");
    })

function hideLoader() {
    document.querySelector(".loader").style.display = "none";
}

function createOtherCharacterList(element) {
    const resultsRow = document.querySelector("div.row.results");

    let startNumber = Math.round(Math.random() * 15);
    let endNumber = startNumber + 4;
    
    for(i = startNumber; i < endNumber; i++) {
        let type = "";
        if(element[i].type === null || element[i].type === undefined) {
            type = "Unknown";
        } else {
            type = element.type;
        }
        resultsRow.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">                
                                <div class="card">
                                            
                                    <img class="image" src="${element[i].image}" alt="Character Name">
                                    <div class="details">
                                        <h4 class="name">${element[i].name}</h4>
                                        <p>Type: ${type}</p>    
                                        <p>Episode count: ${element[i].episode.length}</p>                                       
                                        <a class="btn btn-primary" href="details.html?id=${element[i].id}">Details</a>
                                    </div>
                                </div>
                            </div>`
    }
    
}