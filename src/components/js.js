 var numeros = [1, 2, 3, 4, 5, 6];
 var total = numeros.reduce(function(total, numero){
 return total + numero;
 }, 0);
 console.log(total);