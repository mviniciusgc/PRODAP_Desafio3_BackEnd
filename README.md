 Passo a Passo para execução do projeto.

1) Clone o projeto do gitHub em uma pasta em seu computador.
2) Execute o comando "yarn" para instalar as dependências.
3) Este projeto pode ser testado de duas formas utilizando os testes já criados ou utilizando um programa que faça requisições http como exemplo insomnia, postman etc.
    a) Para executar os testes basta executar o comando "yarn test" os testes serão executados.
    b) Para executar o projeto com um programa de requisições http execute o comando no terminal do visual studio code "yarn dev:server" para iniciar o servidor, segue abaixo as rotas disponíveis.

    Rotas

1)http://localhost:3333/ordenar
    
    a) Essa rota recebe como parâmetro um json com os seguintes campos "numeros" é uma Array<number>.