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
  padding: 2px;
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
  padding: 2px;
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
  font-size: calc(0.25rem + 0.75vw);
  margin: 0;
`;
const Symbol = styled.h1`
  font-size: calc(1rem + 1vw);
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.symbolColor || "white"};
`;
const Name = styled.h1`
  font-size: calc(0.25rem + 0.5vw);
  margin: 0;
`;
const AtomicMass = styled.h1`
  font-size: calc(0.25rem + 0.5vw);
  margin: 0;
`;
const CustomLink = styled(Link)`
  text-decoration: none;
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
  marT,
  marB,
  padL,
  padR,
  symbolColor,
  cardWidth,
  cardHeight,
  cursor,
  rotate,
  borderRadius,
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
        <AtomicNumber atomicNumber={atomicNumber} >
          {atomicNumber}
        </AtomicNumber>
        <Symbol symbolColor={symbolColor} symbol={symbol}>
          {symbol}
        </Symbol>
        <Name name={name}>
          {name}
        </Name>
        <AtomicMass atomicMass={atomicMass} >
          {atomicMass}
        </AtomicMass>
      </CardContainer>
    </CustomLink>
  );
};

export default Card;
