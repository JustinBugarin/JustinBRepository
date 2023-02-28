// Assignment Code
var criteria;
var genNumber;
var genCharacter;
var genUppercase;
var genLowercase;


character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};
letters2 = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});
function generatePassword() {
    criteria = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!criteria) {
        alert("This needs a value");
    } else if (criteria < 8 || criteria > 128) {
        criteria = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        genNumber = confirm("Will this contain numbers?");
        genCharacter = confirm("Will this contain special characters?");
        genUppercase = confirm("Will this contain Uppercase letters?");
        genLowercase = confirm("Will this contain Lowercase letters?");
    };
    if (!genCharacter && !genNumber && !genUppercase && !genLowercase) {
        choices = alert("You must choose a criteria!");

    }
    else if (genCharacter && genNumber && genUppercase && genLowercase) {

        choices = character.concat(number, letters, letters2);
    }
    else if (genCharacter && genmNumber && genUppercase) {
        choices = character.concat(number, letters2);
    }
    else if (genCharacter && genNumber && genLowercase) {
        choices = character.concat(number, letters);
    }
    else if (genCharacter && genLowercase && genUppercase) {
        choices = character.concat(letters, letters2);
    }
    else if (genNumber && genLowercase && genUppercase) {
        choices = number.concat(letters, letters2);
    }
    else if (genCharacter && genNumber) {
        choices = character.concat(number);

    } else if (genCharacter && genLowercase) {
        choices = character.concat(letters);

    } else if (genCharacter &&genUppercase) {
        choices = character.concat(letters2);
    }
    else if (genLowercase && genNumber) {
        choices = letters.concat(number);

    } else if (genLowercase && genUppercase) {
        choices = letters.concat(letters2);

    } else if (genNumber && genUppercase) {
        choices = number.concat(letters2);
    }
    else if (genCharacter) {
        choices = character;
    }
    else if (genNumber) {
        choices = number;
    }
    else if (genLowercase) {
        choices = letters;
    }
    var password = [];

    for (var i = 0; i < criteria; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}



