import React, {useState, useEffect} from "react";

export function RandomQuote() {
    const [quote, setQuote] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      getQuote();
    }, []);

    function getQuote() {
        setLoading(true);
        fetch("https://api.quotable.io/random")
            .then((res) => res.json())
            .then((data) => setQuote(data))
            .finally(() => setLoading(false));
        }

    return(
        <section>
        {loading && <div>Loading...</div>}
        <div className="container">
                <div className="row align-item-center" style={{ width: "360" }}>
                    <div className="col-auto pr-5">
                        <h3 className="font-weight-bold my-4">
                        {quote.content}
                        </h3>
                        <h5 className="pb-3"> {quote.author} </h5>
                    </div>
                </div>
            </div>
        </section>
    )
}