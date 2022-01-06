import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
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
  width: 5.25vw;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
const AtomicNumber = styled.h1`
  font-size: 1rem;
  margin: 0;
`;
const Symbol = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: ${props => props.symbolColor || "white"};
`;
const Name = styled.h1`
  font-size: 0.7rem;
  margin: 0;
`;
const AtomicMass = styled.h1`
  font-size: 0.75rem;
  margin: 0;
`;
const Card = ({
  name,
  symbol,
  atomicMass,
  atomicNumber,
  bgColor,
  textColor,
  borderColor,
  display,
  justifyContent,
  marL,
  marR,
  padL,
  padR,
  symbolColor
}) => {
  return (
    <CardContainer
      bgColor={bgColor}
      textColor={textColor}
      borderColor={borderColor}
      display={display}
      justifyContent={justifyContent}
      marL={marL}
      marR={marR}
      padL={padL}
      padR={padR}
    >
      <AtomicNumber atomicNumber={atomicNumber}>{atomicNumber}</AtomicNumber>
      <Symbol 
      symbolColor={symbolColor}
      symbol={symbol}>{symbol}</Symbol>
      <Name name={name}>{name}</Name>
      <AtomicMass atomicMass={atomicMass}>{atomicMass}</AtomicMass>
    </CardContainer>
  );
};

export default Card;
