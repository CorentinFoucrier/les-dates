# Les dates

### Psedo code (algo) pour calculer l'âge sur chaques planètes
```
(int) anneeActuel;
(int) anneeDeNaissance;
(int) ageEnAnnees;
(int) ageEnJours;
(Tableau) revolutionPlanete = [
	Mercure => 88,
	Venus => 255,
	Terre => 365,
	Mars => 687,
	Jupiter => 4329,
	Satune => 10751,
	Uranus => 30664,
	Neptune => 60148,
	Pluton => 90520
];

Lire anneeActuel;
Lire anneeDeNaissance;

ageEnAnnees = anneeActuel - anneeDeNaissance;

Ecrire ageEnAnnees;

ageEnJours = ageEnAnnees * revolutionPlanete['Terre'];
```