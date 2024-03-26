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
import SalesProductRegion from '../sales-product-charn-rate';
import SalesProductTotalDeal from '../sales-product-total-deal';
import SalesproductDealStages from '../sales-product-deal-stages';

export default function SalesProductView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={1}>
        <Grid xs={12} md={4}>
          <Card
            sx={{
              height: 412,
            }}
          >
            <CardHeader title="Product Sales by Type" />
            <CardContent>
              <SalesProductRevenue
                series={[
                  { name: 'MSP', data: [44, 55, 41, 67] },
                  { name: 'New', data: [13, 23, 20, 13] },
                  { name: 'Renewal', data: [11, 17, 15, 21] },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={5}>
          <Card sx={{ height: 412 }}>
            <CardHeader title="Product Sales by Region" />
            <CardContent>
              <SalesProductRegion
                series={[
                  {
                    data: [
                      { x: 'UAE', y: 100 },
                      { x: 'Qatar', y: 20 },
                      { x: 'Oman', y: 30 },
                      { x: 'Baharain', y: 50 },
                    ],
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
        <Grid xs={12} md={4}>
          <SalesProductTotalDeal
            title="Total Deals Won"
            // subheader="(+43%) than last year"
            chart={{
              colors: theme.palette.warning.main,
              series: [
                { label: 'Acronis', value: 400 },
                { label: 'Bit defender', value: 430 },
                { label: 'DropSuite', value: 448 },
                { label: 'NEVERFAIL', value: 470 },
                { label: 'Zimbra', value: 448 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={4}>
          <Card sx={{ height: 412 }}>
            <CardHeader title="Top 10 Product items by Sales" />
            <SalesProductPartners
              chart={{
                colors: theme.palette.info.main,
                series: [
                  { label: 'Acronis', value: 400 },
                  { label: 'Bit defender', value: 430 },
                  { label: 'DropSuite', value: 448 },
                  { label: 'NEVERFAIL', value: 470 },
                  { label: 'Zimbra', value: 448 },
                ],
              }}
            />
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
