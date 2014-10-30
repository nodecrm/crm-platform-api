'use strict';

// From the discussion about "Better local require() paths for Node.js"
// https://gist.github.com/branneman/8048520
process.env.NODE_PATH = __dirname;
require( 'module' ).Module._initPaths();
