var person = {
    'firstName': 'Matheus',
    'lastName': 'Gomes',
    age: 26,
    greet(){
        console.log('Hello World!')
    }
}

person.height = 1.79

console.log(person, "\n")

console.log(person['lastName'], "\n")

console.log(person['lastName'], "\n")

delete(person.age)

console.log(person, "\n")

console.log('master' in person, "\n")

for(let key in person){
    console.log(person[key])
}


delete(person.greet)
 // dentro de uma classe e objetos temos método, não function
person.greet = function(){
    console.log('Hello world')
}

person.greet()

var person3 = {
    firstName: 'Jhon',
    lastName: 'Lennon',

    getFullName: function (){
        console.log(this.firstName, this.lastName)
    }
}
person3.getFullName()
