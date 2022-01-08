import React from "react";
import styled from "styled-components";

export const LargeCardContainer = styled.div`
  display: ${(props) => props.display || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  margin-left: ${(props) => props.marL || 0}vw;
  margin-right: ${(props) => props.marR || 0}vw;
  padding-left: ${(props) => props.padL || 0}vw;
  padding-right: ${(props) => props.padR || 0}vw;
  padding: 1rem;
  background-color: ${(props) => props.bgColor || "black"};
  color: ${(props) => props.textColor || "whitesmoke"};
  border: 1px solid ${(props) => props.borderColor || "whitesmoke"};
  border-radius: ${(props) => props.borderRadius || 0}px;
  width: calc(10rem + 20vw);
  height: calc(10rem + 20vw);
`;
const LargeAtomicNumber = styled.h1`
  font-size: calc(2rem + 1vw);
  margin: 0;
`;
const LargeSymbol = styled.h1`
  font-size: calc(14rem + 1vw);
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.symbolColor || "white"};
`;
const LargeName = styled.h1`
  font-size: calc(4rem + 1vw);
  margin: 0;
`;
const LargeAtomicMass = styled.h1`
  font-size: calc(2rem + 1vw);
  margin: 0;
`;
const UL = styled.ul`
  font-size: calc(1.5rem + 1vw);
  margin: 0;
`;
const LI = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: calc(0.75rem + 1vw);
  margin: 0;
  border-bottom: 1px solid gray;
`;
const Sup = styled.sup`
    font-size: calc(0.25rem + 1vw);
`
const LargeCard = ({
  atomicNumber,
  symbol,
  name,
  atomicMass,
  atomicRadius,
  boilingPoint,
  bondingType,
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
  vanDerWaalsRadius,
  yearDiscovered,
  isPreview,
}) => {
  return (
    <LargeCardContainer borderColor="black">
      <LargeAtomicNumber atomicNumber={atomicNumber}>
        {atomicNumber}
      </LargeAtomicNumber>
      <LargeSymbol symbol={symbol}>{symbol}</LargeSymbol>
      <LargeName name={name}>{name}</LargeName>
      <LargeAtomicMass atomicMass={atomicMass}>{atomicMass}</LargeAtomicMass>
      {isPreview && (
        <UL>
          {atomicRadius && (
            <LI atomicRadius={atomicRadius}>
              Atomic radius: <LI>{atomicRadius} pm</LI>
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
              Density: <LI>{density} g/cm<Sup>3</Sup></LI>
            </LI>
          )}
          {typeof(electronAffinity) === "number" && (
            <LI electronAffinity={electronAffinity}>
              Electron affinity: <LI>{electronAffinity} kJ/mol</LI>
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
              Ionization energy: <LI>{ionizationEnergy} kJ/mol</LI>
            </LI>
          )}
          {meltingPoint && (
            <LI meltingPoint={meltingPoint}>
              Melting point: <LI>{meltingPoint} °C</LI>
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
          {vanDerWaalsRadius && (
            <LI vanDerWaalsRadius={vanDerWaalsRadius}>
              Van Der Waals radius: <LI>{vanDerWaalsRadius} pm</LI>
            </LI>
          )}
          {yearDiscovered && (
            <LI yearDiscovered={yearDiscovered}>
              Year discovered: <LI>{yearDiscovered}</LI>
            </LI>
          )}
        </UL>
      )}
    </LargeCardContainer>
  );
};

export default LargeCard;
