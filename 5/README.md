# Observables para API's.

- `npm install` para instalar RxJs -- Saltar si viene del paso 4
- En el archivo `index.js` seguir las instrucciones para crear los observables y conectarlos con el resto del ejercicio.
-  Verificar que el npm script `server` este apuntando al ejercicio 5.
  ```javascript
"scripts": {
    "server": "node ./5/server/index.js"
  },
```
- Inicializar el servidor `npm run server`
- En `package.json` modificar el script `dev` para que la variable EJERCICIO=5
```javascript
"scripts": {
    "dev": "webpack-dev-server --env.EJERCICIO=5"
  },
```
- En una terminal nueva corremos`npm run dev` para ejecutar el código.

* `renderGrupos.js`, `renderBombos.js` y `index.css` puede ser modificados 🎨 .
* `solucion.js` nos servirá de ayuda. Siempre trata de resolver los ejercicios primero 😬
