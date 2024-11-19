/*The DOMContentLoaded event triggers on document when the DOM is ready. We can apply JavaScript to elements at this stage.
Script such as <script>...</script> or <script src="..."></script> block DOMContentLoaded, the browser waits for them to execute.
Images and other resources may also still continue loading.
The load event on window triggers when the page and all resources are loaded. We rarely use it, because there’s usually no need to wait for so long.
The beforeunload event on window triggers when the user wants to leave the page. If we cancel the event, browser asks whether the user really wants to leave (e.g we have unsaved changes).
The unload event on window triggers when the user is finally leaving, in the handler we can only do simple things that do not involve delays or asking a user. Because of that limitation, it’s rarely used. We can send out a network request with navigator.sendBeacon.
document.readyState is the current state of the document, changes can be tracked in the readystatechange event:
loading – the document is loading.
interactive – the document is parsed, happens at about the same time as DOMContentLoaded, but before it.
complete – the document and resources are loaded, happens at about the same time as window.onload, but before it.*/