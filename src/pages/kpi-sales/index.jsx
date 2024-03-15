import { Helmet } from 'react-helmet-async';

import { SalesView } from 'src/sections/sales/view';

// section

export default function OverviewSalesDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Sales</title>
      </Helmet>
      <SalesView />
    </>
  );
}
