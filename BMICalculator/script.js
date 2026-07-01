const getHeight = document.getElementById("height");
const getWeight = document.getElementById("weight");
const resButton = document.getElementById("btn");

function getBMI(){
    const res = getHeight.value / getWeight.value;

    if(res < 18.6 ){
        alert("Under Weight")
    }
    else if(res > 18.6 && res < 24.9){
        alert("Normal Range")
    }
    else{
        alert("Overweight")
    }
}

resButton.addEventListener("click",getBMI);
