import Rx from 'rxjs';
import css from './index.css';

import renderGrupos from './renderGrupos';
import renderBombos from './renderBombos';

const qs = elm => document.querySelector(elm);

const cargarBombo1Btn = qs('.cargar-bombo-1');
const bombo1Elm = qs('.equipos-bombo1');
const cargarBombo2Btn = qs('.cargar-bombo-2');
const bombo2Elm = qs('.equipos-bombo2');
const cargarBombo3Btn = qs('.cargar-bombo-3');
const bombo3Elm = qs('.equipos-bombo3');
const cargarBombo4Btn = qs('.cargar-bombo-4');
const bombo4Elm = qs('.equipos-bombo4');
const gruposBtn = qs('.grupos-btn');

/**
 * Endpoint http://localhost:2018/bombos/${bombo}
 *
 * `cargarBomboXBtn`:
 * - onClick debe pedir al endpoint los equipos
 *   del bombo de acuerdo a su número.
 *
 * - Cuando el servidor responda usar la función `renderBombos`
 *   para mostrarlos en pantalla.
 *
 */

/**
 * `gruposBtn`:
 * - Sólo debe funcionar cuando todos los bombos han sido cargados.
 * - onClick debe generar los grupos `generarGrupos`
 *   y mostrarlos en pantalla `renderGrupos`.
 */

 /**
  * Nota: El endpoint sólo debe ser usado una vez por cada bombo.
  */
