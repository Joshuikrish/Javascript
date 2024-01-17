/*We covered events mouseover, mouseout, mousemove, mouseenter and mouseleave.

These things are good to note:

A fast mouse move may skip intermediate elements.
Events mouseover/out and mouseenter/leave have an additional property: relatedTarget. That’s the element that we are coming from/to, complementary to target.
Events mouseover/out trigger even when we go from the parent element to a child element. The browser assumes that the mouse can be only over one element at one time – the deepest one.

Events mouseenter/leave are different in that aspect: they only trigger when the mouse comes in and out the element as a whole. Also they do not bubble.

*/
document.onmouseover = function(e){
    e.preventDefault();
    console.log(e);
}