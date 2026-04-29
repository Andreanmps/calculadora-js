let pantalla = document.getElementById("pantalla");

function agregar(valor) {
    pantalla.value += valor;
}

function limpiar(){
    pantalla.value = "";
}
function calcular() {
    let expresion = pantalla.value;

    if (/[\+\-\*\/]{2,}/.test(expresion)) {
        pantalla.value = "Error";

        setTimeout(function() {
            pantalla.value = "";
        }, 800);

        return;
    }

    try {
        pantalla.value = eval(expresion);
    } catch {
        pantalla.value = "Error";

        setTimeout(function() {
            pantalla.value = "";
        }, 800);
    }
}

document.addEventListener("keydown", function(event){
    let tecla = event.key;

    if (!isNaN(tecla) || "+-/*." .includes(tecla)) {
        agregar(tecla);
    }
    if (tecla === "Enter") {
        calcular();
    }
    if (tecla === "Backspace"){
        limpiar();
    }
});
