'use strict';

function friend(friends) {
    for (let i = 0; i < friends.length; i++) {
        let upperChar = friends[i].charAt(0).toUpperCase();
        if (!(!/\d/.test(friends[i]) && friends[i].length === 4 && upperChar === friends[i].charAt(0))) {
            friends.splice(i, 1);
            i--;
        }
    }
    return friends;
}

friend(["Ryan", "Kieran", "Mark", "123", "4"]);

//console.log(res);