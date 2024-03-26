import PropTypes from 'prop-types';

import { useTheme } from '@mui/material';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function SalesProductRegion({ series }) {
  const theme = useTheme();

  const chartOptions = useChart({
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main,
    ],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  });

  return (
    <Chart
      dir="ltr"
      type="treemap"
      series={series}
      options={chartOptions}
      width="100%"
      height={320}
    />
  );
}

SalesProductRegion.propTypes = {
  series: PropTypes.array,
};
