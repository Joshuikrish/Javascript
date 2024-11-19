/*ArrayBuffer is the core object, a reference to the fixed-length contiguous memory area.

To do almost any operation on ArrayBuffer, we need a view.

It can be a TypedArray:
Uint8Array, Uint16Array, Uint32Array – for unsigned integers of 8, 16, and 32 bits.
Uint8ClampedArray – for 8-bit integers, “clamps” them on assignment.
Int8Array, Int16Array, Int32Array – for signed integer numbers (can be negative).
Float32Array, Float64Array – for signed floating-point numbers of 32 and 64 bits.
Or a DataView – the view that uses methods to specify a format, e.g. getUint8(offset).
In most cases we create and operate directly on typed arrays, leaving ArrayBuffer under cover, as a “common denominator”. We can access it as .buffer and make another view if needed.

There are also two additional terms, that are used in descriptions of methods that operate on binary data:

ArrayBufferView is an umbrella term for all these kinds of views.
BufferSource is an umbrella term for ArrayBuffer or ArrayBufferView.*/