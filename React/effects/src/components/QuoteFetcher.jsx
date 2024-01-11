import React,{useEffect, useState} from "react";
const url = "https://inspo-quotes-api.herokuapp.com/quotes/random"

const QuoteFetcher = () => {
    const [quote,setQuote] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        fetchQuote()
    },[])
    const fetchQuote = async() =>{
        const response = await fetch(url)
        const jsonResponse = await response.json()
        const randomQuote = jsonResponse.quote
        setQuote(prev => randomQuote)
        setIsLoading(false)
    }
    return (
        <div>
            {isLoading && <p>Loading</p>}
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}

export default QuoteFetcher