function getRandomIndex(maxLimit) {
  return Math.floor(Math.random() * (maxLimit + 1));
}

function generarGrupos(bombos) {
  const groups = [[], [], [], [], [], [], [], []];

  bombos.forEach(bombo => {
    const copiaBombo = bombo.slice();

    while (copiaBombo.length) {
      const limite = copiaBombo.length - 1;
      const teamIndex = getRandomIndex(limite);
      groups[limite].push(copiaBombo.splice(teamIndex, 1)[0]);
    }
  });

  return groups;
}

module.exports = generarGrupos;