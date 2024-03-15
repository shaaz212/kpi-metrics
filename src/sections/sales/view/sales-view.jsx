// mui
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

// utils
import { fShortenNumber } from 'src/utils/format-number';

// components
import { useSettingsContext } from 'src/components/settings';

// section
import SalesWidgetSummary from '../sales-widget-summary';

export default function SalesView() {
  const theme = useTheme();

  const settings = useSettingsContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid continer spacing={1}>
        <Grid item xs={3} md={3}>
          <Card>
            <CardContent>
              <SalesWidgetSummary title="Total Sales" percent={2.6} total={7653} />
              <Divider sx={{ my: 3 }} />
              <SalesWidgetSummary title="Total Counts" percent={-1.6} total={765} />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                New partner acquisition
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {fShortenNumber(201)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
