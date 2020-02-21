// https://rickandmortyapi.com/api/character/

let characterQuery = fetch("https://rickandmortyapi.com/api/character/")
    .then(response => {
        return response.json();
    })
    .then(json => {
        createDetailsList(json.results);
        hideLoader();
    })
    .catch(error => {
        window.location.replace("error.html");
    })

function hideLoader() {
    document.querySelector(".loader").style.display = "none";
}

function createDetailsList(characterDetail) {
    const resultsRow = document.querySelector("div.row.results");
    characterDetail.forEach(element => {
        let type = "";
        if(element.type === null || element.type === undefined) {
            type = "Unknown";
        } else {
            type = element.type;
        }
        resultsRow.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">                
                                <div class="card">
                                            
                                    <img class="image" src="${element.image}" alt="Character Name">
                                    <div class="details">
                                        <h4 class="name">${element.name}</h4>
                                        <p>Type: ${type}</p>    
                                        <p>Episode count: ${element.episode.length}</p>                                       
                                        <a class="btn btn-primary" href="details.html?id=${element.id}">Details</a>
                                    </div>
                                </div>
                            </div>`
    });
    
}