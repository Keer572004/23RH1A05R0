//traditional code
function findOddOrEven(no){
    if(n0%2==0){
        console.log("Even");
    }else{ 
        console.log("Odd");
    }
}
//using arrow function
const OddOrEven=(no)=>{
    if(no%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
findOddOrEven(17);
OddOrEven(20);