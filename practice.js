
//dog years age
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    console.log(ageInDogYears)
    return ageInDogYears
}
const dogAge = calculateAgeInDogYears(45)

//best in show

const dogBreedSentence = (breed) => {
    const sentence = `My favorite dog breed is ${breed}.`
    return sentence 
}
const dog = dogBreedSentence("dodge")

console.log("When it comes to pets, " + dog)