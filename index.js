console.log("Hello world");
//Scenario
//Client
//Admin
//Dev
//Some code that is not really using types.
function displayHomePageText(User) {
    console.log('Hello user');
}
//Showcase different ways of type narrowing.
//Union types
//Type predicates
//Flow analysis - how the parser helps you with undefined and reducing the scope
displayHomePageText('test');
