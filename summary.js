var eventos=[];
var dataSoloEventos=[];
var fechaActual="";

async function getData(){
  await fetch ("https://amazing-events.herokuapp.com/api/events")
  .then(response => response.json())
  .then(json => dataSoloEventos=json)

  eventos=dataSoloEventos.events
  fechaActual = dataSoloEventos.currentDate

  function mayorMenorAsistencia (){
    var val = []
    val.push(...eventos.filter(item => item.assistance !== undefined))    
    val.map(item => item.porcentaje = (item.assistance * 100) / item.capacity)  
    val.sort((a,b) => b.porcentaje - a.porcentaje)
    
    mayorA.innerHTML = val[0].name + " = " + val[0].porcentaje.toFixed(2) + " % "
    menorA.innerHTML = val[val.length-1].name + " = " + val[val.length-1].porcentaje.toFixed(2) + " % "
 }
 
 function capacidadMayor(){
    var val = []
    val.push(...eventos)
    val.sort((a,b) => b.capacity - a.capacity)
    mayorCap.innerHTML = val[0].name + " = " + val[0].capacity 
 }


}