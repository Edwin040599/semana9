const txtN1 = document.getElementById("n1");
const txtOperador = document.getElementById("Operador");
const txtN2 = document.getElementById("n2");
const btnCalcular = document.getElementById("Calcular");
const pResultado = document.getElementById("Resultado");

btnCalcular.addEventListener("click", Calcular );

function Calcular(){ 
    const n1 = parseFloat(txtN1.value)
    const n2 = parseFloat(txtN2.value)
    const operador = txtOperador.value; 

    
    if (isNaN(n1) || isNaN(n2)) {
        pResultado.innerText = "Resultado no válido";
        pResultado.style.color = "red";
        return;
    }

    if ( (operador == "+" || operador == "-" || operador == "*" || operador == "/" ) ) {
        let resultado;
        switch (operador) {
            case "+":
             resultado =   n1 + n2
                break;
            case "-":
             resultado =   n1 - n2
                break;
            case "*":
             resultado =   n1 * n2
                break;
            case "/":
             resultado =   n1 / n2
                break;
        }
        pResultado.innerText = "=" + resultado
        pResultado.style.color = "blue";
    } else {
        pResultado.innerText = "Resultado imposible"
        pResultado.style.color = "red"


    }


}

