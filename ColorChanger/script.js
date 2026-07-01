const idPick1 = document.getElementById("grey");
const idPick2 = document.getElementById("white");
const idPick3 = document.getElementById("blue");
const idPick4 = document.getElementById("yellow");

function changeColor(element){
  return document.body.style.backgroundColor = element.id;
}

idPick1.addEventListener("click",()=>changeColor(idPick1));
idPick2.addEventListener("click",()=>changeColor(idPick2));
idPick3.addEventListener("click",()=>changeColor(idPick3));
idPick4.addEventListener("click",()=>changeColor(idPick4));