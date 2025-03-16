const buttens = document.querySelectorAll(".col");
// console.log(buttens)
const body = document.querySelector("body")

buttens.forEach(function(butten){
    // console.log(butten)
    butten.addEventListener("click", function(e){
        // console.log(e)
        // console.log(e.target) // e.target give from where i cliclk or target
        if(e.target.id === "black"){
            body.style.backgroundColor = "rgb(30, 28, 28)";
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = "rgb(38, 56, 102)";
        }
        if(e.target.id === "red"){
            body.style.backgroundColor = "rgb(153, 53, 53";
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = "rgb(28, 137, 68)";
        }
        if(e.target.id === "pink"){
            body.style.backgroundColor = "rgb(167, 38, 120)";
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = "rgb(181, 179, 34)";
        }
        
        
    })
})