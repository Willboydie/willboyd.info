// import React, { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//import pages and components
import NavBar from './Components/NavBar/NavBar';
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import TutoringPage from './Pages/TutoringPage/TutoringPage'
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';


export default function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route 
          path="/" 
          element={<Navigate to="/home" />} 
          />
          <Route
            path='/home'
            element={<WelcomePage />}
          />
          <Route
            path='/projects'
            element={<ProjectsPage />}
          />
          <Route
            path='/tutoring'
            element={<TutoringPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )

};