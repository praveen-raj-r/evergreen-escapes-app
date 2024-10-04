import styled from "styled-components";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import { device } from "../styles/GlobalStyles";

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.md} {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

function Dashboard() {
  return (
    <>
      <StyledRow type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </StyledRow>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
