const quotes = [{
    quote : "sex is life",
    author : "taewoo",
},

{
    quote : "sexx is life",
    author : "taewoo",
},

{
    quote : "sexxx is life",
    author : "taewoo",
},

{
    quote : "sexxxx is life",
    author : "taewoo",
},

{
    quote : "sexxxxx is life",
    author : "taewoo",
},
{
    quote : "sexxxxx is life",
    author : "taewoo",
},
{
    quote : "sexxxxx is life",
    author : "taewoo",
},
{
    quote : "sexxxxx is life",
    author : "taewoo",
},
{
    quote : "sexxxxx is life",
    author : "taewoo",
},
{
    quote : "sexxxxx is life",
    author : "taewoo",
}]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;