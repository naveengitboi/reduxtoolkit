import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Hello World',
    country: "Aus",
    gender: "Female",
    permanentAccNum: 123456789,
    schoolName: "gbhs kachiguda",
    schoolCgpa: 7.8,
    hSecondaryName: 'Higher secondary',
    hSecondaryCgpa: 8.0,
    gradName: 'Graduation',
    gradCgpa: '9.5',
    certificates: ['reactjs', 'redux toolkit']
}

const detailsSlice = createSlice({
    name: 'studentDetails',
    initialState,
    reducers: {
        addCertificate: (state, action) => {
            state.certificates.push(action.payload)
        }
    }
})
export const { addCertificate } = detailsSlice.actions
export default detailsSlice.reducer