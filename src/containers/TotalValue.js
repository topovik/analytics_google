import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTrafficAttractionChannel, loadTrafficAttractionSource, loadTrafficAttractionCompaign } from '../actions/totalValueAction'

class TotalValue extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 0
        }
    }

    componentDidMount() {
        this.props.loadTrafficAttractionChannel()
        this.props.loadTrafficAttractionSource()
        this.props.loadTrafficAttractionCompaign()
    }



    render() {
        const { stateTraffic, stateDataTraffic, stateDataTotalTraffic,
            stateSource, stateDataSource, stateDataTotalSource,
            stateCompaign, stateDataCompaign, stateDataTotalCompaign } = this.props;

        let resultStateDataTraffic;
        let resultStateDataTotalTraffic;

        if (this.state.display === 1 || this.state.display === 0) {
            if (stateTraffic === 'loadedTrafficAttractionChannel success!') {
                resultStateDataTotalTraffic = stateDataTotalTraffic.map((t, index) => <th key={index}>{t}</th>);

                resultStateDataTraffic = stateDataTraffic.map((t, index) =>
                    <React.Fragment key={index}>
                        <tr>
                            <th>{t.dimensions[0]}</th>
                            {t.metrics[0].values.map((r, index) => <td key={index}>{r}</td>)}
                        </tr>
                    </React.Fragment>
                )
            }
        }

        if (this.state.display === 2) {
            if (stateSource === 'loadedTrafficAttractionSource success!') {
                resultStateDataTotalTraffic = stateDataTotalSource.map((t, index) => <th key={index}>{t}</th>);

                resultStateDataTraffic = stateDataSource.map((t, index) =>
                    <React.Fragment key={index}>
                        <tr>
                            <th>{t.dimensions[0]}</th>
                            {t.metrics[0].values.map((r, index) => <td key={index}>{r}</td>)}
                        </tr>
                    </React.Fragment>
                )
            }
        }

        if (this.state.display === 3) {
            if (stateCompaign === 'loadedTrafficAttractionCompaign success!') {
                resultStateDataTotalTraffic = stateDataTotalCompaign.map((t, index) => <th key={index}>{t}</th>);

                resultStateDataTraffic = stateDataCompaign.map((t, index) =>
                    <React.Fragment key={index}>
                        <tr>
                            <th>{t.dimensions[0]}</th>
                            {t.metrics[0].values.map((r, index) => <td key={index}>{r}</td>)}
                        </tr>
                    </React.Fragment>
                )
            }
        }

        return (
            <React.Fragment>
                <table border='1px'>
                    <thead>
                        <tr>
                            <th>
                                <ul>
                                    <li><button onClick={() => this.setState({ display: 1 })}>Канал привлечения трафика</button></li>
                                    <li><button onClick={() => this.setState({ display: 2 })}>Источник привлечения трафика</button></li>
                                    <li><button onClick={() => this.setState({ display: 3 })}>Компания по привлечению трафика</button></li>
                                </ul>
                            </th>
                            <th>Пользователи</th>
                            <th>Доход на пользователя(за весь период)</th>
                            <th>Доход(за весь период)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>&nbsp;</th>
                            {resultStateDataTotalTraffic}
                        </tr>
                        {resultStateDataTraffic}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateTraffic: state.trafficAttractionChannelReducer.status,
        stateDataTraffic: state.trafficAttractionChannelReducer.dataTrafficAttractionChannel[0],
        stateDataTotalTraffic: state.trafficAttractionChannelReducer.dataTrafficAttractionChannel[1],

        stateSource: state.trafficAttractionSourceReducer.status,
        stateDataSource: state.trafficAttractionSourceReducer.dataTrafficAttractionSource[0],
        stateDataTotalSource: state.trafficAttractionSourceReducer.dataTrafficAttractionSource[1],

        stateCompaign: state.trafficAttractionCompaignReducer.status,
        stateDataCompaign: state.trafficAttractionCompaignReducer.dataTrafficAttractionCompaign[0],
        stateDataTotalCompaign: state.trafficAttractionCompaignReducer.dataTrafficAttractionCompaign[1]

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadTrafficAttractionChannel: () => dispatch(loadTrafficAttractionChannel()),
        loadTrafficAttractionSource: () => dispatch(loadTrafficAttractionSource()),
        loadTrafficAttractionCompaign: () => dispatch(loadTrafficAttractionCompaign())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalValue)