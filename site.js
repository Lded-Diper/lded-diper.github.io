const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const thing = document.querySelector('#welcome')

if(isMorning)
{
    thing.textContent = 'Good Morning'
}
if(isAfternoon)
{
    thing.textContent = 'Good Afternoon'
}
if(isEvening)
{
    thing.textContent = 'Good Evening'
}

localStorage.setItem("It's a secret to everybody.", 'they nerfed my character in the game i play and i am not happy about it')