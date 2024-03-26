import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import { fNumber } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function SalesProductPartners({ title, subheader, chart, ...other }) {
  const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '30%',
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i) => i.label),
    },
    ...options,
  });

  return (
    <Box mx={3}>
      <Chart
        dir="ltr"
        type="bar"
        series={[{ data: chartSeries }]}
        options={chartOptions}
        width="100%"
        height={310}
      />
    </Box>
  );
}

SalesProductPartners.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
