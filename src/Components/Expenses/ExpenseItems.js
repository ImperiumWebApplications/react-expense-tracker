import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItems.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItems = (props) => {
    const [selectedFilter, setSelectedFilter] =useState('')

    const selectChangedHandler = (selectedFilterOption) => {
        setSelectedFilter(selectedFilterOption)
    }

    const filteredExpenses = props.expenses.filter((element)=>{
        return element.date.getFullYear() === selectedFilter
    })

    return (
        <Card className={'expenses'}>
            <ExpenseFilter onSelectChangedHandler={selectChangedHandler}/>
            {filteredExpenses.map((element) => {
                return <ExpenseItem key={element.id} expenseDate={element.date} expenseTitle={element.title}
                                    expenseAmount={element.amount}/>
            })}
        </Card>

    )

}

export default ExpenseItems;