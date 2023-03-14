import { Component } from 'react';
import Statistics from '../components/Feedback/Statistics/Statistics';
import Section from './Section/Section';



export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        {/* <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions> */}
        
        {/* {!this.countTotalFeedback() ? <Notification message="There is no feedback"></Notification> : */}
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}></Statistics>}
      </Section>
    )
  }
};
