/*AbortController is a simple object that generates an abort event on its signal property when the abort() method is called (and also sets signal.aborted to true).
fetch integrates with it: we pass the signal property as the option, and then fetch listens to it, so it’s possible to abort the fetch.
We can use AbortController in our code. The “call abort()” → “listen to abort event” interaction is simple and universal. We can use it even without fetch.
*/