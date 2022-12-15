import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	modalShow: false,
}

export const uiSlices = createSlice({
  name: 'uiSlices',
  initialState,
  reducers: {
    toggleModalShow: (state) => {
			state.modalShow = !state.modalShow;
    },
  },
})

export const { toggleModalShow } = uiSlices.actions

export default uiSlices.reducer