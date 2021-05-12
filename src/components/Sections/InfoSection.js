import React from 'react';

import styled from 'styled-components';
import { Section } from '../../styles/styles'

const InfoSection = () => {
  return (
    <InfoContainer>
      InfoSection
    </InfoContainer>
  );
}

const InfoContainer = styled(Section)`
  min-height: 94vh;
  background: lime;
`;

export default InfoSection;