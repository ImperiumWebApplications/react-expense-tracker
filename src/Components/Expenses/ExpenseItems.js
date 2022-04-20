import {useState} from "react";
import './ExpenseItems.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseItems = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('')

    const selectChangedHandler = (selectedFilterOption) => {
        setSelectedFilter(selectedFilterOption)
    }

    const filteredExpenses = props.expenses.filter((element) => {
        return element.date.getFullYear().toString() === (selectedFilter || '2022')
    })

    return (
        <Card className={'expenses'}>
            <ExpenseFilter onSelectChangedHandler={selectChangedHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>

    )

}

export default ExpenseItems;