function calcAge() {
	var anneeDeNaissance = Number(document.getElementById('annee').value);
	if (anneeDeNaissance > 1900 & anneeDeNaissance < 2100) {
		var date = new Date();
		var anneeActuel = date.getFullYear();

		var joursRevolutionPlanete = [88, 255, 365, 687, 4329, 10751, 30664, 60148, 90520];

		var ageEnAnnees = anneeActuel - anneeDeNaissance;
		var joursTerrestre = ageEnAnnees * 365;
		anneeMarcienne = joursTerrestre / 687;
		for (var i = 0; i < 9; i++) {
			document.getElementById(i).innerHTML = (joursTerrestre / joursRevolutionPlanete[i]).toFixed(2).replace('.', ',');
		}

		document.getElementById('2').innerHTML = ageEnAnnees;
	}
}