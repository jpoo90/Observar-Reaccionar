const WebSocketServer = require('ws').Server;
const Rx = require('rxjs');
const Observable = Rx.Observable;
const wss = new WebSocketServer({ port: 8081 });

console.log('Servidor listo en el puerto 8081');

wss.on('connection', ws => {
  const subscription = Observable.interval(1000)
    .map(punto => ({ punto, valor: Math.random() * 100 }))
    .subscribe(data => {
      if (ws.readyState === 1) {
        console.log('datos ...');
        ws.send(JSON.stringify(data));
      }
    });

  ws.on('close', () => {
    console.log('Socket cerrado');
    subscription.unsubscribe();
  });

  ws.on('error', err => {
    console.log('Error');
    subscription.unsubscribe();
  });
});
