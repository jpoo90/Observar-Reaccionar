# Observables para API's.
- `npm install` para instalar RxJs -- Saltar si viene del paso 4
- Crear los observables en el archivo `index.js`
-  Verificar que el npm script `server` este apuntando al ejercicio 5.
  ```javascript
"scripts": {
    "server": "node ./5/server/index.js"
  },
```
- Initializa el servidor `npm run server`
- En `package.json` modificar el srcipt `dev` para que la variable EJERCICIO=5
```javascript
"scripts": {
    "dev": "webpack-dev-server --env.EJERCICIO=5"
  },
```
- En una terminal nueva corremos`npm run dev` para ejecutar el código.
