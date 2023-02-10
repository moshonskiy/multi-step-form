import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        hasPhone: false,
        phoneNumber: '',
        files: [],
    },
    reducers: {
        addFirstStepData: (state, action) => {
            const { firstName, lastName } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
        },
        addSecondStepData: (state, action) => {
            const { email, hasPhone, phoneNumber } = action.payload;
            state.email = email;
            state.hasPhone = hasPhone;
            state.phoneNumber = phoneNumber;
        },
        addThirdStepData: (state, action) => {
            state.files = action.payload;
        },
    },
});

export const { addFirstStepData, addSecondStepData, addThirdStepData } = formSlice.actions;
export const formReducer = formSlice.reducer;
