/*TextEncoder does the reverse thing – converts a string into bytes.

The syntax is:

let encoder = new TextEncoder();
The only encoding it supports is “utf-8”.

It has two methods:

encode(str) – returns Uint8Array from a string.
encodeInto(str, destination) – encodes str into destination that must be Uint8Array.*/