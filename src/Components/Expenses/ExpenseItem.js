import {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseTitle);
    const clickHandler = () => {
        setTitle("Modified Title");
    }
    return (
        <Card className={'expense-item'}>
            <ExpenseDate expenseDate={props.expenseDate}/>
            <div className={'expense-item__description'}>
                <h2>{title}</h2>
                <div className={'expense-item__price'}>${props.expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>

    )
}

export default ExpenseItem;