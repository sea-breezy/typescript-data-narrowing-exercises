
interface HomePageProps {
    firstName: string;
    lastLogin?: string ; //this is optional
}

function renderHomePageText({firstName, lastLogin} : HomePageProps) {
    //TODO use typeguards to make the second log not show when lastLogin undefined.
    console.log(` Hello - ${firstName} `)
    console.log(` Your last login was - ${lastLogin} `)
}

const noLastLogin : HomePageProps = {firstName: 'Andres'}
const withLastLogin : HomePageProps = {firstName: 'Andres', lastLogin: '1 day ago'}

renderHomePageText(noLastLogin)
console.log('\nCalling with last login...\n')
renderHomePageText(withLastLogin)


interface HomePagePropsDate {
    firstName: string;
    lastLogin?: string | Date; //this is optional
}

function renderHomePageTextWithDate({firstName, lastLogin} : HomePagePropsDate) {
    //TODO Use narrowing to help the compiler see that lastLogin has access to the Date class methods
    console.log(` Hello - ${firstName} `)
    if () {
        console.log(` Your last login was - ${lastLogin.toUTCString()} `)
    } else{
        console.log(` Your last login was - ${lastLogin.toUpperCase()} `)

    }
}

const lastLoginWithDate : HomePagePropsDate = {firstName: 'Andres', lastLogin: new Date()}
renderHomePageTextWithDate(lastLoginWithDate)