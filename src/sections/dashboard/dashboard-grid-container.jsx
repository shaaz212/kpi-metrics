import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// mui
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';

// components
import Iconify from 'src/components/iconify';

// section
import RevenueDonut from './revenue-donut';
import RevenueTypePie from './revenue-type-pie';
import DashBoardStatistics from './dashboard-statistics';
import DashBoardWidgetImage from './dashboard-widget-image';
import DashBoardWidgetSummary from './dashboard-widget-summary';
import DashBoardBalanceStatistics from './dashboard-balance-statistics';

export default function DashboardGridContainer({
  sales,
  communication,
  technical,
  calls,
  mails,
  meetings,
}) {
  const theme = useTheme();

  const [totalSumCalls, setTotalSumCalls] = useState(0);
  const [totalSumMails, setTotalSumMails] = useState(0);
  const [totalSumMeetings, setTotalSumMeetings] = useState(0);

  useEffect(() => {
    if (calls || mails || meetings) {
      setTotalSumCalls(
        Object?.keys(calls)?.reduce((acc, key) => {
          const arraySum = calls?.[key]?.reduce((sum, value) => sum + value, 0);
          return acc + arraySum;
        }, 0)
      );
      setTotalSumMails(
        Object?.keys(mails)?.reduce((acc, key) => {
          const arraySum = mails?.[key]?.reduce((sum, value) => sum + value, 0);
          return acc + arraySum;
        }, 0)
      );
      setTotalSumMeetings(
        Object?.keys(meetings)?.reduce((acc, key) => {
          const arraySum = meetings?.[key]?.reduce((sum, value) => sum + value, 0);
          return acc + arraySum;
        }, 0)
      );
    }
  }, [calls, mails, meetings]);

  console.log('totalSumCalls........', totalSumCalls);
  console.log('totalSumMails........', totalSumMails);
  console.log('totalSumMeetings............', totalSumMeetings);

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
    <Grid container spacing={1}>
      <Grid xs={6} md={2}>
        <DashBoardWidgetSummary
          title="Quaterly Revenue"
          subtitle={sales?.currentQuarter}
          percent={2.6}
          total={sales?.currentQuarterSales}
        />
      </Grid>
      <Grid xs={6} md={2}>
        <DashBoardWidgetSummary
          title="Monthly Revenue"
          subtitle="Current Month"
          percent={-0.2}
          total={sales?.currentMonthSales}
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
          total={totalSumCalls}
          icon={<Iconify icon="solar:phone-bold" width={24} sx={{ color: 'success.main' }} />}
          chart={{
            colors: [theme.palette.success.light, theme.palette.success.main],
            series: calls?.['2024']?.slice(0, 3),
          }}
        />
      </Grid>
      <Grid xs={6} md={2}>
        <DashBoardWidgetImage
          title="Total Mails"
          percent={2.6}
          total={totalSumMails}
          icon={<Iconify icon="fluent:mail-24-filled" width={24} sx={{ color: 'warning.main' }} />}
          chart={{
            colors: [theme.palette.warning.light, theme.palette.warning.main],
            series: mails?.['2024']?.slice(0, 3),
          }}
        />
      </Grid>
      <Grid xs={12} md={2}>
        <DashBoardWidgetImage
          title="Total Meetings"
          percent={2.6}
          total={totalSumMeetings}
          icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          chart={{
            colors: [theme.palette.info.light, theme.palette.info.main],
            series: meetings?.['2024']?.slice(0, 3),
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
                type: 'Area Chart',
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
          title="Total Revenue by Type"
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
  );
}

DashboardGridContainer.propTypes = {
  sales: PropTypes.object,
  communication: PropTypes.object,
  technical: PropTypes.object,
  calls: PropTypes.object,
  mails: PropTypes.object,
  meetings: PropTypes.object,
};
