/*WebSocket is a modern way to have persistent browser-server connections.

WebSockets don’t have cross-origin limitations.
They are well-supported in browsers.
Can send/receive strings and binary data.
The API is simple.

Methods:

socket.send(data),
socket.close([code], [reason]).
Events:

open,
message,
error,
close.
WebSocket by itself does not include reconnection, authentication and many other high-level mechanisms. So there are client/server libraries for that, and it’s also possible to implement these capabilities manually.

Sometimes, to integrate WebSocket into existing projects, people run a WebSocket server in parallel with the main HTTP-server, and they share a single database. Requests to WebSocket use wss://ws.site.com, a subdomain that leads to the WebSocket server, while https://site.com goes to the main HTTP-server.

Surely, other ways of integration are also possible.

*/

let url = new WebSocket("ws://site.com");
url.onopen = function () {
    alert("Connection established");
}
url.onmessage = function (event) {
    alert("Data " + event.data);
}
url.onclose = function (event) {
    alert("Connection closed");
}