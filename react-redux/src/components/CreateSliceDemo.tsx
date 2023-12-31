import { createSlice, configureStore } from '@reduxjs/toolkit'
import { AppState } from '../types'
const initialState : AppState={
    count:0
}
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    incremented: state => {
      state.count += 1
    },
    decremented: state => {
      state.count -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}