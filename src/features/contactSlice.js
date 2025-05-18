import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//region *************** createAsyncThunk: fetchContacts
export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8000/contact');
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(`Failed to fetch contacts - ${error.message}`);
        }
    }
);
//endregion

//region *************** createAsyncThunk: addContact

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newContact),
            });
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(`Failed to add contact - ${error.message}`);
        }
    }
);

//endregion








// ********************************************************************************************************************** //

const ContactSlice = createSlice({
    name: 'contact',
    initialState: {
        contactInfo: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contactInfo = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    },
});

export default ContactSlice.reducer;