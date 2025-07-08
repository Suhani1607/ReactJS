import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import InputBox from "./component/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex  flex-col items-center justify-center">
        {" "}
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={["usd", "eur", "inr"]}
          onAmountChange={(value) => console.log("Amount:", value)}
          onCurrencyChange={(value) => console.log("Currency:", value)}
          selectedCurrency={fromCurrency}
        />
        <InputBox
          label="To"
          amount={convertedAmount}
          onAmountChange={() => {}}
          onCurrencyChange={(currency) => setToCurrency(currency)}
          currencyOptions={["usd", "eur", "inr"]}
          selectedCurrency={toCurrency}
          amountDisabled={true}
        />
        <button className="bg-blue-600   text-white px-4 py-2 rounded-lg  ">
          Convert
        </button>
      </div>
    </>
  );
}

export default App;
