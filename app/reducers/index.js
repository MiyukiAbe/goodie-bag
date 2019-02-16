import axios from 'axios'

const GOT_CANDIES = 'GOT_CANDIES'
const GOT_ACANDY = 'GOT_ACANDY'
const UPDATEQTY = 'UPDATEQTY'

export const gotCandies = (allCandies) => ({
  type: GOT_CANDIES,
  allCandies
})

export const gotACandy = (aCandy) => ({
  type: GOT_ACANDY,
  aCandy
})

//below is my solution which is changing qty on component side
export const updateQty = (newQty) => ({
  type: UPDATEQTY,
  newQty
})

// const updateQty = (candy) => ({
//   type: UPDATEQTY,
//   candy
// });


const initialState = {
  candies: [],
  aCandy: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return {...state, candies: action.allCandies}
    case GOT_ACANDY:
      return {...state, aCandy: action.aCandy}
    case UPDATEQTY:
      return {...state, aCandy: {...state.aCandy, quantity: action.newQty}}  
    //  case UPDATEQTY:
    //   return {...state, aCandy: action.candy} 
    default:
      return state
  }
}

export const fetchCandies = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/candies')
    const allCandies = response.data;
    //I could just write { data } = await axios.get('/api/candies')
    const action = gotCandies(allCandies)
    dispatch(action)
  }
}

export const fetchACandy = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/candies/${id}`)
    const aCandy = response.data
    dispatch(gotACandy(aCandy))
  }
}

//below is my solution
export const updateCandyQty = (update) => {
  return async (dispatch) => {
    console.log('now I am inside Fetch request')
    const response = await axios.put(`/api/candies/${update.id}`, update);
    console.log('just received axios data')
    dispatch(updateQty(response.data.quantity))
  }
}

// export const increaseQuantity = (id) => async (dispatch) => {
//   const {data} = await axios.put(`/api/candies/${id}/increase`);
//   dispatch(updateQty(data));
// }

// export const decreaseQuantity = (id) => async (dispatch) => {
//   const {data} = await axios.put(`/api/candies/${id}/decrease`);
//   dispatch(updateQty(data));
// }



export default rootReducer


