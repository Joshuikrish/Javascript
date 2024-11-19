/*Long polling is the simplest way of having persistent connection with server, that doesn’t use any specific protocol like WebSocket or Server Sent Events.

Being very easy to implement, it’s also good enough in a lot of cases.

Regular Polling
The simplest way to get new information from the server is periodic polling. That is, regular requests to the server: “Hello, I’m here, do you have any information for me?”. For example, once every 10 seconds.

In response, the server first takes a notice to itself that the client is online, and second – sends a packet of messages it got till that moment.

That works, but there are downsides:

Messages are passed with a delay up to 10 seconds (between requests).
Even if there are no messages, the server is bombed with requests every 10 seconds, even if the user switched somewhere else or is asleep. That’s quite a load to handle, speaking performance-wise.
So, if we’re talking about a very small service, the approach may be viable, but generally, it needs an improvement.

Long polling
So-called “long polling” is a much better way to poll the server.

It’s also very easy to implement, and delivers messages without delays.

The flow:

A request is sent to the server.
The server doesn’t close the connection until it has a message to send.
When a message appears – the server responds to the request with it.
The browser makes a new request immediately.
This situation, where the browser has sent a request and keeps a pending connection with the server, is standard for this method. Only when a message is delivered, the connection is closed and reestablished.*/