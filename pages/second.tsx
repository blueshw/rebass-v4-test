import Link from "next/link";
import { Box, Flex, Button, Text } from "rebass/styled-components";
import styled from "styled-components";

const SecondPage = () => (
  <>
    <h1>Second Page (CSS-in-JS)</h1>
    <Box>
      <Link href="/">
        <a>Go First Page</a>
      </Link>
    </Box>
    <StyledContainer index={0}>
      <StyledFlex>
        <Button variant="transparent_02" sx={{ padding: "10px" }}>
          <Text color="pink">Button</Text>
        </Button>
        <Button variant="transparent_yellow01_a70" sx={{ padding: "4px" }}>
          <Text color="green">Button</Text>
        </Button>
        <Button variant="transparent_yellow01_a70_02">
          <Text color="defaultGray">Button</Text>
        </Button>
        <Button variant="black">
          <Text color="gray02_a30">Button</Text>
        </Button>
        <Button variant="black_02">
          <Text color="black_a60" sx={{ paddingBottom: "8px" }}>
            Button
          </Text>
        </Button>
      </StyledFlex>
      <StyledFlex2>
        <Button variant="black_03">
          <Text color="dimmed">Button</Text>
        </Button>
        <Button variant="black02" sx={{ padding: "6px" }}>
          <Text color="blue">Button</Text>
        </Button>
        <Button variant="lightGrey01">
          <Text color="black">Button</Text>
        </Button>
        <Button variant="lightGrey03">
          <Text color="black02">Button</Text>
        </Button>
        <Button variant="lightGrey03_02" sx={{ paddingBottom: "12px" }}>
          <Text color="grey00">Button</Text>
        </Button>
      </StyledFlex2>
      <StyledFlex3>
        <Button variant="lightGrey04">
          <Text color="grey01">Button</Text>
        </Button>
        <Button variant="white_lightGrey01">
          <Text color="grey02" sx={{ padding: "7px" }}>
            Button
          </Text>
        </Button>
        <Button variant="white_black_a30">
          <Text color="grey03">Button</Text>
        </Button>
        <Button variant="white_lightGrey02">
          <Text color="grey04" sx={{ paddingBottom: "5px" }}>
            Button
          </Text>
        </Button>
        <Button variant="white">
          <Text color="yellow01">Button</Text>
        </Button>
      </StyledFlex3>
      <StyledFlex4>
        <Button variant="red04">
          <Text color="yellow02">Button</Text>
        </Button>
        <Button variant="yellow01" sx={{ padding: "11px" }}>
          <Text color="red01">Button</Text>
        </Button>
        <Button variant="yellow01_02">
          <Text color="red02">Button</Text>
        </Button>
        <Button variant="yellow01_03">
          <Text color="red03" sx={{ padding: "3px" }}>
            Button
          </Text>
        </Button>
        <Button variant="yellow01_04">
          <Text color="red04">Button</Text>
        </Button>
      </StyledFlex4>
      <StyledFlex5>
        <Button variant="whatsapp" sx={{ padding: "1px" }}>
          <Text color="blue01">Button</Text>
        </Button>
        <Button variant="white_google">
          <Text color="blue02">Button</Text>
        </Button>
        <Button variant="black02_apple">
          <Text color="lightGrey01" sx={{ paddingBottom: "2px" }}>
            Button
          </Text>
        </Button>
        <Button variant="white_lightGrey01">
          <Text color="lightGrey02">Button</Text>
        </Button>
        <Button variant="lightGrey04">
          <Text color="lightGrey03">Button</Text>
        </Button>
      </StyledFlex5>
    </StyledContainer>
    <StyledContainer index={1}>
      <StyledFlex>
        <Button variant="transparent_02" sx={{ padding: "10px" }}>
          <Text color="pink">Button</Text>
        </Button>
        <Button variant="transparent_yellow01_a70" sx={{ padding: "4px" }}>
          <Text color="green">Button</Text>
        </Button>
        <Button variant="transparent_yellow01_a70_02">
          <Text color="defaultGray">Button</Text>
        </Button>
        <Button variant="black">
          <Text color="gray02_a30">Button</Text>
        </Button>
        <Button variant="black_02">
          <Text color="black_a60" sx={{ paddingBottom: "8px" }}>
            Button
          </Text>
        </Button>
      </StyledFlex>
      <StyledFlex2>
        <Button variant="black_03">
          <Text color="dimmed">Button</Text>
        </Button>
        <Button variant="black02" sx={{ padding: "6px" }}>
          <Text color="blue">Button</Text>
        </Button>
        <Button variant="lightGrey01">
          <Text color="black">Button</Text>
        </Button>
        <Button variant="lightGrey03">
          <Text color="black02">Button</Text>
        </Button>
        <Button variant="lightGrey03_02" sx={{ paddingBottom: "12px" }}>
          <Text color="grey00">Button</Text>
        </Button>
      </StyledFlex2>
      <StyledFlex3>
        <Button variant="lightGrey04">
          <Text color="grey01">Button</Text>
        </Button>
        <Button variant="white_lightGrey01">
          <Text color="grey02" sx={{ padding: "7px" }}>
            Button
          </Text>
        </Button>
        <Button variant="white_black_a30">
          <Text color="grey03">Button</Text>
        </Button>
        <Button variant="white_lightGrey02">
          <Text color="grey04" sx={{ paddingBottom: "5px" }}>
            Button
          </Text>
        </Button>
        <Button variant="white">
          <Text color="yellow01">Button</Text>
        </Button>
      </StyledFlex3>
      <StyledFlex4>
        <Button variant="red04">
          <Text color="yellow02">Button</Text>
        </Button>
        <Button variant="yellow01" sx={{ padding: "11px" }}>
          <Text color="red01">Button</Text>
        </Button>
        <Button variant="yellow01_02">
          <Text color="red02">Button</Text>
        </Button>
        <Button variant="yellow01_03">
          <Text color="red03" sx={{ padding: "3px" }}>
            Button
          </Text>
        </Button>
        <Button variant="yellow01_04">
          <Text color="red04">Button</Text>
        </Button>
      </StyledFlex4>
      <StyledFlex5>
        <Button variant="whatsapp" sx={{ padding: "1px" }}>
          <Text color="blue01">Button</Text>
        </Button>
        <Button variant="white_google">
          <Text color="blue02">Button</Text>
        </Button>
        <Button variant="black02_apple">
          <Text color="lightGrey01" sx={{ paddingBottom: "2px" }}>
            Button
          </Text>
        </Button>
        <Button variant="white_lightGrey01">
          <Text color="lightGrey02">Button</Text>
        </Button>
        <Button variant="lightGrey04">
          <Text color="lightGrey03">Button</Text>
        </Button>
      </StyledFlex5>
    </StyledContainer>
    <StyledContainer index={2}>
      <StyledFlex>
        <Button variant="transparent_02" sx={{ padding: "10px" }}>
          <Text color="pink">Button</Text>
        </Button>
        <Button variant="transparent_yellow01_a70" sx={{ padding: "4px" }}>
          <Text color="green">Button</Text>
        </Button>
        <Button variant="transparent_yellow01_a70_02">
          <Text color="defaultGray">Button</Text>
        </Button>
        <Button variant="black">
          <Text color="gray02_a30">Button</Text>
        </Button>
        <Button variant="black_02">
          <Text color="black_a60" sx={{ paddingBottom: "8px" }}>
            Button
          </Text>
        </Button>
      </StyledFlex>
      <StyledFlex2>
        <Button variant="black_03">
          <Text color="dimmed">Button</Text>
        </Button>
        <Button variant="black02" sx={{ padding: "6px" }}>
          <Text color="blue">Button</Text>
        </Button>
        <Button variant="lightGrey01">
          <Text color="black">Button</Text>
        </Button>
        <Button variant="lightGrey03">
          <Text color="black02">Button</Text>
        </Button>
        <Button variant="lightGrey03_02" sx={{ paddingBottom: "12px" }}>
          <Text color="grey00">Button</Text>
        </Button>
      </StyledFlex2>
      <StyledFlex3>
        <Button variant="lightGrey04">
          <Text color="grey01">Button</Text>
        </Button>
        <Button variant="white_lightGrey01">
          <Text color="grey02" sx={{ padding: "7px" }}>
            Button
          </Text>
        </Button>
        <Button variant="white_black_a30">
          <Text color="grey03">Button</Text>
        </Button>
        <Button variant="white_lightGrey02">
          <Text color="grey04" sx={{ paddingBottom: "5px" }}>
            Button
          </Text>
        </Button>
        <Button variant="white">
          <Text color="yellow01">Button</Text>
        </Button>
      </StyledFlex3>
      <StyledFlex4>
        <Button variant="red04">
          <Text color="yellow02">Button</Text>
        </Button>
        <Button variant="yellow01" sx={{ padding: "11px" }}>
          <Text color="red01">Button</Text>
        </Button>
        <Button variant="yellow01_02">
          <Text color="red02">Button</Text>
        </Button>
        <Button variant="yellow01_03">
          <Text color="red03" sx={{ padding: "3px" }}>
            Button
          </Text>
        </Button>
        <Button variant="yellow01_04">
          <Text color="red04">Button</Text>
        </Button>
      </StyledFlex4>
      <StyledFlex5>
        <Button variant="whatsapp" sx={{ padding: "1px" }}>
          <Text color="blue01">Button</Text>
        </Button>
        <Button variant="white_google">
          <Text color="blue02">Button</Text>
        </Button>
        <Button variant="black02_apple">
          <Text color="lightGrey01" sx={{ paddingBottom: "2px" }}>
            Button
          </Text>
        </Button>
        <Button variant="white_lightGrey01">
          <Text color="lightGrey02">Button</Text>
        </Button>
        <Button variant="lightGrey04">
          <Text color="lightGrey03">Button</Text>
        </Button>
      </StyledFlex5>
    </StyledContainer>
  </>
);

