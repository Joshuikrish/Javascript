/*To generate an event from code, we first need to create an event object.

The generic Event(name, options) constructor accepts an arbitrary event name and the options object with two properties:

bubbles: true if the event should bubble.
cancelable: true if the event.preventDefault() should work.
Other constructors of native events like MouseEvent, KeyboardEvent and so on accept properties specific to that event type. For instance, clientX for mouse events.

For custom events we should use CustomEvent constructor. It has an additional option named detail, we should assign the event-specific data to it. Then all handlers can access it as event.detail.

Despite the technical possibility of generating browser events like click or keydown, we should use them with great care.

We shouldn’t generate browser events as it’s a hacky way to run handlers. That’s bad architecture most of the time.

Native events might be generated:

As a dirty hack to make 3rd-party libraries work the needed way, if they don’t provide other means of interaction.
For automated testing, to “click the button” in the script and see if the interface reacts correctly.
Custom events with our own names are often generated for architectural purposes, to signal what happens inside our menus, sliders, carousels etc.

*/