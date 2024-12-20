/*document.cookie provides access to cookies.

Write operations modify only the cookie mentioned in it.
Name/value must be encoded.
One cookie may not exceed 4KB in size. The number of cookies allowed on a domain is around 20+ (varies by browser).
Cookie attributes:

path=/, by default current path, makes the cookie visible only under that path.
domain=site.com, by default a cookie is visible on the current domain only. If the domain is set explicitly, the cookie becomes visible on subdomains.
expires or max-age sets the cookie expiration time. Without them, the cookie dies when the browser is closed.
secure makes the cookie HTTPS-only.
samesite forbids the browser to send the cookie with requests coming from outside the site. This helps to prevent XSRF attacks.
Additionally:

The browser may forbid third-party cookies, e.g. Safari does that by default. There is also work in progress to implement this in Chrome.
When setting a tracking cookie for EU citizens, GDPR requires to ask for permission.*/