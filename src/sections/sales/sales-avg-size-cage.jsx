import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

import { fData } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function SalesAvgSizeCage({ data, title, total, chart, ...other }) {
  const theme = useTheme();

  const { colors = [theme.palette.info.main, theme.palette.info.dark], series, options } = chart;

  const chartOptions = useChart({
    chart: {
      offsetY: -16,
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      padding: {
        top: 24,
        bottom: 24,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '56%',
        },
        dataLabels: {
          name: {
            offsetY: 8,
          },
          value: {
            offsetY: -40,
          },
          total: {
            label: `Used of ${fData(total)} / 50GB`,
            color: theme.palette.text.disabled,
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.body2.fontWeight,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: colors[0], opacity: 1 },
          { offset: 100, color: colors[1], opacity: 1 },
        ],
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} />

      <Chart
        dir="ltr"
        type="radialBar"
        series={[series]}
        options={chartOptions}
        width="100%"
        height={360}
      />
    </Card>
  );
}

SalesAvgSizeCage.propTypes = {
  chart: PropTypes.object,
  data: PropTypes.array,
  total: PropTypes.number,
  title: PropTypes.string,
};
