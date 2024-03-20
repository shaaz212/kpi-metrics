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
import SalesWinRatePie from '../sales-win-rate-pie';
import SalesPersonRates from '../sales-person-rates';
import SalesWidgetSummary from '../sales-widget-summary';
import SalesRevenuePerPerson from '../sales-revenue-per-person';
import SalesRevenueGrowthRate from '../sales-revenue-growth-rate';
import SalesPartnerAcquisition from '../sales-partner-acquisition';

export default function SalesPersonView() {
  const theme = useTheme();

  const GB = 1000000000 * 24;

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
        <Grid xs={12} md={4}>
          <Card
            sx={{
              height: 412,
            }}
          >
            <CardHeader title="Revenue per person" />
            <CardContent>
              <SalesRevenuePerPerson
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
        <Grid xs={12} md={5}>
          <SalesRevenueGrowthRate
            title="Revenue Growth Rate"
            // subheader="(+43%) than last year"
            chart={{
              labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  name: 'Sales',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Trent',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
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
          <SalesPersonRates
            title="Sales Per Person"
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
        <Grid xs={12} md={3}>
          <WinRatePie
            title="New Partner Acquisition"
            chart={{
              series: [
                { label: 'Aiswarya', value: 12244 },
                { label: 'Vivian', value: 53345 },
                { label: 'jithin', value: 44313 },
                { label: 'akhila', value: 78343 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={4.5}>
          <SalesRevenueGrowthRate
            title="Total deals won"
            // subheader="(+43%) than last year"
            chart={{
              labels: ['Aiswarya Giri', 'Jithin', 'Vivian', 'Akhila'],
              series: [
                {
                  name: 'Sales',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27],
                },
                {
                  name: 'Trent',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, -10, 30],
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
