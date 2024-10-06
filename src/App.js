import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationFrom';
import WebsiteDetailsForm from './components/WebsiteDetailsForm';
import FinalizeWebsite from './components/FinalizeWebsite';
// import WebsiteBuilder from './components/WebsiteBuilder';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="container mx-auto p-4 ">
          <Routes>
          
            <Route path="/" element={<RegistrationForm />} />
  
            <Route path="/website-detail" element={<WebsiteDetailsForm />} />
            <Route path="/finalize" element={<FinalizeWebsite />} />
            {/* <Route path="/builder" element={<WebsiteBuilder />} /> */}
          </Routes>
     
        </div>
      </Router>
    </Provider>
  );
};

export default App;
