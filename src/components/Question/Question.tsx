import React from 'react';
import Styles from './Question.module.scss'

interface QuestionProps {
    question: string,
    id?: number
}
const Question: React.FC<QuestionProps> = ({ question }) => {
    return (
        <div className={Styles.question}>
            <div>{ question }</div>
            <input type='text'/>
        </div>
    );
};

export default Question;
