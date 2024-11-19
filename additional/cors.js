/*To call methods and access the content of another window, we should first have a reference to it.

For popups we have these references:

From the opener window: window.open – opens a new window and returns a reference to it,
From the popup: window.opener – is a reference to the opener window from a popup.
For iframes, we can access parent/children windows using:

window.frames – a collection of nested window objects,
window.parent, window.top are the references to parent and top windows,
iframe.contentWindow is the window inside an <iframe> tag.
If windows share the same origin (host, port, protocol), then windows can do whatever they want with each other.

Otherwise, only possible actions are:

Change the location of another window (write-only access).
Post a message to it.
Exceptions are:

Windows that share the same second-level domain: a.site.com and b.site.com. Then setting document.domain='site.com' in both of them puts them into the “same origin” state.
If an iframe has a sandbox attribute, it is forcefully put into the “different origin” state, unless the allow-same-origin is specified in the attribute value. That can be used to run untrusted code in iframes from the same site.
The postMessage interface allows two windows with any origins to talk:

The sender calls targetWin.postMessage(data, targetOrigin).

If targetOrigin is not '*', then the browser checks if window targetWin has the origin targetOrigin.

If it is so, then targetWin triggers the message event with special properties:

origin – the origin of the sender window (like http://my.site.com)
source – the reference to the sender window.
data – the data, any object in everywhere except IE that supports only strings.
We should use addEventListener to set the handler for this event inside the target window.*/