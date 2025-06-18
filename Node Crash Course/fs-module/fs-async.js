const fs = require('fs').promises;
const { error } = require('console');
const path = require('path');

//define a folder and file path
const folderPath = path.join(__dirname, 'Products' );
const filePath = path.join(folderPath,'ProductLists.pdf');
console.log(filePath);

// 1. create a directory if it does not exists

async function createFolder(){
    try {
        await fs.access(folderPath)
    } catch {
        await fs.mkdir(folderPath)
        console.log('Folder created');
        
    }
}

createFolder();

async function writeFile(){
    try {
        await fs.writeFile(filePath, 'This is a product list.\n')
        console.log(' File created successfully');
        
    } catch (error){
        console.log(error);
        
    }
}

writeFile();

async function appendToFile(){
    try {
        await fs.appendFile(filePath, 'Goods sold.\n')
        console.log(' File created successfully');
        
    } catch (error){
        console.log(error);
        
    }
}

appendToFile();

async function readFile() {
    try {
        const content = await fs.readFile(filePath, 'utf-8'); 
        console.log(content);
    } catch (error) {
        console.log(error);
    }
}
readFile();

async function deleteFile() {
    try {
        await fs.unlink(filePath,); 
        console.log('file deleted');
    } catch (error) {
        console.log(error);
    }
}
// deleteFile();