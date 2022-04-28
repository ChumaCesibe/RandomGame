function verify() {
 const value = document.getElementById('guessed').value;
 const getRandom = Math.floor((Math.random() * 10 + 1));
const p = document.createElement('p');
            if (value == getRandom) {
                p.innerHTML = 'You have successfully guessed the right number.';
            } else {
                p.innerHTML = `You havent guessed the random number i.e.${getRandom}. Please try again!`;
            }
            document.body.append(p);
        }
