# Les dates

### Psedo code (algo) pour calculer l'âge sur chaques planètes
```
(int) anneeActuel;
(int) anneeDeNaissance;
(int) ageEnAnnees;
(int) i = 0;
(Tableau) joursRevolutionPlanete = [
	Mercure => 88,
	Venus => 255,
	Terre => 365,
	Mars => 687,
	Jupiter => 4329,
	Satune => 10751,
	Uranus => 30664,
	Neptune => 60148,
	Pluton => 90520
]; // nombres en jours

Lire anneeActuel;
Lire anneeDeNaissance;

ageEnAnnees = anneeActuel - anneeDeNaissance;

ageSurChaquePlanetes = [
0 => (ageEnAnnees * joursRevolutionPlanete['Mercure'])
1 => (ageEnAnnees * joursRevolutionPlanete['Venus'])
2 => (ageEnAnnees * joursRevolutionPlanete['Terre'])
3 => (ageEnAnnees * joursRevolutionPlanete['Mars'])
4 => (ageEnAnnees * joursRevolutionPlanete['Jupiter'])
5 => (ageEnAnnees * joursRevolutionPlanete['Satune'])
6 => (ageEnAnnees * joursRevolutionPlanete['Uranus'])
7 => (ageEnAnnees * joursRevolutionPlanete['Neptune'])
8 => (ageEnAnnees * joursRevolutionPlanete['Pluton'])
];

TANQUE i n'est pas supérieur ou égale à 8
	|
	ALORS Afficher ageSurChaquePlanetes[i];
```