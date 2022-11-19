# Test

Teste prático automatizado em uma aplicação simples de cadastro de motorista.

## Pre-requirements

É necessário ter Node.js e npm instalados para executar este projeto

> Usei as versões `v16.15.1` e `8.13.2` de Node.js e npm, respectivamente. Sugiro que você use as versões iguais ou posteriores.

## Installation

Execute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

## Tests

> **Note:** Antes de executar os testes, faça uma cópia do arquivo `cypress.env.example.json` como `cypress.env.json`, que no mundo real, você atualizaria com credenciais válidas.
>
> O arquivo `cypress.env.json` está incluído em [`.gitignore`](./.gitignore) e você está seguro de que informações confidenciais não serão controladas

Execute `npm test` (ou `npm t` para a versão curta) para executar o teste no modo headless.

Ou execute `npm run cy:open` para abrir o Cypress no modo interativo.

## Dev

Este projeto foi criado por 💚 Emerson Martins.