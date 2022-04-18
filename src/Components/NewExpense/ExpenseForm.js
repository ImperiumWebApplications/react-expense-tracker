import {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    // const [formInput, setFormInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    const titleChangedHandler = (event) => {
        setTitle(event.target.value)
        // setFormInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     }
        // })
    }

    const amountChangedHandler = (event) => {
        setAmount(event.target.value)
        // setFormInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     }
        // })
    }

    const dateChangedHandler = (event) => {
        setDate(event.target.value)
        // setFormInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     }
        // })
    }

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: date
        }
        props.onFormSubmitHandler(expenseData);
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form action="" onSubmit={onFormSubmitHandler}>
            <div className={'new-expense__controls'}>
                <div className={'new-expense__control'}>
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={titleChangedHandler} value={title}/>
                </div>
                <div className={'new-expense__control'}>
                    <label htmlFor="">Amount</label>
                    <input type="number" min={'0.01'} step={'0.01'} onChange={amountChangedHandler} value={amount}/>
                </div>
                <div className={'new-expense__control'}>
                    <label htmlFor="">Date</label>
                    <input type="date" min={'2019-01-01'} max={'2022-12-31'} onChange={dateChangedHandler}
                           value={date}/>
                </div>
            </div>
            <div className={'new-expense__actions'}>
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm