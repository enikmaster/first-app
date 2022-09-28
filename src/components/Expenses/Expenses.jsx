import {useState} from 'react';

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {
    const [anoEscolhido, setAnoEscolhido] = useState('2020');

    const teste = (selectedYear) => {
        setAnoEscolhido(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === anoEscolhido;
    });

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter escolhido={anoEscolhido} onTesteSimples={teste} />
                {/*{filteredExpenses.length === 0 ? <p>No expenses found.</p> : ( //alternativa com expressões ternárias
                    filteredExpenses.map(item =>
                        <ExpenseItem
                            key={item.id}
                            name={item.title}
                            amount={item.amount}
                            date={item.date}
                        />)
                )}
                {filteredExpenses.length === 0 && <p>Nada encontrado...</p>} //alternativa com uma expressão com && -> se a condição for true, faz logo o seguinte.
                {filteredExpenses.length > 0 && (
                    filteredExpenses.map(item =>
                        <ExpenseItem
                            key={item.id}
                            name={item.title}
                            amount={item.amount}
                            date={item.date}
                        />)
                )} */}
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} /> {/* alternativa com a verificação da condição fora do conteúdo  */}
            </Card>
        </div>
    );
};

export default Expenses;