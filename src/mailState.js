import {createSlice} from '@reduxjs/toolkit'

export const mailsSlice = createSlice({
    name: 'mails',
    initialState:{
        mails:{
            mails:[],
            mailGroups:{}
        },
        isLoading: false,
        isError:false,
    },
    reducers:{
        getMailsFetch: (state) => {
            state.isLoading = true;
        },
        getMailsSuccess: (state, action) => {
            state.mails = action.payload;
            state.isLoading = false;
        },
        getMailsFailure: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
    }
})
export const mailsStateVal = (state) => state.mails;

export const {getMailsFetch, getMailsSuccess, getMailsFailure} = mailsSlice.actions;

export default mailsSlice.reducer;