import React, { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
const Budget = () => {
  const { currency, budget, dispatch } = useContext(AppContext)
  const [Budget, setBudget] = useState(budget)

  const budgetAllocation = (newbudget) => {
    const expense = {
      budget: newbudget,
    }
    dispatch({
      type: "SET_BUDGET",
      payload: expense,
    })
  }
  return (
    <div className="alert alert-secondary">
      <label>
        Budget: {currency}
        <input
          id="budget"
          type="number"
          value={Budget}
          onChange={(e) => {
            budgetAllocation(e.target.value)
            setBudget(e.target.value)
          }}
        />
      </label>
    </div>
  )
}
export default Budget
