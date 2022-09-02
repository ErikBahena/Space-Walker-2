import React from 'react';
import styled from 'styled-components';

// MockData
import planetsData from './planetsData';

const StyledPlanetCard = styled.div`
  color: var(--white-color);
  transition: all 0.5s linear;

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 90px;
  }

  p:nth-of-type(1) {
    max-width: 444px;
    color: var(--light-purple);
    margin-top: 0;
  }

  hr {
    width: 100%;
    border-color: var(--light-purple);
    max-width: 444px;
  }

  .vectors-container {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    p.p-description {
      margin: 0;
    }

    p.subh1 {
      margin: 0;
    }

    p.subh2 {
      margin-top: 0.7rem;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 1013px) {
      justify-content: center;
    }

    @media (max-width: 700px) {
      flex-wrap: wrap;
      text-align: center;
      flex-direction: column;
      gap: 5px;
    }
  }

  @media (max-width: 700px) {
    .p-description {
      margin-top: 0;
    }
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 70px;
    }
  }
`;

export default function PlanetCard({ planetName }) {
  return (
    <StyledPlanetCard>
      <h2>{planetsData[planetName].title}</h2>
      <p className='p-description'>{planetsData[planetName].description}</p>

      <hr></hr>

      <div className='vectors-container'>
        <div>
          <p className='subh2'>Avg. Distance</p>
          <p className='subh1'>{planetsData[planetName].averageDistance}</p>
        </div>

        <div className='break'></div>

        <div>
          <p className='subh2'>Est. Travel Time</p>
          <p className='subh1'>{planetsData[planetName].estimatedTravelTime}</p>
        </div>
      </div>
    </StyledPlanetCard>
  );
}
