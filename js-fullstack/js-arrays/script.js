const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
];
//filtra as naves com 9 tripulantes
let crewGreaterThan9 = hitchedSpaceships
  .filter((spaceship) => {
    return spaceship[1] > 9;
  }) //pega o nome das naves
  .map((spaceship) => {
    return spaceship[0];
  });

//filtra as naves não engatadas
let ongoingHitchPlatform = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] == false;
});

//deixa o nome das naves em caixa alta
let highlightedSpaceships = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toUpperCase();
});

//exibe as informações
let message =
  "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ");
message += "\nPlataforma com processo de engate: " + (ongoingHitchPlatform + 1);
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ");

console.log(message);
