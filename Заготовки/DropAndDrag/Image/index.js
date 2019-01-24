import React from 'react';
const Image = props => {
  const { src, className, index, id } = props;

  return (
    <img
      src={src}
      alt=''
      className={className}
      style={{ display: index !== id && 'none' }}
    />
  );
};

export default Image;
