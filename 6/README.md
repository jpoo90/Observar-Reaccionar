# Observables y websockets.

- `npm install` para instalar RxJs y las demás herramientas.
- En el archivo `index.js` seguir las instrucciones para crear los observables y conectarlos con el resto del ejercicio.
- En el archivo `server/index.js` seguir las instrucciones para usar observables en el servidor.
-  Verificar que el npm script `server` este apuntando al ejercicio 6.
  ```javascript
"scripts": {
    "server": "node ./6/server/index.js"
  },
```
- Inicializar el servidor `npm run server`
- En `package.json` modificar el srcipt `dev` para que la variable EJERCICIO=6
```javascript
"scripts": {
    "dev": "webpack-dev-server --env.EJERCICIO=6"
  },
```
- En una terminal nueva corremos`npm run dev` para ejecutar el código.
