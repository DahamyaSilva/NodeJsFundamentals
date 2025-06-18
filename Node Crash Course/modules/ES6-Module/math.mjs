function add(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

//export a single function
// export default add

//export multiple functions
export default {
    add, 
    subtract,
    version: '1.0.0',
    name: 'math module'
}