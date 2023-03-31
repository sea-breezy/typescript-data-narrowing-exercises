
interface HomePageProps {
    firstName: string;
    lastLogin?: string ; //this is optional
}

//use typeOf for simple types.
function renderHomePageText({firstName, lastLogin} : HomePageProps) {
    //TODO use typeguards (typeOf) to make the second log not show when lastLogin undefined.
    console.log(` Hello - ${firstName} `)
    console.log(` Your last login was - ${lastLogin} `)
}

const noLastLogin : HomePageProps = {firstName: 'Andres'}
const withLastLogin : HomePageProps = {firstName: 'Andres', lastLogin: '1 day ago'}

renderHomePageText(noLastLogin)
console.log('\nCalling with last login...\n')
renderHomePageText(withLastLogin)
