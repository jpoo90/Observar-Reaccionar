const ce = elm => document.createElement(elm);
const qs = elm => document.querySelector(elm);

export default function renderGrupos(groups) {
  const bombos = qs('.bombos');
  const gruposNode = qs('.grupos');
  const nuevosGrupos = ce('div');
  nuevosGrupos.className = 'grupos';

  groups.forEach((g, i) => {
    const groupList = ce('div');
    const groupName = ce('div');

    groupName.textContent = `Grupo ${i + 1}`;
    groupName.style.fontWeight = 'bold';

    groupList.appendChild(groupName);
    groupList.className = 'grupo';

    const equiposListElm = ce('ul');
    g.forEach(team => {
      const teamElm = ce('li');
      teamElm.innerText = `${team.flag} ${team.name_es}`;
      equiposListElm.appendChild(teamElm);
    });

    groupList.appendChild(equiposListElm);
    nuevosGrupos.appendChild(groupList);
  });

  bombos.style.display = 'none';
  document.body.replaceChild(nuevosGrupos, gruposNode);
}
