/*Mouse events have the following properties:

Button: button.

Modifier keys (true if pressed): altKey, ctrlKey, shiftKey and metaKey (Mac).

If you want to handle Ctrl, then don’t forget Mac users, they usually use Cmd, so it’s better to check if (e.metaKey || e.ctrlKey).
Window-relative coordinates: clientX/clientY.

Document-relative coordinates: pageX/pageY.

The default browser action of mousedown is text selection, if it’s not good for the interface, then it should be prevented.

In the next chapter we’ll see more details about events that follow pointer movement and how to track element changes under it.

*/