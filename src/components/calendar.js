import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import { loadOverview } from '../actions/overviewAction'
import { connect } from 'react-redux'
import 'react-day-picker/lib/style.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: null,
      to: null,
      enteredTo: null
    };
  }
  isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }
  handleDayClick(day) {
    const { from, to } = this.state;
    if (from && to && day >= from && day <= to) {
      this.handleResetClick();
      return;
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day
      });
    }
  }
  handleDayMouseEnter(day) {
    const { from, to } = this.state;
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }
  render() {
    const { from, to, enteredTo } = this.state;
    const modifiers = { start: from, end: enteredTo };
    const disabledDays = { before: this.state.from };
    const selectedDays = [from, { from, to: enteredTo }];

    return (
      <div>
        <DayPicker
          className="Range"
          numberOfMonths={2}
          fromMonth={from}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
        />
        <div>
            <button className="link" onClick={this.handleResetClick}>
                Reset
            </button>
            <button onClick={() => this.props.calendarNumbers(this.state.from.toISOString().slice(0, 10), this.state.to.toISOString().slice(0, 10))}>Done</button>
        </div>
        <Helmet>
          <style>{`
  .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Range .DayPicker-Day {
    border-radius: 0 !important;
  }

  .DayPicker-NavButton {
      outline: none;
  }

  .DayPicker-wrapper {
      outline: none;
  }
`}</style>
        </Helmet>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    calendarNumbers: (start, end) => dispatch(loadOverview(start, end))
  }
}

export default connect(undefined, mapDispatchtoProps)(Calendar)