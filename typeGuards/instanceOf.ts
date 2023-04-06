
interface HomePagePropsDate {
    firstName: string;
    lastLogin?: string | Date; //this is optional
}

//use instanceOf for complex types.
function renderHomePageTextWithDate({firstName, lastLogin} : HomePagePropsDate) {
    //TODO Use narrowing to help the compiler see that lastLogin has access to the Date class methods
    console.log(` Hello - ${firstName} `)
    if (lastLogin instanceof Date) {
        console.log(` Your last login was - ${lastLogin.toUTCString()} `)
    } else{
        console.log(` Your last login was - ${lastLogin?.toUpperCase()} `)

    }
}

const lastLoginWithDate : HomePagePropsDate = {firstName: 'Andres', lastLogin: new Date()}
renderHomePageTextWithDate(lastLoginWithDate)