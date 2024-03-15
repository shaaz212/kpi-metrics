import PropTypes from 'prop-types';

// import { useTheme } from '@mui/material/styles';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function ChartColumnMultiple({ series, colors }) {
  // const theme = useTheme();
  // const { colors = [theme.palette.primary.light, theme.palette.primary.main] } = chart;

  // console.log('colors..............', colors);

  const chartOptions = useChart({
    colors,
    stroke: {
      show: true,
      width: 3,
      // colors: ['transparent'],
    },
    xaxis: {
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
    },
    tooltip: {
      y: {
        formatter: (value) => `$ ${value} thousands`,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  return (
    <Chart dir="ltr" type="bar" series={series} options={chartOptions} width="100%" height={320} />
  );
}

ChartColumnMultiple.propTypes = {
  series: PropTypes.array,
  colors: PropTypes.array,
};
