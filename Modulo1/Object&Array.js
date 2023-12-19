//Codigo para mostras a flexibilidade do JS

let musica = {
  nome: 'One',
  artista : 'Metálica',
  album: 'And Justice for all'
}

let listaBandas = ['Metalica', 'Pink Floyd', 'Led zeppelin ', 'Sepultura']

console.log(listaBandas[3])

listaBandas[4] = 'Paramore'
listaBandas[2] = 'Breaking Bjm'

console.log(listaBandas[2])
console.log(listaBandas[4]) 
//A lista possui 4 elementos originalmente(indice3) 
//porém o JS aceita a introdução de novos elementos e subistiuição direta. 
//Tanto em array quantos nos objetos

musica.album = 'Kill them all'
musica.ano = 1983 //criação de uma nova propiedade do objeto fora da sua declaração

console.log(musica)


