// botão de ler mais sobre

let buttonLer = document.getElementById('ler-mais')

buttonLer.addEventListener('click', function(){
    let infoSobre = document.getElementById('info-sobr-ler-mais')
    infoSobre.classList.toggle('activeLer')

    if(infoSobre.classList.contains('activeLer')){
        buttonLer.textContent = 'Ler Menos'
        buttonLer.classList.add('btn-ler-vermelho')
    }else{
        buttonLer.textContent = 'Ler Mais'
        buttonLer.classList.remove('btn-ler-vermelho')  
    }
})




// botão de carregar mais projetos

let buttonCards = document.getElementById('carregar-mais')

buttonCards.addEventListener('click', function(){
    let cards = document.getElementById('cards-container')
    cards.classList.toggle('active')

    if(cards.classList.contains('active')){
        buttonCards.textContent = 'Carregar menos'
        buttonCards.classList.add('btn-vermelho')
        
    }else{
        buttonCards.textContent = 'Carregar mais'
        buttonCards.classList.remove('btn-vermelho')  
    }
    
    

})

// botão de carregar mais Habilidades

let buttonCardsHabi = document.getElementById('carregar-habilidades')

buttonCardsHabi.addEventListener('click', function(){
    let cardsH = document.getElementById('cards-habilidades')
    cardsH.classList.toggle('activeH')

    if(cardsH.classList.contains('activeH')){
        buttonCardsHabi.textContent = 'Carregar menos'
        buttonCardsHabi.classList.add('btn-vermelho')
    }else{
        buttonCardsHabi.textContent = 'Carregar mais'
        buttonCardsHabi.classList.remove('btn-vermelho')  
    }
})



// front End
function frontEnd(){
    window.open('https://www.totvs.com/blog/developers/front-end/', '_blank')
}

//Sistemas de Informação
function si(){
    window.open('https://www.educamaisbrasil.com.br/cursos-e-faculdades/sistemas-de-informacao', '_blank')
}


//efeitos scroll

const scroll = ScrollReveal ({
    distance: '20px',
    duration: 500,
    reset: true
})

scroll.reveal('header',{delay: 200, origin: 'top'})
scroll.reveal('.logo',{delay: 200, origin: 'top'})
scroll.reveal('#inicio',{delay: 200, origin: 'left'})
scroll.reveal('#sobre',{delay: 200, origin: 'right'})
scroll.reveal('.card, .descricao',{delay: 200})
scroll.reveal('.card-habilidades',{delay: 200, origin: 'left'})



// menu lateral 

let menuAberto = false

function mostrarMenu(){
    const menuLateral = document.querySelector('.menu-list')
    menuLateral.style.width = '100%'

    if (menuAberto) {
        menuLateral.style.width = '0';
        menuAberto = true;
    } else {
        menuLateral.style.width = '100%';
        menuAberto = false;
    }

    function fecharMenuX(evento){
        if(menuLateral.contains(evento.target)){
            menuLateral.style.width = '0px'

            document.removeEventListener('click', fecharMenuX)
        }
    }

    document.addEventListener('click', fecharMenuX)

}

function fecharMenuX(){
    const menuLateral = document.querySelector('.menu-list')
    menuLateral.style.width = '0%'  
}