let bob = {
    name: "Bob", 
    friends: ["sally", "sue", "george"], 
    printFriends() {
        this.friends.forEach(f =>
        console.log(this.name + " knows " + f));
    }
};

bob.printFriends();

const jim = {

    
    name: "Jim",
    friends: ["Celina", "Zach", "Felix", "Hailey"],
    prints() {
        this.friends.forEach(f =>
        console.log(this.name + " knows " + f));
    }
};
    
jim.prints();

