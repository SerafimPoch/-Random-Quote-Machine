let quote = document.querySelector('.quote')
let author = document.querySelector('.author')
let new_quote = document.querySelector('.new_quote')
let twit = document.querySelector('.twit')
let random = 'https://random-quote-generator.herokuapp.com/api/quotes/random'

const buttonClick = x => {
    new_quote.addEventListener('click', () => {
       quote.innerHTML  = x.quote
       author.innerHTML = x.author 
       randomQuote(random)       
   })   
}


const randomQuote = async x => {
    let response = await fetch(x)
    let data = await response.json()
        buttonClick(data)                   
}

randomQuote(random) 
 





