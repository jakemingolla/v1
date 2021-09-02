import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/DirectionsBoat';
import AboutIcon from '@material-ui/icons/Face';
import PotteryIcon from '@material-ui/icons/LocalCafe';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { ThemeProvider, makeStyles } from '@material-ui/styles';

import About from './About.js';
import Pottery from './Pottery.js';

const theme = responsiveFontSizes(
  createTheme({
    spacing: 2,
    palette: {
      type: 'dark',
      primary: {
        main: '#401150',
      },
      secondary: {
        main: '#66999B',
      },
    },
  })
);

const useStyles = makeStyles({
  total: {
    margin: 'auto',
    width: 500,
    paddingTop: 10,
  },
  tabPaper: {
    padding: 50,
  },
});

export default function App() {
  const styles = useStyles();
  const [selectedTabIndex, setSelectedTabIndex] = useState('2');
  const handleChangedTabIndex = (event, newValue) => {
    setSelectedTabIndex(newValue);
  };

  useEffect(() => {
    document.title = 'jake mingolla';
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container style={{ padding: 20 }}>
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <Paper elevation={3} className={styles.total}>
              <Typography gutterBottom align='center' variant='h1'>
                hi, i&apos;m jake.
              </Typography>
              <TabContext value={selectedTabIndex}>
                <AppBar position='static'>
                  <TabList
                    onChange={handleChangedTabIndex}
                    aria-label='tab-list'
                  >
                    <Tab icon={<AboutIcon />} label='About' value='0' />
                    <Tab icon={<WorkIcon />} label='Work' value='1' />
                    <Tab icon={<PotteryIcon />} label='Pottery' value='2' />
                  </TabList>
                </AppBar>
                <TabPanel className={styles.tabPaper} value='0'>
                  <About />
                </TabPanel>
                <TabPanel className={styles.tabPaper} value='1'>
                  Item Two
                </TabPanel>
                <TabPanel className={styles.tabPaper} value='2'>
                  <Pottery />
                </TabPanel>
              </TabContext>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
