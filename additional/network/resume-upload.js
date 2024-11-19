/*With fetch method it’s fairly easy to upload a file.

How to resume the upload after lost connection? There’s no built-in option for that, but we have the pieces to implement it.

Resumable uploads should come with upload progress indication, as we expect big files (if we may need to resume). So, as fetch doesn’t allow to track upload progress, we’ll use XMLHttpRequest.

Not-so-useful progress event
To resume upload, we need to know how much was uploaded till the connection was lost.

There’s xhr.upload.onprogress to track upload progress.

Unfortunately, it won’t help us to resume the upload here, as it triggers when the data is sent, but was it received by the server? The browser doesn’t know.

Maybe it was buffered by a local network proxy, or maybe the remote server process just died and couldn’t process them, or it was just lost in the middle and didn’t reach the receiver.

That’s why this event is only useful to show a nice progress bar.

To resume upload, we need to know exactly the number of bytes received by the server. And only the server can tell that, so we’ll make an additional request.*/