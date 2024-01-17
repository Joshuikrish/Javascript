/*Event delegation is really cool! It’s one of the most helpful patterns for DOM events.

It’s often used to add the same handling for many similar elements, but not only for that.

The algorithm:

Put a single handler on the container.
In the handler – check the source element event.target.
If the event happened inside an element that interests us, then handle the event.
Benefits:

Simplifies initialization and saves memory: no need to add many handlers.
Less code: when adding or removing elements, no need to add/remove handlers.
DOM modifications: we can mass add/remove elements with innerHTML and the like.
The delegation has its limitations of course:

First, the event must be bubbling. Some events do not bubble. Also, low-level handlers should not use event.stopPropagation().
Second, the delegation may add CPU load, because the container-level handler reacts on events in any place of the container, no matter whether they interest us or not. But usually the load is negligible, so we don’t take it into account.
*/