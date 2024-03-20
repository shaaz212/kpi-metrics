import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { fPercent, fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function SalesProductRevenue({ title, subheader, data, ...other }) {
  console.log('data.......', data);
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={4} sx={{ px: 3, pt: 3, pb: 5 }}>
        {data.map((progress) => (
          <ProgressItem key={progress.label} progress={progress} />
        ))}
      </Stack>
    </Card>
  );
}

SalesProductRevenue.propTypes = {
  data: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function ProgressItem({ progress }) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
          {progress.label}
        </Typography>

        <Typography variant="subtitle2">{fCurrency(progress.totalAmount)}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp;({fPercent(progress.value)})
        </Typography>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={progress.value}
        color={
          (progress.label === 'Acronis' && 'warning') ||
          (progress.label === 'bitdefender' && 'error') ||
          (progress.label === 'NEVERFAIL' && 'info') ||
          (progress.label === 'DropSuite' && 'warning') ||
          (progress.label === 'zimbra' && 'primary')
        }
      />
    </Stack>
  );
}

ProgressItem.propTypes = {
  progress: PropTypes.object,
};
