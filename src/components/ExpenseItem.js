import React, { useContext } from "react"
import { TiMinus, TiPlus, TiDelete } from "react-icons/ti"

import { AppContext } from "../context/AppContext"
const ExpenseItem = (props) => {
  const { currency, dispatch } = useContext(AppContext)
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    })
  }
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    }
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    })
  }
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    }
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    })
  }
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td className="text-center">
        <TiPlus
          size="1.5em"
          color="white"
          className="rounded-circle bg-success secondary"
          onClick={(event) => increaseAllocation(props.name)}
        ></TiPlus>
      </td>
      <td className="text-center">
        <TiMinus
          size="1.5em"
          color="white"
          className="rounded-circle bg-danger secondary"
          onClick={(event) => decreaseAllocation(props.name)}
        ></TiMinus>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  )
}
export default ExpenseItem
