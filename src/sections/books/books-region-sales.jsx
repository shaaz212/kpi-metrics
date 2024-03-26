import PropTypes from 'prop-types';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function BooksRegionSales({ series, colors }) {
  const chartOptions = useChart({
    colors,
    chart: {
      stacked: true,
      zoom: {
        enabled: false,
      },
    },
    legend: {
      itemMargin: {
        vertical: 5,
      },
      horizontalAlign: 'right',
      position: 'top',
      offsetY: 20,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        endingShape: 'rounded',
        dataLabels: {
          total: {
            enabled: true,
            style: {
              color: '#fff',
            },
          },
        },
      },
    },

    stroke: {
      show: false,
    },
    xaxis: {
      type: 'string',
      categories: ['UAE', 'Qatar', 'Bahrain'],
    },
  });

  return (
    <Chart dir="ltr" type="bar" series={series} options={chartOptions} width="100%" height={320} />
  );
}

BooksRegionSales.propTypes = {
  series: PropTypes.array,
  colors: PropTypes.string,
};
