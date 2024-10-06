import NavBar from '../NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import TutoringPage from '../TutoringPage/TutoringPage'
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import TutoringTestimonials from '../TutoringTestimonials/TutoringTestimonials';
import React, { useState, useEffect} from 'react';


export default function App() {

  useEffect(() => {
    document.title = 'A legend\'s website.';
  }, [])

  const pages = [
  <WelcomePage />, 
  <ProjectsPage />, 
  <TutoringPage />,
  <TutoringTestimonials />
  ];

  const [page, setPage] = useState(<WelcomePage />);

  function pageToggle(index) {
      setPage(pages[index]);
  }

  return (
    <div>
      <NavBar pageToggle={pageToggle}/>
      <TutoringTestimonials />
    </div>
  )

};