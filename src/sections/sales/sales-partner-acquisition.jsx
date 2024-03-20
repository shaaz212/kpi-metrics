import PropTypes from 'prop-types';

// mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// utils
import { fNumber } from 'src/utils/format-number';

// components
import Chart from 'src/components/chart';

// ----------------------------------------------------------------------

export default function SalesPartnerAcquisition({ title, percent, total, chart, sx, ...other }) {
  const theme = useTheme();

  const {
    colors = [theme.palette.success.light, theme.palette.success.main],
    series,
    options,
  } = chart;

  const chartOptions = {
    colors: colors.map((colr) => colr[1]),
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: colors[0], opacity: 1 },
          { offset: 100, color: colors[1], opacity: 1 },
        ],
      },
    },
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '68%',
        borderRadius: 2,
      },
    },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (value) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
      marker: { show: false },
    },
    ...options,
  };

  return (
    <Card sx={{ alignItems: 'center', p: 3, ...sx }} {...other}>
      <Box>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h3" marginTop={2}>
          {fNumber(total)}
        </Typography>

        <Chart
          dir="ltr"
          type="bar"
          series={[{ data: series }]}
          options={chartOptions}
          width={60}
          height={36}
        />
      </Stack>
    </Card>
  );
}

SalesPartnerAcquisition.propTypes = {
  chart: PropTypes.object,
  percent: PropTypes.number,
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
