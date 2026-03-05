const hours = new Date().getHours() // get the current hour
const todos = JSON.parse(localStorage.getItem('todo-list')) || []
const todoList = document.querySelector('#todo-list-insert')
const newItem = document.querySelector('#new-todo')
const addNewItem = document.querySelector('#chud')
const pokemonImageLocation = document.querySelector('#pokemon')

const getRandomPokemon = async () => {
    const response =  await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 149 + 1))
    const data = await response.json()
    const { name, sprites } = data
    return { name, front_default: sprites.front_default }
}


const renderPokemon = async () => {
    const poke = await getRandomPokemon()
    console.log(poke)
    const img = document.createElement('img')
    img.src = poke.front_default
    img.alt = poke.name
    pokemonImageLocation.append(img)
}

renderPokemon()

addNewItem.addEventListener('click', () => {
    todos.push({ text: newItem.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
    todoList.innerHTML = ''
    renderTodos()
})

console.log(todos)

const renderTodos = () => {
    todos.forEach((todo) => {
    const li = document.createElement('li')
    li.textContent = todo.text
    todoList.append(li)
})}

renderTodos()

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

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

const next = document.querySelector('#next')
next.addEventListener('click', () => {
    currentImage++
    showImages()
})

const prev = document.querySelector('#prev')
prev.addEventListener('click', () => {
    currentImage--
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000)