import React, { useState } from 'react';

import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Eco from '@material-ui/icons/Eco';
import Fullscreen from '@material-ui/icons/Fullscreen';
import Today from '@material-ui/icons/Today';
import { makeStyles } from '@material-ui/styles';

import list from '../content/pottery/list.json';

const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    imageList: {
      width: 500,
      height: 180 * 1.5,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalPaper: {
      alignItems: 'center',
    },
    fullscreenImage: {
      maxWidth: '500',
    },
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0',
      },
    },
  };
});

export default function Pottery() {
  const [openModalIndex, setOpenModalIndex] = useState();
  const classes = useStyles();

  const handleClose = () => setOpenModalIndex();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        {list.items.map((item, index) => (
          <ImageListItem key={item.id}>
            <img src={item.image} />
            <ImageListItemBar
              actionIcon={
                <IconButton
                  onClick={() => setOpenModalIndex(index)}
                  className={classes.icon}
                >
                  <Fullscreen />
                </IconButton>
              }
            />
            <Modal
              className={classes.modal}
              open={openModalIndex === index}
              onClose={handleClose}
            >
              <Paper className={classes.modalPaper}>
                <img className={classes.fullscreenImage} src={item.image} />
                <Chip color='primary' label={'# ' + item.id} />
                <Chip variant='outlined' icon={<Today />} label={item.year} />
                <Chip icon={<Eco />} label={item.material} />
                <Typography variant='caption'>
                  {item.heightInches} inches tall x {item.widthInches} inches
                  wide
                </Typography>
                <Typography variant='caption'>
                  {item.glazeCardContent}
                </Typography>
              </Paper>
            </Modal>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
