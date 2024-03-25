import PropTypes from 'prop-types';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function BooksRegionSales({ series, title }) {
  const chartOptions = useChart({
    chart: {
      stacked: true,
      zoom: {
        enabled: false,
      },
    },
    legend: {
      itemMargin: {
        vertical: 2,
      },
      horizontalAlign: 'right',
      position: 'top',
      offsetY: 20,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        barHeight: '40%',
      },
    },
    stroke: {
      show: false,
    },
    xaxis: {
      type: 'string',
      categories: ['Aiswarya', 'vivian', 'akhila', 'jithin', 'sajan'],
    },
  });

  return (
    <Chart dir="ltr" type="bar" series={series} options={chartOptions} width="100%" height={320} />
  );
}

BooksRegionSales.propTypes = {
  series: PropTypes.array,
  title: PropTypes.string,
};
