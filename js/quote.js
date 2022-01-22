const quotes = [{
    quote : "You cannot change what you are, only what you do",
    author : " : Philip Pullman",
},

{
    quote : "Lay a firm foundation with the bricks that others throw at you",
    author : " : David Brinkley",
},

{
    quote : "Change the way you look at things and things you look at change",
    author : " : Wayne Dyer",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;