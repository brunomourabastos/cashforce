# Cashforce

## Teste Técnico Cashforce

Estruturar uma aplicação web fullstack, a partir do banco de dados disponibilizado onde o objetivo é consumir os dados de uma API criada e informar no front end, conforme protótipo abaixo:
 
 
O banco de dados dessa aplicação está dockerizado, portanto, para executá-la é necessário ter as seguintes ferramentas instaladas: <br>

<a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">Git</a><br>
<a href="https://docs.docker.com/get-docker/">Docker</a><br>
<a href="https://docs.docker.com/compose/install/">Docker-Compose</a><br>

Será necessário também que as portas 3001 (API) e 8080 (Front End) estejam disponíveis para a aplicação.
 
<details>
  <summary>
  <strong>🛠 Ferramentas:</strong>
  </summary> <br>
  
  <summary>
  <strong>Front End:</strong>
  </summary>
  <a href="https://vuejs.org/guide/introduction.html">Vue</a><br>
  <a href="https://www.javascript.com/">JavaScript</a><br>
  <a href="https://axios-http.com/ptbr/docs/intro">Axios</a><br>
  <a href="https://date-fns.org/">Date-fns</a><br>
<br>
 <summary>
 <strong>Back End:</strong>
 </summary>
 <a href="https://nodejs.org/pt-br/">Node</a><br>
 <a href="https://www.javascript.com/">JavaScript</a><br>
 <a href="https://expressjs.com/pt-br/">Express</a><br>
 <a href="https://sequelize.org/">Sequelize</a><br>
 <a href="https://github.com/sequelize/sequelize-auto">Sequelize Auto</a><br>
 <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS">Cors</a><br>
 <a href="https://www.mysql.com/">MySQL</a><br>
 <a href="https://www.npmjs.com/package/http-status-codes">HTTP Status Codes</a><br>
 <br>
 <summary>
 <strong>Teste da API:</strong>
 </summary>
 <a href="https://www.chaijs.com/">Chai</a><br>
 <a href="https://sinonjs.org/">Sinon</a><br>
 <a href="https://mochajs.org/">Mocha</a><br>
 
 </details>
 
 <details>
 <summary>
 <strong>💻Como executar a aplicação:</strong>
 </summary><br>
 1. Clone o repositório

  - Use o comando: `git clone https://github.com/tryber/sd-019-c-project-car-shop.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd cashforce`
    
 1 - clonar o repositório em uma pasta de sua preferência
 
 2 - Entre na pasta cashforce, utilizando cd cashforce e utilize o comando npm run install:all
 
 3 - Agora, utilize o comando npm run start:docker (você precisa estar com o docker aberto e funcionando)
 
 4 - Para criar e popular o banco de dados, vamos utilizar o comando npm run start:db
 
 5 - Agora, vamos subir a API npm run start:api
 
 6 - Por último, vamos subir o front. Para isso, abra um novo terminal, acesse a pasta cashforce (mesma dos passos anteriores) e utilize o código npm run start:app.
 
 Com isso, teremos a API, rodando em localhost:3001 e a exibição no front end em localhost:8080.
 
 </details>
 
Teste

Para testar a API:
 
 - Com a API em funcionamento, entre na pasta cashforce (mesma dos passos anteriores) e utilize o comando npm run test:api, a informação abaixo deve ser exibida:
 
 Rotas API:
 
 - Para esse projeto, foi necessário utilizar somente uma rota, porém a aplicação está pronta para ser escalada, caso haja necessidade:
 
 1 - Rota de Orders:
 
 Método: get
 Funcionalidade: Requisição de todas as orders cadastradas no banco de dados
 url: http://localhost:3001/orders
 
 Essa rota, inicialmente, retorna o seguinte JSON:
 
 [
    {
        "id": 1,
        "orderNfId": "1605181324132",
        "orderNumber": "18153",
        "orderPath": "",
        "orderFileName": "",
        "orderOriginalName": "",
        "emissionDate": "2020-10-30T11:00:00-03:00",
        "pdfFile": "",
        "emitedTo": "22843980000127",
        "nNf": "18153",
        "CTE": "",
        "value": "198450",
        "cnpjId": 1,
        "userId": 1,
        "buyerId": 1,
        "providerId": 1,
        "orderStatusBuyer": "0",
        "orderStatusProvider": "0",
        "deliveryReceipt": "",
        "cargoPackingList": "",
        "deliveryCtrc": "",
        "createdAt": "2020-10-30T17:54:18.000Z",
        "updatedAt": "2020-10-30T17:54:18.000Z",
        "cnpj": {
            "cnpj": "00000000000001"
        },
        "user": {
            "name": "ALLAN SOUZA"
        },
        "buyer": {
            "name": "SACADO 001"
        },
        "provider": {
            "name": "CEDENTE 002"
        }
    },
    {
        "id": 2,
        "orderNfId": "160518132413",
        "orderNumber": "18157",
        "orderPath": "",
        "orderFileName": "",
        "orderOriginalName": "",
        "emissionDate": "2020-11-04T15:32:35-02:00",
        "pdfFile": "",
        "emitedTo": "35705180000272",
        "nNf": "18157",
        "CTE": "",
        "value": "168850",
        "cnpjId": 1,
        "userId": 1,
        "buyerId": 1,
        "providerId": 1,
        "orderStatusBuyer": "0",
        "orderStatusProvider": "0",
        "deliveryReceipt": "",
        "cargoPackingList": "",
        "deliveryCtrc": "",
        "createdAt": "2020-11-10T18:33:46.000Z",
        "updatedAt": "2020-11-10T18:33:46.000Z",
        "cnpj": {
            "cnpj": "00000000000001"
        },
        "user": {
            "name": "ALLAN SOUZA"
        },
        "buyer": {
            "name": "SACADO 001"
        },
        "provider": {
            "name": "CEDENTE 002"
        }
    },
    {
        "id": 3,
        "orderNfId": "1605181324130",
        "orderNumber": "18184",
        "orderPath": "",
        "orderFileName": "",
        "orderOriginalName": "",
        "emissionDate": "2020-11-10",
        "pdfFile": "",
        "emitedTo": "00418477002640",
        "nNf": "18184",
        "CTE": "",
        "value": "222795",
        "cnpjId": 1,
        "userId": 1,
        "buyerId": 1,
        "providerId": 1,
        "orderStatusBuyer": "7",
        "orderStatusProvider": "3",
        "deliveryReceipt": "",
        "cargoPackingList": "",
        "deliveryCtrc": "",
        "createdAt": "2020-11-12T11:42:06.000Z",
        "updatedAt": "2020-11-18T12:22:14.000Z",
        "cnpj": {
            "cnpj": "00000000000001"
        },
        "user": {
            "name": "ALLAN SOUZA"
        },
        "buyer": {
            "name": "SACADO 001"
        },
        "provider": {
            "name": "CEDENTE 002"
        }
    }
]
 
Front End:

Para ter acesso ao front end da aplicação, acesse o endereço: http://localhost:8080/ 

A página inicial mostrará já a aplicação em funcionamento, informando os dados, conforme protótipo.

A aplicação deve estar parecida com a imagem abaixo:

 
