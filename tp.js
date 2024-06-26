class Compte {
  #montant;
  #interet;

  constructor(montantInitial, interetAnnuel) {
    this.#montant = montantInitial;
    this.#interet = interetAnnuel;
  }

  get_montant() {
    return this.#montant;
  }

  un_an() {
    this.#montant += this.#montant * (this.#interet / 100);
  }

  simuler_annees(annees) {
    for (let i = 0; i < annees; i++) {
      this.un_an();
    }
    return this.get_montant();
  }
}

// Créer deux comptes
let compte1 = new Compte(200, 20);
let compte2 = new Compte(1000, 2);

// Afficher le montant de chaque compte au bout de 10 ans
console.log("Montant du compte 1 au bout de 10 ans: " + compte1.simuler_annees(10) + " dirhams");
console.log("Montant du compte 2 au bout de 10 ans: " + compte2.simuler_annees(10) + " dirhams");
