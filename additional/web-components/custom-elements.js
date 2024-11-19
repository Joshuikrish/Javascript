class MyName extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
       
        this.innerHTML = "my name is " + this.getAttribute('name');
    }
}

customElements.define('my-name', MyName);

/*Custom elements can be of two types:

“Autonomous” – new tags, extending HTMLElement.

Definition scheme:

class MyElement extends HTMLElement {
  constructor() { super(); /* ...  }
  connectedCallback() { /* ... }
  disconnectedCallback() { /* ...   }
  static get observedAttributes() { return [/* ... ]; }
  attributeChangedCallback(name, oldValue, newValue) { /* ...  }
  adoptedCallback() { /* ...  }
 }
customElements.define('my-element', MyElement);
/* <my-element> 
“Customized built-in elements” – extensions of existing elements.

Requires one more .define argument, and is="..." in HTML:

class MyButton extends HTMLButtonElement { /*... }
customElements.define('my-button', MyElement, {extends: 'button'});
/* <button is="my-button"> 
Custom elements are well-supported among browsers. There’s a polyfill*/