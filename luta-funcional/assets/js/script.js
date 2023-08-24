const nameChar = prompt('Insira o nome do seu personagem:');
const lvlChar = prompt('Insira o nível do seu personagem (1-3):');

//Selecione seu Personagem
//createKnight
//createSorcerer

const char = createSorcerer(nameChar, lvlChar);
//altere o Oponente
//createBigMonster
//createLittleMonster
const monster = createBigMonster(3);

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);