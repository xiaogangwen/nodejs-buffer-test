const fs = require('fs');

try {
    const data = fs.readFileSync('bigFile.txt');
    console.log('File read successfully, size:', data.length);
} catch (err) {
    console.error('Error:', err.message);
}
