import styled from "styled-components";
import {SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledAgencyContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    background-image: url('/img/background.png');
    gap: 40px;
    background-repeat: no-repeat;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
`;

export const StyledAgencyTitle = styled((props) => <SectionBigHeading {...props} />)`
   text-align:center;
   margin-bottom:0.3rem;
`;

export const StyledAgencyDescription = styled((props) => <SectionSubheading {...props} />)`
    text-align:center;
    margin-top:0;
`;

export const StyledAgencyImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;

export const StyledAgencyCardContainer = styled(({...props})=> <div {...props}/>)`
   display:flex;
   flex-direction:column;
   width:100%;
`

export const StyledAgencyContentWrapper = styled(({...props})=> <div {...props}/>)`
 display:flex;
 align-items:center;
 flex-direction:row;
 justify-content:space-evenly;
 gap:5rem;
`;