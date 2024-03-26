// mui
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

// utils

// components
import { useSettingsContext } from 'src/components/settings';

// section
import WinRatePie from '../winrate-pie';
import SalesSummary from '../sales-summary';
import SalesWinRate from '../sales-win-rate';
import SalesAvgRevenue from '../sales-avg-revenue';
import SalesWinRatePie from '../sales-win-rate-pie';
import SalesPersonRates from '../sales-person-rates';
import SalesWidgetSummary from '../sales-widget-summary';
import SalesRevenuePerPerson from '../sales-revenue-per-person';
import SalesPartnerAcquisition from '../sales-partner-acquisition';

export default function SalesPersonView() {
  const theme = useTheme();

  // const GB = 1000000000 * 24;

  const settings = useSettingsContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={1}>
        <Grid xs={6} md={2.4}>
          <Card sx={{ height: 135 }}>
            <CardContent>
              <SalesWidgetSummary title="Total Revenue" percent={2.6} total={7653} />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6} md={2.4}>
          <Card sx={{ height: 135 }}>
            <CardContent>
              <SalesWidgetSummary title="Avg Revenue Sales" percent={-2.6} total={7653} />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6} md={2.4}>
          <SalesSummary
            title="Total Deals Won"
            subtitle="current month"
            percent={2.6}
            total={18765231}
            chart={{
              series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
            }}
          />
        </Grid>
        <Grid xs={6} md={2.4}>
          <SalesPartnerAcquisition
            title="New Partner Acquisition"
            percent={2.6}
            total={18765}
            chart={{
              series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
            }}
          />
        </Grid>
        <Grid xs={12} md={2.4}>
          <SalesWinRate
            title="Win Rate"
            chart={{
              series: [{ label: 'Pending for payment', percent: 64, total: 18472 }],
            }}
          />
        </Grid>
        <Grid xs={12} md={4.5}>
          <SalesPersonRates
            title="Total deals Won"
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
        <Grid xs={12} md={4.5}>
          <Card sx={{ height: 412 }}>
            <CardHeader title="Average vs Total Revenue Analysis" />
            <CardContent>
              <SalesAvgRevenue
                series={[
                  { name: 'Total Revenue', data: [31, 40, -20, 51, 42, 90, 80] },
                  { name: 'Average revenue', data: [20, 30, -10, 41, 32, 70, 50] },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <SalesWinRatePie
            title="Win Rate"
            chart={{
              series: [
                { label: 'Aiswarya Giri', value: 4344 },
                { label: 'vivian', value: 5435 },
                { label: 'jithin', value: 1443 },
                { label: 'akhila', value: 4443 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={4.5}>
          <Card
            sx={{
              height: 412,
            }}
          >
            <CardHeader title="Total Revenue by Product" />
            <CardContent>
              <SalesRevenuePerPerson
                categories={['Aiswarya', 'vivian', 'akhila', 'jithin', 'sajan']}
                series={[
                  { name: 'Acronis', data: [44, 55, 41, 67, 22] },
                  { name: 'Bit Defender', data: [13, 23, 20, 13, 27] },
                  { name: 'DropSuite', data: [11, 17, 15, 21, 14] },
                  { name: 'NEVERFAIL', data: [21, 25, 13, 22, 8] },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4.5}>
          <Card
            sx={{
              height: 412,
            }}
          >
            <CardHeader title="Total Revenue by Type" />
            <CardContent>
              <SalesRevenuePerPerson
                categories={['Aiswarya', 'vivian', 'akhila', 'jithin', 'sajan']}
                series={[
                  { name: 'MSP', data: [44, 55, 41, 67, 22] },
                  { name: 'New', data: [13, 23, 20, 13, 27] },
                  { name: 'Renewal', data: [11, 17, 15, 21, 14] },
                ]}
                title="vertical"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <WinRatePie
            title="New Partner Acquisition"
            chart={{
              series: [
                { label: 'Aiswarya', value: 100 },
                { label: 'Vivian', value: 50 },
                { label: 'jithin', value: 30 },
                { label: 'akhila', value: 20 },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
