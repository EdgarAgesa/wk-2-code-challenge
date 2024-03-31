// function that accepts two numbers to generate an array between them
function generate(start, end){
    let result=[]
    if (start<=end){
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
    }
    return result;  
}
console.log(generate(67,100))