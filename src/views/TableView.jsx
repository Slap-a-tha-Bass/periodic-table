import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Card, { CardContainer, CardContainerRotate } from "../components/Card";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg);
    color: var(--text);
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }
`;
const Main = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;
const Container = styled.div`
  background-color: var(--bg);
  padding: 2.2vw;
`;
const TopDivSeparator = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FlexBox = styled.div`
  display: flex;
  margin-left: ${(props) => props.marL || 0}vw;
  margin-right: ${(props) => props.marR || 0}vw;
  padding-left: ${(props) => props.padL || 0}vw;
  padding-right: ${(props) => props.padR || 0}vw;
`;
const NumbersLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5vw;
  font-size: 1rem;
  font-weight: 300;
  color: ${(props) => props.color || "whitesmoke"};
  background-color: ${(props) => props.bgColor || "#232323"};
`;
export const H1 = styled.h1`
  font-size: calc(3rem + 1vw);
  color: whitesmoke;
  font-weight: 400;
  filter: brightness(2);
  display: flex;
  justify-content: center;
  padding-top: 1vw;
  padding-bottom: 1vw;
  background: -webkit-linear-gradient(left, green, purple);
  background: -o-linear-gradient(right, green, purple);
  background: -moz-linear-gradient(right, green, purple);
  background: linear-gradient(to right, green, purple);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const LabelContainer = styled.div`
  width: ${(props) => props.containerWidth || 52.5}vw;
  margin-left: ${(props) => props.marL || 0}vw;
`;
const LabelDiv = styled.div`
  display: flex;
  margin-left: ${(props) => props.marL || 0}vw;
  margin-right: ${(props) => props.marR || 0}vw;
  padding-left: ${(props) => props.padL || 0}vw;
  padding-right: ${(props) => props.padR || 0}vw;
