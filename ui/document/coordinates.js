/*Any point on the page has coordinates:

Relative to the window – elem.getBoundingClientRect().
Relative to the document – elem.getBoundingClientRect() plus the current page scroll.
Window coordinates are great to use with position:fixed, and document coordinates do well with position:absolute.

Both coordinate systems have their pros and cons; there are times we need one or the other one, just like CSS position absolute and fixed.

*/