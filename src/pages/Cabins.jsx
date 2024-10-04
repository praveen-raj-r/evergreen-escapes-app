import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import styled from "styled-components";
import { device } from "../styles/GlobalStyles";

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.lg} {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

function Cabins() {
  return (
    <>
      <StyledRow>
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </StyledRow>

      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
