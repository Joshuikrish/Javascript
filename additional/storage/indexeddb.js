/*IndexedDB can be thought of as a “localStorage on steroids”. It’s a simple key-value database, powerful enough for offline apps, yet simple to use.

The best manual is the specification, the current one is 2.0, but few methods from 3.0 (it’s not much different) are partially supported.

The basic usage can be described with a few phrases:

Get a promise wrapper like idb.
Open a database: idb.openDb(name, version, onupgradeneeded)
Create object storages and indexes in onupgradeneeded handler or perform version update if needed.
For requests:
Create transaction db.transaction('books') (readwrite if needed).
Get the object store transaction.objectStore('books').
Then, to search by a key, call methods on the object store directly.
To search by an object field, create an index.
If the data does not fit in memory, use a cursor.*/