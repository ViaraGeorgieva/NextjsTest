import styled from "styled-components";
import {SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledAgencyContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    
`;

export const StyledAgencyTitle = styled((props) => <SectionBigHeading {...props} />)`
`;

export const StyledAgencyDescription = styled((props) => <SectionSubheading {...props} />)`
`;

export const StyledAgencyImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;
