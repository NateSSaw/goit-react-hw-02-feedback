import { Component } from "react";
import css from './Statistics.module.css';

export default class Statistics extends Component{

    
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        
        return <div className="statistics">
            <h3>Statistics</h3>
            <ul className="statistic__list">
                <li className="statistic__item">Good: {good}</li>
                <li className="statistic__item">Neutral: {neutral}</li>
                <li className="statistic__item">Bad: {bad}</li>
                <li className="statistic__item">Total: {total}</li>
                <li className="statistic__item">Positive feedback: {positivePercentage}</li>
            </ul>
        </div>
    }
}