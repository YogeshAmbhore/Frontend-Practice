let user = {
    username : "Yogesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} Welcome to welbsite`)
        console.log(this);
    }
}

// console.log(user.welcomeMessage());
// user.username = "Kishu";
// user.welcomeMessage();
// console.log(this);

console.log(this)