fetch("https://fakestoreapi.com/products", {

})
    .then(resposta => {
        if (resposta.ok) {
            return resposta.json()

        } else {
            console.log("Deu errado")
        }
    })
    .then((json) => console.log(json))
    .catch((erro) => console.log(erro))



fetch("https://fakestoreapi.com/products", {})
    .then(sucesso => {
        if (!sucesso.ok) { throw new Error("Erro na requisição:" + sucesso.status) }
        return sucesso.json()
    }
    )
    .then(dado => {
        const dadosProduto = dado

        const cards = document.querySelector(".sessao2")

        dadosProduto.forEach(dados => {
            cards.innerHTML += `
        <div class="card">
            <img src="${dados.image}">
            <h2>${dados.title}</h2>
            <p>${dados.description}</p>
            <strong>R$ ${dados.price}</strong>

        </div>
            `
        })
    })
    .catch(erro => console.log(erro.message))

fetch("https://dummyjson.com/products")
    .then(sucessos => {
        if (!sucessos.ok) {
            throw new Error("Erro de requisição" + sucessos.status)
        }
        return sucessos.json()
    })
    .then(dados => {

        const produto = dados.products

        const cards = document.querySelector(".sessao")

        produto.forEach(produtos => {
            cards.innerHTML += `
        <div class="card">
        <img src="${produtos.thumbnail}">
          <h2>${produtos.title}</h2>
                <p>${produtos.description}</p>
       <strong>R$ ${produtos.price}</strong>
</div>
        `
        })
    })
    .catch(Erros => console.log(Erros))


fetch("https://dummyjson.com/products")
    .then(sucinhos => {
        if (!sucinhos.ok) { throw new Error("ERRO de requisição" + sucinhos.status) }
        return sucinhos.json()
    })
    .then(dadosRequisao => {

        const produtos = dadosRequisao.products

        const cards = document.querySelector("#cards")

        produtos.forEach(produto => {

            cards.innerHTML += `
            <div class="card">
                <img src="${produto.thumbnail}">
                <h2>${produto.title}</h2>
                <p>${produto.description}</p>
                <strong>R$ ${produto.price}</strong>
            </div>
        `

        })
    })

    .catch(ERROS => console.log(ERROS))


fetch("https://dummyjson.com/products")
    .then(mansagemSucesso => {
        if (!mansagemSucesso.ok) { throw new Error + mansagemSucesso.status }
        return mansagemSucesso.json()
    })
    .then(dadosTela => {
        const dadosProduto = dadosTela.products

        const cards = document.querySelector(".outrasessao")

        dadosProduto.forEach(dadoDOproduto => {
            cards.innerHTML += `
            <div class="card">
<img src="${dadoDOproduto.thumbnail}">
<h2>"${dadoDOproduto.title}"</h2>
<p>"${dadoDOproduto.description}"</p>
<strong>"${dadoDOproduto.price}"</strong>
            </div>
`
        })
    })
    .catch(ERRADOS => console.log(ERRADOS))