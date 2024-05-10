import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import App from './components/App/App';
import MainStyles from "./utils/MainStyles"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <BrowserRouter>
            <MainStyles/>  
            <App />
        </BrowserRouter>
    </AuthProvider>
);

