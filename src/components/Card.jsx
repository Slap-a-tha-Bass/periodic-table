import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 5px;
  background-color: ${props => (props.bgColor) || "gray"};
  border: 0.5px solid whitesmoke;
  min-width: 4.75rem;
  margin-left: ${props => props.marL || "0"}rem;
`;
const AtomicNumber = styled.h1`
  font-size: 1rem;
  margin: 0;
`;
const Symbol = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;
const Name = styled.h1`
  font-size: 0.75rem;
  margin: 0;
`;
const AtomicMass = styled.h1`
  font-size: 0.75rem;
  margin: 0;
`;
const Card = ({ name, symbol, atomicMass, atomicNumber, bgColor }) => {
  return (
    <CardContainer bgColor={bgColor}>
      <AtomicNumber atomicNumber={atomicNumber}>{atomicNumber}</AtomicNumber>
      <Symbol symbol={symbol}>{symbol}</Symbol>
      <Name name={name}>{name}</Name>
      <AtomicMass atomicMass={atomicMass}>{atomicMass}</AtomicMass>
    </CardContainer>
  );
};

export default Card;
