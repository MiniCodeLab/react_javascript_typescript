const oldUser =(name, lastName, image) => {
    return {
        name,
        lastName,
        image,
        timestamp: Date.now(),
        saveData: function () {console.log("Guardando...")}
    }
}

const userOld = oldUser("Bruce", "Wayne", "url");
userOld.saveData();

const newUser =(name, lastName, image) => {
    return {
        name,
        lastName,
        image,
        timestamp: Date.now(),
        saveData: () => console.log("Guardando...")
    }
}