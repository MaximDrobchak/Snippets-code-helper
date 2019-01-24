import React from 'react';

import './index.css';
import img1 from './img/download.png';
import img2 from './img/download1.png';
import img3 from './img/download2.png';
import img4 from './img/download3.png';
const Image = ({ src, id, index }) => (
  <img
    src={src}
    alt=''
    style={{ height: 100, width: 100 }}
    className={

        id == index ? 'showed' :
        ''
    }
  />
);

const ArrImg = [
  {
    id: 0,
    src: img1,
  },
  {
    id: 1,
    src: img2,
  },
  {
    id: 2,
    src: img3,
  },
  {
    id: 3,
    src: img4,
  },
];
class Slider extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.goLeft = this.goLeft.bind(this);
    this.goRigth = this.goRigth.bind(this);
  }
  goRigth () {
    const { index } = this.state;

    if (index === ArrImg.length - 1) {
      this.setState({ index: 0 });
    }
    else {
      this.setState({ index: index + 1 });
    }
  }
  goLeft () {
    const { index } = this.state;
    if (index === 0) {
      this.setState({ index: ArrImg.length - 1 });
    }
    else {
      this.setState({ index: index - 1 });
    }
  }
  render () {
    console.log(this.state.index);
    return (
      <div>
        <div className='galery'>
          <div className='photos'>
            {ArrImg.map(item => (
              <Image key={item.id} {...item} index={this.state.index} />
            ))}
          </div>
        </div>
        <button type='button' onClick={this.goLeft}>
          left
        </button>
        <button type='button' onClick={this.goRigth}>
          right
        </button>
      </div>
    );
  }
}
export default Slider;
