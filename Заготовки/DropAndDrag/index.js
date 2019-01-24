import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import axios from 'axios';

import Slider from '../../../../components/Slider';

import Image from '../../../../components/Image';

import img1 from './img/download.png';
import img2 from './img/download1.png';
import img3 from './img/download2.png';
import img4 from './img/download3.png';
class AppDragDrop extends Component {
  constructor (props) {
    super(props);

    this.state = {
      index: 3,
      images: [
        {
          id: 0,
          src: img1,
          name: 'image1',
          category: 'wip',
        },

        {
          id: 1,
          src: img2,
          name: 'image2',
          category: 'wip',
        },

        {
          id: 2,
          src: img3,
          name: 'image3',
          category: 'wip',
        },
        {
          id: 3,
          src: img4,
          name: 'image4',
          category: 'wip',
        },
      ],
    };

    this.onDrop = this.onDrop.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.goRigth = this.goRigth.bind(this);
  }

  goRigth () {
    const { index, images } = this.state;

    if (index === images.length - 1) this.setState({ index: 0 });
    else this.setState({ index: index + 1 });
  }
  goLeft () {
    const { index, images } = this.state;

    if (index === 0) this.setState({ index: images.length - 1 });
    else this.setState({ index: index - 1 });
  }
  onDragOver (e) {
    e.preventDefault();
  }
  onDragStart (e, id) {
    e.dataTransfer.setData('id', id);
  }
  onDrop (e, cat) {
    const id = e.dataTransfer.getData('id');
    const images = this.state.images.filter(image => {
      if (image.name == id) {
        image.category = cat;

        axios({
          method: 'get',
          url: location.toString() + image.src,
          responseType: 'blob',
        }).then(response => {
          const reader = new FileReader();
          reader.readAsDataURL(response.data);
          reader.onloadend = () => {
            const base64data = reader.result;
            sessionStorage.setItem('image', base64data);
          };
        });
        setTimeout(console.log(sessionStorage.getItem('image')), 0);
      }
      return image;
    });
    this.setState({
      ...this.state,
      images,
    });
  }

  render () {
    const { classes } = this.props;
    var images = {
      wip: [],
      complete: [],
    };

    this.state.images.forEach(image => {
      images[image.category].push(
        <div
          key={image.name}
          onDragStart={e => this.onDragStart(e, image.name)}
          draggable
          className='draggable'>
          <Image
            className={classes.image}
            src={image.src}
            index={this.state.index}
            id={image.id}
          />
        </div>,
      );
    });
    return (
      <div className={classes.containerDrag}>
        <div
          className={classes.wip}
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, 'wip');
          }}>
          <Slider goRigth={this.goRigth} goLeft={this.goLeft}>
            {images.wip}
          </Slider>
        </div>

        <div
          className={classes.draggable}
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, 'complete')}>
          {images.complete}
        </div>
      </div>
    );
  }
}

AppDragDrop.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AppDragDrop);
