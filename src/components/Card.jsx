import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: ${(props) => props.display || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  margin-left: ${(props) => props.marL || 0}vw;
  margin-right: ${(props) => props.marR || 0}vw;
  padding-left: ${(props) => props.padL || 0}vw;
  padding-right: ${(props) => props.padR || 0}vw;
  padding: 5px;
  background-color: ${(props) => props.bgColor || "gray"};
  color: ${(props) => props.textColor || "whitesmoke"};
  border: 1px solid ${(props) => props.borderColor || "whitesmoke"};
  border-radius: ${(props) => props.borderRadius || 0}px;
  width: ${(props) => props.cardWidth || 5.25}vw;
  height: ${(props) => props.cardHeight || 5.25}vw;
  &:hover {
    cursor: ${(props) => props.cursor || "pointer"};
    filter: brightness(1.5);
  }
`;
export const CardContainerRotate = styled.div`
  display: ${(props) => props.display || ""};
  font-size: ${(props) => props.fontSize || 1.5}rem;
  transform: rotate(90deg);
  justify-content: ${(props) => props.justifyContent || ""};
  margin-left: ${(props) => props.marL || 0}vw;
  margin-right: ${(props) => props.marR || 0}vw;
  margin-top: ${(props) => props.marT || 0}vw;
  margin-bottom: ${(props) => props.marB || 0}vw;
  padding-left: ${(props) => props.padL || 0}vw;
  padding-right: ${(props) => props.padR || 0}vw;
  padding: 5px;
  background-color: ${(props) => props.bgColor || "gray"};
  color: ${(props) => props.textColor || "whitesmoke"};
  border: 1px solid ${(props) => props.borderColor || "whitesmoke"};
  width: ${(props) => props.cardWidth || 5.25}vw;
  height: ${(props) => props.cardHeight || 5.25}vw;
  &:hover {
    cursor: ${(props) => props.cursor || "pointer"};
    filter: brightness(1.5);
  }
`;
const AtomicNumber = styled.h1`
  font-size: ${(props) => props.ANfontSize || 1}rem;
  margin: 0;
`;
const Symbol = styled.h1`
  font-size: ${(props) => props.fontSize || 1.5}rem;
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.symbolColor || "white"};
`;
const Name = styled.h1`
  font-size: ${(props) => props.NAMEfontSize || 0.7}rem;
  margin: 0;
`;
const AtomicMass = styled.h1`
  font-size: ${(props) => props.AMfontSize || 0.75}rem;
  margin: 0;
`;
const UL = styled.ul`
  font-size: ${(props) => props.ULfontSize || 1.5}rem;
  margin: 0;
`;
const LI = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.LIfontSize || 1.5}rem;
  margin: 0;
  border-bottom: 1px solid gray;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
`;
const Card = ({
  name,
  symbol,
  atomicMass,
  atomicNumber,
  atomicRadius,
  boilingPoint,
  bondingType,
  cpkHexColor,
  density,
  electronAffinity,
  electronegativity,
  electronicConfiguration,
  groupBlock,
  ionRadius,
  ionizationEnergy,
  meltingPoint,
  oxidationStates,
  standardState,
  vanDelWaalsRadius,
  yearDiscovered,
  bgColor,
  textColor,
  borderColor,
  display,
  justifyContent,
  marL,
  marR,
  marT,
  marB,
  padL,
  padR,
  symbolColor,
  fontSize,
  ANfontSize,
  NAMEfontSize,
  AMfontSize,
  cardWidth,
  cardHeight,
  cursor,
  rotate,
  borderRadius,
  isPreview,
}) => {
  return (
    <CustomLink to={`/${atomicNumber}`}>
      <CardContainer
        bgColor={bgColor}
        textColor={textColor}
        borderColor={borderColor}
        display={display}
        justifyContent={justifyContent}
        marL={marL}
        marR={marR}
        marT={marT}
        marB={marB}
        padL={padL}
        padR={padR}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        cursor={cursor}
        rotate={rotate}
        borderRadius={borderRadius}
      >
        <AtomicNumber atomicNumber={atomicNumber} ANfontSize={ANfontSize}>
          {atomicNumber}
        </AtomicNumber>
        <Symbol fontSize={fontSize} symbolColor={symbolColor} symbol={symbol}>
          {symbol}
        </Symbol>
        <Name name={name} NAMEfontSize={NAMEfontSize} cpkHexColor={cpkHexColor}>
          {name}
        </Name>
        <AtomicMass atomicMass={atomicMass} AMfontSize={AMfontSize}>
          {atomicMass}
        </AtomicMass>
        {isPreview && (
          <UL>
            {atomicRadius && (
              <LI atomicRadius={atomicRadius}>
                Atomic radius: <LI>{atomicRadius}pm</LI>
              </LI>
            )}
            {boilingPoint && (
              <LI boilingPoint={boilingPoint}>
                Boiling point: <LI>{boilingPoint} °C</LI>
              </LI>
            )}
            {bondingType && (
              <LI bondingType={bondingType}>
                Bonding type: <LI>{bondingType}</LI>
              </LI>
            )}
            {density && (
              <LI density={density}>
                Density: <LI>{density}</LI>
              </LI>
            )}
            {electronAffinity && (
              <LI electronAffinity={electronAffinity}>
               Electron affinity: <LI>{electronAffinity}</LI>
              </LI>
            )}
            {electronegativity && (
              <LI electronegativity={electronegativity}>
                Electron negativity: <LI>{electronegativity}</LI>
              </LI>
            )}
            {electronicConfiguration && (
              <LI electronicConfiguration={electronicConfiguration}>
                Electron configuration: <LI>{electronicConfiguration}</LI>
              </LI>
            )}
            {groupBlock && (
              <LI groupBlock={groupBlock}>
                Group: <LI>{groupBlock}</LI>
              </LI>
            )}
            {ionRadius && (
              <LI ionRadius={ionRadius}>
                Ion Radius: <LI>{ionRadius}</LI>
              </LI>
            )}
            {ionizationEnergy && (
              <LI ionizationEnergy={ionizationEnergy}>
                Ionization energy: <LI>{ionizationEnergy}</LI>
              </LI>
            )}
            {meltingPoint && (
              <LI meltingPoint={meltingPoint}>
                Melting point: <LI>{meltingPoint}</LI>
              </LI>
            )}
            {oxidationStates && (
              <LI oxidationStates={oxidationStates}>
                Bonding type: <LI>{oxidationStates}</LI>
              </LI>
            )}
            {standardState && (
              <LI standardState={standardState}>
                State: <LI>{standardState}</LI>
              </LI>
            )}
            {vanDelWaalsRadius && (
              <LI vanDelWaalsRadius={vanDelWaalsRadius}>
                Van Del Waals Radius: <LI>{vanDelWaalsRadius}</LI>
              </LI>
            )}
            {yearDiscovered && (
              <LI yearDiscovered={yearDiscovered}>
                Year discovered: <LI>{yearDiscovered}</LI>
              </LI>
            )}
          </UL>
        )}
      </CardContainer>
    </CustomLink>
  );
};

export default Card;
