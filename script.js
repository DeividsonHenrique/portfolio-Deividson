// carregar mais projetos

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