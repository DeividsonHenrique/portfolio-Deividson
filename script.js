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



// front End
function frontEnd(){
    window.open('https://www.totvs.com/blog/developers/front-end/', '_blank')
}

//Sistemas de Informação
function si(){
    window.open('https://www.educamaisbrasil.com.br/cursos-e-faculdades/sistemas-de-informacao', '_blank')
}


const scroll = ScrollReveal ({
    distance: '50px',
    duration: 1000,
    reset: true
})

scroll.reveal('header',{delay: 200, origin: 'top'})
scroll.reveal('.logo',{delay: 200, origin: 'left'})
scroll.reveal('#inicio',{delay: 200, origin: 'left'})
scroll.reveal('#sobre',{delay: 200, origin: 'right'})
scroll.reveal('#projetos',{delay: 200, origin: 'left'})
scroll.reveal('.card-habilidades',{delay: 400, origin: 'bottom'})
scroll.reveal('.card',{delay: 400, origin: 'right'})
scroll.reveal('#contatos',{delay: 200});


// menu lateral 

let menuAberto = false

function mostrarMenu(){
    const menuLateral = document.querySelector('.menu-list')
    if (menuAberto) {
        menuLateral.style.width = '0';
        menuAberto = false;
    } else {
        menuLateral.style.width = '300px';
        menuAberto = true;
    }

    function fecharMenu(evento){
        if(menuLateral.contains(evento.target)){
            menuLateral.style.width = '0px'

            document.removeEventListener('click', fecharMenu)
        }
    }

    document.addEventListener('click', fecharMenu)

}








