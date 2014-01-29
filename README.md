# cnake
## A snake game implementation in clojurescript

[Demo](http://joakin.github.io/cnake)

This is a snake game implementation written in clojurescript using canvas.

It uses core.async for coordination and the code is divided in two parts, the UI and the game logic.

The code is fairly commented.

## Dev

To compile and execute in development use the file `dev.html` and compile using `lein cljsbuild auto cnake`.

I developed this using lighttable connecting to an external tab. For connecting lighttable to the page you have to `Ctrl-Space` and write `Add Connection` and then choose `Ports`. Copy the websocket port number and paste it on the html file substituting the one that is already there. Lighttable changes port every time it is started, so change it every time you restart it.

```html
<script type='text/javascript' id='lt_ws'
src='http://localhost:49850/socket.io/lighttable/ws.js'></script>
```

## Prod

To compile for publishing on the web do `lein cljsbuild once cnake-prod`. This will take about 20 seconds, and will compile with the advanced optimizations file.

To check the page and game open index.html
