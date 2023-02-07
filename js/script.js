document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItem = document.querySelectorAll('.nav-link')
	const navclose = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 0) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItem.forEach(item => item.addEventListener('click', () => navclose.classList.remove('show')))
	window.addEventListener('scroll', addShadow)
	
	
})
