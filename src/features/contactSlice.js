import {createSlice} from "@reduxjs/toolkit";

const ContactSlice = createSlice({
    name: "contact",
    initialState: {
        contactInfo: [],
        loading: false,
        error: null,
    },
    reducers: {
        setContactInfo: (state, action) => {
            state.contactInfo = action.payload;
        },
        addContact: (state, action) => {
            state.contactInfo.push(action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {setContactInfo, addContact, setLoading, setError} = ContactSlice.actions;
export default ContactSlice.reducer;
