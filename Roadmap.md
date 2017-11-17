# Programación Reactiva

 ## Qué
 - Crear programas basados en eventos y en la combinación de secuencias de datos asincrónicas. [streams, observables, events]
 - "Loadash para programación asincrónica" - @BenLesh.

 ## Cómo
 - Aceptando el reto de aprender algo nuevo 😎
 - Es un cambio de paradigma. Imperativo vs Funcional. [imperative, functional]
 (React vs jQuery)

  ## Por qué
 - Las aplicaciones que estamos construyendo son asíncronas y llenas de interacciones.
 - Esto implica que tenemos muchas fuentes de eventos. (temporizadores, teclado, AJAX, mouse ...). Todos estos eventos pueden ser homogeneizados como `Observables`.
 - Los funciones para producir los valores son puras. Los observables no se mutan, no cambian.  [Pure functions, mutation]
 - De callbacks, pasamos a promesas pero con promesas tenemos algunas limitantes:
   - No las podemos cancelar. Código innecesario corriendo.
   - No son determinísticas. La última que nos llega puede ser la que no necesitamos.
   - Solo pueden retornar un valor * [callbacks, promises]
 - En JS tenemos iteradores que pueden retornar más de un valor. Pero no es bueno para asincrónicos, tendríamos que hacer *polling constante.

 ## Dónde
 - En JS using RxJS
 - Programación reactiva es un paradigma y lo encontramos en otros lenguajes como Go, Swift o Ruby. [Reactive extensions](https://github.com/ReactiveX)

 ## Representation
 - Diagramas de canicas o bolitas ⚫️ ⚪️ [Marble diagrams](https://rxmarbles.com/)
 - Diagramas de tiempo.

## Vocabulario.
  - Stream = Observable.
  - Observer (onNext, onError, onComplete)
  - Cancelation > Tears down observer and resources.

# Estructura de un observable.
  - Es perezoso, no hace nada hasta que no tiene una subscripción.
  - Emite un valor, un error, o la señal de completado.
  - Siempre tiene un observador.
  - Cuando nos subscribimos obtenemos una función para cancelar la subscripción.