import {useState} from 'react';
import ExpenseItems from "./Components/Expenses/ExpenseItems";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
    const [expenses, setExpenses] = useState(
        [{id: 'e1', title: 'home', amount: 100, date: new Date(2020, 2, 28)}, {
            id: 'e2',
            title: 'coffee',
            amount: 300,
            date: new Date(2020, 2, 28)
        }, {id: 'e3', title: 'food', amount: 200, date: new Date(2020, 2, 28)}, {
            id: 'e4',
            title: 'car',
            amount: 500,
            date: new Date(2020, 2, 28)
        },
        ])

    const addExpenseHandler = (expenseData) => {
        setExpenses((prevState) => {
            return [
                ...prevState,
                {
                    id: expenseData.id,
                    title: expenseData.title,
                    amount: expenseData.amount,
                    date: new Date(expenseData.date)
                }

            ]
        })
    }
    // return React.createElement('div', null, React.createElement(ExpenseItems, {expenses: expenses}), React.createElement('h1', null, 'Hello World'));
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpenseItems expenses={expenses}/>
        </div>
    )
}

export default App;
