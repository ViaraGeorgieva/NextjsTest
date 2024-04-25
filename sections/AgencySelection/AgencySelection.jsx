import Image from "next/image";
import {StyledAgencyContainer,StyledAgencyTitle,StyledAgencyDescription, StyledAgencyImageContainer, StyledAgencyCardContainer,StyledAgencyContentWrapper } from "./elements";
import {Card} from "../../collections/Card"

const agencyCardData = [{},{},{}]
//TODO  map and print the card inside the Agency section content wrapper
export const AgencySeleciton = ({title,description,image,...props }) => {
  return (
    <StyledAgencyContainer>
        <div>
       <StyledAgencyTitle>{title}</StyledAgencyTitle>
       <StyledAgencyDescription>{description}</StyledAgencyDescription>
        </div>
        <StyledAgencyContentWrapper>
        <StyledAgencyImageContainer>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height}/>
        </StyledAgencyImageContainer>
        <StyledAgencyCardContainer>
            {agencyCardData.map((el,i)=> {
               return (
                  <Card key={i}></Card>) 
               })}
        </StyledAgencyCardContainer>    
        </StyledAgencyContentWrapper>
    </StyledAgencyContainer>
  );
};
