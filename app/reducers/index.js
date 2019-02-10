import axios from 'axios'

const GOT_CANDIES = 'GOT_CANDIES'

export const gotCandies = (allCandies) => ({
  type: GOT_CANDIES,
  allCandies
})

const initialState = {
  candies: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return {...state, candies: action.allCandies}
    default:
      return state
  }
}

export const fetchCandies = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/candies')
    const allCandies = response.data;
    const action = gotCandies(allCandies)
    dispatch(action)
  }
}

export default rootReducer


