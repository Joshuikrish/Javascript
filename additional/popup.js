/*Popup windows are used rarely, as there are alternatives: loading and displaying information in-page, or in iframe.

If we’re going to open a popup, a good practice is to inform the user about it. An “opening window” icon near a link or button would allow the visitor to survive the focus shift and keep both windows in mind.

A popup can be opened by the open(url, name, params) call. It returns the reference to the newly opened window.
Browsers block open calls from the code outside of user actions. Usually a notification appears, so that a user may allow them.
Browsers open a new tab by default, but if sizes are provided, then it’ll be a popup window.
The popup may access the opener window using the window.opener property.
The main window and the popup can freely read and modify each other if they have the same origin. Otherwise, they can change location of each other and exchange messages.
To close the popup: use close() call. Also the user may close them (just like any other windows). The window.closed is true after that.

Methods focus() and blur() allow to focus/unfocus a window. But they don’t work all the time.
Events focus and blur allow to track switching in and out of the window. But please note that a window may still be visible even in the background state, after blur.*/

window.open('https://krishna011.com.np','_blank','width:300,height:300')
