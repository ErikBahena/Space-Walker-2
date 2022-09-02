import React from 'react';
import { Link } from 'react-router-dom';
// styles

import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  padding: 11em 0;

  .div1 {
    grid-area: 1 / 2 / 2 / 6;

    h5 {
      color: var(--light-purple);
    }

    h1 {
      color: var(--white-color);
    }

    p {
      color: var(--light-purple);
    }
  }

  .div2 {
    grid-area: 1 / 8 / 2 / 12;

    display: flex;
    justify-content: center;
    align-items: center;

    .explore-link {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 250px;
      width: 250px;

      border-radius: 50%;
      border: none;

      background-color: var(--white-color);
      color: inherit;

      font-family: Bellefair;
      font-size: 32px;
      letter-spacing: 2px;

      transition: 0.4s ease-out;

      &:hover {
        box-shadow: 0px 0 0px 50px rgba(255, 255, 255, 0.29);
      }
    }
  }

  // Tablet Responsiveness
  @media (max-width: 1013px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    .div1 {
      grid-area: 1 / 2 / 2 / 12;
      text-align: center;

      p {
        padding: 0 7%;
      }
    }

    .div2 {
      grid-area: 2 / 2 / 3 / 12;

      .explore-link {
        margin-top: 5%;
      }
    }
  }

  // Mobile Responsiveness
  @media (max-width: 700px) {
    padding: 0 0;

    .div1 {
      h1 {
        font-size: 80px;
        line-height: 100px;
        margin: 5% 0;
      }

      h5 {
        font-size: 15px;
      }

      p {
        padding: 0 0;
        font-size: 15px;
      }
    }

    .div2 {
      .explore-link {
        height: 210px;
        width: 210px;
        margin-top: 0;
        font-size: 20px;
        line-height: 23px;
      }
    }
  }
`;

export default function Home() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const updateWidth = () => {
      const div1 = document.querySelector('.div1');
      setWidth(div1.offsetWidth);
    };
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <ResponsiveContainer>
      <div className='div1'>
        <h5 className='no-marg-pad'>SO, YOU WANT TO TRAVEL TO</h5>
        <h1
          className='no-marg-pad'
          style={{ fontSize: `${width / 3 > 180 ? 180 : width / 3}px` }}
        >
          SPACE
        </h1>
        <p className='no-marg-pad'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className='div2'>
        <Link className='explore-link' to='/destination'>
          EXPLORE
        </Link>
      </div>
    </ResponsiveContainer>
  );
}
