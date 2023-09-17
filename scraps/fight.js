
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