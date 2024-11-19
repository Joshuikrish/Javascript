/*The fetch method allows to track download progress.

Please note: there’s currently no way for fetch to track upload progress. For that purpose, please use XMLHttpRequest, we’ll cover it later.

To track download progress, we can use response.body property. It’s a ReadableStream – a special object that provides body chunk-by-chunk, as it comes. Readable streams are described in the Streams API specification.

Unlike response.text(), response.json() and other methods, response.body gives full control over the reading process, and we can count how much is consumed at any moment.*/