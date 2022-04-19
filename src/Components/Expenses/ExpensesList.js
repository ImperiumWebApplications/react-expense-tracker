import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <h2 className={'expenses-list__fallback'}>Found No Expenses</h2>
    }

    return (
        <ul className={'expenses-list'}>
            {props.filteredExpenses.map((element) => {
                return <ExpenseItem key={element.id} expenseDate={element.date} expenseTitle={element.title}
                                    expenseAmount={element.amount}/>
            })}
        </ul>
    )

}

export default ExpensesList;