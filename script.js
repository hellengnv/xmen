function pegarCards(){

let cards = document.querySelectorAll('.card') 

cards.forEach(card => { 

    card.addEventListener('click', (clickDoMouse) => { 


        if(clickDoMouse.target.id == 'cardCiclope'){ 

            mudarNomePersonagem('CICLOPE') 
            mudarImagem('img/ciclope.png') 
            mudarInfo('Ciclope é um mutante, possuindo o poder de projetar pura energia de seus olhos de cor vermelho-rubi.') 

        }

        else if(clickDoMouse.target.id == 'cardJeanGrey') { 
            mudarNomePersonagem('JEAN GREY') 
            mudarImagem('img/jeangrey.png') 
            mudarInfo('Jean Grey é uma mutante nível ômega e o principal avatar da Força Fênix, no qual manifesta poderes cósmicos.') 
        }

        if(clickDoMouse.target.id == 'cardLinceNegra') {
            mudarNomePersonagem('LINCE NEGRA')
            mudarImagem('img/lincenegra.png')
            mudarInfo('O seu poder é mais conhecido pelo nome de intangibilidade. Suas partículas atômicas passam pelo espaço entre os átomos dos objetos pelos quais ela está atravessando.');
        }
        
        else if(clickDoMouse.target.id == 'cardTempestade') {
            mudarNomePersonagem('TEMPESTADE')
            mudarImagem('img/tempestade.png')
            mudarInfo('Ela é capaz de manipular o tempo, e alterar o clima, assim tendo influência sobre os elementos da natureza.')
        }

        if(clickDoMouse.target.id == 'cardRogue') {
            mudarNomePersonagem('ROGUE')
            mudarImagem('img/rogue.png')
            mudarInfo('Seu poder mutante é a habilidade de absorver a vitalidade, memórias, habilidades e poderes de outros seres.')
        }

        else if(clickDoMouse.target.id == 'cardWolverine') {
            mudarNomePersonagem('WOLVERINE')
            mudarImagem('img/wolverine.png')
            mudarInfo('Apesar de aparentar ser um humano comum, é incapaz de controlar seus poderes, uma vez que seu fator de cura está sempre ativo e ele não controla quando ele será utilizado ou não.')
        }

        if(clickDoMouse.target.id == 'cardNoturno') {
            mudarNomePersonagem('NOTURNO')
            mudarImagem('img/noturno.png')
            mudarInfo('Possui agilidade sobre-humana, e a capacidade de teletransporte, invisibilidade em sombras profundas, e as mãos e os pés aderirem a parede')
        }

        else if(clickDoMouse.target.id == 'cardMagneto') {
            mudarNomePersonagem('MAGNETO')
            mudarImagem('img/magneto.png')
            mudarInfo('Ele tem o controle do magnetismo, do metal, e vários campos magnéticos, com isso ele cria campos de força eletromagnéticos, pode literalmente desligar a gravidade em volta de si isso lhe permite voar a distâncias e velocidades razoáveis.')
        }
    })


})

}

function mudarNomePersonagem(nome){
    let divNome = document.querySelector('.info h2')
    divNome.innerHTML = nome

}

function mudarImagem(imagem){
    let divImage = document.querySelector('.info img')
    divImage.src = imagem
}

function mudarInfo(info){
    let divInfo = document.querySelector('.info p')
    divInfo.innerHTML = info
}


pegarCards()