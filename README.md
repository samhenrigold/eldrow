# eldrow
Trying to manually reverse-engineer World's source code.

Most of the work has been de-Babel-ing the minified bundle that ships to the browser. Making things all ES6 pretty, attempting to rename variables and functions, etc.

There are a fair number of packages likely being used, trying to figure out which minified block corresponds to which method from which package is an uphill battle. Lodash and clipboard-polyfill are the ones I've identified so far. Lodash has been installed and imported. 