const StyledContainer = styled(Flex).attrs({ flexDirection: "column" })<{
  index: number;
}>`
  margin-top: ${props => props.index * 20}px;
  padding: 0;
  background: ${props =>
    props.index === 0 ? "#999999" : props.index === 1 ? "#aaaaaa" : "#cccccc"};
  & > div {
    box-shadow: ${({ index }) => {
      return `${index * 4 + 2}px ${index * 3 + 1}px 5px #44444460`;
    }};
  }
`;

const StyledFlex = styled(Flex)`
  margin: 10px;
  padding: 0px;
  & > button {
    margin: 10px;
  }
  background: rgba(0, 0, 0, 0.3);
`;
const StyledFlex2 = styled(Flex)`
  margin: 5px;
  padding: 5px;
  & > button {
    margin: 5px;
  }
  background: lightyellow;
`;
const StyledFlex3 = styled(Flex)`
  margin: 6px;
  padding: 10px;
  & > button {
    margin: 5px;
  }
  background: lightsalmon;
  border-radius: 5px;
`;
const StyledFlex4 = styled(Flex)`
  margin: 8px;
  padding: 12px;
  & > button {
    margin: 5px;
  }
  background: lightsteelblue;
  border-radius: 12px;
`;
const StyledFlex5 = styled(Flex)`
  margin: 4px;
  padding: 8px;
  & > button {
    margin: 5px;
  }
  background: lightgrey;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

export default SecondPage;
