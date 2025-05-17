import {configureStore} from "@reduxjs/toolkit";
import {addContact, setContactInfo, setError, setLoading} from "../features/contactSlice.js";

export const store = configureStore({
    reducer: {
        setContactInfo: setContactInfo,
        addContact: addContact,
        setLoading: setLoading,
        setError: setError,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

