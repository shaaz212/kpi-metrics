import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { Typography, CardContent } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function SalesWinRate({ chart, ...other }) {
  const theme = useTheme();

  const smUp = useResponsive('up', 'sm');

  const {
    colors = [
      [theme.palette.primary.light, theme.palette.primary.main],
      [theme.palette.warning.light, theme.palette.warning.main],
    ],
    series,
    options,
  } = chart;

  const chartOptionsCheckIn = useChart({
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: colors[0][0], opacity: 1 },
          { offset: 100, color: colors[0][1], opacity: 1 },
        ],
      },
    },
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      padding: {
        top: -9,
        bottom: -9,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        hollow: { size: '64%' },
        track: { margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 6,
            fontSize: theme.typography.subtitle2.fontSize,
          },
        },
      },
    },
    ...options,
  });

  const chartOptionsCheckout = {
    ...chartOptionsCheckIn,
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: colors[1][0], opacity: 1 },
          { offset: 100, color: colors[1][1], opacity: 1 },
        ],
      },
    },
  };

  return (
    <Card {...other}>
      <CardContent>
        <Stack direction="row">
          <Typography>Win Rate</Typography>
          {series.map((item, index) => (
            <Stack
              key={item.label}
              spacing={3}
              direction="row"
              alignItems="center"
              justifyContent={{ sm: 'center' }}
            >
              <Chart
                dir="ltr"
                type="radialBar"
                series={[item.percent]}
                options={chartOptionsCheckout}
                width={100}
                height={100}
              />
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

SalesWinRate.propTypes = {
  chart: PropTypes.object,
};
