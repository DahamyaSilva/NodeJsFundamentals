
const username = 'dee';
const currentTime = new Date();
const hours = currentTime.getHours();

console.log(hours);

let greeting;

if(hours < 12 ){
    greeting = "good morning";
}
else if (hours <18 && hours > 12 ){
    greeting = "good afternoon";
}
else{
    greeting = "good evening";
}

console.log(`${greeting}, ${username}! Welcome to node js`);