import { Helmet } from 'react-helmet-async';

import SalesPersonView from 'src/sections/sales/view/sales-person-view';

// section

export default function SalesPersonDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Sales Person</title>
      </Helmet>
      <SalesPersonView />
    </>
  );
}
