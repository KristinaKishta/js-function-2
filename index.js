console.log('Users:', users)
console.log('Todos:', todos)
//prompt the user for a letter
let letter = String(prompt('Enter a letter'))
//find all the users whose name starts with that letter

let usersWithLetter = users.filter(user => user.name.toLocaleLowerCase().includes(letter.toLocaleLowerCase()))
console.log('Users with letter:', letter)
console.log(usersWithLetter)

//say hi to those users in the console but only 1 greeting every 2 seconds
let i = 0
 let intervalId = setInterval(() => {
    let user = usersWithLetter[i]
    if (user){
    console.log(`Hi ${user.name}`)
    i++
    }
   else {
     clearInterval(intervalId)
   }
}, 2000)

//prompt the user for userId. using the value find all the todos that are incomplete and console.log them

let userId = Number(prompt('Enter a userId'))

let userTodos = todos.filter(todo => todo.userId === userId)

let incompleteTodos = userTodos.filter(todo => todo.completed === false)

console.log(incompleteTodos)