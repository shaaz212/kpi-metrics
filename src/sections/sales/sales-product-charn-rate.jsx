import PropTypes from 'prop-types';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function SalesProductCharnRate({ series }) {
  const chartOptions = useChart({
    xaxis: {
      type: 'month',
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
    // tooltip: {
    //   x: {
    //     format: 'dd/MM/yy HH:mm',
    //   },
    // },
  });

  return (
    <Chart dir="ltr" type="area" series={series} options={chartOptions} width="100%" height={320} />
  );
}

SalesProductCharnRate.propTypes = {
  series: PropTypes.array,
};
