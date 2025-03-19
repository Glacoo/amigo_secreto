
let listaDeAmigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();
    
    // Validação do campo
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }
    
    // Adiciona o nome à lista
    listaDeAmigos.push(nome);
    
    // Limpa o campo de entrada
    inputAmigo.value = '';
    
    // Atualiza a lista visual
    atualizarListaVisual();
    
    // Limpa o resultado anterior
    document.getElementById('resultado').innerHTML = '';
}

// Função para atualizar a lista visual
function atualizarListaVisual() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';
    
    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Função para sortear amigo
function sortearAmigo() {
    // Verifica se há amigos suficientes na lista
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }
    
    // Seleciona um amigo aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Exibe o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O amigo sorteado foi: ${amigoSorteado}!`;
}
