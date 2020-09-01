var personne = {
  nom: ['Jean', 'Martin'],
  age: 32,
  sexe: 'masculin',
  interets: ['musique', 'skier']
};

var ordinateur = {
  processeur: 'intel',
  stockage: 256,
  marque: 'Apple'
};


var liste_noms = [
  'Daniel',
  'Lucas',
  'Jean'
];

console.log(personne);
console.log(ordinateur);
console.log(liste_noms);

console.log(liste_noms[1]);
console.log(personne["age"]);
liste_noms[2] = 'Gilbert';
personne["age"] = 33;

console.log(personne["age"]);

console.log(personne.age);

