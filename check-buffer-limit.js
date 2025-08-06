const buffer = require('buffer');
console.log('MAX_LENGTH:', buffer.constants.MAX_LENGTH);
console.log('In GiB:', buffer.constants.MAX_LENGTH / (1024 * 1024 * 1024));
