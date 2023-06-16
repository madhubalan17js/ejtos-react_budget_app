import React, { useContext, useState } from "react"
import "../App.css"
import { AppContext } from "../context/AppContext"

const Currency = () => {
  const { dispatch } = useContext(AppContext)
  const [cur, setcur] = useState()
  const currencyOptions = [
    { code: "Dollar", symbol: "$" },
    { code: "Pound", symbol: "£" },
    { code: "Euro", symbol: "€" },
    { code: "Ruppee", symbol: "₹" },

    // Add more currency options as needed
  ]
  const CurrencyFunction = (vv) => {
    console.log(vv)

    // const expense = {
    //   currency: vv,
    // }
    dispatch({
      type: "CHG_CURRENCY",
      payload: vv,
    })
  }
  return (
    <select
      className="form-select custom-dropdown-item-i"
      color="green"
      onMouseOver={(e) => CurrencyFunction(e.target.value)}
    >
      <option>Currency(₹ Ruppee)</option>
      {currencyOptions.map((currency) => (
        <option
          className="custom-dropdown-item form-control"
          value={`${currency.symbol}`}
          key={currency.symbol}
        >{`${currency.symbol} ${currency.code}`}</option>
      ))}
    </select>
  )
}

export default Currency
