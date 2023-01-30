interface User {
    name: string,
    age: number
}

function saveUser(user: User) {
    console.log(user)
}
saveUser({
    name: "Rian Vitor",
    age: 20
})