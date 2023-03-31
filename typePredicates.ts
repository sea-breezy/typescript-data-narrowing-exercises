interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];


//Make this a type predicate
export function isAdmin(person: Person){
    return person.type === 'admin';
}


//Make this a type predicate
export function isUser(person: Person) {
    return person.type === 'user';
}

//set the additionalInformation variable via type narrowing and defining Type Predicates
//this should hold role for Admins, and occupation for Users

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    //TODO. implement me
    //...

    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

//These logs should print peoples additional information!
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);