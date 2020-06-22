headerButton.onclick = showMainForm
heroButton.onclick = showMainForm
mainFormClose.onclick = hideMainForm
mainFormButton.onclick = showThanks
thanksClose.onclick = hideThanks

function showMainForm () {
	mainForm.style.display = 'block'
	darknessBg.style.display = 'block'
}

function hideMainForm () {
	mainForm.style.display = 'none'
	darknessBg.style.display = 'none'
}

function showThanks () {
	mainForm.style.display = 'none'
	thanks.style.display = 'block'
	// darknessBg.style.display = 'block'
}

function hideThanks () {
	thanks.style.display = 'none'
	darknessBg.style.display = 'none'
}

