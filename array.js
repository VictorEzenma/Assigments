//ARRAY
//Array of 10 numbers
array5 = [2,4,6,8,10,12,14,16,18,20]
console.log(array5)

//deleting last two elements from array
array5.pop(9)
console.log(array5)
array5.pop(8)
console.log(array5)

//changing elements to a list of animals
array5[0] = "Elephant"
array5[1] = "Wolf"
array5[2] = "Fox"
array5[3] = "Eagle"
array5[4] = "Parrot"
array5[5] = "Falcon"
array5[6] = "Shark"
array5[7] = "Jaguar"
array5[8] = "Cheetah"
array5[9] = "Cats"

console.log(array5)

//conditions
const modifyArray = 1.1

if (modifyArray > 100){
    console.log("yellow Light");
}else if (modifyArray < 100){
    console.log("Green Light");
} else {
    console.log("number is 0 or less")
}