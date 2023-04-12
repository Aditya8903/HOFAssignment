let input = "Aditya";
function reverseString(input){
    let result = input.split("").reverse().join("");
    console.log(result);
}
setTimeout(function(){
    reverseString(input);
},2000)