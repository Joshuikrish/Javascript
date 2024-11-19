/*File objects inherit from Blob.

In addition to Blob methods and properties, File objects also have name and lastModified properties, plus the internal ability to read from filesystem. We usually get File objects from user input, like <input> or Drag’n’Drop events (ondragend).

FileReader objects can read from a file or a blob, in one of three formats:

String (readAsText).
ArrayBuffer (readAsArrayBuffer).
Data url, base-64 encoded (readAsDataURL).
In many cases though, we don’t have to read the file contents. Just as we did with blobs, we can create a short url with URL.createObjectURL(file) and assign it to <a> or <img>. This way the file can be downloaded or shown up as an image, as a part of canvas etc.

And if we’re going to send a File over a network, that’s also easy: network API like XMLHttpRequest or fetch natively accepts File objects.

*/