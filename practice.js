
//Dog years age
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    console.log(ageInDogYears)
    return ageInDogYears
}
const dogAge = calculateAgeInDogYears(45)

//Best in show
const dogBreedSentence = (breed) => {
    const sentence = `My favorite dog breed is ${breed}.`
    return sentence 
}
const dog = dogBreedSentence("dodge")
console.log("When it comes to pets, " + dog)

//addition
const add = (num2, num1, num3) => {
    const sum = num1 + num2 + num3
    console.log(sum)
}
const added = add(17,4, 11)

//Self-Driving cars
const go = (direction, speed) => {
    const carMessage = `The car is moving ${direction} at ${speed} mph.`
        if (speed > 75){
            console.log(carMessage + " SLOW DOWN!")
        } else {
            console.log(carMessage)
        }
}
const car = go("circles", 30)

//Evens or Odds
const evenOrOdd = (num) => {
    if(num % 2 == 0 ){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
const testNumber = evenOrOdd(203)

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//Double Functions
