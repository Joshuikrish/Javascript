/*Images <img>, external styles, scripts and other resources provide load and error events to track their loading:

load triggers on a successful load,
error triggers on a failed load.
The only exception is <iframe>: for historical reasons it always triggers load, for any load completion, even if the page is not found.

The readystatechange event also works for resources, but is rarely used, because load/error events are simpler.*/