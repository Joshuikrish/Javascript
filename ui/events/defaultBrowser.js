/*There are many default browser actions:

mousedown – starts the selection (move the mouse to select).
click on <input type="checkbox"> – checks/unchecks the input.
submit – clicking an <input type="submit"> or hitting Enter inside a form field causes this event to happen, and the browser submits the form after it.
keydown – pressing a key may lead to adding a character into a field, or other actions.
contextmenu – the event happens on a right-click, the action is to show the browser context menu.
…there are more…
All the default actions can be prevented if we want to handle the event exclusively by JavaScript.

To prevent a default action – use either event.preventDefault() or return false. The second method works only for handlers assigned with on<event>.

The passive: true option of addEventListener tells the browser that the action is not going to be prevented. That’s useful for some mobile events, like touchstart and touchmove, to tell the browser that it should not wait for all handlers to finish before scrolling.

If the default action was prevented, the value of event.defaultPrevented becomes true, otherwise it’s false.

Stay semantic, don’t abuse
Technically, by preventing default actions and adding JavaScript we can customize the behavior of any elements. For instance, we can make a link <a> work like a button, and a button <button> behave as a link (redirect to another URL or so).

But we should generally keep the semantic meaning of HTML elements. For instance, <a> should perform navigation, not a button.

Besides being “just a good thing”, that makes your HTML better in terms of accessibility.

Also if we consider the example with <a>, then please note: a browser allows us to open such links in a new window (by right-clicking them and other means). And people like that. But if we make a button behave as a link using JavaScript and even look like a link using CSS, then <a>-specific browser features still won’t work for it.

*/