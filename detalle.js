var soloEventos=[];

async function getData(){
  await fetch ("https://amazing-events.herokuapp.com/api/events")
  .then(response => response.json())
  .then(json => dataSoloEventos=json)

  soloEventos=dataSoloEventos.events;

function detalleCard() {

    var idCard =location.search.split("?id=")//separo location(todo el http).search  es la URL 127.0.0.1.5500/detalle.html?id=i y conviernto en num)

    var cardDinamica =""


    var verEvento = soloEventos.find(e => e._id == idCard[1]) 

     cardDinamica += `
     <div  class="card mb-3" style="max-width: 540px;">
     <div class="row g-0">
              <div class="col-md-4">
                <img src="${verEvento.image}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${verEvento.name}</h5>
                  <p class="card-text">${verEvento.description}</p>
                  <p class="card-text">Date: ${verEvento.date}</p> 
                  <p class="card-text">Category: ${verEvento.category}</p>
                  <p class="card-text">Place: ${verEvento.place}</p>
                  <p class="card-text">Capacity: ${verEvento.capacity}</p>
                  <p class="card-text">Assistance: ${verEvento.assistance}</p>
                  <p class="card-text">Price: $ ${verEvento.price} </p>
                </div>
              </div>
            </div> `


    document.querySelector(".detalle").innerHTML = cardDinamica

}
detalleCard()

}
getData()