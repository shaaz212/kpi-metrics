import { Helmet } from 'react-helmet-async';

// section
import { DashBoardView } from 'src/sections/dashboard/view';

export default function OverviewDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashBoardView />
    </>
  );
}
