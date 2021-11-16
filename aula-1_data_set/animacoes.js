function initTabNav() {
	const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
	const tabContent = document.querySelectorAll('[data-tab="content"] section')

	if (tabMenu.length && tabContent.length) {
		tabContent[0].classList.add('ativo')

		function activeTab(index) {
			tabContent.forEach(section => {
				section.classList.remove('ativo')
			})
			const direcao = tabContent[index].dataset.anime
			tabContent[index].classList.add('ativo', direcao)
		}

		tabMenu.forEach((itemMenu, index) => {
			itemMenu.addEventListener('click', () => {
				activeTab(index)
			})
		})
	}
}
initTabNav()

function initAccordion() {
	const accordionList = document.querySelectorAll(
		'[data-anime="accordion"] dt'
	)
	const ativoClass = 'ativo'
	if (accordionList.length) {
		accordionList[0].nextElementSibling.classList.add(ativoClass)

		function activeAccordion() {
			this.classList.toggle(ativoClass)
			this.nextElementSibling.classList.toggle(ativoClass)
		}

		accordionList.forEach(item => {
			item.addEventListener('click', activeAccordion)
		})
	}
}

initAccordion()

function initScrollSuave() {
	const linksInternos = document.querySelectorAll(
		'[data-menu="suave"] a[href^="#"]'
	)

	function scrollToIdOnClick(event) {
		event.preventDefault()
		const href = event.currentTarget.getAttribute('href')
		const section = document.querySelector(href)

		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

		// //forma alternativa
		// const topo = section.offsetTop
		// window.scrollTo({
		// 	top: topo,
		// 	behavior: 'smooth'
		// })
	}

	linksInternos.forEach(link => {
		link.addEventListener('click', scrollToIdOnClick)
	})
}

initScrollSuave()

function initAnimacaoScroll() {
	const sections = document.querySelectorAll('[data-anime="scroll"]')

	if (sections.length) {
		const windowMetade = window.innerHeight * 0.6

		function animaScroll() {
			sections.forEach(section => {
				const sectionTop = section.getBoundingClientRect().top
				const isSectionVisible = sectionTop - windowMetade < 0
				console.log(sectionTop)
				if (isSectionVisible) {
					section.classList.add('ativo')
				} else {
					section.classList.remove('ativo')
				}
			})
		}

		animaScroll()

		window.addEventListener('scroll', animaScroll)
	}
}

initAnimacaoScroll()
