/*Pressing a key always generates a keyboard event, be it symbol keys or special keys like Shift or Ctrl and so on. The only exception is Fn key that sometimes presents on a laptop keyboard. There’s no keyboard event for it, because it’s often implemented on lower level than OS.

Keyboard events:

keydown – on pressing the key (auto-repeats if the key is pressed for long),
keyup – on releasing the key.
Main keyboard event properties:

code – the “key code” ("KeyA", "ArrowLeft" and so on), specific to the physical location of the key on keyboard.
key – the character ("A", "a" and so on), for non-character keys, such as Esc, usually has the same value as code.
In the past, keyboard events were sometimes used to track user input in form fields. That’s not reliable, because the input can come from various sources. We have input and change events to handle any input (covered later in the chapter Events: change, input, cut, copy, paste). They trigger after any kind of input, including copy-pasting or speech recognition.

We should use keyboard events when we really want keyboard. For example, to react on hotkeys or special keys. */