// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// let i = 0
// setInterval(() => {
// 	if (i % 2 == 0) {
// 		document.body.style.backgroundColor = 'blue'
// 	} else {
// 		document.body.style.backgroundColor = 'red'
// 	}
// 	i++
// }, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
// function cronometro() {
// 	let i = 0
// 	let intervalo = setInterval(() => {
// 		i++
// 		document.getElementById('cronometro').innerHTML = i
// 	}, 1000)
// 	document.getElementById('pausar').addEventListener('click', () => {
// 		clearInterval(intervalo)
// 	})
// 	document.getElementById('iniciar').addEventListener('click', () => {
// 		intervalo = setInterval(() => {
// 			i++
// 			document.getElementById('cronometro').innerHTML = i
// 		}, 1000)
// 	})
// 	document.getElementById('resetar').addEventListener('dblclick', () => {
// 		clearInterval(intervalo)
// 		i = 0
// 		document.getElementById('cronometro').innerHTML = i
// 	})
// }
// cronometro()

//OUTRO METODO
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let i = 0

let timer

function iniciarTempo() {
	timer = setInterval(() => {
		tempo.innerText = i++
	}, 100)
	iniciar.setAttribute('disabled', '')
}

function pausarTempo() {
	clearInterval(timer)
	iniciar.removeAttribute('disabled')
}

function resetarTempo() {
	tempo.innerText = 0
	i = 0
}
