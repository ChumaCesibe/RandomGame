let btn = document.getElementById('btn')
let output = document.getElementById('outputtext')

let nmber= [Math.floor(Math.random() * 10)]

btn.addEventListener('click'), function(){
    let input = document.getElementById('userInput').value;
    if(input == nmber){
        output.innerHTML = `You guessed right, your number was ${nmber}`;
    }else if (input != nmber){
        output.innerHTML = `That's incorrect, Please try again!`;
    }
};



