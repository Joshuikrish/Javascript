/*Both async and defer have one common thing: downloading of such scripts doesn’t block page rendering. So the user can read page content and get acquainted with the page immediately.

But there are also essential differences between them:

Order	DOMContentLoaded
async	Load-first order. Their document order doesn’t matter – which loads first runs first	Irrelevant. May load and execute while the document has not yet been fully downloaded. That happens if scripts are small or cached, and the document is long enough.
defer	Document order (as they go in the document).	Execute after the document is loaded and parsed (they wait if needed), right before DOMContentLoaded.
In practice, defer is used for scripts that need the whole DOM and/or their relative execution order is important.

And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.*/