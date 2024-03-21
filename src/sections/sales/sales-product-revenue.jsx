import PropTypes from 'prop-types';

import { useTheme } from '@mui/material';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function SalesProductRevenue({ series }) {
  const theme = useTheme();
  const chartOptions = useChart({
    colors: [theme.palette.primary.main, theme.palette.warning.main, theme.palette.error.main],
    chart: {
      stacked: true,
      zoom: {
        enabled: false,
      },
    },
    legend: {
      itemMargin: {
        vertical: 8,
      },
      position: 'right',
      offsetY: 20,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '10%',
        barHeight: '20%',
      },
    },
    stroke: {
      show: false,
    },
    xaxis: {
      type: 'string',
      categories: ['Acronis', 'Bit Defender', 'DropSuite', 'NEVERFAIL'],
    },
  });

  return (
    <Chart dir="ltr" type="bar" series={series} options={chartOptions} width="100%" height={320} />
  );
}

SalesProductRevenue.propTypes = {
  series: PropTypes.array,
};
