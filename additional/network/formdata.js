/*FormData objects are used to capture HTML form and submit it using fetch or another network method.

We can either create new FormData(form) from an HTML form, or create an object without a form at all, and then append fields with methods:

formData.append(name, value)
formData.append(name, blob, fileName)
formData.set(name, value)
formData.set(name, blob, fileName)
Let’s note two peculiarities here:

The set method removes fields with the same name, append doesn’t. That’s the only difference between them.
To send a file, 3-argument syntax is needed, the last argument is a file name, that normally is taken from user filesystem for <input type="file">.
Other methods are:

formData.delete(name)
formData.get(name)
formData.has(name)*/