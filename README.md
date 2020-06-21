# CopaFilmesAngular

Projeto gerardo pelo [Angular CLI](https://github.com/angular/angular-cli) versão 9.1.8.

## Executar em desenvolvimento

Antes de executar o projeto executar o comando "npm install" no diretorio do projeto.
Para iniciar o servidor dev execute o comando `ng serve`. O site será iniciado no endereço `http://localhost:4200/`. O projeto consome os metódos da API versionado no repositório de backend e está configurado para iniciar no endereço `http://localhost:5050/`

## Build

Executar o comando `ng build` para gerar o build. Os arqivos estaram no diretório `dist/`. O parametro `--prod` gerar o pacote para produção. As variavéis de produção estão no arquivo environment.prod.ts no diretório environments.

## Deployment

O processo de deployment é disparado de forma automática quando ocorre o comando push na branch master. A ferramenta utilizada na automação foi o heroku. O endereço de produção é 'https://copa-filmes-angular.herokuapp.com/'
