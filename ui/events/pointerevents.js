/*Pointer events allow handling mouse, touch and pen events simultaneously, with a single piece of code.

Pointer events extend mouse events. We can replace mouse with pointer in event names and expect our code to continue working for mouse, with better support for other device types.

For drag’n’drops and complex touch interactions that the browser may decide to hijack and handle on its own – remember to cancel the default action on events and set touch-action: none in CSS for elements that we engage.

Additional abilities of pointer events are:

Multi-touch support using pointerId and isPrimary.
Device-specific properties, such as pressure, width/height, and others.
Pointer capturing: we can retarget all pointer events to a specific element until pointerup/pointercancel.*/