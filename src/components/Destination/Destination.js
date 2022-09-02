import React, { useState } from 'react';

// Styling
import styled from 'styled-components';

// Images
import moon from '../../assets/destination/image-moon.png';
import mars from '../../assets/destination/image-mars.png';
import europa from '../../assets/destination/image-europa.png';
import titan from '../../assets/destination/image-titan.png';

// components
import InnerNavBar from './InnerNavBar';
import PlanetCard from './PlanetCard/PlanetCard.js';

const images = {
  moon,
  mars,
  europa,
  titan,
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  margin-top: 8%;

  .div1 {
    grid-area: 1 / 2 / 2 / 6;

    h5 {
      color: var(--white-color);
      margin-top: 0;

      b {
        opacity: 0.5;
      }
    }
  }

  .div2 {
    grid-area: 1 / 8 / 2 / 12;

    hr {
      margin: 0;
    }
  }

  // Tablet Responsiveness
  @media (max-width: 1013px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .div1 {
      grid-area: 1 / 2 / 2 / 12;
      text-align: center;
    }

    .div2 {
      grid-area: 2 / 2 / 3 / 12;

      margin-top: 5%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h2,
      p.p-description {
        text-align: center;
      }

      nav {
        justify-content: center;
      }
    }
  }

  // Mobile Responsiveness
  @media (max-width: 700px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 1fr);

    .div1 {
      grid-area: 1 / 2 / 2 / 12;

      width: 80%;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h5 {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
      }
    }

    .div2 {
      grid-area: 2 / 2 / 4 / 12;

      margin-top: -15%;

      hr {
        margin-bottom: 1em;
      }
    }
  }
`;

export default function Destination() {
  const [currentPlanet, setCurrentPlanet] = useState({
    name: 'moon',
    img: images.moon,
  });

  const handlePlanetChange = (planetName) => {
    setCurrentPlanet({ img: images[planetName], name: planetName });
  };

  const [div1Width, setDiv1Width] = React.useState(0);

  React.useEffect(() => {
    const updateWidth = () => {
      const div1 = document.querySelector('.div1');
      setDiv1Width(div1.offsetWidth);
    };
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <GridContainer>
      <div className='div1'>
        <h5>
          <b>01</b> PICK YOUR DESTINATION
        </h5>
        <img
          src={currentPlanet.img}
          alt={'the planet ' + currentPlanet.name}
          style={{ width: `${div1Width > 350 ? 350 : div1Width}px` }}
        />
      </div>

      <div className='div2'>
        <InnerNavBar handlePlanetChange={handlePlanetChange} />
        <PlanetCard planetName={currentPlanet.name} />
      </div>
    </GridContainer>
  );
}
