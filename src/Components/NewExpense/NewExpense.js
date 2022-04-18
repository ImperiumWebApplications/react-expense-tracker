// import {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const formDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className={'new-expense'}>
            <ExpenseForm onFormSubmitHandler={formDataHandler}/>
        </div>
    )
}

export default NewExpense