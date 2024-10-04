import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import styled from "styled-components";
import { device } from "../../styles/GlobalStyles";

const StyledTableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  @media ${device.md} {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

function BookingStyledTableOperations() {
  return (
    <StyledTableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </StyledTableOperations>
  );
}

export default BookingStyledTableOperations;
