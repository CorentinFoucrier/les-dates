function calcAge() {
	var date = new Date();
	var anneeActuel = date.getFullYear();

	var joursRevolutionPlanete = [88, 255, 365, 687, 4329, 10751, 30664, 60148, 90520];

	var anneeDeNaissance = Number(document.getElementById('annee').value);

	var ageEnAnnees = anneeActuel - anneeDeNaissance;
	var joursTerrestre = ageEnAnnees * 365;
	anneeMarcienne = joursTerrestre / 687;

	document.getElementById('0').innerHTML = (joursTerrestre / 88).toFixed(2).replace('.', ',');
	document.getElementById('1').innerHTML = (joursTerrestre / 255).toFixed(2).replace('.', ',');
	document.getElementById('2').innerHTML = ageEnAnnees;
	document.getElementById('3').innerHTML = (joursTerrestre / 687).toFixed(2).replace('.', ',');
	document.getElementById('4').innerHTML = (joursTerrestre / 4329).toFixed(2).replace('.', ',');
	document.getElementById('5').innerHTML = (joursTerrestre / 10751).toFixed(2).replace('.', ',');
	document.getElementById('6').innerHTML = (joursTerrestre / 30664).toFixed(2).replace('.', ',');
	document.getElementById('7').innerHTML = (joursTerrestre / 60148).toFixed(2).replace('.', ',');
	document.getElementById('8').innerHTML = (joursTerrestre / 90520).toFixed(2).replace('.', ',');

}