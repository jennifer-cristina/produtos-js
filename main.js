'use strict'

const db = [
    {
        id: 1, 
        nome: 'Microfone Kingston', 
        descricao: "Microfone Kingston HyperX QuadCast USB", 
        avaliacao: 5,  
        preco: 999.99, 
        parcelamento: 'ou 10x de 99.99 sem juros',
        imagem: './img/microfone_kingston_hyperx_quadcast.png'
    },
    {
        id: 2, 
        nome: 'Monitor AOC', 
        descricao: "Monitor Gamer Curvo 240Hz Full HD 27” AOC", 
        avaliacao: 3,  
        preco: 2500, 
        parcelamento: 'ou 10x de 250 sem juros',
        imagem: './img/monitor_gamer_curvo.png'
    },
    {
        id: 3, 
        nome: 'Mouse Logitech', 
        descricao: "Mouse Sem Fio M170 Nano LOGITECH Prata", 
        avaliacao: 2,  
        preco: 350, 
        parcelamento: 'ou 10x de 35 sem juros',
        imagem: './img/mouse.png'
    },
    {
        id: 4, 
        nome: 'Mousepad zone', 
        descricao: "Mousepad Gamer Nano ZONE Preto", 
        avaliacao: 2,  
        preco: 150, 
        parcelamento: 'ou 10x de 35 sem juros',
        imagem: './img/mousepad-gamer.png'
    },
    {
        id: 5, 
        nome: 'Teclado Logitech', 
        descricao: "Teclado com Fio M170 Nano LOGITECH Preto", 
        avaliacao: 4,  
        preco: 550, 
        parcelamento: 'ou 10x de 35 sem juros',
        imagem: './img/teclado-gamer-standard.png'
    },
]

const definirAvaliacao = (qtdCheias) => {
    
    const  qtdeVazias = 5 - qtdCheias

    return "&starf;".repeat(qtdCheias) + "&star;".repeat(qtdeVazias)

}

const criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <div class="card-image-container">
        <img src="${produto.imagem}" alt="mouse" class="card-image"> 
    </div>
    <span class="card-descricao"> 
        ${produto.descricao}
    </span>
    <span class="card-avaliacao">
        ${definirAvaliacao(produto.avaliacao)}
    </span>
    <span class="card-preco">
        ${produto.preco}
    </span>
    <span class="card-parcelamento">
        ${produto.parcelamento}
    </span>`


    return card
}

const carregarProdutos = (produtos) => {
    const container = document.querySelector('.card-container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)

}


carregarProdutos(db)