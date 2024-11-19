/*EventSource object automatically establishes a persistent connection and allows the server to send messages over it.

It offers:

Automatic reconnect, with tunable retry timeout.
Message ids to resume events, the last received identifier is sent in Last-Event-ID header upon reconnection.
The current state is in the readyState property.
That makes EventSource a viable alternative to WebSocket, as the latter is more low-level and lacks such built-in features (though they can be implemented).

In many real-life applications, the power of EventSource is just enough.

Supported in all modern browsers (not IE).

The syntax is:

let source = new EventSource(url, [credentials]);
The second argument has only one possible option: { withCredentials: true }, it allows sending cross-origin credentials.

Overall cross-origin security is same as for fetch and other network methods.*/