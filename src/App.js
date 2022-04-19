import React from 'react';
import ExpenseItems from "./Components/Expenses/ExpenseItems";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
    const expenses = [{id: 'e1', title: 'home', amount: 100, date: new Date(2020, 2, 28)}, {
        id: 'e2',
        title: 'coffee',
        amount: 300,
        date: new Date(2020, 2, 28)
    }, {id: 'e3', title: 'food', amount: 200, date: new Date(2020, 2, 28)}, {
        id: 'e4',
        title: 'car',
        amount: 500,
        date: new Date(2020, 2, 28)
    },]
    // return React.createElement('div', null, React.createElement(ExpenseItems, {expenses: expenses}), React.createElement('h1', null, 'Hello World'));
    return (
        <div>
            <NewExpense/>
            <ExpenseItems expenses={expenses}/>
        </div>
    )
}

export default App;
