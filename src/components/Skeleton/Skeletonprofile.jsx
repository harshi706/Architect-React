import React from 'react';
import Skeleton from 'react-loading-skeleton';

import "react-loading-skeleton/dist/skeleton.css";

let customCss = {
  overflow: 'hidden',
  background: 'linear-gradient(90deg, transparent, #ebebeb, transparent)',
  backgroundSize: '300% 100%',
  animation: 'shimmer 2s infinite linear',
};

const Skeletonprofile = () => {
  return (
    <Skeleton
      height={50}
      width={120}
      count={1}
      className="skeleton custom-shimmer-line mr-5"
      style={customCss}
    />
  );
};

export default Skeletonprofile;
