const quote     = document.querySelector(".quote");
const author    = document.querySelector(".author");
const new_quote = document.querySelector(".new_quote");
const twit      = document.querySelector(".twit");
const random    = "https://random-quote-generator.herokuapp.com/api/quotes/random";
const twitter   = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

const getRandomQuote = () => {
  return fetch(random)
    .then(x => x.json()) 
}

const renderQuote = x => {
  quote.innerText  = x.quote
  author.innerText = x.author
}

new_quote.addEventListener('click', async el => {
  const nextQuote = await getRandomQuote()
  renderQuote(nextQuote)
})

twit.addEventListener('click', () => {
   window.open(twitter + quote.innerText)
})
