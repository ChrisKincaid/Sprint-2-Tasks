// Path: scripts/script00B.js

document.getElementById("testScriptA").addEventListener("click", function(){
    alert("Script A is working.");
    });

    // -------------------F!GHT GANE ------------------- //
class Player {
    constructor(name, title) {
        this.name = name;
        this.title = title;
        if (title === "warrior") {
            this.health = Math.floor(Math.random() * 40) + 60;
            this.run = false;
        } else if (title === "wizard") {
            this.health = Math.floor(Math.random() * 20) + 55;
            this.run = false;
        } else if (title === "chicken") {
            this.health = Math.floor(Math.random() * 10) + 40;
            this.run = Math.random() >= 0.5;
        }
        }
    }

document.getElementById("fightButton").addEventListener("click", function() {
    const player01Name = 
    document.getElementById("player01Name").value;
    const player02Name =
    document.getElementById("player02Name").value;
    const player01Title =
    document.getElementById("player01Title").value;
    const player02Title =
    document.getElementById("player02Title").value;
    if (player01Name === "" || player02Name === "") {
        alert("Please enter a name for both players.");
        return;
    }
    else {
        const player01 = new Player(player01Name, player01Title);
        const player02 = new Player(player02Name, player02Title);
        if (player01.run === true || player02.run === true) {
            if (player01.run === true && player02.run === true) {
                alert("Both players ran away!");
            } else if (player01.run === true) {
                alert(player01.name + " ran away!");
            } else if (player02.run === true){
                alert(player02.name + " ran away!");
            }
            return;
        } else if (player01.health > player02.health) {
            alert(player01.name + " wins!");
        } else if (player01.health < player02.health) {
            alert(player02.name + " wins!");
        } else {
            alert("It's a tie!");
        }
        // console.log(player01);
        // console.log(player02);
    }
}
);

// -------------------F!GHT GANE END ------------------- //

// Using this

// Learning code 001==================================
// const user = {
//     fName: "John",
//     lName: "Doe",
//     fullName: function() {
//         console.log(this); // this refers to the object user, the entire object
//         console.log(this.fName + " " + this.lName); // this refers to the object user's variables
//     }
// }
// user.fullName();
// ====================================================

// Learning code 002==================================
// const user = {
//     fName: "John",
//     lName: "Doe",
//     hobbies: ["reading", "coding", "gaming"],
//     listHobbies: function() 
//     {
//         this.hobbies.forEach(function(hobby) {
//             console.log(this.fName); //Undefined
//             // this refers to the window object, 
//             // because the ForEach function is not attached to the user
//             console.log(hobby);
//         });
//     }
// }

// user.listHobbies();
// ====================================================

// Learning code 003==================================
// const user = {
//     fName: "John",
//     lName: "Doe",
//     hobbies: ["reading", "coding", "gaming"],
//     listHobbies: function() 
//     {
//         this.hobbies.forEach(function(hobby) {
//             console.log(this.fName); //Undefined
//             // this refers to the window object, 
//             // because the ForEach function is not attached to the user
//             console.log(hobby);
//         }, this); // this refers to the user object
//         // forEach allows us to pass this
//     }
// }

// user.listHobbies();
// ====================================================

// Learning code 004==================================
// using this with constructor functions
// When using the new keyword, this refers to the new object that is created
// function User(fName, lName) 
// {
//     this.fName = fName;
//     this.lName = lName;
//         console.log(this.fName + " " + this.lName);
// }

// const user1 = new User("fName001", "lName001");
// const user2 = new User("fName002", "lName002");
// ====================================================






