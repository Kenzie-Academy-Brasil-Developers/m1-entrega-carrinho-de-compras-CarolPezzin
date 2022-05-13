//está é minha base de dados, meu array com as informações que serão exibidas no meu HTML.
const products = [{
    nome: "banana",
    preco: 3.99
}, {
    nome: "abacate",
    preco: 8.99
}, {
    nome: "morango",
    preco: 9.99
}]

//a função carrinho é criada para gerar os elementos de forma dinamica que irão se repetir
//no caso, irão se repetir os cards que contem os produtos e preços.
function carrinhoDeCompras(produtos) {

    //crio os elementos dinamicos
    const tagItens = document.createElement("li")
    const tagNome = document.createElement("p")
    const tagPreco = document.createElement("p")


    //acrescento nos elementos criados as info que serão exibidas
    tagNome.textContent = produtos.nome
    tagPreco.textContent = produtos.preco


    //informo quais são os filhos
    tagItens.appendChild(tagNome)
    tagItens.appendChild(tagPreco)

    //seleciono a opção que receberá o conteúdo dinamico e informo quais são seus filhos
    const lista = document.querySelector(".lista")
    lista.appendChild(tagItens)



}
let total = 0
    //for vai exibir no html tantas vezes igual ao comprimento do array products.
for (let i = 0; i < products.length; i++) {

    //chama a função carrinhoDeCompras e exibibe as opções dentro dela, no html.
    carrinhoDeCompras(products[i])
    total += products[i].preco

}

const tagContador = document.createElement("div")
const tagButton = document.createElement("button")
tagContador.textContent = total
tagButton.innerText = "Finalizar"
const final = document.querySelector(".final")
final.appendChild(tagButton)
final.appendChild(tagContador)