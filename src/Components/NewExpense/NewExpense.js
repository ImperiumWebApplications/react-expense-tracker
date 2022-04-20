import {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formEditMode, setFormEditMode] = useState(false);

    const formDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const switchFormEditMode = () => {
        setFormEditMode((prevState) => {
            return !prevState
        })
    }

    return (
        <div className={'new-expense'}>
            <button onClick={switchFormEditMode}>Add New Expense</button>
            {formEditMode && <ExpenseForm onFormSubmitHandler={formDataHandler}/>}
        </div>
    )
}

export default NewExpense