const cartao1 ={
  nome: 'Gabriel Santos',
  saldo: 10000000,
}

//Os tipos referência: Object e array, por exemplo funcionam tal como um ponteiro em C, na linha abaixo "cartao2" 
//está recebendo o endereço(&) do "cartão1", então ao atribuir um valor novo (-2000000) ao "cartao2" está alterando tbm o "cartao1"
const cartao2 = cartao1

console.log(cartao1) 
console.log(cartao2)

cartao2.saldo -= 2000000

console.log(cartao1)
console.log(cartao2)

//OBS: variaveis constantes podem ter seu valor alterado, o que é constante é o seu ENDEREÇO
