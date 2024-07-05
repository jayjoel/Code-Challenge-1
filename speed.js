const prompt = require("prompt-sync")();

function speedDetector() {
    let speed = parseFloat(prompt('Enter speed of the car: '));
    
    if (speed < 70) {
        console.log('Ok');
        return 'Ok';
    } else {
        let points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            console.log('License suspended');
            return 'License suspended';
        } else {
            console.log(`Your demerit points are: ${points}`);
            return `Your demerit points are: ${points}`;
        }
    }
}

console.log(speedDetector());
