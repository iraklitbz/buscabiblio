import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer'

ReactDOM.render(

  <React.StrictMode>
      <Header />
      <Home />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
