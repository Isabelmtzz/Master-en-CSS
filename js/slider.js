(function(){

    const sliders = [...document.querySelectorAll(".testimony__body")];
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let value = 1; // Comienza en el primer testimonio.

    buttonNext.addEventListener("click", ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener("click", ()=>{
        changePosition(-1);
    });

    const changePosition = (add) => {
        console.log("valor inicial",value)
        sliders[value - 1].classList.remove("testimony__body--show");
        value += add;

        if (value > sliders.length) {
            value = 1; // Vuelve al primer testimonio si llega al final.
        } else if (value < 1) {
            value = sliders.length; // Vuelve al último testimonio si va antes del primero.
        }
        console.log("valor  final",value)
        sliders[value - 1].classList.add("testimony__body--show");
    };

})();

const comprar = document.getElementById("Buy")

let contador = 0
comprar.addEventListener("click", e =>{
    setInterval(()=>{
        contador++
    },1000)
    alert("Comprame Perro! "+contador)
})
