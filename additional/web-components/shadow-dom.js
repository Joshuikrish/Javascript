/*Shadow DOM is a way to create a component-local DOM.

shadowRoot = elem.attachShadow({mode: open|closed}) – creates shadow DOM for elem. If mode="open", then it’s accessible as elem.shadowRoot property.
We can populate shadowRoot using innerHTML or other DOM methods.
Shadow DOM elements:

Have their own ids space,
Invisible to JavaScript selectors from the main document, such as querySelector,
Use styles only from the shadow tree, not from the main document.
Shadow DOM, if exists, is rendered by the browser instead of so-called “light DOM” (regular children).*/