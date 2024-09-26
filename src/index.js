import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ErrorComp from './ErrorComp';
import { GrandFather } from './context/GrandFather';
import Dashboard from './Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import Todo from './network/Todo';
import Bidding from './hoc/Bidding';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComp />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
  {
    path: "/public",
    element: "This is a public layout"
  },
  {
    path: "/grand-father",
    element: <GrandFather />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/todo',
    element: <Todo />
  },
  {
    path: '/bidding',
    element: <Bidding />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
