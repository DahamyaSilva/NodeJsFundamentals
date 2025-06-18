console.log('command line');

function greetUser(name){
    console.log(`hello ${name}`);
    
}
const getUser = process.argv[2];
greetUser(getUser);
