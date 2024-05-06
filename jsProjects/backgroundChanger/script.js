
let button = document.getElementById("btn");

const randomColor = ()=>{
    const value = "123456789ABCDEF";
    let cons ='#';
    for(let i=0;i<6;i++){
        cons = cons + value[Math.floor(Math.random()*16)];
    }

    return cons;
}

function PickRandomColor (){
    document.body.style.backgroundColor = randomColor();
}

button.addEventListener("click",PickRandomColor);