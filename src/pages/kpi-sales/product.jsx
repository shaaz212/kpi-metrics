import { Helmet } from 'react-helmet-async';

import SalesProductView from 'src/sections/sales/view/sales-product-view';

// section

export default function SalesProductDashboardPage() {
  return (
    <>
      <Helmet>
        <title>Sales Product</title>
      </Helmet>
      <SalesProductView />
    </>
  );
}
