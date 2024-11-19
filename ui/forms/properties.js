/*Form navigation:

document.forms
A form is available as document.forms[name/index].
form.elements
Form elements are available as form.elements[name/index], or can use just form[name/index]. The elements property also works for <fieldset>.
element.form
Elements reference their form in the form property.
Value is available as input.value, textarea.value, select.value, etc. (For checkboxes and radio buttons, use input.checked to determine whether a value is selected.)

For <select>, one can also get the value by the index select.selectedIndex or through the options collection select.options.

These are the basics to start working with forms. We’ll meet many examples further in the tutorial.

In the next chapter we’ll cover focus and blur events that may occur on any element, but are mostly handled on forms.*/