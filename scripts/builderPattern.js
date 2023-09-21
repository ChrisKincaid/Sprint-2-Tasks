class User {
    constructor(name, {age = 'No age entered', phone = 'No phone number entered', address = 'No address entered'} = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
    showUserInfo() {
        alert(`Name: ${this.name}\nAge: ${this.age}\nPhone: ${this.phone}\nAddress: ${this.address}`);
    }
}

// create a new user object when button is pressed
document.getElementById("submitBuilder").addEventListener("click", function(){
    // retrieve the user's name from the input field
    let userName = document.getElementById("inputName").value;
    if (document.getElementById("inputName").value === "") {
        alert("Please enter a name");
        return;
    }
    // retrieve the user's age from the input field
    let userAge;
    if (document.getElementById("inputAge").value != "") {
        let userAge = document.getElementById("inputAge").value;
        return;
    }
    // retrieve the user's phone from the input field
    let userPhone;
    if (document.getElementById("inputPhone").value != "") {
        let userPhone = document.getElementById("inputPhone").value;
        return;
    }
    // retrieve the user's address from the input field
    let userAddress;
    if (document.getElementById("inputAddress").value != "") {
        let userAddress = document.getElementById("inputAddress").value;
        return;
    }
    let newUser = new User(userName, {age: userAge, phone: userPhone, address: userAddress});
    newUser.showUserInfo();
});