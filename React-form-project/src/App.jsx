import React, { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch quotes when component mounts
  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await fetch("https://dumyjson.com/quotes");
        const data = await response.json();
        setQuotes(data.quotes);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch quotes:", error);
        setLoading(false);
      }
    }

    fetchQuotes();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>📝 Inspirational Quotes</h1>

      {loading ? (
        <p>Loading quotes...</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {quotes.map((quote) => (
            <li
              key={quote.id}
              style={{
                background: "",
                padding: "15px",
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <blockquote style={{ fontStyle: "italic", margin: 0 }}>
                “{quote.quote}”
              </blockquote>
              <p
                style={{
                  textAlign: "right",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                — {quote.author}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