`;
const LabelTitles = styled.div`
  display: ${(props) => props.display || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  margin-left: ${(props) => props.marL || 0}vw;
  margin-right: ${(props) => props.marR || 0}vw;
  padding-left: ${(props) => props.padL || 0}vw;
  padding-right: ${(props) => props.padR || 0}vw;
  padding: 5px;
  background-color: ${(props) => props.bgColor || "gray"};
  color: ${(props) => props.textColor || "whitesmoke"};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  width: ${(props) => props.cardWidth || 5.25}vw;
`;
const P = styled.p`
  margin: 1vw;
  font-size: calc(0.5rem + 0.75vw);
`;
const Dot = styled.div`
  background-color: ${(props) => props.bgColor || "gray"};
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
`;
function TableView() {
  const [elements, setElements] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setElements(data.elements);
        setHasLoaded(true);
      })
      .catch((error) => console.log("Error fetching", error));
  }, []);
  const emptyArray = new Array(18);
  return (
    <Main>
      <GlobalStyle />
      {hasLoaded && (
        <Container>
          <H1>Periodic Table of Elements</H1>
          <TopDivSeparator>
            <NumbersLeft color="#232323">0</NumbersLeft>
            {emptyArray.fill(null).map((newDiv, index) => (
              <FlexBox key={index}>
                <LabelTitles
                  bgColor="#232323"
                  textColor="white"
                  borderColor="#232323"
                  display="flex"
                  justifyContent="center"
                >
                  {index + 1}
                </LabelTitles>
              </FlexBox>
            ))}
          </TopDivSeparator>

          {/* ROW 1 */}
          {/* ROW 1 */}
          {/* ROW 1 */}

          <TopDivSeparator>
            <FlexBox>
              <NumbersLeft>1</NumbersLeft>
              <Card
                bgColor="green"
                symbolColor="rgb(255, 81, 0)"
                name={elements[0].name}
                symbol={elements[0].symbol}
                atomicMass={elements[0].atomicMass}
                atomicNumber={elements[0].atomicNumber}
              />
              <Card
                bgColor="#232323"
                borderColor="#232323"
                name="Name"
                symbol="Symbol"
                fontSize={1.25}
                atomicMass="Mass"
                atomicNumber="#"
                cursor="auto"
              />
              <LabelContainer containerWidth={78.75}>
                <FlexBox>
                  <LabelTitles bgColor="#232323" />
                  <LabelTitles bgColor="#232323" borderTop="1px solid white" />
                  <LabelTitles bgColor="#232323" borderTop="1px solid white" />
                  <LabelTitles bgColor="#232323" borderTop="1px solid white" />
                  <LabelTitles bgColor="#232323" borderTop="1px solid white" />
                  <LabelTitles
                    bgColor="#232323"
                    fontSize={1}
                    borderRight="1px solid white"
                    borderTop="1px solid white"
                  >
                    Metals
                  </LabelTitles>
                  <LabelTitles bgColor="#232323" />
                  <LabelTitles
                    bgColor="#232323"
                    fontSize={1}
                    borderLeft="1px solid white"
                    borderTop="1px solid white"
                  >
                    Nonmetals
                  </LabelTitles>
                  <LabelTitles bgColor="none" borderTop="1px solid white" />
                </FlexBox>
              </LabelContainer>
              <Card
                bgColor="rgb(84, 8, 184)"
                symbolColor="rgb(255, 81, 0)"
                name={elements[1].name}
                symbol={elements[1].symbol}
                atomicMass={elements[1].atomicMass}
                atomicNumber={elements[1].atomicNumber}
              />
            </FlexBox>
          </TopDivSeparator>

          {/* ROW 2 */}
          {/* ROW 2 */}
          {/* ROW 2 */}

          <TopDivSeparator>
            <FlexBox>
              <NumbersLeft>2</NumbersLeft>
              <Card
                bgColor="rgb(151, 88, 45)"
                name={elements[2].name}
                symbol={elements[2].symbol}
                atomicMass={elements[2].atomicMass}
                atomicNumber={elements[2].atomicNumber}
              />
              <Card
                bgColor="rgb(199, 119, 65)"
                name={elements[3].name}
                symbol={elements[3].symbol}
                atomicMass={elements[3].atomicMass}
                atomicNumber={elements[3].atomicNumber}
              />
              <LabelContainer>
                <FlexBox>
                  <LabelTitles bgColor="#232323" />
                  <LabelTitles bgColor="#232323" />
                  <LabelTitles bgColor="#232323" />
                  <LabelTitles bgColor="#232323" />
                  <LabelDiv marR={-1}>
                    <CardContainerRotate
                      fontSize={0.9}
                      cardHeight={3}
                      cardWidth={7}
                      bgColor="rgb(151, 88, 45)"
                      marL={-1}
                    >
                      Alkali metals
                    </CardContainerRotate>
                    <CardContainerRotate
                      fontSize={0.8}
                      cardHeight={3}
                      cardWidth={7}
                      bgColor="rgb(199, 119, 65)"
                      marL={-3.5}
                    >
                      Alkaline earth metals
                    </CardContainerRotate>
                  </LabelDiv>
                  <LabelDiv marR={0}>
                    <div>
                      <CardContainer
                        bgColor="rgb(70, 42, 24)"
                        cardWidth={7}
                        cardHeight={2}
                      >
                        Lanthanoids
                      </CardContainer>
                      <CardContainer
                        bgColor="rgb(149, 40, 192)"
                        cardWidth={7}
                        cardHeight={2}
                      >
                        Actinoids
                      </CardContainer>
                    </div>
                    <CardContainerRotate
                      fontSize={0.9}
                      cardHeight={3}
                      cardWidth={7}
                      bgColor="brown"
                      marL={-1}
                    >
                      Transition metals
                    </CardContainerRotate>
                    <CardContainerRotate
                      fontSize={0.8}
                      cardHeight={3}
                      cardWidth={7}
                      bgColor="rgb(8, 10, 184)"
                      marL={-3.5}
                    >
                      Post-transition metals
                    </CardContainerRotate>
                  </LabelDiv>
                  <CardContainerRotate
                    fontSize={1}
                    cardHeight={3}
                    cardWidth={12}
                    bgColor="teal"
                    marL={-1}
                    marR={1.5}
                  >
                    Metalloids
                  </CardContainerRotate>
                  <LabelDiv marL={-2} marR={6}>
                    <CardContainerRotate
                      fontSize={0.9}
                      cardHeight={3}
                      cardWidth={7}
                      bgColor="green"
                      marL={-1}
                    >
                      Reactive nonmetals
                    </CardContainerRotate>
                    <CardContainerRotate
                      fontSize={0.9}
                      cardHeight={3}
                      cardWidth={7}
                      bgColor="rgb(84, 8, 184)"
                      marL={-3.5}
                    >
                      Noble gases
                    </CardContainerRotate>
                  </LabelDiv>
                </FlexBox>
              </LabelContainer>
              <Card
                bgColor="teal"
                name={elements[4].name}
                symbol={elements[4].symbol}
                atomicMass={elements[4].atomicMass}
                atomicNumber={elements[4].atomicNumber}
              />
              <Card
                bgColor="green"
                name={elements[5].name}
                symbol={elements[5].symbol}
                atomicMass={elements[5].atomicMass}
                atomicNumber={elements[5].atomicNumber}
              />
              <Card
                bgColor="green"
                symbolColor="rgb(255, 81, 0)"
                name={elements[6].name}
                symbol={elements[6].symbol}
                atomicMass={elements[6].atomicMass}
                atomicNumber={elements[6].atomicNumber}
              />
              <Card
                bgColor="green"
                symbolColor="rgb(255, 81, 0)"
                name={elements[7].name}
                symbol={elements[7].symbol}
                atomicMass={elements[7].atomicMass}
                atomicNumber={elements[7].atomicNumber}
              />
              <Card
                bgColor="green"
                symbolColor="rgb(255, 81, 0)"
                name={elements[8].name}
                symbol={elements[8].symbol}
                atomicMass={elements[8].atomicMass}
                atomicNumber={elements[8].atomicNumber}
              />
              <Card
                bgColor="rgb(84, 8, 184)"
                symbolColor="rgb(255, 81, 0)"
                name={elements[9].name}
                symbol={elements[9].symbol}
                atomicMass={elements[9].atomicMass}
                atomicNumber={elements[9].atomicNumber}
              />
            </FlexBox>
          </TopDivSeparator>

          {/* ROW 3 */}
          {/* ROW 3 */}
          {/* ROW 3 */}

          <TopDivSeparator>
            <FlexBox>
              <NumbersLeft>3</NumbersLeft>
              <Card
                bgColor="rgb(151, 88, 45)"
                name={elements[10].name}
                symbol={elements[10].symbol}
                atomicMass={elements[10].atomicMass}
                atomicNumber={elements[10].atomicNumber}
              />
              <Card
                bgColor="rgb(199, 119, 65)"
                name={elements[11].name}
                symbol={elements[11].symbol}
                atomicMass={elements[11].atomicMass}
                atomicNumber={elements[11].atomicNumber}
              />
              <LabelContainer>
                <LabelTitles bgColor="#232323" />
                <LabelTitles bgColor="#232323" />
                <FlexBox>
                  <LabelTitles bgColor="#232323" />
                  <Dot bgColor="whitesmoke" />
                  <LabelTitles bgColor="#232323" textColor="whitesmoke">
                    Solids
                  </LabelTitles>
                  <LabelTitles bgColor="#232323" />
                  <Dot bgColor="rgb(194, 156, 253)" />
                  <LabelTitles bgColor="#232323" textColor="rgb(194, 156, 253)">
                    Liquids
                  </LabelTitles>
                  <LabelTitles bgColor="#232323" />
                  <Dot bgColor="rgb(255, 81, 0)" />
                  <LabelTitles bgColor="#232323" textColor="rgb(255, 81, 0)">
                    Gases
                  </LabelTitles>
                  <LabelTitles bgColor="#232323" />
                  <Dot bgColor="gray" />
                  <LabelTitles bgColor="#232323" textColor="gray">
                    Unknown
                  </LabelTitles>
                </FlexBox>
              </LabelContainer>
              <Card
                bgColor="rgb(8, 10, 184)"
                name={elements[12].name}
                symbol={elements[12].symbol}
                atomicMass={elements[12].atomicMass}
                atomicNumber={elements[12].atomicNumber}
              />
              <Card
                bgColor="teal"
                name={elements[13].name}
                symbol={elements[13].symbol}
                atomicMass={elements[13].atomicMass}
                atomicNumber={elements[13].atomicNumber}
              />
              <Card
                bgColor="green"
                name={elements[14].name}
                symbol={elements[14].symbol}
                atomicMass={elements[14].atomicMass}
                atomicNumber={elements[14].atomicNumber}
              />
              <Card
                bgColor="green"
                name={elements[15].name}
                symbol={elements[15].symbol}
                atomicMass={elements[15].atomicMass}
                atomicNumber={elements[15].atomicNumber}
              />
              <Card
                bgColor="green"
                symbolColor="rgb(255, 81, 0)"
                name={elements[16].name}
                symbol={elements[16].symbol}
                atomicMass={elements[16].atomicMass}
                atomicNumber={elements[16].atomicNumber}
              />
              <Card
                bgColor="rgb(84, 8, 184)"
                symbolColor="rgb(255, 81, 0)"
                name={elements[17].name}
                symbol={elements[17].symbol}
                atomicMass={elements[17].atomicMass}
                atomicNumber={elements[17].atomicNumber}
              />
            </FlexBox>
          </TopDivSeparator>

          {/* ROW 4 */}
          {/* ROW 4 */}
          {/* ROW 4 */}

          <FlexBox>
            <NumbersLeft>4</NumbersLeft>
            <Card
              bgColor="rgb(151, 88, 45)"
              name={elements[18].name}
              symbol={elements[18].symbol}
              atomicMass={elements[18].atomicMass}
              atomicNumber={elements[18].atomicNumber}
            />
            <Card
              bgColor="rgb(199, 119, 65)"
              name={elements[19].name}
              symbol={elements[19].symbol}
              atomicMass={elements[19].atomicMass}
              atomicNumber={elements[19].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[20].name}
              symbol={elements[20].symbol}
              atomicMass={elements[20].atomicMass}
              atomicNumber={elements[20].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[21].name}
              symbol={elements[21].symbol}
              atomicMass={elements[21].atomicMass}
              atomicNumber={elements[21].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[22].name}
              symbol={elements[22].symbol}
              atomicMass={elements[22].atomicMass}
              atomicNumber={elements[22].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[23].name}
              symbol={elements[23].symbol}
              atomicMass={elements[23].atomicMass}
              atomicNumber={elements[23].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[24].name}
              symbol={elements[24].symbol}
              atomicMass={elements[24].atomicMass}
              atomicNumber={elements[24].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[25].name}
              symbol={elements[25].symbol}
              atomicMass={elements[25].atomicMass}
              atomicNumber={elements[25].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[26].name}
              symbol={elements[26].symbol}
              atomicMass={elements[26].atomicMass}
              atomicNumber={elements[26].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[27].name}
              symbol={elements[27].symbol}
              atomicMass={elements[27].atomicMass}
              atomicNumber={elements[27].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[28].name}
              symbol={elements[28].symbol}
              atomicMass={elements[28].atomicMass}
              atomicNumber={elements[28].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[29].name}
              symbol={elements[29].symbol}
              atomicMass={elements[29].atomicMass}
              atomicNumber={elements[29].atomicNumber}
            />
            <Card
              bgColor="rgb(8, 10, 184)"
              name={elements[30].name}
              symbol={elements[30].symbol}
              atomicMass={elements[30].atomicMass}
              atomicNumber={elements[30].atomicNumber}
            />
            <Card
              bgColor="teal"
              name={elements[31].name}
              symbol={elements[31].symbol}
              atomicMass={elements[31].atomicMass}
              atomicNumber={elements[31].atomicNumber}
            />
            <Card
              bgColor="teal"
              name={elements[32].name}
              symbol={elements[32].symbol}
              atomicMass={elements[32].atomicMass}
              atomicNumber={elements[32].atomicNumber}
            />
            <Card
              bgColor="green"
              name={elements[33].name}
              symbol={elements[33].symbol}
              atomicMass={elements[33].atomicMass}
              atomicNumber={elements[33].atomicNumber}
            />
            <Card
              bgColor="green"
              symbolColor="rgb(194, 156, 253)"
              name={elements[34].name}
              symbol={elements[34].symbol}
              atomicMass={elements[34].atomicMass}
              atomicNumber={elements[34].atomicNumber}
            />
            <Card
              bgColor="rgb(84, 8, 184)"
              symbolColor="rgb(255, 81, 0)"
              name={elements[35].name}
              symbol={elements[35].symbol}
              atomicMass={elements[35].atomicMass}
              atomicNumber={elements[35].atomicNumber}
            />
          </FlexBox>

          {/* ROW 5 */}
          {/* ROW 5 */}
          {/* ROW 5 */}

          <FlexBox>
            <NumbersLeft>5</NumbersLeft>
            <Card
              bgColor="rgb(151, 88, 45)"
              name={elements[36].name}
              symbol={elements[36].symbol}
              atomicMass={elements[36].atomicMass}
              atomicNumber={elements[36].atomicNumber}
            />
            <Card
              bgColor="rgb(199, 119, 65)"
              name={elements[37].name}
              symbol={elements[37].symbol}
              atomicMass={elements[37].atomicMass}
              atomicNumber={elements[37].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[38].name}
              symbol={elements[38].symbol}
              atomicMass={elements[38].atomicMass}
              atomicNumber={elements[38].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[39].name}
              symbol={elements[39].symbol}
              atomicMass={elements[39].atomicMass}
              atomicNumber={elements[39].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[40].name}
              symbol={elements[40].symbol}
              atomicMass={elements[40].atomicMass}
              atomicNumber={elements[40].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[41].name}
              symbol={elements[41].symbol}
              atomicMass={elements[41].atomicMass}
              atomicNumber={elements[41].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[42].name}
              symbol={elements[42].symbol}
              atomicMass={elements[42].atomicMass}
              atomicNumber={elements[42].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[43].name}
              symbol={elements[43].symbol}
              atomicMass={elements[43].atomicMass}
              atomicNumber={elements[43].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[44].name}
              symbol={elements[44].symbol}
              atomicMass={elements[44].atomicMass}
              atomicNumber={elements[44].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[45].name}
              symbol={elements[45].symbol}
              atomicMass={elements[45].atomicMass}
              atomicNumber={elements[45].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[46].name}
              symbol={elements[46].symbol}
              atomicMass={elements[46].atomicMass}
              atomicNumber={elements[46].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[47].name}
              symbol={elements[47].symbol}
              atomicMass={elements[47].atomicMass}
              atomicNumber={elements[47].atomicNumber}
            />
            <Card
              bgColor="rgb(8, 10, 184)"
              name={elements[48].name}
              symbol={elements[48].symbol}
              atomicMass={elements[48].atomicMass}
              atomicNumber={elements[48].atomicNumber}
            />
            <Card
              bgColor="rgb(8, 10, 184)"
              name={elements[49].name}
              symbol={elements[49].symbol}
              atomicMass={elements[49].atomicMass}
              atomicNumber={elements[49].atomicNumber}
            />
            <Card
              bgColor="teal"
              name={elements[50].name}
              symbol={elements[50].symbol}
              atomicMass={elements[50].atomicMass}
              atomicNumber={elements[50].atomicNumber}
            />
            <Card
              bgColor="teal"
              name={elements[51].name}
              symbol={elements[51].symbol}
              atomicMass={elements[51].atomicMass}
              atomicNumber={elements[51].atomicNumber}
            />
            <Card
              bgColor="green"
              name={elements[52].name}
              symbol={elements[52].symbol}
              atomicMass={elements[52].atomicMass}
              atomicNumber={elements[52].atomicNumber}
            />
            <Card
              bgColor="rgb(84, 8, 184)"
              symbolColor="rgb(255, 81, 0)"
              name={elements[53].name}
              symbol={elements[53].symbol}
              atomicMass={elements[53].atomicMass}
              atomicNumber={elements[53].atomicNumber}
            />
          </FlexBox>

          {/* ROW 6 */}
          {/* ROW 6 */}
          {/* ROW 6 */}

          <FlexBox>
            <NumbersLeft>6</NumbersLeft>
            <Card
              bgColor="rgb(151, 88, 45)"
              name={elements[54].name}
              symbol={elements[54].symbol}
              atomicMass={elements[54].atomicMass}
              atomicNumber={elements[54].atomicNumber}
            />
            <Card
              bgColor="rgb(199, 119, 65)"
              name={elements[55].name}
              symbol={elements[55].symbol}
              atomicMass={elements[55].atomicMass}
              atomicNumber={elements[55].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              textColor="whitesmoke"
              borderColor="whitesmoke"
              atomicNumber="57-71"
            />
            <Card
              bgColor="brown"
              name={elements[71].name}
              symbol={elements[71].symbol}
              atomicMass={elements[71].atomicMass}
              atomicNumber={elements[71].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[72].name}
              symbol={elements[72].symbol}
              atomicMass={elements[72].atomicMass}
              atomicNumber={elements[72].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[73].name}
              symbol={elements[73].symbol}
              atomicMass={elements[73].atomicMass}
              atomicNumber={elements[73].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[74].name}
              symbol={elements[74].symbol}
              atomicMass={elements[74].atomicMass}
              atomicNumber={elements[74].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[75].name}
              symbol={elements[75].symbol}
              atomicMass={elements[75].atomicMass}
              atomicNumber={elements[75].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[76].name}
              symbol={elements[76].symbol}
              atomicMass={elements[76].atomicMass}
              atomicNumber={elements[76].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[77].name}
              symbol={elements[77].symbol}
              atomicMass={elements[77].atomicMass}
              atomicNumber={elements[77].atomicNumber}
            />
            <Card
              bgColor="brown"
              name={elements[78].name}
              symbol={elements[78].symbol}
              atomicMass={elements[78].atomicMass}
              atomicNumber={elements[78].atomicNumber}
            />
            <Card
              bgColor="brown"
              symbolColor="rgb(194, 156, 253)"
              name={elements[79].name}
              symbol={elements[79].symbol}
              atomicMass={elements[79].atomicMass}
              atomicNumber={elements[79].atomicNumber}
            />
            <Card
              bgColor="rgb(8, 10, 184)"
              name={elements[80].name}
              symbol={elements[80].symbol}
              atomicMass={elements[80].atomicMass}
              atomicNumber={elements[80].atomicNumber}
            />
            <Card
              bgColor="rgb(8, 10, 184)"
              name={elements[81].name}
              symbol={elements[81].symbol}
              atomicMass={elements[81].atomicMass}
              atomicNumber={elements[81].atomicNumber}
            />
            <Card
              bgColor="rgb(8, 10, 184)"
              name={elements[82].name}
              symbol={elements[82].symbol}
              atomicMass={elements[82].atomicMass}
              atomicNumber={elements[82].atomicNumber}
            />
            <Card
              bgColor="rgb(8, 10, 184)"
              name={elements[83].name}
              symbol={elements[83].symbol}
              atomicMass={elements[83].atomicMass}
              atomicNumber={elements[83].atomicNumber}
            />
            <Card
              bgColor="teal"
              name={elements[84].name}
              symbol={elements[84].symbol}
              atomicMass={elements[84].atomicMass}
              atomicNumber={elements[84].atomicNumber}
            />
            <Card
              bgColor="rgb(84, 8, 184)"
              symbolColor="rgb(255, 81, 0)"
              name={elements[85].name}
              symbol={elements[85].symbol}
              atomicMass={elements[85].atomicMass}
              atomicNumber={elements[85].atomicNumber}
            />
          </FlexBox>

          {/* ROW 7 */}
          {/* ROW 7 */}
          {/* ROW 7 */}

          <FlexBox>
            <NumbersLeft>7</NumbersLeft>
            <Card
              bgColor="rgb(151, 88, 45)"
              name={elements[86].name}
              symbol={elements[86].symbol}
              atomicMass={elements[86].atomicMass}
              atomicNumber={elements[86].atomicNumber}
            />
            <Card
              bgColor="rgb(199, 119, 65)"
              name={elements[87].name}
              symbol={elements[87].symbol}
              atomicMass={elements[87].atomicMass}
              atomicNumber={elements[87].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              textColor="whitesmoke"
              borderColor="whitesmoke"
              atomicNumber="89-103"
            />
            <Card
              bgColor="brown"
              symbolColor="gray"
              name={elements[103].name}
              symbol={elements[103].symbol}
              atomicMass={elements[103].atomicMass}
              atomicNumber={elements[103].atomicNumber}
            />
            <Card
              bgColor="brown"
              symbolColor="gray"
              name={elements[104].name}
              symbol={elements[104].symbol}
              atomicMass={elements[104].atomicMass}
              atomicNumber={elements[104].atomicNumber}
            />
            <Card
              bgColor="brown"
              symbolColor="gray"
              name={elements[105].name}
              symbol={elements[105].symbol}
              atomicMass={elements[105].atomicMass}
              atomicNumber={elements[105].atomicNumber}
            />
            <Card
              bgColor="brown"
              symbolColor="gray"
              name={elements[106].name}
              symbol={elements[106].symbol}
              atomicMass={elements[106].atomicMass}
              atomicNumber={elements[106].atomicNumber}
            />
            <Card
              bgColor="brown"
              symbolColor="gray"
              name={elements[107].name}
              symbol={elements[107].symbol}
              atomicMass={elements[107].atomicMass}
              atomicNumber={elements[107].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[108].name}
              symbol={elements[108].symbol}
              atomicMass={elements[108].atomicMass}
              atomicNumber={elements[108].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[109].name}
              symbol={elements[109].symbol}
              atomicMass={elements[109].atomicMass}
              atomicNumber={elements[109].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[110].name}
              symbol={elements[110].symbol}
              atomicMass={elements[110].atomicMass}
              atomicNumber={elements[110].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[111].name}
              symbol={elements[111].symbol}
              atomicMass={elements[111].atomicMass}
              atomicNumber={elements[111].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[112].name}
              symbol={elements[112].symbol}
              atomicMass={elements[112].atomicMass}
              atomicNumber={elements[112].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[113].name}
              symbol={elements[113].symbol}
              atomicMass={elements[113].atomicMass}
              atomicNumber={elements[113].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[114].name}
              symbol={elements[114].symbol}
              atomicMass={elements[114].atomicMass}
              atomicNumber={elements[114].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[115].name}
              symbol={elements[115].symbol}
              atomicMass={elements[115].atomicMass}
              atomicNumber={elements[115].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[116].name}
              symbol={elements[116].symbol}
              atomicMass={elements[116].atomicMass}
              atomicNumber={elements[116].atomicNumber}
            />
            <Card
              bgColor
              symbolColor="gray"
              name={elements[117].name}
              symbol={elements[117].symbol}
              atomicMass={elements[117].atomicMass}
              atomicNumber={elements[117].atomicNumber}
            />
          </FlexBox>
          <FlexBox>
            <NumbersLeft color="#232323">0</NumbersLeft>
            <LabelTitles bgColor="#232323" />
            <LabelTitles bgColor="#232323" />
            <LabelTitles bgColor="#232323" />
            <LabelTitles bgColor="#232323" />
            <P>
              For elements with no stable isotopes, the mass number of the
              isotope with the longest half-life is in parentheses.
            </P>
          </FlexBox>
          <FlexBox>
            <LabelTitles bgColor="#232323" />
            <LabelTitles bgColor="#232323" />
            <LabelTitles bgColor="#232323" />
            <NumbersLeft bgColor="#232323">6</NumbersLeft>
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[56].name}
              symbol={elements[56].symbol}
              atomicMass={elements[56].atomicMass}
              atomicNumber={elements[56].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[57].name}
              symbol={elements[57].symbol}
              atomicMass={elements[57].atomicMass}
              atomicNumber={elements[57].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[58].name}
              symbol={elements[58].symbol}
              atomicMass={elements[58].atomicMass}
              atomicNumber={elements[58].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[59].name}
              symbol={elements[59].symbol}
              atomicMass={elements[59].atomicMass}
              atomicNumber={elements[59].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[60].name}
              symbol={elements[60].symbol}
              atomicMass={elements[60].atomicMass}
              atomicNumber={elements[60].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[61].name}
              symbol={elements[61].symbol}
              atomicMass={elements[61].atomicMass}
              atomicNumber={elements[61].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[62].name}
              symbol={elements[62].symbol}
              atomicMass={elements[62].atomicMass}
              atomicNumber={elements[62].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[63].name}
              symbol={elements[63].symbol}
              atomicMass={elements[63].atomicMass}
              atomicNumber={elements[63].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[64].name}
              symbol={elements[64].symbol}
              atomicMass={elements[64].atomicMass}
              atomicNumber={elements[64].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[65].name}
              symbol={elements[65].symbol}
              atomicMass={elements[65].atomicMass}
              atomicNumber={elements[65].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[66].name}
              symbol={elements[66].symbol}
              atomicMass={elements[66].atomicMass}
              atomicNumber={elements[66].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[67].name}
              symbol={elements[67].symbol}
              atomicMass={elements[67].atomicMass}
              atomicNumber={elements[67].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[68].name}
              symbol={elements[68].symbol}
              atomicMass={elements[68].atomicMass}
              atomicNumber={elements[68].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[69].name}
              symbol={elements[69].symbol}
              atomicMass={elements[69].atomicMass}
              atomicNumber={elements[69].atomicNumber}
            />
            <Card
              bgColor="rgb(70, 42, 24)"
              name={elements[70].name}
              symbol={elements[70].symbol}
              atomicMass={elements[70].atomicMass}
              atomicNumber={elements[70].atomicNumber}
            />
          </FlexBox>
          <FlexBox>
            <LabelTitles bgColor="#232323" />
            <LabelTitles bgColor="#232323" />
            <LabelTitles bgColor="#232323" />
            <NumbersLeft>7</NumbersLeft>
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[88].name}
              symbol={elements[88].symbol}
              atomicMass={elements[88].atomicMass}
              atomicNumber={elements[88].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[89].name}
              symbol={elements[89].symbol}
              atomicMass={elements[89].atomicMass}
              atomicNumber={elements[89].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[90].name}
              symbol={elements[90].symbol}
              atomicMass={elements[90].atomicMass}
              atomicNumber={elements[90].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[91].name}
              symbol={elements[91].symbol}
              atomicMass={elements[91].atomicMass}
              atomicNumber={elements[91].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[92].name}
              symbol={elements[92].symbol}
              atomicMass={elements[92].atomicMass}
              atomicNumber={elements[92].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[93].name}
              symbol={elements[93].symbol}
              atomicMass={elements[93].atomicMass}
              atomicNumber={elements[93].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[94].name}
              symbol={elements[94].symbol}
              atomicMass={elements[94].atomicMass}
              atomicNumber={elements[94].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[95].name}
              symbol={elements[95].symbol}
              atomicMass={elements[95].atomicMass}
              atomicNumber={elements[95].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[96].name}
              symbol={elements[96].symbol}
              atomicMass={elements[96].atomicMass}
              atomicNumber={elements[96].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[97].name}
              symbol={elements[97].symbol}
              atomicMass={elements[97].atomicMass}
              atomicNumber={elements[97].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[98].name}
              symbol={elements[98].symbol}
              atomicMass={elements[98].atomicMass}
              atomicNumber={elements[98].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[99].name}
              symbol={elements[99].symbol}
              atomicMass={elements[99].atomicMass}
              atomicNumber={elements[99].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[100].name}
              symbol={elements[100].symbol}
              atomicMass={elements[100].atomicMass}
              atomicNumber={elements[100].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[101].name}
              symbol={elements[101].symbol}
              atomicMass={elements[101].atomicMass}
              atomicNumber={elements[101].atomicNumber}
            />
            <Card
              bgColor="rgb(149, 40, 192)"
              name={elements[102].name}
              symbol={elements[102].symbol}
              atomicMass={elements[102].atomicMass}
              atomicNumber={elements[102].atomicNumber}
            />
          </FlexBox>
        </Container>
      )}
    </Main>
  );
}

export default TableView;
