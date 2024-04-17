import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add_blog from './add_blog';
import Update_blog from './update_blog';
import Find from './find.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
 <Routes>
 <Route exact path="/" element={<App/>}/>
    <Route exact path="/add_blog" element={<Add_blog/>}/>
    <Route exact path="/update_blog" element={<Update_blog/>}/>
    <Route exact path="/find" element={<Find/>}/>

    </Routes>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
