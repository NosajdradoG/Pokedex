const req = new XMLHttpRequest();

req.open('GET', 'https://api.pokemontcg.io/v1/cards', false);
req.send(null);

if (req.status === 200) {
	console.log(req.responseText)
	console.log(JSON.parse(req.responseText))
	var listePokeCard = JSON.parse(req.responseText)

var url = window.location.href;

var params = (new URL(document.location)).searchParams;

var info = params.get("id");

console.log(listePokeCard.cards[info]);

var  goodPokeCard = listePokeCard.cards[info];

var pokeInfo = document.createElement("p");
pokeInfo.innerHTML ='<strong>Name:  </strong>' + goodPokeCard.name + ' <strong>Type: </strong>' + goodPokeCard.types +
'<strong> Pokedex Number: </strong>' + goodPokeCard.nationalPokedexNumber +
'<br><br><a href="' + goodPokeCard.imageUrlHiRes + '"><img src="' + goodPokeCard.imageUrl + '"style="width:128px;"></a><br><br> <strong>Artist: </strong>' + goodPokeCard.artist;
var cont = document.getElementById("container");
cont.appendChild(pokeInfo);
}