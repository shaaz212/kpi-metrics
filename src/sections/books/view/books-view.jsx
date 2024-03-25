// mui
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

// component
import { useSettingsContext } from 'src/components/settings';

import BooksTopTen from '../books-top-10';
import BooksCharnRate from '../books-charn-rate';
import BooksRegionSales from '../books-region-sales';
import BooksRevenueDonut from '../books-revenue-donut';
import BooksRevenueGrowthRate from '../books-revenue-growth-rate';

export default function BooksView() {
  const settings = useSettingsContext();
  const theme = useTheme();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={1}>
        <Grid xs={12} md={4.5}>
          <BooksRevenueGrowthRate
            title="Total Revenue Growth"
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
                  data: [23, 11, 22, 27],
                },
                {
                  name: 'Trend',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 10, 30],
                },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={4.5}>
          <Card sx={{ height: 412 }}>
            <CardHeader title="Churn Rate Trend" />
            <CardContent>
              <BooksCharnRate
                series={[
                  { name: 'Churn Rate', data: [31, 40, -20, 51, 42, 90, 80] },
                  { name: 'moving Avg (3 months)', data: [1, 1, 5, 9, 4, 3, 1] },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <BooksRevenueDonut
            title="Total Revenue by Type"
            chart={{
              series: [
                { label: 'MSP', value: 12244 },
                { label: 'Renewal', value: 53345 },
                { label: 'New', value: 44313 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={3.5}>
          <BooksTopTen
            title="Top 10 Partners in Sales"
            // subheader="(+43%) than last year"
            chart={{
              colors: theme.palette.warning.main,
              series: [
                { label: 'Acronis', value: 400 },
                { label: 'Bitdefender', value: 430 },
                { label: 'Zimbra', value: 448 },
                { label: 'ModusCloud', value: 470 },
                { label: 'DropSuite', value: 448 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={3.5}>
          <BooksTopTen
            title="Top 10 Deals"
            // subheader="(+43%) than last year"
            chart={{
              colors: theme.palette.success.main,
              series: [
                { label: 'Acronis', value: 400 },
                { label: 'Bitdefender', value: 430 },
                { label: 'Zimbra', value: 448 },
                { label: 'ModusCloud', value: 470 },
                { label: 'DropSuite', value: 448 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={5}>
          <Card
            sx={{
              height: 412,
            }}
          >
            <CardHeader title="Region Sales by Type" />
            <CardContent>
              <BooksRegionSales
                colors={[
                  theme.palette.success.main,
                  theme.palette.info.main,
                  theme.palette.error.main,
                ]}
                series={[
                  { name: 'MSP', data: [44, 55, 41] },
                  { name: 'New', data: [13, 23, 20] },
                  { name: 'Revenue', data: [11, 17, 15] },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
