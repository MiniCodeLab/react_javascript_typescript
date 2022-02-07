const oldUser = (name, lastName, image) => {
    return {
        name: name,
        lastName: lastName,
        image: image,
        timestamp: Date.now()
    }
}

console.log(oldUser("Bruce", "Wayne", "url"));

const newUser =(name, lastName, image) => {
    return {
        name,
        lastName,
        image,
        timestamp: Date.now()
    }
}

console.log(newUser("Bruce", "Wayne", "url"))
