
var haslo = "Bez pracy nie ma kołaczy";

var dlugosc = haslo.length;

var ile_skuch = 0;

var haslo1 = "";

for (i = 0; i < dlugosc; i++) {
	if (haslo.charAt(i) == " ") {
		haslo1 = haslo1 + " ";
	} else {
		haslo1 = haslo1 + "-";
	}
}

haslo = haslo.toUpperCase();

function wypiszHaslo() {
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";

litery[5] = "D";
litery[6] = "Ę";
litery[7] = "E";
litery[8] = "F";
litery[9] = "G";

litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";

litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";

litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "Ś";
litery[25] = "S";

litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";

litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start() {
	var trescDiva = "";
	
	for (i = 0; i < 35; i++) {
		var element = "lit" + i;
		// generujemy jednego diva klasy .litera
		trescDiva = trescDiva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
		
		if ((i  + 1) % 7 == 0) {
			trescDiva = trescDiva + '<div style="clear:both;"></div>';
		}
	}

	document.getElementById("alfabet").innerHTML = trescDiva;
	
	wypiszHaslo();
}

String.prototype.ustawZnak = function(miejsce, znak) {
	if (miejsce > this.length - 1) {
		return this.toString();
	} else {
		return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
	}
}

function sprawdz(nr) {
	var trafiona = false;

	for (i = 0; i < dlugosc; i++) {
		if (haslo.charAt(i) == litery[nr]) {
			haslo1 = haslo1.ustawZnak(i, litery[nr]);
			trafiona = true;
		}
	}
	
	if (trafiona == true) {
		// kolorujemy na zielono
		var element = "lit" + nr;
		
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypiszHaslo() ;
	} else {
		// kolorujemy na czerwono
		
		var element = "lit" + nr;
		
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";
		
		document.getElementById(element).setAttribute("onclick", ";");			// srednik
		
		// skucha
		ile_skuch++;
		
		var obraz = "img/s" + ile_skuch + ".jpg";
		
		document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '" />';
	}
	
	// wygrana
	if (haslo == haslo1) {
		document.getElementById("alfabet").innerHTML = 'Tak jest ! Podano prawidłowe hasło : ' + haslo + '<br /><br /><span class="reset" onclick="location.reload()">Jeszcze raz ?</span>';
	}
	
	// przegrana
	if (ile_skuch >= 7) {
		document.getElementById("alfabet").innerHTML = 'Przegrana! Podano nieprawidłowe hasło : ' + haslo + '<br /><br /><span class="reset" onclick="location.reload()">Jeszcze raz ?</span>';
	}
}