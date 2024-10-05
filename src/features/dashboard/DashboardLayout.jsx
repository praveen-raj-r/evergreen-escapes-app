import styled from "styled-components";
import Spinner from "../../ui/Spinner";

import { useCabins } from "../cabins/useCabins";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { device } from "../../styles/GlobalStyles";

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  @media ${device.lg} {
    flex-direction: column;
  }
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();
  const { isLoading: isLoading2, confirmedStays, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <StyledRow>
        <TodayActivity />
        <DurationChart confirmedStays={confirmedStays} />
      </StyledRow>

      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
