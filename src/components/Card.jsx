import React, { useEffect, useState } from "react";
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
  width: ${(props) => props.cardWidth || 5.25}vw;
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
  font-size: 1rem;
  margin: 0;
`;
const Symbol = styled.h1`
  font-size: ${(props) => props.fontSize || 1.5}rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.symbolColor || "white"};
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
  symbolColor,
  fontSize,
  cardWidth,
  cardHeight,
  cursor,
  rotate,
}) => {
    // const [oneElement, setOneElement] = useState();
    // useEffect(() => {
        
    // }, [atomicNumber])
    const handleClick = () => {
        console.log('Clicked')
    }
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
      cardWidth={cardWidth}
      cardHeight={cardHeight}
      cursor={cursor}
      rotate={rotate}
      onClick={handleClick}
    >
      <AtomicNumber atomicNumber={atomicNumber}>{atomicNumber}</AtomicNumber>
      <Symbol fontSize={fontSize} symbolColor={symbolColor} symbol={symbol}>
        {symbol}
      </Symbol>
      <Name name={name}>{name}</Name>
      <AtomicMass atomicMass={atomicMass}>{atomicMass}</AtomicMass>
    </CardContainer>
  );
};

export default Card;
