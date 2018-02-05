const quote     = document.querySelector('.quote')
const author    = document.querySelector('.author')
const new_quote = document.querySelector('.new_quote')
const twit      = document.querySelector('.twit')
const random    = 'https://random-quote-generator.herokuapp.com/api/quotes/random'
const twitter   = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='


const randomQuote = async x => {
    let response = await fetch(x)
    let data = await response.json()
        buttonClick(data)

        console.log(data)                 
}


 
const buttonClick = x => {
    let dark =  () => {
        quote.innerHTML  = x.quote
        author.innerHTML = x.author
    new_quote.removeEventListener('click',dark) 
     randomQuote(random)
    }
    new_quote.addEventListener('click',dark)
   twitButton(quote.innerHTML)
    
}

const twitButton = x => {
    twit.addEventListener('click', () => {
        window.open(twitter+x)
    })
}






randomQuote(random)