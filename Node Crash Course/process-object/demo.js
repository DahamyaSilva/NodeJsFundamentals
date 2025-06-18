//getting information about the environment
console.log(process.env.NODE_ENV); //access the env variables
console.log(process.version); //get node js version
console.log(process.platform); //get the operating system
console.log(process.arch); //get the CPU architecture

//command line arguments
console.log(process.argv); //get the operating system

//working directory
console.log(process.cwd());

//process control
// process.exit(0) //means we are exiting the application...0 means sucess non zero means failiure 


//process events
process.on('exit', (code) =>{
    console.log(`process exiting with the code ${code}`);
    
})