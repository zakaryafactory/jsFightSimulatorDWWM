class Personnage {

    constructor(pseudo, pointDeVie, attaque, soin, classe) {
        this.pseudo = pseudo;
        this.pointDeVie = pointDeVie;
        this.attaque = attaque;
        this.soin = soin;
        this.classe = classe;

        this.initialiser()
    }

    /**
     * Initialises the combat area by creating and appending elements for the character card.
     * The character card includes the avatar, pseudo, and characteristics of the character.
     */
    initialiser() {

        // Sélection aire de combat
        let fightArea = document.querySelector('.combat');

        // Création de ma carte personnage + ajout dans le div combat
        let cardPersonnage = document.createElement('div');
        cardPersonnage.classList.add('personnage', 'w-full', 'md:w-1/2', 'p-6')
        fightArea.appendChild( cardPersonnage )

        // Création de l'avatar et ajout dans la card du personnage
        let divAvatar = document.createElement('div');
        divAvatar.classList.add('avatar')
        let avatar = document.createElement('img');
        avatar.src = this.getAvatar();
        divAvatar.appendChild(avatar);
        cardPersonnage.appendChild(divAvatar);

        // Création du pseudo et ajout dans la card du personnage
        let pseudo = document.createElement('h2');
        pseudo.classList.add('pseudo', 'text-xl');
        pseudo.textContent = this.pseudo;
        cardPersonnage.appendChild(pseudo);

        // Création de la liste des caractéristiques et ajout dans la card du personnage
        let listCaracteristiques = document.createElement('ul')

        let pdv = document.createElement('li');
        pdv.textContent = 'Points de vie : ' + this.pointDeVie;

        let pda = document.createElement('li');
        pda.textContent = 'Points d\'attaque : ' + this.attaque;

        let pds = document.createElement('li');
        pds.textContent = 'Soin : ' + this.soin;

        listCaracteristiques.appendChild(pdv)
        listCaracteristiques.appendChild(pda)
        listCaracteristiques.appendChild(pds)

        cardPersonnage.appendChild(listCaracteristiques)

    }

    getAvatar() {

        if( this.classe === 'guerrier') {
            return './images/warrior.png'
        }
        if( this.classe === 'mage') {
            return './images/warrior.png'
        }
        if( this.classe === 'chasseur') {
            return './images/warrior.png'
        }

        switch ( this.classe ) {
            case 'guerrier':
                return './images/warrior.png'
            case 'mage':
                return './images/magus.png'
            case 'chasseur':
                return './images/chasseur.png'
            default:
                break;
        }

    }

    verifierSante() {
        if( this.pointDeVie <= 0 ) {
            this.pointDeVie = 0;
            console.log(this.pseudo + " est mort.");
        } else {
            console.log("Il reste " + this.pointDeVie + " points de vie à " + this.pseudo)
        }
    }

    attaquer( perso ) {
        perso.pointDeVie -= this.attaque;
        perso.verifierSante()
    }

    soigner() {
        this.pointDeVie += this.soin;
        this.verifierSante();
    }

}

let perso1 = new Personnage("Conan", 500, 200, 50, 'mage')
let perso2 = new Personnage("Conan", 500, 200, 50, 'mage')


perso1.attaquer( perso2 )