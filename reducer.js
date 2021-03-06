import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 0,
  mnemonic: '',
  address: '',
  privateKey: '',
}

export default createSlice({
  name: 'bridge',
  initialState,
  reducers: {
    update: (state, action) => {
      for (const k in action.payload) {
        if (state[k] === undefined) new Error('# undefined key')
        state[k] = action.payload[k]
      }
    },
  },
})
