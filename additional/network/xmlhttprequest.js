/*There are actually more events, the modern specification lists them (in the lifecycle order):

loadstart – the request has started.
progress – a data packet of the response has arrived, the whole response body at the moment is in response.
abort – the request was canceled by the call xhr.abort().
error – connection error has occurred, e.g. wrong domain name. Doesn’t happen for HTTP-errors like 404.
load – the request has finished successfully.
timeout – the request was canceled due to timeout (only happens if it was set).
loadend – triggers after load, error, timeout or abort.
The error, abort, timeout, and load events are mutually exclusive. Only one of them may happen.

The most used events are load completion (load), load failure (error), or we can use a single loadend handler and check the properties of the request object xhr to see what happened.

We’ve already seen another event: readystatechange. Historically, it appeared long ago, before the specification settled. Nowadays, there’s no need to use it, we can replace it with newer events, but it can often be found in older scripts.

If we need to track uploading specifically, then we should listen to same events on xhr.upload object.*/