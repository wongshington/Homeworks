import * as APIUtil from '../util/api_util';
export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';



export const fetchSearchGiphys = (searchTerm) => {
  return (dispatch) => {
    APIUtil.fetchSearchGiphys(searchTerm)
//apiutil has function fetchsearchgiphys that does ajax request but takes in search term
    .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
//async function that returns the action object with the giphys data
  };
};


export const receiveSearchGiphys = giphys => ({
  type: RECEIVE_SEARCH_GIPHYS,
  giphys
});
