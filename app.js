const http = require('http');
const soap = require('soap');

const myService = {
  MyService: {
    MyPort: {
      MySumFunction: function ({arg1, arg2}) {
        return {
          result: +arg1 + +arg2
        };
      },
      MySubtractFunction: function ({arg1, arg2}) {
        return {
          result: +arg1 - +arg2
        };
      },
      MyMultiplyFunction: function ({arg1, arg2}) {
        return {
          result: +arg1 * +arg2
        };
      },
      MyDivideFunction: function ({arg1, arg2}) {
        return {
          result: +arg1 / +arg2
        };
      },
    }
  }
};

// Carregar wsdl
const xml = require('fs').readFileSync('./operation-service.wsdl', 'utf8');

// Servidor HTTP
const server = http.createServer(function (request, response) {
  response.end('404: Not Found: ' + request.url);
});
server.listen(8000);

// Designar serviço ao servidor
soap.listen(server, '/wsdl', myService, xml, function () {
  console.log('server initialized...');
});