import React from 'react';
import QuestionsList from "./components/QuestionsList/QuestionsList";

const App: React.FC = () => {
    const questions = [
        {question: "Сколько вам лет?", id: 1},
        {question: "Как вас зовут?", id: 2},
        {question: "В каком городе вы живете?", id: 3},
        {question: "Ваш любимый цвет?", id: 4},
        {question: "У вас есть собака?", id: 5},
        {question: "Любимая музыка?", id: 6},
    ];
    return (
        <div>
            <QuestionsList questions={questions}/>
        </div>
    );
};

export default App;
