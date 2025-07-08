import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-4 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-700 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          type="number"
          id={amountInputId}
          className="rounded-lg border border-gray-300 px-2 text-gray-600 py-1 w-full outline-none"
          placeholder="Enter Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>

      <div className="w-1/2 flex flex-col justify-end items-end">
        <p className="text-gray-700 mb-2">Currency</p>
        <select
          className="rounded-lg border border-gray-300 text-gray-600 px-2 py-1 w-full outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
