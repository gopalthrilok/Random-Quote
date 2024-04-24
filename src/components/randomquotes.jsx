import React, { useState } from 'react'
import '../App.css'
// import refresh from '../src/assets/images.png'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random =()=>{
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
    const [quote,setQuote] = useState({
        text : "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang Von "
    });

    loadQuotes();
  return (
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">- {quote.author.split(',')[0]}</div>
                <div className='icons'>
                    <img src="/src/assets/images.png" onClick={()=>{random()}} alt="" style={{width:'40px'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote