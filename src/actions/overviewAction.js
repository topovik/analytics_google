//OverviewAction

const loading = () => ({ type: 'FETCH_OVERVIEW_LOADING' });

const loaded = (data) => ({ type: 'FETCH_OVERVIEW_LOADED', data });

const error = () => ({ type: 'FETCH_OVERVIEW_ERROR' });

const VIEW_ID = '180941343';


export const loadOverview = (start, end) => (dispatch, setState) => {

let startNumber;
let endNumber;

start === undefined ? startNumber = '7daysAgo' : startNumber = start
end === undefined ? endNumber = 'today' : endNumber = end

  setTimeout(() => {
    window.gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': startFetch,
    })
  }, 500)


  function startFetch() {
    dispatch(loading())
    window.gapi.client.request({
      path: '/v4/reports:batchGet',
      root: 'https://analyticsreporting.googleapis.com',
      method: 'POST',
      body: {
        reportRequests: [
          {
            viewId: VIEW_ID,
            dateRanges: [{ startDate: `${startNumber}`, endDate: `${endNumber}` }],
            metrics: [
                      { expression: 'ga:users' }, 
                      { expression: 'ga:newUsers' },
                      { expression: 'ga:sessions' },
                      { expression: 'ga:sessionsPerUser' },
                      { expression: 'ga:pageviews' },
                      { expression: 'ga:pageviewsPerSession' },
                      { expression: 'ga:avgSessionDuration' },
                      { expression: 'ga:bounceRate' }
            ]
          }
        ]
      }
    })

      .then(response => response.result.reports)
      .then(obj => {
        const dataOverview = obj[0].data.rows[0].metrics[0].values
        return [
          dataOverview[0],
          dataOverview[1],
          dataOverview[2],
          dataOverview[3],
          dataOverview[4],
          dataOverview[5],
          dataOverview[6],
          dataOverview[7],
        ]
      })
      .then(data => dispatch(loaded(data)))
      .catch(() => dispatch(error))
  }
}