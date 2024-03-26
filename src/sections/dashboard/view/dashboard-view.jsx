import axios from 'axios';
import { useState, useEffect } from 'react';

// mui
import Container from '@mui/material/Container';

// components
import { useSettingsContext } from 'src/components/settings';
import { LoadingScreen } from 'src/components/loading-screen';

import DashboardGridContainer from '../dashboard-grid-container';

// section

export default function DashBoardView() {
  const settings = useSettingsContext();

  const [communication, setCommunication] = useState();
  const [sales, setSales] = useState();
  const [technical, setTechnical] = useState();
  const [calls, setCalls] = useState();
  const [mails, setMails] = useState();
  const [meetings, setMeetings] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://10.10.10.194:3000/dashboard/home')
      .then((res) => {
        console.log(res);
        setCommunication(res?.data?.communication?.data);
        setSales(res?.data?.sales?.data);
        setTechnical(res?.data?.technical?.data);
        setCalls(res?.data?.communication?.data?.calls);
        setMails(res?.data?.communication?.data?.mails);
        setMeetings(res?.data?.communication?.data?.meetings);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  // console.log('sales..........', sales);
  // console.log('communication..........', communication);
  // console.log('technical..........', technical);

  // console.log('calls.......', calls);
  // console.log('mails.......', mails);
  // console.log('meetings.......', meetings);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <DashboardGridContainer
          sales={sales}
          communication={communication}
          technical={technical}
          calls={calls}
          mails={mails}
          meetings={meetings}
        />
      )}
    </Container>
  );
}
