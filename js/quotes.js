const quotes = [{
    quote : "lololo is life",
    author : "taewoo",
},

{
    quote : "lolo is life",
    author : "taewoo",
},

{
    quote : "lolololo is life",
    author : "taewoo",
},

{
    quote : "lo is life",
    author : "taewoo",
},

{
    quote : "lolololo is life",
    author : "taewoo",
},
{
    quote : "loololol is life",
    author : "taewoo",
},
{
    quote : "loololol is life",
    author : "taewoo",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;