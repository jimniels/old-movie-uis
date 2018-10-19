# Old Movie UIs

**Development: `npm start`**

**Build: `npm run build`**

Content provided from [screen.waxy.org/screenshots/](http://screen.waxy.org/screenshots/). It's static HTML hosted on github, which means the data is static. This is ok. We can update the stuff manually and push when needed.

Here's how it works:

1. Gets the contents of http://screen.waxy.org/screenshots/ and write it into a static file `data.html` (this page is an apache index listing)
2. Parse using jquery to get all `<a>` hrefs of linked images
3. Generate a bunch of `<img>` tags pointing to the screens hosted at http://screen.waxy.org/screenshots/
4. `lazyload` jquery plugin loads the images
