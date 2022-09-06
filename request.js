const soap = require('soap');
const url = 'http://localhost:8000/wsdl?wsdl';
const args = { arg1: 10, arg2: 5 };

// Somar
soap.createClient(url, function (err, client) {
  client.MySumFunction(args, function (err, result) {
    console.log(result);
  });
});

// Subtrair
soap.createClient(url, function (err, client) {
  client.MySubtractFunction(args, function (err, result) {
    console.log(result);
  });
});

// Multiplicar
soap.createClient(url, function (err, client) {
  client.MyMultiplyFunction(args, function (err, result) {
    console.log(result);
  });
});

// Dividir
soap.createClient(url, function (err, client) {
  client.MyDivideFunction(args, function (err, result) {
    console.log(result);
  });
});