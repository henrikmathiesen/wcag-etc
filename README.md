# wcag-etc

https://henrikmathiesen.github.io/wcag-etc

## We focus on WCAG, following along 3 Pluralsight courses:  
https://app.pluralsight.com/library/courses/web-accessibility-getting-started  
https://app.pluralsight.com/library/courses/web-accessibility-meeting-guidelines  
https://app.pluralsight.com/library/courses/web-form-accessible

## Also, Foundation  
We need to get some repetition on Foundation and media queries in general, so we set that up also as a fun side thing

### Notes
In Foundation 5 we imported the individual sass files, like this:  
http://foundation.zurb.com/sites/docs/v/5.5.3/using-sass.html

But in Foundation 6 we instead include the mixins:  
http://foundation.zurb.com/sites/docs/sass.html#adjusting-css-output  

Imports (as I use them), can not use variables, that I dont like  
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import  

We do not use Foundations JavaScript widgets, only its SASS styling. Very little JavaScript is used on these pages,
only aria-roles-states-properties.html, where jQuery is included via CDN on that page, used for showing a simple
interactive menu that is also accessible (I hope).

## Misc

### Express vs Connect

"Use Express for web apps", "It can do the same things as connect"  
http://stackoverflow.com/questions/5284340/what-is-node-js-connect-express-and-middleware  

### cross-env NODE_ENV=production
Do use cross-env for cross platform/terminal support, https://www.npmjs.com/package/cross-env  
Make sure that cross-env command is right before the script in npm scripts, like in package.json in this project  
Issue: https://github.com/kentcdodds/cross-env/issues/13  
Answer: https://github.com/mikechabot/cross-env-example/pull/1

### cache bust and inject to index.html
Cache busting works with npm package hashmark, but I have problem injecting it into index.html due to this (I do want to replace the file):  
https://github.com/DannyMoerkerke/postbuild/issues/3

### Running NPM scripts from external file
We are just touching on it in this project, see package.json and the associated file. We will get back to that I think.
