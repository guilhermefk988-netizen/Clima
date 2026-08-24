
/*
const numeros = [1 , 2, 3, 4, 5]

const dobro = numeros.map( (numero, index, arrayCompleto) => {
    console.log(numero)
    return(numero * 4)
})



*/
const produtos = [
    { nome: "Arroz", preco: 28.90, categoria: "Alimentos", estoque: 20 },
    { nome: "Feijão", preco: 8.50, categoria: "Alimentos", estoque: 35 },
    { nome: "Leite", preco: 5.99, categoria: "Laticínios", estoque: 50 },
    { nome: "Refrigerante", preco: 9.90, categoria: "Bebidas", estoque: 18 },
    { nome: "Sabão em pó", preco: 22.90, categoria: "Limpeza", estoque: 12 }
];

const produtoss = produtos.map(produto => {

    return {
        nome: produto.nome,
        preco: produto.preco,
        categoria: produto.categoria,
        estoque: produto.estoque
    }
})



console.log(produtoss)



const aleatorioNumeros = [1, 2, 3, 4, 5]

const soma = aleatorioNumeros.reduce((acumulador, atual) => {
    const total = acumulador + atual

    return total


}, 10)

console.log(soma)

const valorProdutos = produtos.reduce((acumulador, produto) => {

    return acumulador + (produto.preco * produto.estoque)
}, 0)



const funcionarios = [
    { nome: "João", cargo: "Gerente", salario: 5500 },
    { nome: "Maria", cargo: "Caixa", salario: 2500 },
    { nome: "Carlos", cargo: "Repositor", salario: 2100 },
    { nome: "Ana", cargo: "Faxineira", salario: 1900 },
    { nome: "Pedro", cargo: "Estoquista", salario: 2400 }
];

const trabalhadores = funcionarios.reduce((acumulador, salarios) => {

    return acumulador + "_" + salarios.salario + "_" + salarios.nome
}, 0)


const produtosMercado = [
    { nome: "Arroz", preco: 28.90, estoque: 20, disponivel: true },
    { nome: "Feijão", preco: 8.50, estoque: 0, disponivel: false },
    { nome: "Leite", preco: 5.99, estoque: 15, disponivel: true },
    { nome: "Refrigerante", preco: 9.90, estoque: 8, disponivel: true },
    { nome: "Sabão em pó", preco: 22.90, estoque: 0, disponivel: false }
];

const mercado = produtosMercado.reduce((acumulador, produtosDoMercado) => {
    return acumulador + produtosDoMercado.preco
}, 0)
const Mercadao = produtosMercado.map((nomes) => {
    return {
        nome: nomes.nome,
        preco: nomes.preco,
        estoque: nomes.estoque,
        disponivel: nomes.disponivel ? "disponivel" : "Não disponivel",
    }
})
const valorMercado = produtosMercado.reduce((acumulador, valor) => {

    return acumulador + (valor.preco * valor.estoque)
}, 0)
const pe = document.getElementById("pd").innerHTML = "R$" + JSON.stringify(Mercadao)

const pes = document.getElementById("pd2").innerHTML = "R$" + JSON.stringify(valorMercado)

/** 
function somas(){

const preco = document.querySelector(".converter")

const valores = preco.reduce((acumulador, precos)=>{

return acumulador + (precos.preco * 5)
},0)
const atribuido = document.querySelector(".converter").innerHTML = JSON.stringify(valores)

const converter = document.querySelector(".converter").value

const valorers = converter * 5.08

const aparecer = document.querySelector(".preco").innerHTML = "R$" + JSON.stringify(valorers)

}*/

let um = 1

function somas() {



    const convesao = document.querySelector(".converter").value


    const valoresinhos = convesao.split(",").map(mapa => {

        return Number(mapa) * 5
    }
    )
    const aparecer = document.querySelector(".preco").innerHTML = "R$" + valoresinhos.join(",")

}
let valozinhoss = [19]
function Adicioar() {
    const somidius = um++

    const valoresi = valozinhoss.map(mapas => {

        return mapas + 19 <= 380 ? mapas + 19 : 380
    })
    valozinhoss = valoresi
    document.querySelector(".produtoValor").innerHTML = valozinhoss.join("");
    const quantidade = document.querySelector(".quantidade").innerHTML = somidius + 1 <= 20 ? somidius + 1 : somidiuss + 1
}

function menus() {
    const somidius = um--
    const valoresi = valozinhoss.map(mapas => {

        return mapas - 19 < 19 ? 0 : mapas - 19;
    })
    valozinhoss = valoresi
    document.querySelector(".produtoValor").innerHTML = valozinhoss.join("");
    const quantidade = document.querySelector(".quantidade").innerHTML = somidius - 1 <= 0 ? somidius - 1 : somidius - 1
}
const celulares = [
    { nome: "Galaxy S25", preco: 5499.90, memoria: "256 GB", ram: "12 GB", disponivel: true },
    { nome: "iPhone 16", preco: 6299.90, memoria: "128 GB", ram: "8 GB", disponivel: true },
    { nome: "Red Magic 10", preco: 4999.90, memoria: "512 GB", ram: "16 GB", disponivel: true },
    { nome: "Moto Edge 50", preco: 2999.90, memoria: "256 GB", ram: "12 GB", disponivel: false },
    { nome: "Poco X7 Pro", preco: 2499.90, memoria: "512 GB", ram: "12 GB", disponivel: true },
    { nome: "Xiaomi 14T", preco: 3299.90, memoria: "256 GB", ram: "12 GB", disponivel: false }
];

const celular = celulares.map(celula => {

    return `
        <div class="card">
         <h2>nome: ${celula.nome}</h2>
         <p>preco: ${celula.preco}</p>
         <p>memoria: ${celula.memoria}</p>
         <p>ram: ${celula.ram}</p>
         <p>disponivel: ${celula.disponivel ? "disponivel" : "não disponivel"}</p>
        </div>
    `;
});

document.querySelector(".celulares").innerHTML = celular.join("")


const variaveis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = variaveis.filter(variaveis => {
    return variaveis % 2 === 0
})
document.querySelector(".pps").innerHTML = pares.join("")

function verificar() {
    const idade = document.querySelector(".menor").value
    const menorzinho = [idade]

    const ver = menorzinho.filter(menorzinho => {
        return menorzinho >= 18
    })
    document.querySelector(".menorP").innerHTML = ver.join("")
}

const palavras = ["casa", "computador", "sol", "banana", "carro", "programação"];

const cinco = palavras.filter(palavras => {
    return palavras.length <= 5
})
document.querySelector(".filtro").innerHTML = cinco.join("")


const MaiorNumero = [2, 4, 81, 152, 3, 7, 9, 22]

const maior = MaiorNumero.filter((MaiorNumero, numero) => {
    return numero > MaiorNumero ? numero : MaiorNumero
}, 0)

document.querySelector(".maiorNumero").innerHTML = maior.join("")