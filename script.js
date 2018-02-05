const quote     = document.querySelector('.quote')
const author    = document.querySelector('.author')
const new_quote = document.querySelector('.new_quote')
const twit      = document.querySelector('.twit')
const random    = 'https://random-quote-generator.herokuapp.com/api/quotes/random'
const twitter   = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='


const buttonClick = x => {
    new_quote.addEventListener('click', () => {
       quote.innerHTML  = x.quote
       author.innerHTML = x.author 
    randomQuote(random)       
   }) 
   twitButton(quote.innerHTML)
}

const twitButton = x => {
    twit.addEventListener('click', () => {
        window.open(twitter+x)
    }) 
}





const randomQuote = async x => {
    let response = await fetch(x)
    let data = await response.json()
        buttonClick(data)                  
}


randomQuote(random) 
 





