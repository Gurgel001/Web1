// var z = -50; // global

function somar(){

    var x = 10; //local
    var y = 20;  // local

    var z = 0; // local
    
    console.log("Valor de z antes da soma: " + z); // Acessando a variável global
   
    z = x + y; // local
    
    {
        let z = 10; 
        console.log("Valor de z dentro do bloco: " + z); // Acessando a variável local do bloco 
    }    
    
    console.log("O resultado da soma é: " + z);

    
}

function multiplicar(){
    var x = 5; //local
    var y = 3;  // local

    var z = 0; // local    
    
    console.log("Valor de z antes da multiplicação: " + z); // Acessando a variável global
    z = x * y; // local

    console.log("O resultado da multiplicação é: " + z);

}

function verificarTipo(){
    var valor = "Daniel"; // string
    
    console.log("O valor é: " + valor);
    
    // console.log("Letra na posição 0: " + valor[0]); // Acessando o primeiro caractere da string

    for(var i = 0; i < valor.length; i++){
        console.log("Letra na posição " + i + ": " + valor[i]); // Acessando cada caractere da string
    }

    console.log("O tipo de valor é: " + typeof valor); // string

    // valor = parseInt(valor); // Convertendo para número inteiro

    valor = 10.2; // Atribuindo um número diretamente

    console.log("O tipo de valor após conversão é: " + typeof valor); // number

    valor = document.createElement("p"); // Criando um elemento HTML
    valor.style.color = "red"; // Acessando a propriedade do elemento criado
    valor.textContent = "Este é um parágrafo criado dinamicamente."; // Definindo o conteúdo do elemento

    document.body.appendChild(valor); // Adicionando o elemento criado ao corpo do documento

    console.log("O tipo de valor após criar um elemento é: " + typeof valor); // object
}

function contarCaracteres(){
    var texto = document.getElementById("iptTexto").value; // Obtendo o valor do input de texto
    var char = document.getElementById("iptChar").value; // Obtendo o valor do input de caractere
    
    if(char.length !== 1){
        alert("Por favor, digite apenas um caractere.");
        return;
    }

    var count = 0; // Variável para contar as ocorrências do caractere
    for (var i = 0; i < texto.length; i++){
        if(texto[i] === char){
            count++;
            console.log("Caractere '" + char + "' encontrado na posição: " + i);
        }
    }

    var spanResult = document.createElement("span");
    spanResult.style.display = "block";
    spanResult.style.marginTop = "10px";
    spanResult.textContent = "O caractere '" + char + "' aparece " + count + " vezes no texto.";
    
    var bd = document.querySelector("body");
    bd.appendChild(spanResult);

}