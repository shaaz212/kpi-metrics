import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import ButtonBase from '@mui/material/ButtonBase';
import CardHeader from '@mui/material/CardHeader';

import Iconify from 'src/components/iconify';
import Chart, { useChart } from 'src/components/chart';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function DashBoardStatistics({ title, colors, subheader, chart, ...other }) {
  const { categories, series, options } = chart;

  const popover = usePopover();

  const [seriesData, setSeriesData] = useState('Bar Chart');

  const chartOptions = useChart({
    colors,
    stroke: {
      show: true,
      // curve: 'straight',
      lineCap: 'butt',
      // colors: ['transparent'],
      width: [3, 3, 3],
      dashArray: 0,
    },
    xaxis: {
      categories,
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value}`,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        barGap: '10%',
      },
    },
    ...options,
  });

  const handleChangeSeries = useCallback(
    (newValue) => {
      popover.onClose();
      setSeriesData(newValue);
    },
    [popover]
  );

  return (
    <>
      <Card
        sx={{
          height: 412,
        }}
        {...other}
      >
        <CardHeader
          title={title}
          subheader={subheader}
          action={
            <ButtonBase
              onClick={popover.onOpen}
              sx={{
                pl: 1,
                py: 0.5,
                pr: 0.5,
                borderRadius: 1,
                typography: 'subtitle2',
                bgcolor: 'background.neutral',
              }}
            >
              {seriesData}

              <Iconify
                width={16}
                icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
                sx={{ ml: 0.5 }}
              />
            </ButtonBase>
          }
        />

        {series.map((item) => (
          <Box key={item.type} sx={{ mt: 3, mx: 3 }}>
            {item.type === seriesData && (
              <Chart
                dir="ltr"
                type={item?.model}
                series={item.data}
                options={chartOptions}
                width="100%"
                height={300}
              />
            )}
          </Box>
        ))}
      </Card>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 140 }}>
        {series.map((option) => (
          <MenuItem
            key={option.type}
            selected={option.type === seriesData}
            onClick={() => handleChangeSeries(option.type)}
          >
            {option.type}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}

DashBoardStatistics.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.array,
};
