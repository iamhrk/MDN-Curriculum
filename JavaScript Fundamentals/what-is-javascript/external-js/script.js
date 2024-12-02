const buttons = document.querySelectorAll('button');

for (const button of buttons){
	button.addEventListener('click', createParagraph);
}

function createParagraph(){
	const paragraph = document.createElement('p');
	paragraph.textContent = "New text generated";
	document.body.appendChild(paragraph);
}

