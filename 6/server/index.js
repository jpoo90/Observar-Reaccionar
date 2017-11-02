const WebSocketServer = require('socket').Server;
const Rx = require('rxjs');
const Observable = Rx.Observable;
const ServidorWebSocket = new WebSocketServer({ port: 8081 });

console.log('Servidor listo en el puerto 8081');

/**
 * Támbien podemos usar Rx en el servidor 😄
 */

ServidorWebSocket.on('connection', socket => {
  /**
   * Crear un observable que:
   * - Cada segundo produzca un objecto {punto: [0,n], valor: random[0,100) }.
   * - Envíe el objecto por websocket `ws.send`
   * - Guarde la subscripción para ser cancelada.
   *
   * Cancelar la subscripción cuando cerramos(close) el socket ó
   * hay un error en la conexión.
   */

  socket.on('close', () => {

  });

  socket.on('error', err => {

  });
});