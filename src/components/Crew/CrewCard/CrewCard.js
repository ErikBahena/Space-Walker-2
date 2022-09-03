import React from 'react';
import styled from 'styled-components';

import crewData from './crewData';

const StyledCrewCard = styled.div`
  color: var(--white-color);

  * {
    margin: 0;
  }

  h4 {
    opacity: 0.5;
  }

  p {
    color: var(--light-purple);
    max-width: 500px;
  }
`;

export default function CrewCard({ currentCrewMember }) {
  return (
    <StyledCrewCard>
      <h4>{crewData[currentCrewMember].title}</h4>
      <h3>{crewData[currentCrewMember].name}</h3>
      <p>{crewData[currentCrewMember].description}</p>
    </StyledCrewCard>
  );
}
