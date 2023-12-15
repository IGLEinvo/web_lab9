import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import Catalog from './containers/Catalog/Catalog';
import ItemPage from './containers/ItemPage/ItemPage';
import CardPage from './containers/CartPage/CartPage';
import { Provider } from 'react-redux';
import store from '/Users/igorlevocko/Downloads/Telegram Desktop/ReactLab-lab_react5/lab_react5/src/containers/Redux/store.js';
import ProtectedRoute from './containers/ProtectedRoute/ProtectedRoute';
import RegisterPage from './containers/login/RegisterPage';
import LoginPage from './containers/login/LoginPage';
import SuccessPage from './containers/CartPage/SuccessPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute element={<App />} />,
  },
  {
    path: '/catalog',
    element: <ProtectedRoute element={<Catalog />} />,
  },
  {
    path: '/catalog/:id',
    element: <ProtectedRoute element={<ItemPage />} />,
  },
  {
    path: '/cart',
    element: <ProtectedRoute element={<CardPage />} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/success',
    element: <SuccessPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Routes>{router}</Routes>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();