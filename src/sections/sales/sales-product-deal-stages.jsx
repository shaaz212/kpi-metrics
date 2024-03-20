import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';

import Chart, { useChart } from 'src/components/chart';

export default function SalesproductDealStages({ series }) {
  const theme = useTheme();

  const chartOptions = useChart({
    colors: theme.palette.primary.main,
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: '90%',
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter(val, opt) {
        return `${opt.w.globals.labels[opt.dataPointIndex]}`;
      },
      dropShadow: {
        enabled: true,
      },
    },

    xaxis: {
      categories: [
        'Closed Won',
        'Pipeline',
        'Contact Mode',
        'Unqualified',
        'Commit',
        'Upside',
        'On Hold',
        'Clossed Lost',
      ],
    },
    legend: {
      show: false,
    },
  });
  return (
    <Chart dir="ltr" type="bar" series={series} options={chartOptions} width="100%" height={320} />
  );
}

SalesproductDealStages.propTypes = {
  series: PropTypes.array,
};
