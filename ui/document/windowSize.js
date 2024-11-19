/*Geometry:

Width/height of the visible part of the document (content area width/height): document.documentElement.clientWidth/clientHeight

Width/height of the whole document, with the scrolled out part:

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
Scrolling:

Read the current scroll: window.pageYOffset/pageXOffset.

Change the current scroll:

window.scrollTo(pageX,pageY) – absolute coordinates,
window.scrollBy(x,y) – scroll relative the current place,
elem.scrollIntoView(top) – scroll to make elem visible (align with the top/bottom of the window).
*/