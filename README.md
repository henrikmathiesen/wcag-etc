# wcag-etc

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

## Misc

### Express vs Connect

"Use Express for web apps", "It can do the same things as connect"  
http://stackoverflow.com/questions/5284340/what-is-node-js-connect-express-and-middleware  

### cross-env NODE_ENV=production
Do use cross-env for cross platform/terminal support, https://www.npmjs.com/package/cross-env  
Make sure that cross-env command is right before the script in npm scripts, like in package.json in this project  
Issue: https://github.com/kentcdodds/cross-env/issues/13  
Answer: https://github.com/mikechabot/cross-env-example/pull/1
