const ce = elm => document.createElement(elm);

/**
 * Renderiza los equipos del bombo.
 * @param {Object} datos
 * @param {array} datos.equipos - Arreglo con los equipos del bombo.
 * @param {HTMLElement} datos.btn  - Botón usado para generar el bombo.
 * @param {HTMLElement} datos.elm  - Div donde se renderizaran los equipos.
 */

export default function renderBombos({ equipos, btn, elm }) {
  const equiposListElm = ce('ul');
  equipos.forEach(team => {
    const teamElm = ce('li');
    teamElm.innerText = `${team.flag} ${team.name_es}`;
    equiposListElm.appendChild(teamElm);
  });

  elm.appendChild(equiposListElm);
  btn.disabled = true;
}
