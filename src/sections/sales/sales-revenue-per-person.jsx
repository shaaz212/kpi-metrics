import PropTypes from 'prop-types';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function SalesRevenuePerPerson({ series, title, categories }) {
  const chartOptions = useChart({
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
        horizontal: title !== 'vertical',
        columnWidth: '40%',
        barHeight: '40%',
        dataLabels: {
          total: {
            enabled: true,
            offsetY: title !== 'vertical' ? 6 : 0,
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
      categories,
    },
  });

  return (
    <Chart dir="ltr" type="bar" series={series} options={chartOptions} width="100%" height={320} />
  );
}

SalesRevenuePerPerson.propTypes = {
  series: PropTypes.array,
  title: PropTypes.string,
  categories: PropTypes.array,
};
