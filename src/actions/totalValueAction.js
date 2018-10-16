//TrafficAttractionChannel
const loadingTrafficAttractionChannel = () => ({ type: 'FETCH_TRAFFIC_ATTRACTION_CHANNEL_LOADING' });
const loadedTrafficAttractionChannel = (dataTrafficAttractionChannel) => ({ type: 'FETCH_TRAFFIC_ATTRACTION_CHANNEL_LOADED', dataTrafficAttractionChannel });
const errorTrafficAttractionChannel = () => ({ type: 'FETCH_TRAFFIC_ATTRACTION_CHANNEL_ERROR' });

//TrafficAttractionSource
const loadingTrafficAttractionSource = () => ({ type: 'FETCH_TRAFFIC_ATTRACTION_SOURCE_LOADING' });
const loadedTrafficAttractionSource = (dataTrafficAttractionSource) => ({ type: 'FETCH_TRAFFIC_ATTRACTION_SOURCE_LOADED', dataTrafficAttractionSource });
const errorTrafficAttractionSource = () => ({ type: 'FETCH_TRAFFIC_ATTRACTION_SOURCE_ERROR' });

//TrafficAttractionCompaign
const loadingTrafficAttractionCompaign = () => ({ type: 'FETCH_TRAFFIC_ATTRACTION_COMPAIGN_LOADING' });
const loadedTrafficAttractionCompaign = (dataTrafficAttractionCompaign) => ({ type: 'FETCH_TRAFFIC_ATTRACTION_COMPAIGN_LOADED', dataTrafficAttractionCompaign });
const errorTrafficAttractionCompaign = () => ({ type: 'FETCH_TRAFFIC_ATTRACTION_COMPAIGN_ERROR' });

const VIEW_ID = '180941343';

//FetchTrafficAttractionChannel
export const loadTrafficAttractionChannel = () => (dispatch, setState) => {

  setTimeout(() => {
    window.gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': startFetchTrafficAttractionChannel
    })
  }, 500)


  function startFetchTrafficAttractionChannel() {
    dispatch(loadingTrafficAttractionChannel())
    window.gapi.client.request({
      path: '/v4/reports:batchGet',
      root: 'https://analyticsreporting.googleapis.com',
      method: 'POST',
      body: {
        reportRequests: [
          {
            viewId: VIEW_ID,
            dateRanges: [{ startDate: '2018-09-01', endDate: '2018-10-01' }],
            dimensions: [{ name: "ga:channelGrouping" }],
            metrics: [
                { expression: 'ga:newUsers' },
                { expression: 'ga:revenuePeruser' },
                { expression: 'ga:totalValue' }
            ],
          }
        ]
      }
    })

      .then(response => response.result.reports)
      .then(obj => {
        const dataTrafficAttractionChannel = obj[0].data.rows.map(t => t);
        const dataTrafficAttractionChannelTotal = obj[0].data.totals[0].values
        return [
            dataTrafficAttractionChannel,
            dataTrafficAttractionChannelTotal
        ]
      })
      .then(dataTrafficAttractionChannel => dispatch(loadedTrafficAttractionChannel(dataTrafficAttractionChannel)))
      .catch(() => dispatch(errorTrafficAttractionChannel))
  }
}


//FetchTrafficAttractionSource
export const loadTrafficAttractionSource = () => (dispatch, setState) => {

  setTimeout(() => {
    window.gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': startFetchTrafficAttractionSource
    })
  }, 500)


  function startFetchTrafficAttractionSource() {
    dispatch(loadingTrafficAttractionSource())
    window.gapi.client.request({
      path: '/v4/reports:batchGet',
      root: 'https://analyticsreporting.googleapis.com',
      method: 'POST',
      body: {
        reportRequests: [
          {
            viewId: VIEW_ID,
            dateRanges: [{ startDate: '2018-09-01', endDate: '2018-10-01' }],
            dimensions: [{ name: "ga:source" }],
            metrics: [
                { expression: 'ga:newUsers' },
                { expression: 'ga:revenuePeruser' },
                { expression: 'ga:totalValue' }
            ],
          }
        ]
      }
    })

      .then(response => response.result.reports)
      .then(obj => {
        const dataTrafficAttractionSource = obj[0].data.rows.map(t => t);
        const dataTrafficAttractionSourceTotal = obj[0].data.totals[0].values
        return [
            dataTrafficAttractionSource,
            dataTrafficAttractionSourceTotal
        ]
      })
      .then(dataTrafficAttractionSource => dispatch(loadedTrafficAttractionSource(dataTrafficAttractionSource)))
      .catch(() => dispatch(errorTrafficAttractionSource))
  }
}


//FetchTrafficAttractionCompaign
export const loadTrafficAttractionCompaign = () => (dispatch, setState) => {

  setTimeout(() => {
    window.gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': startFetchTrafficAttractionCompaign
    })
  }, 500)


  function startFetchTrafficAttractionCompaign() {
    dispatch(loadingTrafficAttractionCompaign())
    window.gapi.client.request({
      path: '/v4/reports:batchGet',
      root: 'https://analyticsreporting.googleapis.com',
      method: 'POST',
      body: {
        reportRequests: [
          {
            viewId: VIEW_ID,
            dateRanges: [{ startDate: '2018-09-01', endDate: '2018-10-01' }],
            dimensions: [{ name: "ga:campaign" }],
            metrics: [
                { expression: 'ga:newUsers' },
                { expression: 'ga:revenuePeruser' },
                { expression: 'ga:totalValue' }
            ],
          }
        ]
      }
    })

      .then(response => response.result.reports)
      .then(obj => {
        const dataTrafficAttractionCompaign = obj[0].data.rows.map(t => t);
        const dataTrafficAttractionCompaignTotal = obj[0].data.totals[0].values
        console.log(dataTrafficAttractionCompaign)
        return [
            dataTrafficAttractionCompaign,
            dataTrafficAttractionCompaignTotal
        ]
      })
      .then(dataTrafficAttractionCompaign => dispatch(loadedTrafficAttractionCompaign(dataTrafficAttractionCompaign)))
      .catch(() => dispatch(errorTrafficAttractionCompaign))
  }
}