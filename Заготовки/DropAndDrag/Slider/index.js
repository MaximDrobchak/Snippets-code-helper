import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import styles from './styles';

const Slider = props => {
  const { classes, children, goLeft, goRigth } = props;
  return (
    <div className={classes.root}>
      <KeyboardArrowLeft onClick={goLeft}>left</KeyboardArrowLeft>
      <KeyboardArrowRight onClick={goRigth}>right</KeyboardArrowRight>

      <div className={classes.galery}>
        <div className={classes.photos}>{children}</div>
      </div>
    </div>
  );
};
Slider.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
export default withStyles(styles)(Slider);
