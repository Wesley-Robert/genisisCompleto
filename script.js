//Variaveis para ordem, click e score
let ordem = []
let clickOrdem = []
let score = 0

// 0 - vermelho // 1 - azul // 2 - verde // 3 - amarelo

const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

// criar ordem aleatoria de cores
const ordemAleatoria = () => {
    let numeroAleatorio = Math.floor(Math.random() * 4)
    ordem[ordem.length] = numeroAleatorio
    clickOrdem = []

    for(let i in ordem){
        let elementColor = []
        elementColor[i] = ordem[i]
        lightColor(elementColor[i], Number(i) + 1) 
    }
}
//acende a proxima cor
const lightColor = (element, numero) => {
    numero = numero * 500;
    let elementar = []
    elementar.push(element)

    for(let i in elementar){
        if(elementar[i] == 0){
                setTimeout(() => {document.querySelector('.red').style.backgroundColor = '#fff'}, numero - 250)
                setTimeout(() => {document.querySelector('.red').style.backgroundColor = 'red'}, numero + 200)
        }else if(elementar[i] == 1){
                setTimeout(() => {document.querySelector('.blue').style.backgroundColor = '#fff'}, numero - 250)
                setTimeout(() => {document.querySelector('.blue').style.backgroundColor = 'blue'}, numero + 200)
        }else if(elementar[i] == 2){
                setTimeout(() => {document.querySelector('.green').style.backgroundColor = '#fff'}, numero - 250)
                setTimeout(() => {document.querySelector('.green').style.backgroundColor = 'green'}, numero + 200)
        }else if(elementar[i] == 3){
                setTimeout(() => {document.querySelector('.yellow').style.backgroundColor = '#fff'}, numero - 250)
                setTimeout(() => {document.querySelector('.yellow').style.backgroundColor = 'yellow'}, numero + 200)
        }
    }
}
// checa os acertos
const checaAcertos = () => {
    for(let i in clickOrdem){
        if(clickOrdem[i] != ordem[i]){
            gameOver();
            break
        }
    }
    if(clickOrdem.length == ordem.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
        nextLevel()
    }
}
// proximo nivel do jogo
const nextLevel = () => {
    score++
    ordemAleatoria()
}
// gamer over
const gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`)
    ordem = []
    clickOrdem = []

    playGame()
}
// inicio jogo
const playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}
// clique para as cores
const clickColor = (color) => {
    clickOrdem.push(color)
    checaAcertos()
}
// inicio do jogo
playGame()