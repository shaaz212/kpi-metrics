import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fNumber, fShortenNumber } from 'src/utils/format-number';

// import Iconify from 'src/components/iconify';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function DashBoardWidgetImage({ icon, title, percent, total, chart, sx, ...other }) {
  const theme = useTheme();

  const {
    colors = [theme.palette.primary.light, theme.palette.primary.main],
    series,
    options,
  } = chart;

  // console.log('colors..............', colors);

  const chartOptions = useChart({
    colors: [colors[1]],
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          { offset: 0, color: colors[0], opacity: 1 },
          { offset: 100, color: colors[1], opacity: 1 },
        ],
      },
    },
    chart: {
      animations: {
        enabled: true,
      },
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (value) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
      marker: {
        show: false,
      },
    },
    ...options,
  });

  // const renderTrending = (
  //   <Stack direction="row" alignItems="center" sx={{ mt: 2, mb: 1 }}>
  //     <Iconify
  //       icon={percent < 0 ? 'eva:trending-down-fill' : 'eva:trending-up-fill'}
  //       sx={{
  //         mr: 1,
  //         p: 0.5,
  //         width: 16,
  //         height: 16,
  //         borderRadius: '50%',
  //         color: 'success.main',
  //         bgcolor: alpha(theme.palette.success.main, 0.16),
  //         ...(percent < 0 && {
  //           color: 'error.main',
  //           bgcolor: alpha(theme.palette.error.main, 0.16),
  //         }),
  //       }}
  //     />

  //     <Typography variant="subtitle2" component="div" noWrap>
  //       {percent > 0 && '+'}

  //       {fPercent(percent)}

  //       <Box component="span" sx={{ color: 'text.secondary', typography: 'subtitle2' }}>
  //         {' than last week'}
  //       </Box>
  //     </Typography>
  //   </Stack>
  // );

  return (
    <Card sx={{ height: 131, p: 3, ...sx }} {...other}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          {icon && <Box sx={{ width: 24, height: 24, mb: 1 }}>{icon}</Box>}
          <Typography variant="subtitle1">{fShortenNumber(total)}</Typography>
        </Box>

        <Chart
          dir="ltr"
          type="line"
          series={[{ data: series }]}
          options={chartOptions}
          width={92}
          height={36}
        />
      </Stack>
      <Box marginTop={1}>
        <Typography variant="subtitle2" sx={{ opacity: 0.64 }}>
          {title}
        </Typography>
      </Box>
    </Card>
  );
}

DashBoardWidgetImage.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  chart: PropTypes.object,
  percent: PropTypes.number,
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};

// <Typography variant="subtitle2" sx={{ opacity: 0.64 }}>
//           {title}
//         </Typography>
