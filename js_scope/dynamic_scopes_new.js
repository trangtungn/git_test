function User(handle) {
    this.handle = handle;
}

var andrew = new User("@AndrewWK");
console.log(andrew);


console.log("------ Summary: 4 ways of this: ");
(function() {
    console.log(this);
})();

var background_colors = ["green", "red", "blue"];
(function() {
    console.log(this);
}).call(background_colors);

var user ={
    print: function() {
        console.log(this);
    }
};
user.print();
