let listaDeAmigos = [];

function exibirMensagem(tag, mensagem) {
    document.querySelector(tag).innerHTML = mensagem;
}

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Obtém o valor sem espaços extras
    
    if (nome === "") {
        alert("Digite um nome válido!"); // Impede entrada vazia
        return;
    }
    
    if (listaDeAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!"); // Evita nomes repetidos
        return;
    }
    
    listaDeAmigos.push(nome); // Adiciona à lista
    atualizarLista(); // Atualiza a exibição dos nomes
    input.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaDeAmigos.forEach(amigo => {
        let item = document.createElement("li"); // Cria um item de lista
        item.textContent = amigo; // Define o texto do item
        lista.appendChild(item); // Adiciona à lista na interface
    });
}

// Função para sortear os pares de amigos
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }
    
    let sorteio = [...listaDeAmigos];
    let resultado = [];
    let tentativa = 0;
    
    do {
        tentativa++;
        sorteio = [...listaDeAmigos];
        resultado = [];
        let embaralhado = [...sorteio].sort(() => Math.random() - 0.5); // Embaralha os nomes
        
        for (let i = 0; i < listaDeAmigos.length; i++) {
            if (listaDeAmigos[i] === embaralhado[i]) {
                break; // Se alguém tirar a si mesmo, refazemos o sorteio
            }
            resultado.push(`${listaDeAmigos[i]} → ${embaralhado[i]}`);
        }
    } while (resultado.length !== listaDeAmigos.length && tentativa < 100);
    
    if (resultado.length === listaDeAmigos.length) {
        exibirResultado(resultado);
    } else {
        alert("Não foi possível realizar o sorteio, tente novamente.");
    }
}

// Função para exibir o resultado na interface
function exibirResultado(listaResultado) {
    let lista = document.getElementById("resultado");
    lista.innerHTML = ""; // Limpa a exibição anterior
    listaResultado.forEach(par => {
        let item = document.createElement("li");
        item.textContent = par;
        lista.appendChild(item);
    });
}
