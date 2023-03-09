class Pet {
    constructor(type, name, breed, age, gender, okWith, firstname, lastname, email) {
        this.type = type;
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.okWith = this.checkOkWith(okWith);
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    checkOkWith(array) {
        let result = "";
        if (array.includes("Children")) {
            result += "✅ Children";
        }
        if (array.includes("Cats")) {
            result += " ✅ Cats";
        }
        if (array.includes("Dogs")) {
            result += " ✅ Dogs";
        }
        if (array.includes("OtherAnimals")) {
            result += " ✅ Other animals";
        }
        return result;
    }
}

const defaultPet1 = new Pet("cat", "Virgule", "mixed", 8, "female", ["Children"], "Constance", "Prevot", "test1@gmail.com");
const defaultPet2 = new Pet("dog", "Plume", "curly", 2, "female", [], "Catherine", "Hacquin", "test2@gmail.com")
const defaultPet3 = new Pet("dog", "Kevin", "golden retriever", 3, "male", ["Children", "Cats", "Dogs", "OtherAnimals"], "Marianne", "Granger", "test3@gmail.com");
const defaultPet4 = new Pet("dog", "Fredo", "husky", 1, "male", ["Children", "Cats"], "Marianne", "Granger", "test4@gmail.com");
const defaultPet5 = new Pet("cat", "Chipie", "persian", 12, "female", ["Children", "Dogs"], "Tanou", "Prevot", "test5@gmail.com");
const defaultPet6 = new Pet("cat", "Sacha", "orange", 11, "female", "mixed", ["Dogs"], "Tanou", "Prevot", "test6@gmail.com");

const pets = [defaultPet1, defaultPet2, defaultPet3, defaultPet4, defaultPet5, defaultPet6];
// const pets = [defaultPet1, defaultPet2, defaultPet3, defaultPet4, defaultPet5];
// const pets = [defaultPet1];

const displayAnimals = () => {
    const div = document.getElementById("content");
    let card = "";
    let rows = Math.round(pets.length / 2);
    for (let i = 0; i < rows; i++) {
        card += `<div class="row">`
        for (let j = 0; j < (i * 2 === pets.length - 1 ? 1 : 2); j++) {
            let k = i * 2 + j;
            console.log(k);
            card += `
            <div class="column">
                <img alt="cat sitting on someone's lap and being pet" class="image" src="pets/${pets[k].name}.jpg">
                <a class="square">
                <button class="interested">Interested</button>
                <div class="information"><p class="title">My name is ${pets[k].name} and I am ${pets[k].age}.</p>
                <br />Breed: ${pets[k].breed}<br />Gender: ${pets[k].gender}<br />${pets[k].okWith}</div>
                </a>
            </div>`
        }
        card += `</div>`
    }
    div.innerHTML += card;
}