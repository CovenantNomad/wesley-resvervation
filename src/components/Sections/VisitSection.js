import React from 'react';

import styled from 'styled-components';
import { Section } from '../../styles/styles'

const VisitSection = () => {
  return (
    <VisitContainer>
      VisitSection
    </VisitContainer>
  );
}

const VisitContainer = styled(Section)`
  min-height: 94vh;
  background: lightpink;
`;

export default VisitSection;