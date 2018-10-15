import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadOverview } from '../actions/overviewAction'

class Overview extends Component {

    componentDidMount() {
        this.props.loadOverview()
    }

    render() {
        const { state, users, newUsers, sessions, SessionsPerUser, PageViews, PagesSession, AvgSessionDuration, BounceRate } = this.props

        //seconds to normal time
        let readOnly = AvgSessionDuration;
        let hours = Math.floor(readOnly / 3600);
        readOnly -= hours * 3600;
        let minutes = Math.floor(readOnly / 60);
        readOnly -= minutes * 60;
        let seconds = parseInt(readOnly % 60, 10);
        let TimeAvgSessionDuration = (hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds));

        //no vision NaN
        let resultOverview;
        state === 'loaded success!'
            ? resultOverview = <div>
                <p><span>Пользователи:</span> {users}</p>
                <p><span>Новые пользователи:</span> {newUsers}</p>
                <p><span>Сеансы:</span> {sessions}</p>
                <p><span>Сеансов на пользователя:</span> {Math.floor(SessionsPerUser * 100) / 100}</p>
                <p><span>Просмотры страниц:</span> {PageViews}</p>
                <p><span>Страниц/сеанс:</span> {Math.floor(PagesSession * 100) / 100}</p>
                <p><span>Сред. длительность сеанса:</span> {TimeAvgSessionDuration}</p>
                <p><span>Показатель отказов:</span> {Math.floor(BounceRate * 100) / 100 + '%'}</p>
            </div>
            : resultOverview = null
        return (
            <React.Fragment>
                {resultOverview}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.overviewReducer.status,
        users: state.overviewReducer.data[0],
        newUsers: state.overviewReducer.data[1],
        sessions: state.overviewReducer.data[2],
        SessionsPerUser: state.overviewReducer.data[3],
        PageViews: state.overviewReducer.data[4],
        PagesSession: state.overviewReducer.data[5],
        AvgSessionDuration: state.overviewReducer.data[6],
        BounceRate: state.overviewReducer.data[7]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadOverview: () => dispatch(loadOverview())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Overview)