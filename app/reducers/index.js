

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

export default rootReducer


