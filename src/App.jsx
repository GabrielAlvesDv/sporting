import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer/HomeContainer.jsx';
import LoginContainer from './containers/LoginContainer/LoginContainer.jsx';
import RegisterContainer from './containers/RegisterContainer/RegisterContainer.jsx';
import ScheduleContainer from './containers/ScheduleContainer/ScheduleContainer.jsx';
import ContactContainer from './containers/ContactContainer/ContactContainer.jsx';
import ServicesContainer from './containers/ServicesContainer/ServicesContainer.jsx';
import ProfileContainer from './containers/ProfileContainer/ProfileContainer.jsx';
import DashboardContainer from './containers/DashboardContainer/DashboardContainer.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="content-area">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/login" element={<LoginContainer />} />
              <Route path="/register" element={<RegisterContainer />} />
              <Route path="/services" element={<ServicesContainer />} />
              <Route path="/schedule" element={<ScheduleContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/dashboard" element={<DashboardContainer />} />
              <Route path="/contact" element={<ContactContainer />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
