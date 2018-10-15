import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadActiveUsers1Day, loadActiveUsers7Days, loadActiveUsers14Days, loadActiveUsers28Days } from '../actions/activeUsersAction'

class ActiveUsers extends Component {

    componentDidMount() {
        this.props.loadActiveUsers1Day()
        this.props.loadActiveUsers7Days()
        this.props.loadActiveUsers14Days()
        this.props.loadActiveUsers28Days()
    }

    render() {
        const { activeUsers1Day, activeUsers7Days, activeUsers14Days, activeUsers28Days, state1Day, state7Days, state14Days, state28Days } = this.props;

        let result1Day;
        let result7Days;
        let result14Days;
        let result28Days;

        state1Day === 'loadedActiveUsers1Day success!' 
        ? result1Day = activeUsers1Day 
        : result1Day = null

        state7Days === 'loadedActiveUsers7Days success!'
        ? result7Days = activeUsers7Days
        : result7Days = null

        state14Days === 'loadedActiveUsers14Days success!'
        ? result14Days = activeUsers14Days
        : result14Days = null

        state28Days === 'loadedActiveUsers28Days success!'
        ? result28Days = activeUsers28Days
        : result28Days = null

        return(
            <div>
                <p><span>Активных пользователей за 1 день:</span> {result1Day}</p>
                <p><span>Активных пользователей за 7 дней:</span> {result7Days}</p>
                <p><span>Активных пользователей за 14 дней:</span> {result14Days}</p>
                <p><span>Активных пользователей за 28 дней:</span> {result28Days}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state1Day: state.activeUsers1DayReducer.status,
        state7Days: state.activeUsers7DaysReducer.status,
        state14Days: state.activeUsers14DaysReducer.status,
        state28Days: state.activeUsers28DaysReducer.status,
        activeUsers1Day: state.activeUsers1DayReducer.dataActiveUsers1Day[0],
        activeUsers7Days: state.activeUsers7DaysReducer.dataActiveUsers7Days[0],
        activeUsers14Days: state.activeUsers14DaysReducer.dataActiveUsers14Days[0],
        activeUsers28Days: state.activeUsers28DaysReducer.dataActiveUsers28Days[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadActiveUsers1Day: () => dispatch(loadActiveUsers1Day()),
        loadActiveUsers7Days: () => dispatch(loadActiveUsers7Days()),
        loadActiveUsers14Days: () => dispatch(loadActiveUsers14Days()),
        loadActiveUsers28Days: () => dispatch(loadActiveUsers28Days())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUsers)