import Image from "next/image";
import {StyledAgencyContainer,StyledAgencyTitle,StyledAgencyDescription, StyledAgencyImageContainer } from "./elements";
import {Card} from "../../collections/Card"

export const AgencySeleciton = ({...props }) => {
  return (
    <StyledAgencyContainer>
        <div>
       <StyledAgencyTitle></StyledAgencyTitle>
       <StyledAgencyDescription></StyledAgencyDescription>
        </div>
        <div>
            <Image/>
            <div>
            <Card></Card>
            </div>
        </div>
    </StyledAgencyContainer>
  );
};
