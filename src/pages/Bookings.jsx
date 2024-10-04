import styled from "styled-components";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
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

function Bookings() {
  return (
    <>
      <StyledRow>
        <Heading as="h1">All bookings</Heading>

        <BookingTableOperations />
      </StyledRow>
      <BookingTable />
    </>
  );
}

export default Bookings;
