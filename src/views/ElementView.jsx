import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import { GlobalStyle, H1 } from "./TableView";

const CenterDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3vw;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(left, green, purple);
  background: -o-linear-gradient(right, green, purple);
  background: -moz-linear-gradient(right, green, purple);
  background: linear-gradient(to right, green, purple);
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: whitesmoke;
  &:hover {
    cursor: pointer;
    filter: brightness(2);
  }
`;
const ElementView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [elements, setElements] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => {
        setElements(data.elements);
        setHasLoaded(true);
      });
  }, []);
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div>
      <GlobalStyle />
      {hasLoaded && <H1>More about {elements[Number(id) - 1].name}</H1>}
      {hasLoaded && (
        <CenterDivContainer>
          <Card
            key={id}
            name={elements[Number(id) - 1].name}
            NAMEfontSize={4}
            symbol={elements[Number(id - 1)].symbol}
            fontSize={14}
            atomicMass={elements[Number(id) - 1].atomicMass}
            AMfontSize={4}
            atomicNumber={elements[Number(id) - 1].atomicNumber}
            ANfontSize={4}
            cardWidth={30}
            cardHeight={30}
            bgColor="black"
            borderColor="black"
          />
          <Card
            isPreview
            atomicRadius={elements[Number(id) - 1].atomicRadius}
            boilingPoint={elements[Number(id) - 1].boilingPoint}
            bondingType={elements[Number(id) - 1].bondingType}
            density={elements[Number(id) - 1].density}
            electronAffinity={elements[Number(id) - 1].electronAffinity}
            electronegativity={elements[Number(id) - 1].electronegativity}
            electronicConfiguration={
              elements[Number(id) - 1].electronicConfiguration
            }
            groupBlock={elements[Number(id) - 1].groupBlock}
            ionRadius={elements[Number(id) - 1].ionRadius}
            ionizationEnergy={elements[Number(id) - 1].ionizationEnergy}
            meltingPoint={elements[Number(id) - 1].meltingPoint}
            oxidationStates={elements[Number(id) - 1].oxidationStates}
            standardState={elements[Number(id) - 1].standardState}
            vanDelWaalsRadius={elements[Number(id) - 1].vanDelWaalsRadius}
            yearDiscovered={elements[Number(id) - 1].yearDiscovered}
            cardWidth={30}
            cardHeight={30}
            bgColor="black"
            borderColor="black"
          />
        </CenterDivContainer>
      )}
      <CenterDivContainer>
        <Button onClick={handleGoBack}>Back to Table</Button>
      </CenterDivContainer>
    </div>
  );
};

export default ElementView;
