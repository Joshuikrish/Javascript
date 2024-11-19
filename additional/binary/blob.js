/*While ArrayBuffer, Uint8Array and other BufferSource are “binary data”, a Blob represents “binary data with type”.

That makes Blobs convenient for upload/download operations, that are so common in the browser.

Methods that perform web-requests, such as XMLHttpRequest, fetch and so on, can work with Blob natively, as well as with other binary types.

We can easily convert between Blob and low-level binary data types:

We can make a Blob from a typed array using new Blob(...) constructor.
We can get back ArrayBuffer from a Blob using blob.arrayBuffer(), and then create a view over it for low-level binary processing.
Conversion streams are very useful when we need to handle large blob. You can easily create a ReadableStream from a blob. The Blob interface’s stream() method returns a ReadableStream which upon reading returns the data contained within the blob.*/