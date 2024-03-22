// mui
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

// components
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';

import RevenueDonut from '../revenue-donut';
import RevenueTypePie from '../revenue-type-pie';
// section
import DashBoardStatistics from '../dashboard-statistics';
import DashBoardWidgetImage from '../dashboard-widget-image';
import DashBoardWidgetSummary from '../dashboard-widget-summary';
import DashBoardBalanceStatistics from '../dashboard-balance-statistics';

export default function DashBoardView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const totalSalesColors = [
    theme.palette.success.main,
    theme.palette.error.main,
    theme.palette.warning.main,
  ];

  const salesColors = [
    theme.palette.success.main,
    theme.palette.warning.main,
    theme.palette.error.main,
  ];

  const technicalColors = [theme.palette.info.main, theme.palette.error.main];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={1}>
        <Grid xs={6} md={2}>
          <DashBoardWidgetSummary
            title="Quaterly Revenue"
            subtitle="Q1"
            percent={2.6}
            total={18765231}
          />
        </Grid>
        <Grid xs={6} md={2}>
          <DashBoardWidgetSummary
            title="Monthly Revenue"
            subtitle="Current Month"
            percent={-0.2}
            total={4876314}
          />
        </Grid>
        <Grid xs={12} md={2}>
          <DashBoardWidgetSummary
            title="Ticket Closed"
            subtitle="Current Year"
            percent={0.1}
            total={678123}
          />
        </Grid>
        <Grid xs={6} md={2}>
          <DashBoardWidgetImage
            title="Total Calls"
            percent={-0.1}
            total={12831}
            icon={<Iconify icon="solar:phone-bold" width={24} sx={{ color: 'success.main' }} />}
            chart={{
              colors: [theme.palette.success.light, theme.palette.success.main],
              series: [16, 47, 38, 27, 56, 48, 10],
            }}
          />
        </Grid>
        <Grid xs={6} md={2}>
          <DashBoardWidgetImage
            title="Total Mails"
            percent={2.6}
            total={12828}
            icon={
              <Iconify icon="fluent:mail-24-filled" width={24} sx={{ color: 'warning.main' }} />
            }
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
            }}
          />
        </Grid>
        <Grid xs={12} md={2}>
          <DashBoardWidgetImage
            title="Total Meeting"
            percent={2.6}
            total={16182}
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
            }}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <DashBoardStatistics
            title="Monthly Revenue by Year"
            subheader="2021-2023 (In USD)"
            colors={totalSalesColors}
            chart={{
              categories: [
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
                  type: 'Bar Chart',
                  model: 'bar',
                  data: [
                    {
                      name: '2021',
                      data: [60, 41, 35, 151, 49, 62, 69, 91, 48, 91, 23, 12],
                    },
                    {
                      name: '2022',
                      data: [10, 21, 13, 86, 57, 33, 29, 67, 55, 73, 28, 47],
                    },
                    {
                      name: '2023',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 28, 94, 26],
                    },
                  ],
                },
                {
                  type: 'Line Chart',
                  model: 'area',
                  data: [
                    {
                      name: '2021',
                      data: [60, 41, 35, 151, 49, 62, 69, 91, 48, 32, 24, 19],
                    },
                    {
                      name: '2022',
                      data: [10, 34, 13, 86, 77, 108, 129, 77, 25, 38, 50, 73],
                    },
                    {
                      name: '2023',
                      data: [10, 74, 23, 36, 57, 98, 29, 47, 85, 59, 52, 40],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={3}>
          <RevenueDonut
            title="Total Revenue by Year"
            chart={{
              series: [
                { label: '2021', value: 12244 },
                { label: '2022', value: 53345 },
                { label: '2023', value: 44313 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={3}>
          <RevenueTypePie
            title="Revenue by Type"
            chart={{
              series: [
                { label: 'Renewal', value: 4344 },
                { label: 'New', value: 5435 },
                { label: 'MSP', value: 1443 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <DashBoardBalanceStatistics
            title="Sales Team Performance"
            colors={salesColors}
            chart={{
              categories: [
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
                  type: '2021',
                  data: [
                    {
                      name: 'Calls',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                    {
                      name: 'Mails',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                    {
                      name: 'Meetings',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 35, 151, 49],
                    },
                  ],
                },
                {
                  type: '2022',
                  data: [
                    {
                      name: 'Calls',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                    {
                      name: 'Mails',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                    {
                      name: 'Meetings',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 35, 151, 49],
                    },
                  ],
                },
                {
                  type: '2023',
                  data: [
                    {
                      name: 'Calls',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                    {
                      name: 'Mails',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                    {
                      name: 'Meetings',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 35, 151, 49],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <DashBoardBalanceStatistics
            title="Support  Team Performance"
            colors={technicalColors}
            chart={{
              categories: [
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
                  type: '2021',
                  data: [
                    {
                      name: 'Ticket Closed',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                    {
                      name: 'Ticket Raised',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                  ],
                },
                {
                  type: '2022',
                  data: [
                    {
                      name: 'Ticket Closed',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                    {
                      name: 'Ticket Raised',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                  ],
                },
                {
                  type: '2023',
                  data: [
                    {
                      name: 'Ticket Closed',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                    {
                      name: 'Ticket Raised',
                      data: [10, 41, 35, 151, 49, 62, 69, 91, 48, 35, 151, 49],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
