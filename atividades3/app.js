const myArray = [1,2,3,4,5,6,7,8,9,10]


let par = []
let impar = []

for(i=0; i < myArray.length; i ++){
    const  number = myArray[i];
    const ispar = number % 2 === 0;
    
    if(ispar){
        par.push(number)
    } else{
        impar.push(number)
    }
}
console.log(`O array de numeros pares teve como resultado ${par.join(', ')} e impar ${impar.join(', ')}`)