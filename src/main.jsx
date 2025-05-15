import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Contacts, ViewContact} from "./components/index.jsx"


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/view-contact/:email" element={<ViewContact/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    </StrictMode>
);