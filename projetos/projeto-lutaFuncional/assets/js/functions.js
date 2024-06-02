const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0,
    level: 1,
}

const createKnight = (name, level) => {
    
    if (level == 1) {
        return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
        }


    } if (level == 2) {
        return {
        ...defaultCharacter,
        name,
        life: 105,
        maxLife: 105,
        attack: 12,
        defense: 9,
        }
    } if (level == 3) {
        return {
         ...defaultCharacter,
        name,
        life: 110,
        maxLife: 110,
        attack: 15,
        defense: 10,
        }
    }
}

const createSorcerer = (name, level) => {
    if (level == 1) {
        return {
        ...defaultCharacter,
        name,
        life: 80,
        maxLife: 80,
        attack: 12,
        defense: 5
        }


    } if (level == 2) {
        return {
        ...defaultCharacter,
        name,
        life: 85,
        maxLife: 85,
        attack: 14,
        defense: 6,
        }

    } if (level == 3) {
        return {
         ...defaultCharacter,
        name,
        life: 90,
        maxLife: 90,
        attack: 16,
        defense: 6,
        }
    }
}

const createLittleMonster = () => {
        return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 3
        }
}

const createBigMonster = (level) => {
    
    if (level == 1) {
        return {
        ...defaultCharacter,
        name: 'Big Monster Lvl. 1',
        life: 120,
        maxLife: 120,
        attack: 12,
        defense: 3,
        }


    } if (level == 2) {
        return {
        ...defaultCharacter,
        name: 'Big Monster Lvl. 2',
        life: 125,
        maxLife: 125,
        attack: 14,
        defense: 4,
        }
    } if (level == 3) {
        return {
         ...defaultCharacter,
        name: 'Big Monster Lvl. 3',
        life: 130,
        maxLife: 130,
        attack: 16,
        defense: 5,
        }
    }
}


const stage = { //pegar as informações dos lutadores
    fighter1: null, //lutador1
    fighter2: null, //lutador2
    fighter1El: null, //elemento lutador1
    fighter2El: null, //elemento lutador2

    start(fighter1, fighter2, fighter1El, fighter2El) { //armazenar as informações
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2)); //ataque fighter
       
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1)); //ataque monstro

        this.update();
    }, 
    update() { //atualizar informações
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        //calcular porcentagem
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        //Fighter 2
        this.fighter2El.querySelector('.name2').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(0)} HP`;
        //calcular porcentagem
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    },
    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('Alguem está morto, não é possível realizar o ataque');
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacking.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`);
        } else {
            log.addMessage(`${attacked.name} conseguiu defender...`);
        }


        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}