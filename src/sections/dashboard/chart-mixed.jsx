import PropTypes from 'prop-types';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function ChartMixed({ series, colors }) {
  const chartOptions = useChart({
    colors,
    stroke: {
      width: [1, 2, 3],
    },
    plotOptions: {
      bar: { columnWidth: '20%' },
    },
    fill: {
      type: ['solid', 'solid', 'solid'],
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
    yaxis: {
      title: { text: 'Sales' },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} k sales`;
          }
          return value;
        },
      },
    },
  });

  return (
    <Chart dir="ltr" type="line" series={series} options={chartOptions} width="100%" height={320} />
  );
}

ChartMixed.propTypes = {
  colors: PropTypes.array,
  series: PropTypes.array,
};
