import {REQUEST_HOME,REQUEST_HOME_ERROR,INVALIDATE_HOME,RECEIVE_HOME} from '../constants/ActionTypes'

export const requestHomePage = () => ({
    type:REQUEST_HOME
})

export const requestHomePageError = (err) => ({
    type:REQUEST_HOME_ERROR,
    err
})

export const invalidateHome = () => ({
    type:INVALIDATE_HOME
})

export const receiveHome = (json) => {
    console.log(json,'action中receive的json')
    return {
        type:RECEIVE_HOME,
        posts: json.respBody
    }
}
export const fetchPosts = () => dispatch => {
    dispatch(requestHomePage())
    return fetch(`/api/movie/subject/26004132`)
      .then(response => response.json())
      .then(json => dispatch(receiveHome(json)))
      .catch(err => dispatch(requestHomePageError(err)))
}
