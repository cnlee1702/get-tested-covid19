
import React from 'react';
import styled from 'styled-components'
import ZipForm from 'components/shared/ZipForm.js';

const StyledHomeHero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 15px;
`

class HomeHero extends React.Component {
    render() {
        return (
            <StyledHomeHero>
              <h4 className='display-3 text-white'>Find a nearby COVID-19 test center</h4>
              <ZipForm />
            </StyledHomeHero>
        );
    }
}

export default HomeHero;
