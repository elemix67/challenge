
let listaDeNomes = [];
limparCampo();

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Adicionar amigo
function adicionarAmigo() {
    //Pegar o conteúdo do campo 'input', colocar em maiúscula para adicionar na lista de nomes
    let nome = document.querySelector('input').value.toUpperCase();
    //Verificar se o nome adicionado já existe na lista de nomes e exibir mensagem na tela caso esteja
    if (listaDeNomes.includes(nome)) {
        exibirTextoNaTela('h2', 'Nome já existe. Favor digitar outro nome.');
        limparCampo();
    } else {
        //Adicionar o nome na lista de nomes
        listaDeNomes.push(nome);
        //Remover último valor caso seja vazio
        if (listaDeNomes[listaDeNomes.length -1] == '') {
            listaDeNomes.pop();
        }
        //Chamar a função para adicionar e exibir a lista de nomes na tela
        exibirLista();
    }
}

// Função para criar e exibir a lista
function exibirLista() {
    //Verificar se o campo 'input' está vazio e exibir mensagem caso esteja
    let nome = document.querySelector('input');
    if (nome.value == '' ) {
        exibirTextoNaTela('h2', 'Nome em branco. Favor digitar um nome.');
    } else {
        //Pegar o ID do campo de lista para incrementá-la
        let listaDeAmigos = document.getElementById('listaAmigos');
        //Criar ítem da lista
        itemLista = document.createElement("li");
        //Pegar o último ítem adicionado na lista de nomes para adicionar à lista
        itemLista.textContent = listaDeNomes[listaDeNomes.length -1];
        listaDeAmigos.appendChild(itemLista);
    }
    limparCampo();   
}

//Limpar o campo de entrada ( input )
function limparCampo () {
    nome = document.querySelector('input');
    nome.value = '';
}

//Sortear amigo
function sortearAmigo() {
    // Informar que todos os nomes já sorteados ao final da lista
    if (listaDeNomes.length == 0) {
        let listaDeNomesVazia = document.getElementById('resultado');
        listaDeNomesVazia.innerHTML = 'Todos já foram sorteados!';
        document.getElementById('listaAmigos').textContent = '';
        listaDeNomes = [];
    } else {
        //Calcular um número randômico para usar como índice 
        let sorteio = Math.floor(Math.random() * listaDeNomes.length);
        //Deletar um índice a partir do índice calculado anteriormente e retorna o valor deste índice
        let amigoSorteado = listaDeNomes.splice(sorteio, 1)[0];
        let nomeSorteado = document.getElementById('resultado');
        nomeSorteado.innerHTML = amigoSorteado;
    }
}

// Limpar o resultado para a próxima escolha
function limparResultado() {
    document.getElementById('resultado').textContent = '';
}