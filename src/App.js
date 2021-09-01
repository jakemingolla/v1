import React, { useState, useEffect } from 'react';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import LocalCafe from '@material-ui/icons/LocalCafe';
import Face from '@material-ui/icons/Face';
import Whatshot from '@material-ui/icons/Whatshot';

const theme = responsiveFontSizes(
  createTheme({
    spacing: 2,
    palette: {
      type: 'dark',
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
  const [selectedTabIndex, setSelectedTabIndex] = useState('0');
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
                    <Tab icon={<Face />} label='About' value='0' />
                    <Tab icon={<Whatshot />} label='Work' value='1' />
                    <Tab icon={<LocalCafe />} label='Pottery' value='2' />
                  </TabList>
                </AppBar>
                <TabPanel className={styles.tabPaper} value='0'>
                  Item One
                </TabPanel>
                <TabPanel className={styles.tabPaper} value='1'>
                  Item Two
                </TabPanel>
                <TabPanel className={styles.tabPaper} value='2'>
                  Item Three
                </TabPanel>
              </TabContext>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
