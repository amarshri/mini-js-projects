let number = parseInt(Math.random()*100+1)

const submit = document.querySelector('#sub');
const userinput = document.querySelector('#guessfield');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresults');
const loworhi = document.querySelector('.lower');
const startover = document.querySelector('.result');
const lower =document.querySelector('.lower')



let preguess = [];
let numguess = 1
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)// in this line we take value of inpt if take input impty without click event then value is empty
        validguess(guess)
    })
}

function validguess(guess){
    if (isNaN(guess)) {
        alert('please enter a number')
    }else if(guess<1){
        alert('please enter a number grater then 1')
    }else if(guess > 100){
        alert('please enter a number less then 100')
    }else{
        preguess.push(guess)
        if(numguess ===11){
            displayguess(guess)
            display(`Game ovwer , Rendom number was ${number}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
if (guess === number) {
    display(`You guess it right`)
    endgame()
}else if (guess < number) {
    display(`${guess} is too low`)
}else if (guess > number) {
    display(`${guess} is too high`)
}
}

function displayguess(guess){
    userinput.value = ""
    guesses.innerHTML +=`${guess},`
    numguess++
    remaining.innerHTML =`${11-numguess}`

}


function display(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

const p = document.createElement('p');

function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame"> Star new game </h2>`;
    p.style.textAlign ="center"
    startover.appendChild(p)
    playgame = false;
    newgame();

}


function newgame(){
const newbutt = document.querySelector('#newgame')
newbutt.addEventListener('click', function(e){
    number = parseInt(Math.random()*100+1)
    preguess = [];
    numguess = 1
    guesses.innerHTML ='';
    remaining.innerHTML =`${11-numguess}`;
    userinput.removeAttribute('disabled')
    lower.innerHTML =''
    startover.removeChild(p)
    playgame =true;
})
}