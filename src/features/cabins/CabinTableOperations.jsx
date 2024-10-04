import styled from "styled-components";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
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
function CabinTableOperations() {
  return (
    <StyledTableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
        ]}
      />
    </StyledTableOperations>
  );
}

export default CabinTableOperations;
