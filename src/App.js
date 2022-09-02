import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Style Imports
import styled from 'styled-components';

// Components
import NavBar from './components/NavBar.js';
import Home from './components/Home/Home.js';
import Destination from './components/Destination/Destination.js';
import Crew from './components/Crew/Crew.js';

// Background Images
import homeBackground from './assets/home/background-home-desktop.jpg';
import homeBackgroundTablet from './assets/home/background-home-tablet.jpg';
import homeBackgroundMobile from './assets/home/background-home-mobile.jpg';

import destinationBackground from './assets/destination/background-destination-desktop.jpg';
import destinationBackgroundTablet from './assets/destination/background-destination-tablet.jpg';
import crewBackground from './assets/crew/background-crew-desktop.jpg';
import technologyBackground from './assets/technology/background-technology-desktop.jpg';

const StyledApp = styled.div`
  .wrapper {
    height: 100%;
    min-height: 100vh;

    padding-bottom: 5%;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: black;

    -webkit-transition: background-image 0.2s ease-in-out;
    transition: background-image 0.2s ease-in-out;
  }

  .homeBg {
    background-image: url(${homeBackground});
  }
  .destinationBg {
    background-image: url(${destinationBackground});
    padding-bottom: 0;
  }
  .crewBg {
    background-image: url(${crewBackground});
    padding-bottom: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 136px 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .technologyBg {
    background-image: url(${technologyBackground});
  }

  // home responsiveness

  @media (max-width: 1013px) {
    .homeBg {
      background-image: url(${homeBackgroundTablet});
    }
  }
  @media (max-width: 425px) {
    .homeBg {
      background-image: url(${homeBackgroundMobile});
    }
  }

  // destination responsiveness

  @media (max-width: 1156px) {
    .destinationBg {
      background-image: url(${destinationBackgroundTablet});
    }
  }
`;

export default function App() {
  const { pathname } = useLocation();

  return (
    <StyledApp>
      <div className={`wrapper ${pathname.slice(1) + 'Bg'}`}>
        <NavBar />

        <Routes>
          <Route path='/home' element={<Home />} />

          <Route path='/destination' element={<Destination />} />

          <Route path='/crew' element={<Crew />} />

          <Route path='*' element={<Navigate to='/home' replace />} />
        </Routes>
      </div>
    </StyledApp>
  );
}
