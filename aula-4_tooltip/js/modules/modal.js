export default function initModal() {
	const botaoAbrir = document.querySelector('[data-modal="abrir"]')
	const botaoFechar = document.querySelector('[data-modal="fechar"]')
	const containerModal = document.querySelector('[data-modal="container"]')

	if (botaoAbrir && botaoFechar && containerModal) {
		function toogleModal(event) {
			event.preventDefault()
			containerModal.classList.toggle('ativo')
		}

		function cliqueForaModal(event) {
			if (event.target === containerModal) {
				toogleModal(event)
			}
		}

		botaoAbrir.addEventListener('click', toogleModal)
		botaoFechar.addEventListener('click', toogleModal)
		containerModal.addEventListener('click', cliqueForaModal)
	}
}
