import React from 'react';

// mui
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

// mock

// compponents
import { useSettingsContext } from 'src/components/settings';

import SalesProductRevenue from '../sales-product-revenue';
import SalesProductWinRate from '../sales-product-win-rate';
import SalesProductPartners from '../sales-product-partners';
import SalesProductTotalDeal from '../sales-product-total-deal';
import SalesProductCharnRate from '../sales-product-charn-rate';
import SalesproductDealStages from '../sales-product-deal-stages';

export default function SalesProductView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const data = [
    { label: 'Acronis', totalAmount: 9714, value: 13.6 },
    { label: 'bitdefender', totalAmount: 9714, value: 26.6 },
    { label: 'NEVERFAIL', totalAmount: 9714, value: 13.6 },
    { label: 'DropSuite', totalAmount: 9714, value: 26.6 },
    { label: 'zimbra', totalAmount: 9714, value: 26.6 },
  ];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={1}>
        <Grid xs={12} md={4}>
          <SalesProductRevenue title="Sales Overview" data={data} />
        </Grid>
        <Grid xs={12} md={5}>
          <Card sx={{ height: 412 }}>
            <CardHeader title="Charn Rate Trend Analysis" />
            <CardContent>
              <SalesProductCharnRate
                series={[
                  { name: 'Charn Rate', data: [31, 40, 28, 51, 42, 109, 100, 62, 81, 29, 12, 19] },
                  {
                    name: 'Moving Avg\n(3 months)',
                    data: [11, 22, 35, 32, 34, 52, 41, 18, 73, 22, 93, 82],
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <SalesProductWinRate
            title="Win Rate"
            chart={{
              series: [
                { label: 'Acronis', value: 4344 },
                { label: 'Bit defender', value: 5435 },
                { label: 'NEVERFAIL', value: 1443 },
                { label: 'DropSuite', value: 4443 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={3}>
          <SalesProductTotalDeal
            title="Total Deals won per product"
            // subheader="(+43%) than last year"
            chart={{
              colors: theme.palette.warning.main,
              series: [
                { label: 'Aishwarya', value: 400 },
                { label: 'Akhila', value: 430 },
                { label: 'Jithin', value: 448 },
                { label: 'Sajan', value: 470 },
                { label: 'Anni', value: 448 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={5}>
          <Card sx={{ height: 412 }}>
            <CardHeader title="Total v/s Unique Partners" />
            <CardContent>
              <SalesProductPartners
                series={[
                  {
                    name: 'Total Deals',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 87, 76, 67],
                  },
                  {
                    name: 'Total Partners',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 72, 66, 97],
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card sx={{ height: 412 }}>
            <CardHeader title="Deal Stage Distribution" />
            <CardContent>
              <SalesproductDealStages
                series={[
                  {
                    // name: 'Funnel Series',
                    data: [1380, 1100, 990, 880, 740, 548, 330, 200],
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
