import React, { useState } from 'react';
import styled from 'styled-components';

import douglas from '../../assets/crew/image-douglas-hurley.png';
import mark from '../../assets/crew/image-mark-shuttleworth.png';
import victor from '../../assets/crew/image-victor-glover.png';
import anousheh from '../../assets/crew/image-anousheh-ansari.png';

import CrewCard from './CrewCard/CrewCard.js';
import InnerSelector from './InnerSelector.js';

const images = {
  douglas,
  mark,
  victor,
  anousheh,
};

const StyledCrewResponsive = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  margin-top: 8%;

  .div1 {
    grid-area: 1 / 2 / 2 / 9;
    z-index: 1;

    h5 {
      color: var(--white-color);
      margin-top: 0;
      margin-bottom: 0.5em;

      b {
        opacity: 0.5;
      }
    }

    h4 {
      margin-bottom: 0.4em;
    }
  }

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 8%;

    width: auto;
    height: 70%;

    transition: all 0.2s ease-in-out;
  }

  // Tablet Responsiveness
  @media (max-width: 1013px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .div1 {
      grid-area: 1 / 2 / 2 / 12;
      z-index: 1;
    }
  }

  // Mobile Responsiveness
  @media (max-width: 700px) {
    .div1 {
      h5 {
        font-size: 1.2rem;
        margin-bottom: 0;
      }

      h4 {
        font-size: 1.3rem;
      }

      h3 {
        font-size: 2.25rem;
        line-height: 1;
        margin-top: 0.2em;
      }

      p {
        margin-top: 0.5rem;
      }
    }

    img {
      position: fixed;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);

      opacity: 0.5;

      width: 100%;
      max-width: 350px;
      height: auto;
    }
  }

  .vignette {
    opacity: 0.5;
  }
`;

export default function Crew() {
  const [currentCrewMember, setCurrentCrewMember] = useState({
    name: 'douglas',
    img: images.douglas,
  });

  const handleCrewChange = (newCrewMemberName) => {
    setCurrentCrewMember({
      img: images[`${newCrewMemberName}`],
      name: newCrewMemberName,
    });
  };

  return (
    <StyledCrewResponsive>
      <div className='div1'>
        <h5>
          <b>02</b> MEET YOUR CREW
        </h5>

        <CrewCard currentCrewMember={currentCrewMember.name} />
        <InnerSelector
          handleCrewChange={handleCrewChange}
          currentCrewMember={currentCrewMember.name}
        />
      </div>

      <img
        className='img'
        src={currentCrewMember.img}
        alt={'crew member ' + currentCrewMember.name}
      />
    </StyledCrewResponsive>
  );
}
