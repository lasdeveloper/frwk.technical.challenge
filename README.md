# Framework Technical Challenge

## **Instalação/Configuração**

**Clone o diretório:** git clone git@github.com:lasdeveloper/frwk.technical.challenge.git

**Entre no diretório do projeto:** cd frwk.technical.challenge

**Instale as dependências:** npm install


## **CASO 01: Executar a aplicação via console**

**Execute o comando:** npm run start:console

Será exibido o prompt solicitando um número de entrada e retornando como resultado os divisores e primos desse número, ou mensagem de erro.


## **CASO 02: Executar a aplicação via api**

**Execute o comando:** npm run start:api

O servidor rodará em http://localhost:3000 

Para testar a api basta enviar um requisição para http://localhost:3000/numbers 

Observações: 
1. o request.body deve conter um objeto do tipo { numbers: Array< number > }
2. a api aceita mais de um número de entrada, mas limita a 3 números por requisição
3. exemplo de request.body: { numbers: [45, 31, 100] } (pode ser testado via Postman ou outra ferramenta semelhante)

## **Testes**

**Para rodar os testes execute o comando:** npm run test
