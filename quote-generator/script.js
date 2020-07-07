console.log('funguju')

const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

//Ukáže loadovací kolečko a skryje citát
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//Skryje loadoací kolečko a ukáže citát
function complete() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true
  }
}

//Získá citát z API forismatic
async function getQuote() {
  loading()
  //Vlastní proxy k řešení CORS problému
  const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    // Pokud autor není uvede, vypíše "Unknown"
    if (data.quoteAuthor === '') {
      authorText.innerText = 'Unknown'
    } else {
      authorText.innerText = data.quoteAuthor
    }
    //Pokud je citát delší než 120 znaků, zmenší se písmo (pomocí CSS třídy)
    if (data.quoteText.length > 120) {
      quoteText.classList.add('long-quote')
    } else {
      quoteText.classList.remove('long-quote')
    }
    quoteText.innerText = data.quoteText;
    //Skryje loadovací kolečko a ukáže citát
    complete()
  } catch (error) {
    getQuote();


  }
}

//Umožní tweetnout citát (https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent)
function tweetQuote() {
  const quote = quoteText.innerText
  const author = authorText.innerText
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

//Event Listeners na tlačítcích
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Při načtení stránky
getQuote()
