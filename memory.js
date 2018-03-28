
// zmienne globalne :
var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;
var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

// console.log(cards);

$("#c0").on("click", function() {
	revealCard(0);
});

$("#c1").on("click", function() {
	revealCard(1);
});

$("#c2").on("click", function() {
	revealCard(2);
});

$("#c3").on("click", function() {
	revealCard(3);
});

$("#c4").on("click", function() {
	revealCard(4);
});

$("#c5").on("click", function() {
	revealCard(5);
});

$("#c6").on("click", function() {
	revealCard(6);
});

$("#c7").on("click", function() {
	revealCard(7);
});

$("#c8").on("click", function() {
	revealCard(8);
});

$("#c9").on("click", function() {
	revealCard(9);
});

$("#c10").on("click", function() {
	revealCard(10);
});

$("#c11").on("click", function() {
	revealCard(11);
});

// funkcja odslon karte
/*
	Ktora karta?
	
		Pierwsza :
			Czekamy na druga karte !
			
		Druga :
			Mamy pare?
				tak :
					Usun obie karty
					Licznik tur ++
					Wygralismy ?
					
				nie :
					Zakryj obie karty
					Licznik tur ++
*/
function revealCard(nr) {
	var opacityValue = $("#c" + nr).css("opacity");
	// alert("Opacity : " + opacityValue);
	
	if (opacityValue != 0 && lock == false) {
		lock = true;
		
		// alert(nr);
	
		var obraz = "url(img/" + cards[nr] + ")";
		
		$("#c" + nr).css("background-image", obraz);
		
		$("#c" + nr).addClass("cardA");
		$("#c" + nr).removeClass("card");
		
		if (oneVisible == false) {
			// first card
			
			oneVisible = true;
			
			visible_nr = nr;
			
			lock = false;
		} else {
			// second card
			
			// czy pierwsza odslonieta karta z pary jest rowna drugiej :
			if (cards[visible_nr] == cards[nr]) {
				// alert("para");
				
				setTimeout(function() {
					hideTwoCards(nr, visible_nr);
				}, 750);
				
				// schowaj dwie karty, czyli te odkryte :
				// hideTwoCards(nr, visible_nr);
			} else {
				// alert("pudlo");
				
				setTimeout(function() {
					restoreTwoCards(nr, visible_nr);
				}, 1000);
			}
			
			turnCounter++;
			
			$(".score").html("Turn counter : " + turnCounter);
			
			oneVisible = false;
		}
	}
}

function hideTwoCards(nr1, nr2) {
	// jezeli uzyjemy display: none; to poprzesuwaja sie obrazki i dlatego lepiej uzyc opacity: 0; do ukrycia elementu
	$("#c" + nr1).css("opacity", 0);
	$("#c" + nr2).css("opacity", 0);
	
	pairsLeft--;
	
	// wszystkie pary zostaly odkryte :
	if (pairsLeft == 0) {
		$(".board").html("<h1>You win!<br /> Done in " + turnCounter + " turns </h1>");
	}
	
	lock = false;
}

// zakrycie dwoch kart rewersami :
function restoreTwoCards(nr1, nr2) {
		$("#c" + nr1).css("background-image", "url(img/karta.png)");
		
		$("#c" + nr1).addClass("card");
		$("#c" + nr1).removeClass("cardA");
		
		$("#c" + nr2).css("background-image", "url(img/karta.png)");
		
		$("#c" + nr2).addClass("card");
		$("#c" + nr2).removeClass("cardA");
		
		lock = false;
}