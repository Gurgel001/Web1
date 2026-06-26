// Item 3 - Seleção dos elementos do DOM
const txtEquipes = document.getElementById("equipes");
const btnGerar = document.getElementById("btnGerar");
const btnConfirmar = document.getElementById("btnConfirmar");
const jogos = document.getElementById("jogos");
const faseAtual = document.getElementById("faseAtual");
const campeao = document.getElementById("campeao");

// Item 5 - Variáveis
let equipes = [];
let classificados = [];
let numeroDaFase = 1;

// Item 7 - Evento
btnGerar.addEventListener("click", gerarChaveamento);

// Item 8 - Embaralhar equipes
function embaralhar(lista){

    for(let i = lista.length - 1; i > 0; i--){

        let j = Math.floor(Math.random() * (i + 1));

        let aux = lista[i];
        lista[i] = lista[j];
        lista[j] = aux;
    }

}

// Item 5 - Gerar chaveamento
function gerarChaveamento(){

    campeao.innerHTML = "";
    jogos.innerHTML = "";
    classificados = [];
    numeroDaFase = 1;

    equipes = txtEquipes.value.split(",");

    for(let i = 0; i < equipes.length; i++){

        equipes[i] = equipes[i].trim();

    }

    equipes = equipes.filter(function(time){

        return time != "";

    });

    if(equipes.length < 2){

        alert("Digite pelo menos duas equipes.");
        return;

    }

    if(equipes.length > 12){

        alert("O máximo é 12 equipes.");
        return;

    }

    // Verifica equipes repetidas
    for(let i = 0; i < equipes.length; i++){

        for(let j = i + 1; j < equipes.length; j++){

            if(equipes[i].toLowerCase() == equipes[j].toLowerCase()){

                alert("Existem equipes repetidas.");
                return;

            }

        }

    }

    embaralhar(equipes);

    criarJogos(equipes);

}

// Item 6 - Criar os confrontos
function criarJogos(lista){

    jogos.innerHTML = "";

    faseAtual.innerHTML = "Fase " + numeroDaFase;

    // Se restar apenas uma equipe, temos um campeão
    if(lista.length == 1){

        faseAtual.innerHTML = "Fim do Campeonato";

        campeao.innerHTML = "🏆 CAMPEÃO: " + lista[0];

        btnConfirmar.disabled = true;

        return;

    }

    classificados = [];

    for(let i = 0; i < lista.length; i += 2){

        // Se houver equipe sem adversário, avança automaticamente
        if(i + 1 >= lista.length){

            classificados.push(lista[i]);
            continue;
        }

        let divJogo = document.createElement("div");
        divJogo.setAttribute("class", "jogo");

        let time1 = document.createElement("span");
        time1.setAttribute("class", "time");
        time1.innerHTML = lista[i];

        let placar1 = document.createElement("input");
        placar1.setAttribute("type", "number");
        placar1.setAttribute("min", "0");

        let x = document.createElement("span");
        x.innerHTML = " X ";

        let placar2 = document.createElement("input");
        placar2.setAttribute("type", "number");
        placar2.setAttribute("min", "0");

        let time2 = document.createElement("span");
        time2.setAttribute("class", "time");
        time2.innerHTML = lista[i + 1];

        divJogo.appendChild(time1);
        divJogo.appendChild(placar1);
        divJogo.appendChild(x);
        divJogo.appendChild(placar2);
        divJogo.appendChild(time2);

        jogos.appendChild(divJogo);
    }

    btnConfirmar.disabled = false;

    // Item 7 - Evento
    btnConfirmar.onclick = function(){

        let partidas = document.querySelectorAll(".jogo");

        classificados = [];

        // Caso tenha equipe sobrando
        if(lista.length % 2 != 0){

            classificados.push(lista[lista.length - 1]);

        }

        for(let i = 0; i < partidas.length; i++){

            let spans = partidas[i].querySelectorAll(".time");
            let inputs = partidas[i].querySelectorAll("input");

            let pontos1 = parseInt(inputs[0].value);
            let pontos2 = parseInt(inputs[1].value);

            if(isNaN(pontos1) || isNaN(pontos2)){

                alert("Preencha todos os placares.");
                return;

            }

            if(pontos1 == pontos2){

                alert("Não pode haver empate.");
                return;

            }

            if(pontos1 > pontos2){

                classificados.push(spans[0].innerHTML);

            }else{

                classificados.push(spans[1].innerHTML);

            }

        }

        numeroDaFase++;

        criarJogos(classificados);

    };

}