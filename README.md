>>># Jogo do Amigo Secreto

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)

## Índice 
* [Título e Imagem de capa](#Título-e-Imagem-de-capa)
* [Badges](#badges)
* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Status do Projeto](#status-do-Projeto)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Conclusão](#conclusão)


## Descrição do Projeto

O Jogo do Amigo Secreto é um projeto apresentado como desafio ( Challenge ) do curso Oracle One/Alura. Trata-se de uma página HTML/CSS onde devemos elaborar um programa em JavaScript para a inclusão e sorteio de nomes para amigo secreto. Não pode haver nomes duplicados nem nomes em branco. O programa deve apresentar mensagem informativas aos usuários com relação a inclusão de nomes ( como uma lista na tela ), inclusão de nomes repetidos ( alertando que o nome já existe ) e inclusão de valores em branco 9 informando que não pode haver nomes em branco ). Ao final do sorteio apresenta uma mensagem de término de nomes.


## :hammer:Funcionalidades do projeto
 
- `Funcionalidade 1`: O projeto contém um campo para inserção de nomes para o sorteio dos amigos secretos. Neste campo necessitamos implementar uma funcionalidade para incrementar os nomes e adicioná-los em uma lista para apresentação na tela:

<img width="1251" height="592" alt="image" src="https://github.com/user-attachments/assets/2f8f6438-e70d-4478-a869-d8446891185a" />


- `Funcionalidade 2`: Assim que inserimos o nome, pegamos o nome com o método Selector ao pressionar o botão "Adicionar" e transformamos em maiúsculas com a função toUpperCase() para, posteriormente verificarmos se o nome já consta na lista. Caso o nome já exista, aparece uma mensagem informando que o nome já existe. Caso contrário adiciona o nome na lista e apresenta na tela:

<img width="905" height="392" alt="image" src="https://github.com/user-attachments/assets/941fd7b1-38c0-4af5-ab29-216d99521a02" />
<img width="929" height="411" alt="image" src="https://github.com/user-attachments/assets/fea6c063-c112-4271-b5ce-54e09aab46c5" />



- `Funcionalidade 3`: Caso o valor entrado seja em branco, o código também informa que a entrada está vazia. Quando é válidado um nome, ele entra na lista apresentada na tela:

<img width="929" height="411" alt="image" src="https://github.com/user-attachments/assets/1688f6c3-ba9c-4b16-998e-61c6bafa3011" />
<img width="929" height="411" alt="image" src="https://github.com/user-attachments/assets/0ac338db-44a3-4786-bf25-1478fa8295ea" />


- `Funcionalidade 4`: Com os nomes já validados e mostrados na tela, iniciamos o sorteio clicando no botão "Sortear amigo", onde, através da função sortearAmigo() é efetuado um cálculo de número randômico através do método Math.random() e MAth.floor() ( para arredondarmos pra baixo o valor ranômico ). Usamos este valor, junto com o comprimento da lista de nomes para definirmos o índice do valor que será escolhido para amigo secreto. 

<img width="751" height="544" alt="image" src="https://github.com/user-attachments/assets/f12d6d0b-a36c-4a6b-b353-b0763665f316" />
<img width="926" height="356" alt="image" src="https://github.com/user-attachments/assets/72760b91-6147-445e-8a79-e9a81a6602dc" />


- `Funcionalidade 4a`: Também é verificado se não existem mais valores (nomes) a serem sorteados. Caso não exista, é exibida uma mensagem informado que não existem mais nomes a serem sorteados:

<img width="593" height="194" alt="image" src="https://github.com/user-attachments/assets/0f9e4365-e350-4bd1-b0d8-b0cb8bbc9efe" />
<img width="632" height="191" alt="image" src="https://github.com/user-attachments/assets/58437e88-aaf3-4f33-bce6-ca5d4fe5c960" />


- `Funcionalidade 3`: Adicionada uma funcionalidade para apagar o nome selecionado para que a próxima pessoa que for sortear o nome, não veja o nome sorteado pela pessoa anterior.

<img width="442" height="99" alt="image" src="https://github.com/user-attachments/assets/0e625129-f4cc-4f5a-8cf6-03ab0f0fdfb9" />
<img width="549" height="94" alt="image" src="https://github.com/user-attachments/assets/ffaba954-14e8-41a4-9339-354f17808657" />



## Conclusão

O projeto foi desenvolvido a partir de uma página já elaborada pelos organizadores do curso Oracle One/Alura - Formação Lógica de Programação. Através do desenvolvimento do desafio proposto pudemos colocar em prática o conhecimento adquirido nos módulos do curso bem como aprimorar o conhecimento com pesquisas para adicionarmos funcionalidades extras.
