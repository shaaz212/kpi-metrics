import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fPercent, fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function SalesSummary({ title, subtitle, percent, total, chart, sx, ...other }) {
  // const theme = useTheme();

  // const {
  //   colors = [theme.palette.primary.light, theme.palette.primary.main],
  //   series,
  //   options,
  // } = chart;

  // const chartOptions = {
  //   colors: colors.map((colr) => colr[1]),
  //   fill: {
  //     type: 'gradient',
  //     gradient: {
  //       colorStops: [
  //         { offset: 0, color: colors[0], opacity: 1 },
  //         { offset: 100, color: colors[1], opacity: 1 },
  //       ],
  //     },
  //   },
  //   chart: {
  //     sparkline: {
  //       enabled: true,
  //     },
  //   },
  //   plotOptions: {
  //     bar: {
  //       columnWidth: '68%',
  //       borderRadius: 2,
  //     },
  //   },
  //   tooltip: {
  //     x: { show: false },
  //     y: {
  //       formatter: (value) => fNumber(value),
  //       title: {
  //         formatter: () => '',
  //       },
  //     },
  //     marker: { show: false },
  //   },
  //   ...options,
  // };

  return (
    <Card sx={{ height: 135, display: 'flex', alignItems: 'center', p: 3, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">{title}</Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={1.5}
          mt={0.4}
        >
          <Typography variant="subtitle1">{fShortenNumber(total)}</Typography>

          <Stack direction="row" sx={{ mt: 1, mb: 0.9 }} gap={1}>
            <Iconify
              width={20}
              icon={
                percent < 0
                  ? 'solar:double-alt-arrow-down-bold-duotone'
                  : 'solar:double-alt-arrow-up-bold-duotone'
              }
              sx={{
                color: 'success.main',
                ...(percent < 0 && {
                  color: 'error.main',
                }),
              }}
            />

            <Typography component="div" variant="subtitle2">
              {percent > 0 && '+'}

              {fPercent(percent)}
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>

      {/* <Chart
        dir="ltr"
        type="bar"
        series={[{ data: series }]}
        options={chartOptions}
        width={60}
        height={36}
      /> */}
    </Card>
  );
}

SalesSummary.propTypes = {
  chart: PropTypes.object,
  percent: PropTypes.number,
  sx: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  total: PropTypes.number,
};
