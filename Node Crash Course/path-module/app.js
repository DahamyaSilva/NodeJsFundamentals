const path = require('path');

//get file name form a path
console.log(path.basename('/users/files/test.txt'));

//get directory name form a path
console.log(path.dirname('/users/files/test.txt'));

//get file extension form a path
console.log(path.extname('/users/files/test.txt'));

//join paths (works across operating systems)
console.log(path.join('/users', 'files' , 'test.txt'));

//get absolute path
console.log(path.resolve('test.txt'));

//access special path properties
console.log(__filename); //current working file
console.log(__dirname); //current working directory

