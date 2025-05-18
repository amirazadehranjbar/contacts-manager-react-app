import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddContact, Contacts, ViewContact} from "./components/index.jsx"
import { Provider } from 'react-redux'
import {store} from "./app/store.js";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/view-contact" element={<ViewContact/>}/>
                        <Route path="/add-contact" element={<AddContact/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </Provider>

    </StrictMode>
);