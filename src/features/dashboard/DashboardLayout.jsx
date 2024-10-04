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
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  */
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 34rem;
  gap: 2.4rem;

  @media ${device.lg} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 34rem);
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
