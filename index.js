// Write your code in this file!
const currentUser = 'Prisca Mitchell';

//const welcomeMessage = 'Welcome to Flatbook';
//const welcomeMessage = currentUser;
//const welcomeMessage = ('Welcome to Flatbook', + currentUser);
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
//currentUser.slice(0,1) -> currentUser.slice(0,2)
