/*
To manage classes, there are two DOM properties:

className – the string value, good to manage the whole set of classes.
classList – the object with methods add/remove/toggle/contains, good for individual classes.
To change the styles:

The style property is an object with camelCased styles. Reading and writing to it has the same meaning as modifying individual properties in the "style" attribute. To see how to apply important and other rare stuff – there’s a list of methods at MDN.

The style.cssText property corresponds to the whole "style" attribute, the full string of styles.

To read the resolved styles (with respect to all classes, after all CSS is applied and final values are calculated):

The getComputedStyle(elem, [pseudo]) returns the style-like object with them. Read-only.

*/