import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// utils
import { fPercent, fShortenNumber } from 'src/utils/format-number';

// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function SalesDealSizeSummay({
  title,
  countTitle,
  percent,
  total,
  countTotal,
  chart,
  sx,
  ...other
}) {
  const theme = useTheme();

  // const {
  //   colors = [theme.palette.primary.light, theme.palette.primary.main],
  //   series,
  //   options,
  // } = chart;

  // const chartOptions = useChart({
  //   colors: [colors[1]],
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
  //     animations: {
  //       enabled: true,
  //     },
  //     sparkline: {
  //       enabled: true,
  //     },
  //   },
  //   tooltip: {
  //     x: {
  //       show: false,
  //     },
  //     y: {
  //       formatter: (value) => fNumber(value),
  //       title: {
  //         formatter: () => '',
  //       },
  //     },
  //     marker: {
  //       show: false,
  //     },
  //   },
  //   ...options,
  // });

  const renderTrending = (
    <Stack>
      <Stack direction="row" alignItems="center">
        <Iconify
          icon={
            percent < 0
              ? 'solar:double-alt-arrow-down-bold-duotone'
              : 'solar:double-alt-arrow-up-bold-duotone'
          }
          sx={{
            mr: 1,
            p: 0.5,
            width: 24,
            height: 24,
            borderRadius: '50%',
            color: 'success.main',
            bgcolor: alpha(theme.palette.success.main, 0.16),
            ...(percent < 0 && {
              color: 'error.main',
              bgcolor: alpha(theme.palette.error.main, 0.16),
            }),
          }}
        />

        <Typography variant="subtitle2" component="div" noWrap>
          {percent > 0 && '+'}

          {fPercent(percent)}
        </Typography>
      </Stack>
    </Stack>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Stack>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {title}
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="space-around" spacing={2}>
            <Typography variant="subtitle1" gutterBottom>
              {fShortenNumber(total)}
            </Typography>

            {renderTrending}
          </Stack>
          {/* <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            {' than last month'}
          </Box> */}
        </Stack>
      </Box>

      {/* <Chart
          dir="ltr"
          type="line"
          series={[{ data: series }]}
          options={chartOptions}
          width={96}
          height={64}
        /> */}
    </>
  );
}

SalesDealSizeSummay.propTypes = {
  chart: PropTypes.object,
  percent: PropTypes.number,
  sx: PropTypes.object,
  title: PropTypes.string,
  countTitle: PropTypes.string,
  total: PropTypes.number,
  countTotal: PropTypes.number,
};
