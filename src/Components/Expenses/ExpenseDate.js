import './ExpenseDate.css'

const ExpenseDate = (props) => {
    // Extract the date, month and year from the expenseDate property
    const date = props.expenseDate.getDate()
    // The month should be displayed as a string
    const month = props.expenseDate.toLocaleString('default', {month: 'long'})
    const year = props.expenseDate.getFullYear()

    return (
        <div className={'expense-date'}>
            <div className={'expense-date__month'}>{month}</div>
            <div className={'expense-date__year'}>{year}</div>
            <div className={'expense-date__day'}>{date}</div>
        </div>
    )
}

export default ExpenseDate;