interface Client {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    access: "critical" | "basic";
}

export type User = Client | Admin;


function displayHomePageText(user: User) {
    if('access' in user) {
        console.log('Hello Admin')
    } else {
        console.log('Hello Client')
    }

}

const adminUser : User = {name: 'John', age: 20, access: 'critical' }
const clientUser : User = {name: 'Sandra', age: 24, occupation: 'engineer' }
displayHomePageText(adminUser)
displayHomePageText(clientUser)