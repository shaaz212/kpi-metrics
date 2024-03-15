// mui
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

// components
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';

// section
import DashBoardStatistics from '../dashboard-statistics';
import ChartColumnMultiple from '../chart-column-multiple';
import DashBoardWidgetImage from '../dashboard-widget-image';
import DashBoardWidgetSummary from '../dashboard-widget-summary';

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
      <Grid container spacing={2}>
        <Grid xs={12} md={2}>
          <Stack direction="column" spacing={1}>
            <DashBoardWidgetSummary
              title="Sales Value"
              subtitle="Quarter - 1"
              percent={2.6}
              total={18765231}
              chart={{
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}
            />
            <DashBoardWidgetSummary
              title="Sales Count"
              subtitle="Current month"
              percent={-0.2}
              total={4876314}
              chart={{
                colors: [theme.palette.info.light, theme.palette.info.main],
                series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
              }}
            />
            <DashBoardWidgetSummary
              title="Ticket Closed"
              subtitle="Total tickets"
              percent={0.1}
              total={678123}
              chart={{
                colors: [theme.palette.warning.light, theme.palette.warning.main],
                series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
              }}
            />
          </Stack>
        </Grid>
        <Grid xs={12} md={7}>
          <DashBoardStatistics
            title="Sales Data"
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
          <Stack direction="column" spacing={2}>
            <DashBoardWidgetImage
              title="Total Calls"
              percent={-0.1}
              total={12831}
              icon={<Iconify icon="solar:phone-bold" width={24} sx={{ color: 'success.main' }} />}
              chart={{
                colors: [theme.palette.success.light, theme.palette.success.main],
                series: [56, 47, 40, 62, 73, 30, 23, 54, 67, 68],
              }}
            />
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
          </Stack>
        </Grid>
        <Grid xs={12} md={6}>
          <Card
            sx={{
              height: 412,
            }}
          >
            <CardHeader title="Sales Team Performance" />
            <CardContent>
              <ChartColumnMultiple
                series={[
                  {
                    name: 'Calls',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 82, 27, 171],
                  },
                  {
                    name: 'Mails',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 18, 12, 112],
                  },
                  {
                    name: 'Meetings',
                    data: [23, 45, 131, 48, 29, 122, 11, 73, 54, 18, 117, 62],
                  },
                ]}
                colors={salesColors}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card
            sx={{
              height: 412,
            }}
          >
            <CardHeader title="Support Team Performance" />
            <CardContent>
              <ChartColumnMultiple
                series={[
                  {
                    colors: [theme.palette.warning.light, theme.palette.warning.main],
                    name: 'Ticket Raised',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 23, 44, 65],
                  },
                  {
                    name: 'Ticket Closed',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 23, 45, 45],
                  },
                ]}
                colors={technicalColors}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
