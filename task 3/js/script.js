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
let ii = 0;
fetch('https://rickandmortyapi.com/api/character', {
		method: 'GET'
	})
	.then(response => response.json())
	.then((json) => {
		json.results.map(function(results) {
			console.log(json);
			createCard(results.name,results.image,results.status,results.species,results.location.name);
			
		})
		return json;
	})
	.then((json)=>{
		document.getElementById("dead").addEventListener("click", ()=>{
			container.innerHTML = '';
			json.results.map(function(results) {
				if(results.status === 'Dead'){
					createCard(results.name,results.image,results.status,results.species,results.location.name);
				}
			})
		});
		document.getElementById("male").addEventListener("click", ()=>{
			container.innerHTML = '';
			json.results.map(function(results) {
				if(results.gender === 'Male'){
					createCard(results.name,results.image,results.status,results.species,results.location.name);
				}
			})
		});
		document.getElementById("female").addEventListener("click", ()=>{
			container.innerHTML = '';
			json.results.map(function(results) {
				if(results.gender === 'Female'){
					createCard(results.name,results.image,results.status,results.species,results.location.name);
				}
			})
		});
		document.getElementById("alive").addEventListener("click", ()=>{
			container.innerHTML = '';
			json.results.map(function(results) {
				if(results.species === 'Alien'){
					createCard(results.name,results.image,results.status,results.species,results.location.name);
				}
			})
		});
	});


	
