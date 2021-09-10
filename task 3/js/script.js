let container = document.querySelector('.container');


function createCard(name, imageSrc, status, species,location) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.innerHTML = name;
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');
	if (status === 'Dead') {
		cardLiveStatus.classList.add('dead');
	}

	const cardStatusP = document.createElement('p');
	const cardStatusPText = document.createTextNode(`${status}: ${species}`);
	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode(location);
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.src = imageSrc;
	image.alt = 'Some image';
	cardImage.append(image);
	card.append(cardImage);

	container.append(card);
}

fetch('https://rickandmortyapi.com/api/character', {
		method: 'GET'
	})
	.then(response => response.json())
	.then((json) => {
		json.results.map(function(results) {
			//console.log(json);
			createCard(results.name,results.image,results.status,results.species,results.location.name);
		})
	});

	let filter = document.getElementsByClassName('form-container');

// let male = document.getElementById('male');
// let female = document.getElementById('female');
// let alive = document.getElementById('alive');
// let dead = document.getElementById('dead');

// male.onchange = () => {
// 	changePersonage();
// }

// female.onchange = () => {
// 	changePersonage();
// }

// alive.onchange = () => {
// 	changePersonage();
// }

// dead.onchange = () => {
// 	console.log();
// 	changePersonage();
// }

// function changePersonage (o) {
// 	console.log(o);
// }
