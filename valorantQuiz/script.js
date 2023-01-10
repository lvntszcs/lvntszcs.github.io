let rand;

let tries=3;
const triesText = document.querySelector("#tries");
triesText.innerText = "Tries: " + tries;

correctAnswers = 0;
const correctText = document.querySelector("#correct");
correctText.innerText = "Correct: " + correctAnswers;

const quotes = [
    "I am on a higher plane, chale, literally!",
    "Stand in my way. I dare you.",
    "They think I'm an old dog? Heh, I'll show 'em just how many tricks I know.",
    "You have good taste, my friend.",
    "Nothing stays hidden from me. Nothing.",
    "Everyone is afraid of something.",
    "Together, we'll crush them.",
    "Cool. Let's go.",
    "Let's do this.",
    "Relax. I've already thought of everything.",
    "Move, or get zapped.",
    "I am the beginning. I am the end.",
    "Just take a seat, I got this.",
    "Yes, I'm pumped!",
    "They have no idea how heartless I am.",
    "I am both shield and sword.",
    "Alright! Where's the fight?",
    "Wherever they run, I will find them.",
    "No one can hold their breath forever.",
    "I'll fight anybody. I'll fight everybody."
]

const names = [
    "Astra",
    "Breach",
    "Brimstone",
    "Chamber",
    "Cypher",
    "Fade",
    "Harbor",
    "Jett",
    "KAYO",
    "Killjoy",
    "Neon",
    "Omen",
    "Phoenix",
    "Raze",
    "Reyna",
    "Sage",
    "Skye",
    "Sova",
    "Viper",
    "Yoru"
]


document.body.onload = function(){
    rand = Math.floor(Math.random() * 20);

    const quote = document.querySelector("#quote");
    quote.innerText = '"' + quotes[rand] + '"';

    tries=3;
    const triesText = document.querySelector("#tries");
    triesText.innerText = "Tries: " + tries;
};

document.querySelector("#reload").onclick = function(){
    rand = Math.floor(Math.random() * 20);

    const quote = document.querySelector("#quote");
    quote.innerText = '"' + quotes[rand] + '"';
    tries=3;
    const triesText = document.querySelector("#tries");
    triesText.innerText = "Tries: " + tries;
};

document.querySelector("#submit").onclick = function(){
    const name = document.querySelector("#input");

    if(name.value.toLowerCase().trim() == names[rand].toLowerCase())
    {
        alert("CORRECT!");

        rand = Math.floor(Math.random() * 20);

        const quote = document.querySelector("#quote");
        quote.innerText = '"' + quotes[rand] + '"';
        tries=3;
        const triesText = document.querySelector("#tries");
        triesText.innerText = "Tries: " + tries;

        correctAnswers++;
        const correctText = document.querySelector("#correct");
        correctText.innerText = "Correct: " + correctAnswers;
    }
        
    else
    {
        tries--;
        const triesText = document.querySelector("#tries");
        triesText.innerText = "Tries: " + tries;

        if(tries<1){
            rand = Math.floor(Math.random() * 20);

            const quote = document.querySelector("#quote");
            quote.innerText = '"' + quotes[rand] + '"';

            tries=3;
            const triesText = document.querySelector("#tries");
            triesText.innerText = "Tries: " + tries;
        }
    }
    
    name.value = "";
};
