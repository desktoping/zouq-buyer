import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { colors, useMediaQuery } from '@material-ui/core';

import huaweiLogo from '../../assets/huawei.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 5%',
      margin: '40px 0',
      background: colors.grey[100],
    },

    card: {
      height: 100,
      margin: '0 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    arrow: {
      color: colors.grey[400],
      fontSize: '1.5rem',
    },
  })
);

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const theme = useTheme();
  const classes = useStyles();
  const isSmallDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <ItemsCarousel
        // Carousel configurations
        numberOfCards={isSmallDown ? 2 : 5}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
        requestToChangeActive={(i: number) => setActiveItemIndex(i)}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={40}
        rightChevron={<div className={classes.arrow}>{'>'}</div>}
        leftChevron={<div className={classes.arrow}>{'<'}</div>}
        outsideChevron={false}
      >
        <div className={classes.card}>
          <img src={huaweiLogo} alt="Company Logo" />
        </div>
        <div className={classes.card}>
          <img src={huaweiLogo} alt="Company Logo" />
        </div>
        <div className={classes.card}>
          <img src={huaweiLogo} alt="Company Logo" />
        </div>
        <div className={classes.card}>
          <img src={huaweiLogo} alt="Company Logo" />
        </div>
        <div className={classes.card}>
          <img src={huaweiLogo} alt="Company Logo" />
        </div>
        <div className={classes.card}>
          <img src={huaweiLogo} alt="Company Logo" />
        </div>
        <div className={classes.card}>
          <img src={huaweiLogo} alt="Company Logo" />
        </div>
      </ItemsCarousel>
    </div>
  );
};
