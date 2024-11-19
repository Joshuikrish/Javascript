/*It has a few limitations:

We can’t send megabytes: the body limit for keepalive requests is 64KB.
If we need to gather a lot of statistics about the visit, we should send it out regularly in packets, so that there won’t be a lot left for the last onunload request.
This limit applies to all keepalive requests together. In other words, we can perform multiple keepalive requests in parallel, but the sum of their body lengths should not exceed 64KB.
We can’t handle the server response if the document is unloaded. So in our example fetch will succeed due to keepalive, but subsequent functions won’t work.
In most cases, such as sending out statistics, it’s not a problem, as the server just accepts the data and usually sends an empty response to such requests.
*/