
//ActiveUsers1Day
const loadingActiveUsers1Day = () => ({ type: 'FETCH_ACTIVE_USERS_1_DAY_LOADING' });
const loadedActiveUsers1Day = (dataActiveUsers1Day) => ({ type: 'FETCH_ACTIVE_USERS_1_DAY_LOADED', dataActiveUsers1Day });
const errorActiveUsers1Day = () => ({ type: 'FETCH_ACTIVE_USERS_1_DAY_ERROR' });

//ActiveUsers7Days
const loadingActiveUsers7Days = () => ({ type: 'FETCH_ACTIVE_USERS_7_DAYS_LOADING' });
const loadedActiveUsers7Days = (dataActiveUsers7Days) => ({ type: 'FETCH_ACTIVE_USERS_7_DAYS_LOADED', dataActiveUsers7Days });
const errorActiveUsers7Days = () => ({ type: 'FETCH_ACTIVE_USERS_7_DAYS_ERROR' });

//ActiveUsers14Days
const loadingActiveUsers14Days = () => ({ type: 'FETCH_ACTIVE_USERS_14_DAYS_LOADING' });
const loadedActiveUsers14Days = (dataActiveUsers14Days) => ({ type: 'FETCH_ACTIVE_USERS_14_DAYS_LOADED', dataActiveUsers14Days });
const errorActiveUsers14Days = () => ({ type: 'FETCH_ACTIVE_USERS_14_DAYS_ERROR' });

//ActiveUsers28Days
const loadingActiveUsers28Days = () => ({ type: 'FETCH_ACTIVE_USERS_28_DAYS_LOADING' });
const loadedActiveUsers28Days = (dataActiveUsers28Days) => ({ type: 'FETCH_ACTIVE_USERS_28_DAYS_LOADED', dataActiveUsers28Days });
const errorActiveUsers28Days = () => ({ type: 'FETCH_ACTIVE_USERS_28_DAYS_ERROR' });

const VIEW_ID = '180941343';

//Fetch ActiveUsers1Day
export const loadActiveUsers1Day = () => (dispatch, setState) => {

  setTimeout(() => {
    window.gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': startFetch1Day
    })
  }, 500)


  function startFetch1Day() {
    dispatch(loadingActiveUsers1Day())
    window.gapi.client.request({
      path: '/v4/reports:batchGet',
      root: 'https://analyticsreporting.googleapis.com',
      method: 'POST',
      body: {
        reportRequests: [
          {
            viewId: VIEW_ID,
            dateRanges: [{ startDate: 'today', endDate: 'today' }],
            dimensions: [{ name: "ga:date" }],
            metrics: [{ expression: 'ga:1dayUsers' }]
          }
        ]
      }
    })

      .then(response => response.result.reports)
      .then(obj => {
        const dataActiveUsers1Day = obj[0].data.rows[0].metrics[0].values[0]
        return [
          dataActiveUsers1Day
        ]
      })
      .then(dataActiveUsers1Day => dispatch(loadedActiveUsers1Day(dataActiveUsers1Day)))
      .catch(() => dispatch(errorActiveUsers1Day))
  }
}

export const loadActiveUsers7Days = () => (dispatch, setState) => {

  setTimeout(() => {
    window.gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': startFetch7Days
    })
  }, 500)

function startFetch7Days() {
  dispatch(loadingActiveUsers7Days())
  window.gapi.client.request({
    path: '/v4/reports:batchGet',
    root: 'https://analyticsreporting.googleapis.com',
    method: 'POST',
    body: {
      reportRequests: [
        {
          viewId: VIEW_ID,
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          dimensions: [{ name: "ga:date" }],
          metrics: [{ expression: 'ga:7dayUsers' }]
        }
      ]
    }
  })

    .then(response => response.result.reports)
    .then(obj => {
      const dataActiveUsers7Days = obj[0].data.rows[7].metrics[0].values[0]
      return [
        dataActiveUsers7Days
      ]
    })
    .then(dataActiveUsers7Days => dispatch(loadedActiveUsers7Days(dataActiveUsers7Days)))
    .catch(() => dispatch(errorActiveUsers7Days))
}

}

//Fetch ActiveUsers14Days
export const loadActiveUsers14Days = () => (dispatch, setState) => {

  setTimeout(() => {
    window.gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': startFetch14Days
    })
  }, 500)

function startFetch14Days() {
  dispatch(loadingActiveUsers14Days())
  window.gapi.client.request({
    path: '/v4/reports:batchGet',
    root: 'https://analyticsreporting.googleapis.com',
    method: 'POST',
    body: {
      reportRequests: [
        {
          viewId: VIEW_ID,
          dateRanges: [{ startDate: '14daysAgo', endDate: 'today' }],
          dimensions: [{ name: "ga:date" }],
          metrics: [{ expression: 'ga:14dayUsers' }]
        }
      ]
    }
  })

    .then(response => response.result.reports)
    .then(obj => {
      const dataActiveUsers14Days = obj[0].data.rows[14].metrics[0].values[0]
      return [
        dataActiveUsers14Days
      ]
    })
    .then(dataActiveUsers14Days => dispatch(loadedActiveUsers14Days(dataActiveUsers14Days)))
    .catch(() => dispatch(errorActiveUsers14Days))
  }
}


//Fetch ActiveUsers28Days
export const loadActiveUsers28Days = () => (dispatch, setState) => {

  setTimeout(() => {
    window.gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': startFetch28Days
    })
  }, 500)

function startFetch28Days() {
  dispatch(loadingActiveUsers28Days())
  window.gapi.client.request({
    path: '/v4/reports:batchGet',
    root: 'https://analyticsreporting.googleapis.com',
    method: 'POST',
    body: {
      reportRequests: [
        {
          viewId: VIEW_ID,
          dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
          dimensions: [{ name: "ga:date" }],
          metrics: [{ expression: 'ga:28dayUsers' }]
        }
      ]
    }
  })

    .then(response => response.result.reports)
    .then(obj => {
      const dataActiveUsers28Days = obj[0].data.rows[28].metrics[0].values[0]
      return [
        dataActiveUsers28Days
      ]
    })
    .then(dataActiveUsers28Days => dispatch(loadedActiveUsers28Days(dataActiveUsers28Days)))
    .catch(() => dispatch(errorActiveUsers28Days))
  }
}
