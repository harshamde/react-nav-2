import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import BooksManager from './components/BooksManager';
import ProductsManager from './components/ProductsManager';
import { Provider } from 'react-redux';
import { store } from "./redux-store/store";
import Login from './Login';
import App from './App';
import Register from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/iframe/file-content">
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="books" element={<BooksManager />} ></Route>
              <Route path="products" element={<ProductsManager />} ></Route>
            </Route>
            <Route path="/" element={<Navigate to="login" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//  <Route path="/" exact={true} element={<LoginComponent />}>
//   <Route path="home" exact={true} element={<App />}></Route>
//   <Route path="books" exact={true} element={<BooksManager />} ></Route>
//   <Route path="products" exact={true} element={<ProductsManager />} ></Route>
//   <Route path="/" element={<Navigate to="/login" />}></Route> 