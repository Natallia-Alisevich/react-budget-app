// import { ExpenseItem } from "components"
// import { Expense } from "context"



// export const ExpenseList = (expense: Expense) => {
//     return (
//         <ExpenseItem expense={expense} key={expense.id} />
//     )
// }


// import React, { useContext } from 'react'
import { ExpenseItem } from "components";
import { useExpensesContext } from "context";

export const ExpensesList = () => {

    // const rezult = useContext(ExpenseContext) // useContext-это исп контекст, который нам нужен,
    //  то что вернет юзконтекст, запишем в переменную rezult
    // console.log(rezult);
    ///**** *ИЛИ** это то же самое, но с деструктуризацией:
    // const { expenses } = useContext(ExpenseContext) // useContext-это исп контекст, который нам
    // нужен, то что вернет юзконтекст, запишем в переменную rezult
    // console.log(expenses);

    // 6. c новым хуком из expenses убираем импорты и сокращаем код до такого:
    const { expenses } = useExpensesContext();
    console.log(expenses);

    return (
        <div>
            <h2>Expenses</h2>
            {
                expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} expense={expense} />
                })}</div>
    )
}
