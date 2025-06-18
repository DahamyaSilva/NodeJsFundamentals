const fs = require('fs');
const path = require('path');

//define a folder and file path
const folderPath = path.join(__dirname, 'StudentsFolder' );
const filePath = path.join(folderPath,'studentLists.pdf');
console.log(filePath);

// 1. create a directory if it does not exists

if(!fs.existsSync(folderPath)){
    //create the folder
    fs.mkdirSync(folderPath);
    console.log('Folder created');
    
}

// 2. create and write to file

fs.writeFileSync(filePath, 'list of students. \n');
console.log('file created and written');

// 3. append more content

fs.appendFileSync(filePath, 'This is a appended line.\n')

// 4. read the file content 

const content = fs.readFileSync(filePath, 'utf-8');
console.log(content);

// 5. delete a file 
// fs.unlinkSync(filePath)
