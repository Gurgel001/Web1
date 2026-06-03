var numSorteado; // variável global

function iniciar(){
    // alert("OI");

    var valor = document.getElementById("iptQtd").value;

    valor = parseInt(valor);

    sorteio(valor);

    for (var k=0; k<valor; k++){
        // spnRes = document.createElement("span");

        spnRes = document.createElement("div");
        spnRes.setAttribute("id", "box"+(k+1));
        spnRes.style.display = "flex";
        spnRes.style.border = "1px solid black";
        spnRes.style.width = "100px";
        spnRes.style.height = "100px";
        spnRes.style.alignItems = "center";
        spnRes.style.justifyContent = "center";

        spnRes.innerHTML = k+1;

        spnRes.addEventListener("click", function (){
            // alert("Olá Mundo");
            this.style.backgroundColor = "red";
            // alert(this.textContent);
            // console.log(this.getAttribute("id"));
            // this.remove();
            conferencia(this.textContent);
        });

        document.getElementById("principal").appendChild(spnRes);

    }

    // var spnRes = document.getElementById("spnRes");
}

function conferencia(num){
    if (num == numSorteado){
        alert("Parabéns, você acertou o número sorteado!");
        return;
    }
}

// function olaFunction(){
//     alert("Olá");
// }

function sorteio(quantidade){
    numSorteado = Math.floor(Math.random() * quantidade) + 1;
    console.log(numSorteado);
} 


function verificar(){
    var valor = parseInt(document.getElementById("iptQtd").value);
    // var valor = document.getElementById("iptQtd").value;
    

    var spnNumber = document.querySelector("#spnNumber");
    if (!(isNaN(valor))){
        if (valor % 2 == 0){
            spnNumber.textContent = valor + " é PAR";
        }else{
            spnNumber.textContent = valor + " é IMPAR";
        }
    }else{
        spnNumber.textContent = "";
    }
    
    // spnNumber.innerHTML = valor;
    
}