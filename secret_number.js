'use strict';
module.exports = function() {
        let secretNum = Math.random() * 1000000;
        return function another() {
            return secretNum;
        }
    var secretNumber = randomNum();
    var anotherSecret = randomNum();
}
